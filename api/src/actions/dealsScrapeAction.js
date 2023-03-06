import puppeteer from "puppeteer";
import moment from "moment";

import stores from "../constants/stores.js";
import Database from "../database/Database.js";


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
  const browser = await puppeteer.launch({
    headless: false, // Set headless to false to open the browser window
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.goto(url);

  if (selectors.cookie) {
    await page.waitForSelector(selectors.cookie);
    await page.click(selectors.cookie);
  }

  await page.evaluate(async () => {
    await new Promise((resolve) => {

      let totalHeight = 0;
      const distance = 100;
      const scrollDelay = 200;

      const timer = setInterval(() => {
        let scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }

      }, scrollDelay);

    });
  });

  await page.waitForSelector(selectors.product, { timeout: 10000 });

  const products = await page.$$(selectors.product);
  const productsParsed = [];

  for (let product of products) {
    const data = await product.evaluate((el, selectors) => {

      let description = null;
      let price = "";
      let url = "";

      const name = el.querySelector(selectors.name).innerText.trim();

      try {
        if (el.href) {
          url = el.href.trim();
        } else {
          url = el.querySelector(selectors.url).href.trim();
        }
      } catch { }

      let img = el.querySelector(selectors.image).src.trim();

      if (img.startsWith("data:image")) {
        img = el.querySelector(selectors.image).getAttribute("srcset")?.trim();
        if (!img) {
          img = el.querySelector(selectors.image).getAttribute("data-src")?.trim();
        }
      }


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
      } catch { }

      return { name, price, img, description, url };

    }, selectors);

    productsParsed.push(data);
  }

  await browser.close();

  return productsParsed;

};


async function dealsScrapeAction() {
  const weekNumber = "" + moment().week();

  for (const index in stores) {
    const store = stores[index];
    const products = await productScraper(store);

    // Only write on a succesful scrape
    if (products.length > 0 && products[0].name?.length > 0) {
      storeScrapedData(weekNumber, store.name, products);
    }

  }
}


export default dealsScrapeAction;