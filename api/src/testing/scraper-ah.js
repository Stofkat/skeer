async function graphqlAH() {

  const result = await fetch("https://www.ah.nl/gql", {
    "headers": {
      "accept": "*/*",
      "accept-language": "nl,en;q=0.9,en-US;q=0.8",
      "batch": "true",
      "client-name": "ah-bonus",
      "client-version": "3.315.1",
      "content-type": "application/json",
      "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "Referer": "https://www.ah.nl/bonus",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "[{\"operationName\":\"bonusSegments\",\"variables\":{\"segmentType\":\"NEGATE_PREMIUM\",\"hideVariants\":true,\"periodStart\":\"2023-02-27\",\"periodEnd\":\"2023-03-05\",\"orderId\":null,\"testZeroSegments\":false},\"query\":\"query bonusSegments($promotionType: BonusPromotionType, $segmentType: BonusSegmentType, $hideVariants: Boolean, $periodStart: String, $periodEnd: String, $orderId: Int, $viewDate: String) {\\n  bonusSegments(\\n    promotionType: $promotionType\\n    segmentType: $segmentType\\n    hideVariants: $hideVariants\\n    periodStart: $periodStart\\n    periodEnd: $periodEnd\\n    orderId: $orderId\\n    viewDate: $viewDate\\n  ) {\\n    ...Segment\\n    __typename\\n  }\\n}\\n\\nfragment Segment on BonusSegment {\\n  ...BaseSegment\\n  activationStatus\\n  category\\n  description\\n  images {\\n    url\\n    title\\n    width\\n    height\\n    __typename\\n  }\\n  price {\\n    label\\n    now {\\n      amount\\n      formatted\\n      __typename\\n    }\\n    was {\\n      amount\\n      formatted\\n      __typename\\n    }\\n    __typename\\n  }\\n  productCount\\n  promotionType\\n  salesUnitSize\\n  smartLabel\\n  spotlight\\n  type\\n  __typename\\n}\\n\\nfragment BaseSegment on BonusSegment {\\n  id\\n  hqId\\n  availability {\\n    startDate\\n    endDate\\n    description\\n    __typename\\n  }\\n  discount {\\n    type\\n    title\\n    description\\n    extraDescriptions\\n    theme\\n    __typename\\n  }\\n  discountUnit {\\n    count\\n    __typename\\n  }\\n  discountLabels {\\n    code\\n    defaultDescription\\n    price\\n    actualCount\\n    count\\n    freeCount\\n    amount\\n    percentage\\n    deliveryType\\n    __typename\\n  }\\n  promotionType\\n  subtitle\\n  title\\n  type\\n  description\\n  __typename\\n}\"},{\"operationName\":\"bonusSegments\",\"variables\":{\"promotionType\":\"PERSONAL\",\"segmentType\":\"BONUS_BOX\",\"hideVariants\":true,\"periodStart\":\"2023-02-27\",\"periodEnd\":\"2023-03-05\",\"orderId\":null,\"testZeroSegments\":false},\"query\":\"query bonusSegments($promotionType: BonusPromotionType, $segmentType: BonusSegmentType, $hideVariants: Boolean, $periodStart: String, $periodEnd: String, $orderId: Int, $viewDate: String) {\\n  bonusSegments(\\n    promotionType: $promotionType\\n    segmentType: $segmentType\\n    hideVariants: $hideVariants\\n    periodStart: $periodStart\\n    periodEnd: $periodEnd\\n    orderId: $orderId\\n    viewDate: $viewDate\\n  ) {\\n    ...Segment\\n    __typename\\n  }\\n}\\n\\nfragment Segment on BonusSegment {\\n  ...BaseSegment\\n  activationStatus\\n  category\\n  description\\n  images {\\n    url\\n    title\\n    width\\n    height\\n    __typename\\n  }\\n  price {\\n    label\\n    now {\\n      amount\\n      formatted\\n      __typename\\n    }\\n    was {\\n      amount\\n      formatted\\n      __typename\\n    }\\n    __typename\\n  }\\n  productCount\\n  promotionType\\n  salesUnitSize\\n  smartLabel\\n  spotlight\\n  type\\n  __typename\\n}\\n\\nfragment BaseSegment on BonusSegment {\\n  id\\n  hqId\\n  availability {\\n    startDate\\n    endDate\\n    description\\n    __typename\\n  }\\n  discount {\\n    type\\n    title\\n    description\\n    extraDescriptions\\n    theme\\n    __typename\\n  }\\n  discountUnit {\\n    count\\n    __typename\\n  }\\n  discountLabels {\\n    code\\n    defaultDescription\\n    price\\n    actualCount\\n    count\\n    freeCount\\n    amount\\n    percentage\\n    deliveryType\\n    __typename\\n  }\\n  promotionType\\n  subtitle\\n  title\\n  type\\n  description\\n  __typename\\n}\"},{\"operationName\":\"bonusSegments\",\"variables\":{\"promotionType\":\"INCENTIVE\",\"hideVariants\":true,\"periodStart\":\"2023-02-27\",\"periodEnd\":\"2023-03-05\",\"orderId\":null,\"testZeroSegments\":false},\"query\":\"query bonusSegments($promotionType: BonusPromotionType, $segmentType: BonusSegmentType, $hideVariants: Boolean, $periodStart: String, $periodEnd: String, $orderId: Int, $viewDate: String) {\\n  bonusSegments(\\n    promotionType: $promotionType\\n    segmentType: $segmentType\\n    hideVariants: $hideVariants\\n    periodStart: $periodStart\\n    periodEnd: $periodEnd\\n    orderId: $orderId\\n    viewDate: $viewDate\\n  ) {\\n    ...Segment\\n    __typename\\n  }\\n}\\n\\nfragment Segment on BonusSegment {\\n  ...BaseSegment\\n  activationStatus\\n  category\\n  description\\n  images {\\n    url\\n    title\\n    width\\n    height\\n    __typename\\n  }\\n  price {\\n    label\\n    now {\\n      amount\\n      formatted\\n      __typename\\n    }\\n    was {\\n      amount\\n      formatted\\n      __typename\\n    }\\n    __typename\\n  }\\n  productCount\\n  promotionType\\n  salesUnitSize\\n  smartLabel\\n  spotlight\\n  type\\n  __typename\\n}\\n\\nfragment BaseSegment on BonusSegment {\\n  id\\n  hqId\\n  availability {\\n    startDate\\n    endDate\\n    description\\n    __typename\\n  }\\n  discount {\\n    type\\n    title\\n    description\\n    extraDescriptions\\n    theme\\n    __typename\\n  }\\n  discountUnit {\\n    count\\n    __typename\\n  }\\n  discountLabels {\\n    code\\n    defaultDescription\\n    price\\n    actualCount\\n    count\\n    freeCount\\n    amount\\n    percentage\\n    deliveryType\\n    __typename\\n  }\\n  promotionType\\n  subtitle\\n  title\\n  type\\n  description\\n  __typename\\n}\"},{\"operationName\":\"bonusSegments\",\"variables\":{\"promotionType\":\"PERSONAL\",\"segmentType\":\"DELIVERY_BUNDLE\",\"hideVariants\":true,\"periodStart\":\"2023-02-27\",\"periodEnd\":\"2023-03-05\",\"orderId\":null,\"testZeroSegments\":false},\"query\":\"query bonusSegments($promotionType: BonusPromotionType, $segmentType: BonusSegmentType, $hideVariants: Boolean, $periodStart: String, $periodEnd: String, $orderId: Int, $viewDate: String) {\\n  bonusSegments(\\n    promotionType: $promotionType\\n    segmentType: $segmentType\\n    hideVariants: $hideVariants\\n    periodStart: $periodStart\\n    periodEnd: $periodEnd\\n    orderId: $orderId\\n    viewDate: $viewDate\\n  ) {\\n    ...Segment\\n    __typename\\n  }\\n}\\n\\nfragment Segment on BonusSegment {\\n  ...BaseSegment\\n  activationStatus\\n  category\\n  description\\n  images {\\n    url\\n    title\\n    width\\n    height\\n    __typename\\n  }\\n  price {\\n    label\\n    now {\\n      amount\\n      formatted\\n      __typename\\n    }\\n    was {\\n      amount\\n      formatted\\n      __typename\\n    }\\n    __typename\\n  }\\n  productCount\\n  promotionType\\n  salesUnitSize\\n  smartLabel\\n  spotlight\\n  type\\n  __typename\\n}\\n\\nfragment BaseSegment on BonusSegment {\\n  id\\n  hqId\\n  availability {\\n    startDate\\n    endDate\\n    description\\n    __typename\\n  }\\n  discount {\\n    type\\n    title\\n    description\\n    extraDescriptions\\n    theme\\n    __typename\\n  }\\n  discountUnit {\\n    count\\n    __typename\\n  }\\n  discountLabels {\\n    code\\n    defaultDescription\\n    price\\n    actualCount\\n    count\\n    freeCount\\n    amount\\n    percentage\\n    deliveryType\\n    __typename\\n  }\\n  promotionType\\n  subtitle\\n  title\\n  type\\n  description\\n  __typename\\n}\"}]",
    "method": "POST"
  });

  const data = await result.json();

  console.log(data);


}