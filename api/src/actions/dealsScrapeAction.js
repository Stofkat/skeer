import puppeteer from "puppeteer-extra";
import pluginStealth from "puppeteer-extra-plugin-stealth";
import puppeteerExtraPluginUserAgentOverride from 'puppeteer-extra-plugin-stealth/evasions/user-agent-override/index.js';
import moment from "moment";

import stores, { testStores } from "../constants/stores.js";
import Database from "../database/Database.js";
import { executablePath } from "puppeteer";


async function storeScrapedData(weekNumber, storeName, products) {
  // Open database connection
  const db = new Database();

  await db.run(`CREATE TABLE IF NOT EXISTS products (
    name TEXT,
    description TEXT,
    img TEXT,
    price TEXT,
    url TEXT,
    store TEXT,
    week INTEGER
  )`);

  // Clear all previous entries for this store
  await db.run(`DELETE FROM products WHERE store = '${storeName}'`);

  // Insert each product into the database
  const stmt = await db.prepare(`
      INSERT OR REPLACE INTO products (name, description, img, price, url, store, week)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

  for (let product of products) {
    await stmt.run(
      product.name,
      product.description,
      product.img,
      product.price,
      product.url,
      storeName,
      weekNumber
    );
  }

  await stmt.finalize();
}

async function productScraper({ url, selectors }) {

  let pageFullyScrolled = false;
  const productsParsed = {};

  puppeteer.use(pluginStealth());



  function preload(device) {
    Object.defineProperty(navigator, 'platform', {
      value: device.platform,
      writable: true,
    });
    Object.defineProperty(navigator, 'userAgent', {
      value: device.userAgent,
      writable: true,
    });
    Object.defineProperty(screen, 'height', {
      value: device.viewport.height,
      writable: true,
    });
    Object.defineProperty(screen, 'width', {
      value: device.viewport.width,
      writable: true,
    });
    Object.defineProperty(window, 'devicePixelRatio', {
      value: device.viewport.deviceScaleFactor,
      writable: true,
    });
  }


  const device = {
    userAgent: 'Mozilla/5.0 (Macintosh)',
    viewport: {
      width: 1200,
      height: 800,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: true,
    },
    locale: 'en-US,en;q=0.9',
    platform: 'Macintosh',
  };

  const pluginUserAgentOverride = puppeteerExtraPluginUserAgentOverride({
    userAgent: device.userAgent,
    locale: device.locale,
    platform: device.platform,
  });



  puppeteer.use(pluginUserAgentOverride);


  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--shm-size=1gb'
    ],
    executablePath: executablePath()
  });

  const page = await browser.newPage();
  await page.evaluateOnNewDocument(preload, device);

  await page.setRequestInterception(true);

  page.on("request", (req) => {
    if (req.resourceType() == "font" || req.resourceType() == "image") {
      req.abort();
    }
    else {
      req.continue();
    }
  });


  await page.goto(url);


  // await page.screenshot({
  //   path: 'screenshot.jpg'
  // });

  if (selectors.cookie) {
    try {
      await page.waitForSelector(selectors.cookie);
      await page.click(selectors.cookie);
    } catch { }
  }



  const parseThePage = async () => {

    let products = [];
    try {
      products = await page.$$(selectors.product);
    } catch (error) {
      console.error("Could not find products", error);
    }

    for (let product of products) {
      const data = await product.evaluate((el, selectors) => {

        let description = null;
        let price = "";
        let url = "";
        let img = "";
        let name = "";

        try {
          name = el.querySelector(selectors.name).innerText.trim();
        } catch { }

        try {
          if (el.href) {
            url = el.href.trim();
          } else {
            url = el.querySelector(selectors.url).href.trim();
          }
        } catch { }

        try {
          img = el.querySelector(selectors.image).src.trim();

          if (img.startsWith("data:image") || img.endsWith("svg")) {
            img = el.querySelector(selectors.image).getAttribute("srcset")?.trim();

            if (!img) {
              img = el.querySelector(selectors.image).getAttribute("data-src")?.trim();
            }

            if (!img) {
              img = el.querySelector(selectors.image).getAttribute("data-srcset")?.trim();
            }
          }
        } catch { }

        try {
          if (selectors.description) {
            description = el.querySelector(selectors.description).innerText.trim();
          }
        } catch { }

        try {
          if (selectors.price) {
            price = el.querySelector(selectors.price).innerText.trim();
          } else if (selectors.priceAlt) {
            const priceDec = el.querySelector(selectors.priceAlt.dec).innerText.trim();
            const priceFract = el.querySelector(selectors.priceAlt.fract).innerText.trim();
            price = `${priceDec}${priceFract}`;
          }
        } catch { price = "n.a." }

        return { name, price, img, description, url };

      }, selectors);

      productsParsed[data.name + data.description] = data;


    }
  }

  const moveThePage = async (scrolledHeight) => {
    return await page.evaluate(async (scrolledHeight) => {
      const distance = 500;

  
      return await new Promise((resolve, reject) => {

        try {

          let newPageHeight = document.body.offsetHeight;
          window.scrollBy(0, distance);
    
          let newScrolledHeight = scrolledHeight;

          newScrolledHeight += distance;

          resolve({ newScrolledHeight, newPageHeight });

        } catch (error) {
          console.error(document.body);
          reject(document.body);
        }
      });

    }, scrolledHeight);
  }



  let scrolledHeight = 0;
  let pageHeight = 100;


  while (pageHeight >= scrolledHeight) {
    console.log("Scraping page");
    await parseThePage();
    console.log("Scrolling page", { scrolledHeight, pageHeight });
    const result = await moveThePage(scrolledHeight);

    console.log("result", result);
    const { newScrolledHeight, newPageHeight } = result;

    scrolledHeight = newScrolledHeight;
    pageHeight = newPageHeight;

    console.log("scrolled height", scrolledHeight);
    console.log("page height", pageHeight);
    console.log("is scroll height bigger than page height", scrolledHeight > pageHeight);
  }



  console.log("Done with store.");

  await browser.close();

  const productKeys = Object.keys(productsParsed)

  return productKeys.map((key) => {
    return productsParsed[key];
  });


};


async function dealsScrapeAction() {
  const weekNumber = "" + moment().week();
  let storesToScrape = null

  if (process.env.NODE_ENV === "production") {
    storesToScrape = stores;
  } else {
    storesToScrape = testStores;
  }

  for (const index in stores) {
    try {
      const store = stores[index];
      const products = await productScraper(store);

      // Only write on a succesful scrape
      if (products.length > 0 && products[0].name?.length > 0) {
        storeScrapedData(weekNumber, store.name, products);
      }
    } catch (error) {
      console.error(error);
    }

  }
}


export default dealsScrapeAction;