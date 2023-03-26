const stores = [
  {
    name: "ah",
    label: "Albert Heijn",
    url: "https://www.ah.nl/bonus",
    selectors: {
      product: "[class^=promotion-card_root__]",
      name: "[class^=typography_root__] span",
      description: "[data-testhook=card-description] span",
      image: "picture [class^=promotion-card-image_img__]",
      cookie: "#accept-cookies",
      url: "a",
      priceAlt: {
        dec: "[class^=promotion-price_root__] [class^=promotion-price_integer__]",
        fract: "[class^=promotion-price_root__] [class^=promotion-price_fractional__]",
      }
    }
  },
  {
    name: "lidl",
    label: "Lidl",
    url: "https://www.lidl.nl/c/aanbiedingen/a10008785?tabCode=STORE_OFFER",
    selectors: {
      product: ".product-grid-box",
      name: ".grid-box__headline",
      image: ".product-grid-box__image",
      cookie: ".cookie-alert-extended-button",
      url: "a",
      price: ".m-price__price"
    }
  },
  {
    name: "dekamarkt",
    label: "Dekamarkt",
    url: "https://www.dekamarkt.nl/aanbiedingen",
    selectors: {
      product: ".deka-product-card",
      name: ".deka-product-card--info--title",
      image: "img",
      cookie: ".cookie button",
      url: "a",
      priceAlt: {
        dec: ".price--before-decimal--offer",
        fract: ".price--after-decimal--offer",
      }
    }
  },
  {
    name: "dirk",
    label: "Dirk",
    url: "https://www.dirk.nl/aanbiedingen",
    selectors: {
      product: ".product-card",
      name: ".product-card__name",
      image: ".product-card__image img",
      description: ".product-card__description",
      url: "a",
      priceAlt: {
        dec: ".product-card__price__euros",
        fract: ".product-card__price__cents"
      }
    }
  },
  {
    name: "aldi",
    label: "Aldi",
    url: "https://www.aldi.nl/aanbiedingen.html",
    selectors: {
      product: ".mod-article-tile--default",
      name: ".mod-article-tile__title",
      image: ".cq-dd-image",
      description: ".mod-article-tile__brand",
      url: "a",
      price: ".price__wrapper",
      // cookie: "[data-testid=uc-accept-all-button]"

    }
  },

  {
    name: "spar",
    label: "Spar",
    url: "https://www.spar.nl/aanbiedingen/",
    selectors: {
      product: ".c-product-tile",
      name: ".c-product-tile__meta a",
      image: "img",
      description: ".c-product-tile__meta",
      url: ".c-product-tile__image a",
      priceAlt: {
        dec: ".c-price .c-price__base",
        fract: ".c-price .c-price__mod"
      }
      // cookie: "[data-testid=uc-accept-all-button]"

    }
  },

  {
    name: "coop",
    label: "Coop",
    url: "https://www.coop.nl/aanbiedingen/",
    selectors: {
      product: "custom-promotion-card",
      name: ".product-card__title .multiline-text",
      image: "img",
      description: ".product-card__description",
      url: "c-product-tile__meta a",
      price: "[data-testing-id=current-price]"
    }
  },

  {
    name: "plus",
    label: "Plus",
    url: "https://www.plus.nl/aanbiedingen",
    selectors: {
      product: ".product-list-block",
      name: ".product-tile__description",
      image: "img",
      description: ".product-tile__quantity",
      url: "a",
      price: "text-price"
    }
    // cookie: "[data-testid=uc-accept-all-button]"

  },


];

export const testStores = [
  {
    name: "ah",
    label: "Albert Heijn",
    url: "https://www.ah.nl/bonus",
    selectors: {
      product: "[class^=promotion-card_root__]",
      name: "[class^=typography_root__] span",
      description: "[data-testhook=card-description] span",
      image: "picture [class^=promotion-card-image_img__]",
      cookie: "#accept-cookies",
      url: "a",
      priceAlt: {
        dec: "[class^=promotion-price_root__] [class^=promotion-price_integer__]",
        fract: "[class^=promotion-price_root__] [class^=promotion-price_fractional__]",
      }
    }
  },
];


export default stores;