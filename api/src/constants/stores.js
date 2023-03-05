const stores = [
  {
    name: "lidl",
    label: "Lidl",
    url: "https://www.lidl.nl/c/aanbiedingen/a10008785?tabCode=STORE_OFFER",
    selectors: {
      product: ".product-grid-box",
      name: ".grid-box__headline",
      price: ".m-price__price",
      image: ".product-grid-box__image",
      cookie: ".cookie-alert-extended-button",
    }
  },
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
      priceAlt: {
        dec: "[class^=promotion-price_root__] [class^=promotion-price_integer__]",
        fract: "[class^=promotion-price_root__] [class^=promotion-price_fractional__]",
      }
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
      priceAlt: {
        dec: ".price--before-decimal--offer",
        fract: "price--after-decimal--offer",
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
      price: ".price__wrapper",
      // cookie: "[data-testid=uc-accept-all-button]"

    }
  },

];

export default stores;