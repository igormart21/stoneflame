export interface Product {
  slug: string;
  name: string;
  tagline: string;
  capacity: string;
  price: string;
  priceVal: number;
  badge: string;
  rating: number;
  reviews: number;
  accent: string;
  bg: string;
  description: string;
  includes: string[];
  benefits: string[];
  warranty: string;
  dimensionsNote: string;
  category: string;
  images?: string[];
}

export const products: Product[] = [
  {
    slug: "cookware-set-2-3-4",
    name: "Set: 2L Pot + 3L Pot + 4L Pressure Cooker + Free Gift",
    tagline: "The ultimate set for those who like to cook larger quantities of food!",
    capacity: "2L + 3L + 4L · Wood Stove · Gas · Oven",
    price: "From $649",
    priceVal: 649,
    badge: "Special Set",
    rating: 5,
    reviews: 48,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "This set is ideal for those who like to cook larger quantities of food! Handcrafted by local artisans using premium quality volcanic soapstone, this set covers all your culinary needs: slow-cooking pots and an authentic stone pressure cooker.",
    includes: [
      "1 x Soapstone pot, 2 liters (Height: 9.5 cm, diameter: 22 cm)",
      "1 x Soapstone pot, 3 liters (Height: 9.5 cm, diameter: 27 cm)",
      "1 x 4-liter soapstone pressure cooker (Height: 15 cm, diameter: 25 cm)",
      "1 x Free Culinary Starter Pack (Curing Oil & Artisanal Herbs)"
    ],
    benefits: [
      "It has the ability to gradually release the heat contained in the stone, keeping the food warmer for about 1 to 2 hours after it's cooked.",
      "Much healthier! Recent studies indicate the transfer of beneficial nutrients (Fe, Zn, Ca, Mg) from the pan to the food.",
      "Soapstone is an extremely durable material; if well cared for, it will last for hundreds of years.",
      "The pans are naturally non-stick, making cleaning and cooking much easier.",
      "It can be used on gas stoves, wood-burning stoves, and can also be used in the oven!"
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Stone pots are made using a completely handcrafted process, so there may be slight variations in the dimensions of the pieces.",
    category: "sets",
    images: [
      "/products/cookware-set-2-3-4/set-3-pots-v3.png",
      "/products/cookware-set-2-3-4/pot-2l-v2.png",
      "/products/cookware-set-2-3-4/pot-3l-v4.png",
      "/products/cookware-set-2-3-4/pressure-cooker-4l-v2.png"
    ]
  },
  {
    slug: "soapstone-pressure-cooker-7l",
    name: "Soapstone Pressure Cooker - 7 Liters",
    tagline: "Safe pressure cooking, redefined in stone",
    capacity: "7L · Gas · Wood Stove · Oven",
    price: "$399",
    priceVal: 399,
    badge: "New",
    rating: 5,
    reviews: 27,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "This soapstone pressure cooker was developed to offer a superior cooking experience. 100% safe, it allows opening during food preparation, providing more control, peace of mind, and convenience in everyday life. Its main advantage lies in the gradual retention and release of heat, keeping food warm for 1 to 2 hours after cooking is finished, preserving flavor, texture, and thermal quality for much longer. Furthermore, it is a healthier choice. Recent studies indicate that soapstone can transfer beneficial minerals such as iron (Fe), zinc (Zn), calcium (Ca), and magnesium (Mg) to food, contributing to a more nutritious diet. The material is completely free of toxic substances, ensuring safety for you and your family. Extremely resistant and durable, soapstone is a noble material that, when well cared for, can last for hundreds of years, making this pan not just a kitchen utensil, but an investment for generations. A perfect combination of safety, health, thermal efficiency and durability, ideal for those who value quality and well-being in the kitchen.",
    includes: [
      "1 x 7-Liter Soapstone Pressure Cooker",
      "1 x Matching Soapstone Lid with Copper Details",
      "1 x Free Culinary Starter Pack (Curing Oil & Artisanal Herbs)"
    ],
    benefits: [
      "100% safe — it can be opened during cooking, giving you more control and peace of mind.",
      "Gradually retains and releases heat, keeping food warm for 1 to 2 hours after cooking is finished.",
      "Healthier meals! Soapstone can transfer beneficial minerals (Iron, Zinc, Calcium, Magnesium) to your food.",
      "Completely free of toxic substances, ensuring safety for you and your family.",
      "Extremely resistant and durable — when well cared for, it can last for hundreds of years."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Because each stone piece is completely handcrafted, slight variations in dimensions, texture, and coloration are normal and make your piece unique.",
    category: "pressure-cookers",
    images: [
      "/products/pressure-cooker-7l/main.png",
      "/products/pressure-cooker-7l/angle-2.png",
      "/products/pressure-cooker-7l/angle-3.png"
    ]
  },
  {
    slug: "soapstone-pressure-cooker-5l",
    name: "Soapstone Pressure Cooker - 5 Liters",
    tagline: "Safe pressure cooking, redefined in stone",
    capacity: "5L · Gas · Wood Stove · Oven",
    price: "$249",
    priceVal: 249,
    badge: "New",
    rating: 5,
    reviews: 19,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "This soapstone pressure cooker was developed to offer a superior cooking experience. 100% safe, it allows opening during food preparation, providing more control, peace of mind, and convenience in everyday life. Its main advantage lies in the gradual retention and release of heat, keeping food warm for 1 to 2 hours after cooking is finished, preserving flavor, texture, and thermal quality for much longer. Furthermore, it is a healthier choice. Recent studies indicate that soapstone can transfer beneficial minerals such as iron (Fe), zinc (Zn), calcium (Ca), and magnesium (Mg) to food, contributing to a more nutritious diet. The material is completely free of toxic substances, ensuring safety for you and your family. Extremely resistant and durable, soapstone is a noble material that, when well cared for, can last for hundreds of years, making this pan not just a kitchen utensil, but an investment for generations. A perfect combination of safety, health, thermal efficiency and durability, ideal for those who value quality and well-being in the kitchen.",
    includes: [
      "1 x 5-Liter Soapstone Pressure Cooker",
      "1 x Matching Soapstone Lid with Copper Details",
      "1 x Free Culinary Starter Pack (Curing Oil & Artisanal Herbs)"
    ],
    benefits: [
      "100% safe — it can be opened during cooking, giving you more control and peace of mind.",
      "Gradually retains and releases heat, keeping food warm for 1 to 2 hours after cooking is finished.",
      "Healthier meals! Soapstone can transfer beneficial minerals (Iron, Zinc, Calcium, Magnesium) to your food.",
      "Completely free of toxic substances, ensuring safety for you and your family.",
      "Extremely resistant and durable — when well cared for, it can last for hundreds of years."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Because each stone piece is completely handcrafted, slight variations in dimensions, texture, and coloration are normal and make your piece unique.",
    category: "pressure-cookers",
    images: [
      "/products/pressure-cooker-5l/main.png",
      "/products/pressure-cooker-5l/angle-2.png",
      "/products/pressure-cooker-5l/angle-3.png"
    ]
  },
  {
    slug: "soapstone-pressure-cooker-4l",
    name: "Soapstone Pressure Cooker - 4 Liters",
    tagline: "Safe pressure cooking, redefined in stone",
    capacity: "4L · Gas · Wood Stove · Oven",
    price: "$229",
    priceVal: 229,
    badge: "New",
    rating: 5,
    reviews: 15,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "This soapstone pressure cooker was developed to offer a superior cooking experience. 100% safe, it allows opening during food preparation, providing more control, peace of mind, and convenience in everyday life. Its main advantage lies in the gradual retention and release of heat, keeping food warm for 1 to 2 hours after cooking is finished, preserving flavor, texture, and thermal quality for much longer. Furthermore, it is a healthier choice. Recent studies indicate that soapstone can transfer beneficial minerals such as iron (Fe), zinc (Zn), calcium (Ca), and magnesium (Mg) to food, contributing to a more nutritious diet. The material is completely free of toxic substances, ensuring safety for you and your family. Extremely resistant and durable, soapstone is a noble material that, when well cared for, can last for hundreds of years, making this pan not just a kitchen utensil, but an investment for generations. A perfect combination of safety, health, thermal efficiency and durability, ideal for those who value quality and well-being in the kitchen.",
    includes: [
      "1 x 4-Liter Soapstone Pressure Cooker",
      "1 x Matching Soapstone Lid with Copper Details",
      "1 x Free Culinary Starter Pack (Curing Oil & Artisanal Herbs)"
    ],
    benefits: [
      "100% safe — it can be opened during cooking, giving you more control and peace of mind.",
      "Gradually retains and releases heat, keeping food warm for 1 to 2 hours after cooking is finished.",
      "Healthier meals! Soapstone can transfer beneficial minerals (Iron, Zinc, Calcium, Magnesium) to your food.",
      "Completely free of toxic substances, ensuring safety for you and your family.",
      "Extremely resistant and durable — when well cared for, it can last for hundreds of years."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Because each stone piece is completely handcrafted, slight variations in dimensions, texture, and coloration are normal and make your piece unique.",
    category: "pressure-cookers",
    images: [
      "/products/pressure-cooker-4l/main.png",
      "/products/pressure-cooker-4l/open-lid.png"
    ]
  },
  {
    slug: "dutch-soapstone-pot-2in1",
    name: "2-in-1 Dutch Soapstone Pot",
    tagline: "A deep pot and a flat griddle in one piece",
    capacity: "3L · Gas · Wood Stove · Oven",
    price: "$299",
    priceVal: 299,
    badge: "Versatile",
    rating: 5,
    reviews: 21,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "The 2-in-1 Dutch soapstone pan is a versatile and charming culinary piece, designed to offer functionality and beauty to your cooking experience. Made of soapstone, a material that retains and distributes heat evenly, this pan provides efficient and precise cooking. The 2-in-1 design of this pan combines two distinct functions in a single piece. At the base, you'll find a deep pan, ideal for preparing stews, soups, sauces, and a variety of dishes that require slow, even cooking. The soapstone lid of the Dutch Pan serves as an additional flat frying pan. This extra feature expands culinary options, allowing you to grill, brown, or fry food effectively. The lid is perfectly integrated into the set, providing versatility without compromising the piece's elegant and rustic look.",
    includes: [
      "1 x Deep Soapstone Dutch Pot (Height: 10 cm, diameter: 23 cm, capacity: 3 liters)",
      "1 x Soapstone Lid that doubles as a flat frying pan (Height: 4 cm, diameter: 23 cm)",
      "1 x Free Culinary Starter Pack (Curing Oil & Artisanal Herbs)"
    ],
    benefits: [
      "2-in-1 design: a deep pot for stews, soups and sauces, plus a lid that doubles as a flat frying pan.",
      "Soapstone retains and distributes heat evenly for efficient, precise cooking.",
      "The flat lid lets you grill, brown, or fry — expanding your culinary options.",
      "Retains and gradually releases heat, keeping food warm long after cooking.",
      "Extremely resistant and durable — when well cared for, it can last for hundreds of years."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Because each stone piece is completely handcrafted, slight variations in dimensions, texture, and coloration are normal and make your piece unique.",
    category: "pots",
    images: [
      "/products/dutch-pot-2in1/main.png",
      "/products/dutch-pot-2in1/lifestyle.png",
      "/products/dutch-pot-2in1/stacked.png",
      "/products/dutch-pot-2in1/open-lid.png"
    ]
  },
  {
    slug: "soapstone-pot-5l",
    name: "Soapstone Pot 5 Liters",
    tagline: "Generations of craft from Minas Gerais",
    capacity: "5L · Gas · Wood Stove · Oven",
    price: "$489",
    priceVal: 489,
    badge: "Handcrafted",
    rating: 5,
    reviews: 23,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "From the roots of Minas Gerais in Brazil, a craft passed down from generation to generation. Soapstone pots have the ability to retain and release heat gradually, keeping food warm for approximately 1 to 2 hours after cooking. Furthermore, it is a much healthier option. Recent studies indicate the natural transfer of beneficial minerals — such as iron (Fe), zinc (Zn), calcium (Ca), and magnesium (Mg) — from the pan to the food, and it is also free of toxic substances. Soapstone is an extremely strong and durable material. When well cared for, a pot can last for generations, maintaining its functionality for hundreds of years.",
    includes: [
      "1 x 5-Liter Soapstone Pot",
      "1 x Matching Soapstone Lid with Copper Details",
      "1 x Free Culinary Starter Pack (Curing Oil & Artisanal Herbs)"
    ],
    benefits: [
      "Retains and releases heat gradually, keeping food warm for 1 to 2 hours after cooking.",
      "Healthier meals! Naturally transfers beneficial minerals (Iron, Zinc, Calcium, Magnesium) to your food.",
      "Free of toxic substances, ensuring safety for you and your family.",
      "Handcrafted in Minas Gerais using a tradition passed down from generation to generation.",
      "Extremely strong and durable — when well cared for, it can last for generations."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Because each stone piece is completely handcrafted, slight variations in dimensions, texture, and coloration are normal and make your piece unique.",
    category: "pots",
    images: [
      "/products/soapstone-pot-5l/main.png",
      "/products/soapstone-pot-5l/open-lid.png"
    ]
  },
  {
    slug: "soapstone-pot-4l",
    name: "Soapstone Pot 4 Liters",
    tagline: "Generations of craft from Minas Gerais",
    capacity: "4L · Gas · Wood Stove · Oven",
    price: "$399",
    priceVal: 399,
    badge: "Handcrafted",
    rating: 5,
    reviews: 20,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "From the roots of Minas Gerais in Brazil, a craft passed down from generation to generation. Soapstone pots have the ability to retain and release heat gradually, keeping food warm for approximately 1 to 2 hours after cooking. Furthermore, it is a much healthier option. Recent studies indicate the natural transfer of beneficial minerals — such as iron (Fe), zinc (Zn), calcium (Ca), and magnesium (Mg) — from the pan to the food, and it is also free of toxic substances. Soapstone is an extremely strong and durable material. When well cared for, a pot can last for generations, maintaining its functionality for hundreds of years.",
    includes: [
      "1 x 4-Liter Soapstone Pot",
      "1 x Matching Soapstone Lid with Copper Details",
      "1 x Free Culinary Starter Pack (Curing Oil & Artisanal Herbs)"
    ],
    benefits: [
      "Retains and releases heat gradually, keeping food warm for 1 to 2 hours after cooking.",
      "Healthier meals! Naturally transfers beneficial minerals (Iron, Zinc, Calcium, Magnesium) to your food.",
      "Free of toxic substances, ensuring safety for you and your family.",
      "Handcrafted in Minas Gerais using a tradition passed down from generation to generation.",
      "Extremely strong and durable — when well cared for, it can last for generations."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Because each stone piece is completely handcrafted, slight variations in dimensions, texture, and coloration are normal and make your piece unique.",
    category: "pots",
    images: [
      "/products/soapstone-pot-4l/main.png",
      "/products/soapstone-pot-4l/open-lid.png"
    ]
  },
  {
    slug: "soapstone-pot-3l",
    name: "Soapstone Pot 3 Liters",
    tagline: "Generations of craft from Minas Gerais",
    capacity: "3L · Gas · Wood Stove · Oven",
    price: "$239",
    priceVal: 239,
    badge: "Handcrafted",
    rating: 5,
    reviews: 18,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "From the roots of Minas Gerais in Brazil, a craft passed down from generation to generation. Soapstone pots have the ability to retain and release heat gradually, keeping food warm for approximately 1 to 2 hours after cooking. Furthermore, it is a much healthier option. Recent studies indicate the natural transfer of beneficial minerals — such as iron (Fe), zinc (Zn), calcium (Ca), and magnesium (Mg) — from the pan to the food, and it is also free of toxic substances. Soapstone is an extremely strong and durable material. When well cared for, a pot can last for generations, maintaining its functionality for hundreds of years.",
    includes: [
      "1 x 3-Liter Soapstone Pot",
      "1 x Matching Soapstone Lid with Copper Details",
      "1 x Free Culinary Starter Pack (Curing Oil & Artisanal Herbs)"
    ],
    benefits: [
      "Retains and releases heat gradually, keeping food warm for 1 to 2 hours after cooking.",
      "Healthier meals! Naturally transfers beneficial minerals (Iron, Zinc, Calcium, Magnesium) to your food.",
      "Free of toxic substances, ensuring safety for you and your family.",
      "Handcrafted in Minas Gerais using a tradition passed down from generation to generation.",
      "Extremely strong and durable — when well cared for, it can last for generations."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Because each stone piece is completely handcrafted, slight variations in dimensions, texture, and coloration are normal and make your piece unique.",
    category: "pots",
    images: [
      "/products/soapstone-pot-3l/main.png",
      "/products/soapstone-pot-3l/open-lid.png"
    ]
  },
  {
    slug: "set-5-soapstone-pots",
    name: "Set of 5 Soapstone Pots 0.8L | 1L | 1.5L | 2L + Free Gift",
    tagline: "A complete soapstone set for the whole family",
    capacity: "0.8L + 1L + 1L + 1.5L + 2L · Gas · Wood Stove · Oven",
    price: "$590",
    priceVal: 590,
    badge: "Special Set",
    rating: 5,
    reviews: 34,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "This soapstone cookware set is perfect for enjoying mealtimes in style with friends or family! Ideal for serving up to 4 people. Handcrafted from genuine soapstone, this complete set covers everyday cooking — from small cauldrons to a versatile frying pan — bringing the authentic flavor and warmth of stone cooking to your table.",
    includes: [
      "1 x 0.8 liter cauldron (11 cm high x 13 cm diameter)",
      "1 x Frying pan with lid, approximately 1 liter (6 cm height x 20 cm diameter)",
      "1 x 1-liter pot (9.5 cm height x 15.5 cm diameter)",
      "1 x 1.5 liter pot (9.5 cm height x 18 cm diameter)",
      "1 x 2 liter pot (9.5 cm height x 23 cm diameter)",
      "1 x Free Gift (selected based on stock availability)"
    ],
    benefits: [
      "It has the ability to gradually release the heat contained in the stone, keeping food warm for about 1 to 2 hours after it's cooked.",
      "Much healthier! Recent studies indicate the transfer of beneficial nutrients (Fe, Zn, Ca, Mg) from the pan to the food.",
      "Soapstone is an extremely durable material; if well cared for, it will last for hundreds of years.",
      "The pans are naturally non-stick, making cleaning and cooking much easier.",
      "It can be used on gas stoves, wood-burning stoves, and can also be put in the oven!"
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Stone pots are made using a completely handcrafted process, so there may be slight variations in the dimensions of the pieces.",
    category: "sets",
    images: [
      "/products/set-5-pots/main.png",
      "/products/set-5-pots/set-spread.png"
    ]
  },
  {
    slug: "dream-kitchen-cookware-set",
    name: "Soapstone Cookware Set – Dream Kitchen",
    tagline: "Everything your kitchen needs, in pure soapstone",
    capacity: "Frying Pan + 2L Pot + 3L Pressure Cooker + Lasagna Dish + Mortar + 4L Couscous Steamer",
    price: "$999",
    priceVal: 999,
    badge: "Complete Set",
    rating: 5,
    reviews: 41,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "This is a versatile set that will meet the diverse needs of a kitchen. Handcrafted from genuine soapstone, the Dream Kitchen set brings together everything you need to cook like an artisan — from a frying pan and pots to a stone pressure cooker, a lasagna dish, a mortar, and a 3-in-1 couscous steamer. A complete collection that turns every meal into an authentic stone-cooking experience.",
    includes: [
      "1 x 23 cm frying pan (5 cm high x 23 cm diameter)",
      "1 x 2 liter pot (9.5 cm height x 22 cm diameter)",
      "1 x 3 liter pressure cooker (14.5 cm height x 19 cm diameter)",
      "1 x Medium-sized lasagna dish",
      "1 x Mortar with copper strip",
      "1 x 3-in-1 couscous steamer/pot – 4 liters (2 liters in each section)",
      "1 x Curing manual"
    ],
    benefits: [
      "It has the ability to gradually release the heat contained in the stone, keeping food warm for about 1 to 2 hours after it's cooked.",
      "Much healthier! Recent studies indicate the transfer of beneficial nutrients (Fe, Zn, Ca, Mg) from the pan to the food.",
      "Soapstone is an extremely durable material; if well cared for, it will last for hundreds of years.",
      "The pans are naturally non-stick, making cleaning and cooking much easier.",
      "It can be used on gas stoves, wood-burning stoves, and can also be used in the oven!"
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Soapstone pieces are shipped new in their natural state (ash) and need to go through a curing process before first use — after curing, your piece will be permanently black (a step-by-step curing manual is included). Because each piece is entirely handcrafted and measured in liters, slight variations in dimensions are normal.",
    category: "sets",
    images: [
      "/products/dream-kitchen-set/full-set.png",
      "/products/dream-kitchen-set/pot.png",
      "/products/dream-kitchen-set/couscous-steamer.png",
      "/products/dream-kitchen-set/frying-pan.png",
      "/products/dream-kitchen-set/lasagna-dish.png",
      "/products/dream-kitchen-set/pot-open.png"
    ]
  },
  {
    slug: "set-3-soapstone-pots-large",
    name: "Set of 3 Soapstone Pots (Large)",
    tagline: "For those who like to cook larger quantities",
    capacity: "2L + 3L + 4L · Gas · Wood Stove · Oven",
    price: "$599",
    priceVal: 599,
    badge: "Special Set",
    rating: 5,
    reviews: 29,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "This set is ideal for those who like to cook larger quantities of food! Handcrafted from genuine soapstone, these three generously sized pots are perfect for slow-cooked stews, family meals, and gatherings — bringing the authentic flavor and warmth of stone cooking to your table.",
    includes: [
      "1 x 2-liter soapstone pot",
      "1 x 3-liter soapstone pot",
      "1 x 4-liter soapstone pot"
    ],
    benefits: [
      "It has the ability to gradually release the heat contained in the stone, keeping food warm for about 1 to 2 hours after it's cooked.",
      "Much healthier! Recent studies indicate the transfer of beneficial nutrients (Fe, Zn, Ca, Mg) from the pan to the food.",
      "Soapstone is an extremely durable material; if well cared for, it will last for hundreds of years.",
      "The pans are naturally non-stick, making cleaning and cooking much easier.",
      "It can be used on gas stoves, wood-burning stoves, and can also be used in the oven!"
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Stone pots are made using a completely handcrafted process, so there may be slight variations in the dimensions of the pieces.",
    category: "sets",
    images: [
      "/products/set-3-pots-large/main.png"
    ]
  },
  {
    slug: "set-4-pots-1-grill",
    name: "Set of 4 Stone Pots and 1 Grill 1L | 1.5L | 2L | 3L + Free Gift",
    tagline: "A versatile 5-piece set for the whole kitchen",
    capacity: "1L + 1.5L + 2L + 3L + Grill · Gas · Wood Stove · Oven",
    price: "$769",
    priceVal: 769,
    badge: "Special Set",
    rating: 5,
    reviews: 31,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "A 5-piece set, including 3 saucepans, 1 frying pan and a grill. This is a versatile set that will meet the diverse needs of a kitchen. Handcrafted from genuine soapstone, it brings the authentic flavor and warmth of stone cooking to everything from everyday meals to grilling.",
    includes: [
      "1 x 1-liter frying pan (Height: 5 cm x diameter: 18 cm)",
      "1 x 1.5 liter pot (Height: 9.5 cm x diameter: 18 cm)",
      "1 x 2-liter pot (Height: 9.5 cm, diameter: 23 cm)",
      "1 x 3-liter pot (Height: 10 cm, diameter: 22 cm)",
      "1 x Grill (27 cm)",
      "1 x Curing manual",
      "1 x Free Gift (selected based on stock availability)"
    ],
    benefits: [
      "It has the ability to gradually release the heat contained in the stone, keeping food warm for about 1 to 2 hours after it's cooked.",
      "Much healthier! Recent studies indicate the transfer of beneficial nutrients (Fe, Zn, Ca, Mg) from the pan to the food.",
      "Soapstone is an extremely durable material; if well cared for, it will last for hundreds of years.",
      "The pans are naturally non-stick, making cleaning and cooking much easier.",
      "It can be used on gas stoves, wood-burning stoves, and can also be used in the oven!"
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Stone pots are made using a completely handcrafted process, so there may be slight variations in the dimensions of the pieces.",
    category: "sets",
    images: [
      "/products/set-4-pots-grill/main.png",
      "/products/set-4-pots-grill/lifestyle.png",
      "/products/set-4-pots-grill/pot.png",
      "/products/set-4-pots-grill/grill.png"
    ]
  },
  {
    slug: "set-3-pots-pressure-cooker-5l",
    name: "Set of 3 Stone Pots + Pressure Cooker - 5 liters",
    tagline: "Tradition, function and elegance in one set",
    capacity: "5L Pressure Cooker + 3L + 2L + 1.5L · Gas · Electric · Charcoal · Wood Stove",
    price: "$799",
    priceVal: 799,
    badge: "Special Set",
    rating: 5,
    reviews: 36,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "Soapstone cookware perfectly combines tradition, functionality, and elegance. With them, you can prepare and serve incredibly tasty meals while enjoying the benefits of the stone's natural minerals, such as iron, calcium, and manganese, which contribute to your health. In addition to their sophisticated and handcrafted design, these pans keep food warm for much longer, as the stone retains heat even after being removed from the heat source. Our exclusive soapstone pressure cooker model stands out in the market for its innovation and unparalleled safety. Without metal clips or latches, it eliminates the risk of explosion, ensuring greater peace of mind for your daily life. Pressure is generated by the weight of the lid and its precise fit against the rim of the pot, allowing heat to circulate internally before being released through the steam vent. Each piece is unique, handcrafted, guaranteeing exclusivity and a special touch in your kitchen. Furthermore, by purchasing our cookware, you support the work of artisans who preserve this centuries-old tradition.",
    includes: [
      "1 x 5-liter Pressure Cooker (Diameter: 23 cm, Height: 15 cm, ~5.0 kg)",
      "1 x 3-liter pot (Diameter: 22 cm, Height: 10 cm, ~4.0 kg)",
      "1 x 2-liter pot (Diameter: 17 cm, Height: 9 cm, ~3.2 kg)",
      "1 x 1.5-liter pot (Diameter: 14 cm, Height: 8 cm, ~2.0 kg)"
    ],
    benefits: [
      "Uniform and efficient heating across the whole piece.",
      "Keeps food warm for longer, as the stone retains heat after being removed from the heat source.",
      "Compatible with gas, electric, charcoal and wood-burning stoves (except induction).",
      "Handcrafted design that enhances your kitchen, with natural minerals (iron, calcium, manganese) transferred to your food.",
      "Durability and resistance — each handcrafted piece is unique and built to last."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "As this is a 100% handcrafted product, slight variations in measurements, capacity, and design may occur, making each piece unique. We start the curing process before shipping, and you will need to complete it by following our instructions.",
    category: "sets",
    images: [
      "/products/set-3-pots-pressure-5l/main.png",
      "/products/set-3-pots-pressure-5l/pressure-cooker.png",
      "/products/set-3-pots-pressure-5l/pot.png",
      "/products/set-3-pots-pressure-5l/pot-rice.png"
    ]
  },
  {
    slug: "complete-set-5-pieces-mortar",
    name: "Complete Stone Cookware Set – 5 Pieces + Mortar and Pestle",
    tagline: "Everything your kitchen needs, plus a free mortar & pestle",
    capacity: "1L Pan + 1.5L + 2L + 3L Pressure Cooker + Grill · Gas · Wood Stove · Oven",
    price: "$799",
    priceVal: 799,
    badge: "Complete Set",
    rating: 5,
    reviews: 38,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "This is a versatile set that will meet the diverse needs of a kitchen. Handcrafted from genuine soapstone, this complete collection covers everyday cooking — from a frying pan and pots to a stone pressure cooker and a grill — and comes with a soapstone mortar and pestle as a free gift. A complete kitchen in pure stone, bringing the authentic flavor and warmth of stone cooking to your table.",
    includes: [
      "1 x 1-liter frying pan (18 cm diameter)",
      "1 x 1.5 liter pot",
      "1 x 2-liter pot",
      "1 x 3-liter pressure cooker",
      "1 x Grill (23 cm diameter)",
      "1 x Soapstone mortar and pestle (free gift)"
    ],
    benefits: [
      "It has the ability to gradually release the heat contained in the stone, keeping food warm for about 1 to 2 hours after it's cooked.",
      "Much healthier! Recent studies indicate the transfer of beneficial nutrients (Fe, Zn, Ca, Mg) from the pan to the food.",
      "Soapstone is an extremely durable material; if well cared for, it will last for hundreds of years.",
      "The pans are naturally non-stick, making cleaning and cooking much easier.",
      "It can be used on gas stoves, wood-burning stoves, and can also be used in the oven!"
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Stone pots are made using a completely handcrafted process, so there may be slight variations in the dimensions of the pieces.",
    category: "sets",
    images: [
      "/products/complete-set-mortar/main.png",
      "/products/complete-set-mortar/lifestyle.png",
      "/products/complete-set-mortar/pressure-cooker.png",
      "/products/complete-set-mortar/grill.png",
      "/products/complete-set-mortar/mortar-pestle.png",
      "/products/complete-set-mortar/pot-1.png",
      "/products/complete-set-mortar/pot-2.png"
    ]
  },
  {
    slug: "versatile-kitchen-cookware-set",
    name: "Stone Cookware Set – Versatile Kitchen",
    tagline: "A versatile set for every kitchen need",
    capacity: "23cm Frying Pan + 2L Pot + 3L Pressure Cooker + Mortar · Gas · Wood Stove · Oven",
    price: "$639",
    priceVal: 639,
    badge: "Complete Set",
    rating: 5,
    reviews: 33,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "This is a versatile set that will meet the diverse needs of a kitchen. Handcrafted from genuine soapstone, this set brings together a frying pan, a pot, a stone pressure cooker, and a soapstone mortar — everything you need to cook like an artisan and bring the authentic flavor and warmth of stone cooking to your table.",
    includes: [
      "1 x 23 cm frying pan (3.2 cm high x 23 cm diameter)",
      "1 x 2 liter pot (9.5 cm height x 22 cm diameter)",
      "1 x 3 liter pressure cooker (14.5 cm height x 19 cm diameter)",
      "1 x Soapstone mortar with copper band",
      "1 x Curing manual"
    ],
    benefits: [
      "It has the ability to gradually release the heat contained in the stone, keeping food warm for about 1 to 2 hours after it's cooked.",
      "Much healthier! Recent studies indicate the transfer of beneficial nutrients (Fe, Zn, Ca, Mg) from the pan to the food.",
      "Soapstone is an extremely durable material; if well cared for, it will last for hundreds of years.",
      "The pans are naturally non-stick, making cleaning and cooking much easier.",
      "It can be used on gas stoves, wood-burning stoves, and can also be used in the oven!"
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Stone pots are made using an entirely handcrafted process, therefore the pieces are measured in liters, which may result in slight variations in dimensions.",
    category: "sets",
    images: [
      "/products/versatile-kitchen-set/main.png",
      "/products/versatile-kitchen-set/frying-pan.png",
      "/products/versatile-kitchen-set/pressure-cooker.png",
      "/products/versatile-kitchen-set/pot.png",
      "/products/versatile-kitchen-set/mortar.png"
    ]
  },
  {
    slug: "osmenino-stone-cookware-set",
    name: "Osmenino Stone Cookware Set",
    tagline: "A complete artisan kitchen in pure soapstone",
    capacity: "3L Pressure Cooker + 3L + 2L + 1.5L Pots + 23cm Frying Pan · Gas · Electric · Charcoal · Wood Stove",
    price: "$985",
    priceVal: 985,
    badge: "Premium Set",
    rating: 5,
    reviews: 42,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "A complete soapstone cookware set that combines tradition, functionality, and elegance. Handcrafted from genuine soapstone, it brings together a stone pressure cooker, three pots, and a frying pan — everything you need to cook like an artisan. Each piece is unique, handcrafted, guaranteeing exclusivity and a special touch in your kitchen. Furthermore, by purchasing our cookware, you support the work of artisans who preserve this centuries-old tradition.",
    includes: [
      "1 x 3-liter Pressure Cooker (Diameter: 23 cm, Height: 12 cm, ~5.0 kg)",
      "1 x 3-liter pot (Diameter: 22 cm, Height: 11 cm, ~4.5 kg)",
      "1 x 2-liter pot (Diameter: 22 cm, Height: 7 cm, ~4.0 kg)",
      "1 x 1.5-liter pot (Diameter: 17 cm, Height: 9 cm, ~3.2 kg)",
      "1 x Stone frying pan (Diameter: 23 cm, Height: 5 cm, ~3.0 kg)"
    ],
    benefits: [
      "Uniform and efficient heating across the whole piece.",
      "Keeps food warm for longer, as the stone retains heat after being removed from the heat source.",
      "Compatible with gas, electric, charcoal and wood-burning stoves (except induction).",
      "Handcrafted design that enhances your kitchen.",
      "Durability and resistance — each handcrafted piece is unique and built to last."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "As this is a 100% handcrafted product, slight variations in measurements, capacity, and design may occur, making each piece unique. We start the curing process before shipping, and you will need to complete it by following our instructions.",
    category: "sets",
    images: [
      "/products/osmenino-set/main.png",
      "/products/osmenino-set/pressure-cooker.png",
      "/products/osmenino-set/pot-1.png",
      "/products/osmenino-set/pot-2.png",
      "/products/osmenino-set/pot-3l-specs.png",
      "/products/osmenino-set/pot-2l-specs.png",
      "/products/osmenino-set/frying-pan-specs.png"
    ]
  },
  {
    slug: "set-3-pots-pressure-cooker-4l",
    name: "Set of 3 Stone Pots + Pressure Cooker - 4 liters",
    tagline: "Tradition, function and elegance in one set",
    capacity: "4L Pressure Cooker + 2L + 1.5L + 0.8L · Gas · Electric · Charcoal · Wood Stove",
    price: "$789",
    priceVal: 789,
    badge: "Special Set",
    rating: 5,
    reviews: 35,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "Portal Pedra Sabão's soapstone cookware perfectly combines tradition, functionality, and elegance. With them, you can prepare and serve incredibly tasty meals while enjoying the benefits of the stone's natural minerals, such as iron, calcium, and manganese, which contribute to your health. In addition to their sophisticated and handcrafted design, these pans keep food warm for much longer, as the stone retains heat even after being removed from the heat source. Our exclusive soapstone pressure cooker model stands out in the market for its innovation and unparalleled safety. Without metal clips or latches, it eliminates the risk of explosion, ensuring greater peace of mind for your daily life. Pressure is generated by the weight of the lid and its precise fit against the rim of the pot, allowing heat to circulate internally before being released through the steam vent. Each piece is unique, handcrafted, guaranteeing exclusivity and a special touch in your kitchen. Furthermore, by purchasing our cookware, you support the work of artisans who preserve this centuries-old tradition.",
    includes: [
      "1 x 4-liter Pressure Cooker (Diameter: 23 cm, Height: 12 cm, ~5.0 kg)",
      "1 x 2-liter pot (Diameter: 22 cm, Height: 7 cm, ~4.0 kg)",
      "1 x 1.5-liter pot (Diameter: 17 cm, Height: 9 cm, ~3.2 kg)",
      "1 x 0.8-liter pot (Diameter: 14 cm, Height: 9 cm, ~2.0 kg)"
    ],
    benefits: [
      "Uniform and efficient heating across the whole piece.",
      "Keeps food warm for longer, as the stone retains heat after being removed from the heat source.",
      "Compatible with gas, electric, charcoal and wood-burning stoves (except induction).",
      "Handcrafted design that enhances your kitchen, with natural minerals (iron, calcium, manganese) transferred to your food.",
      "Durability and resistance — each handcrafted piece is unique and built to last."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "As this is a 100% handcrafted product, slight variations in measurements, capacity, and design may occur, making each piece unique. We start the curing process before shipping, and you will need to complete it by following our instructions.",
    category: "sets",
    images: [
      "/products/set-3-pots-pressure-4l/main.png",
      "/products/set-3-pots-pressure-4l/pressure-cooker.png",
      "/products/set-3-pots-pressure-4l/pot.png",
      "/products/set-3-pots-pressure-4l/pot-rice.png"
    ]
  },
  {
    slug: "luxury-soapstone-water-filter-10l",
    name: "Luxury 10L Soapstone Water Filter with Pure Copper",
    tagline: "Naturally cool water • Elegant kitchen decor • Premium handmade",
    capacity: "10L (5L upper + 5L lower) · Countertop",
    price: "$499",
    priceVal: 499,
    badge: "Luxury",
    rating: 5,
    reviews: 26,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "Bring elegance and wellness into your home with this beautiful 10-liter soapstone water filter, handcrafted with pure copper accents. Perfect for anyone looking for clean, fresh water while adding a luxury decorative piece to the kitchen. With a 10-liter capacity (5L upper + 5L lower), it includes a faucet and 2 filter candles and is ready for immediate use. Made of natural soapstone and pure copper, it keeps water naturally cool with a premium handcrafted finish that is strong and durable. Dimensions: Height 21.6 in, Width 9.4 in, Opening 5.5 in.",
    includes: [
      "1 x 10-liter Soapstone Water Filter (5L upper + 5L lower)",
      "1 x Faucet",
      "2 x Filter candles",
      "1 x Instruction manual",
      "Secure packaging"
    ],
    benefits: [
      "Natural filtration helps remove impurities for clean, fresh water.",
      "Keeps water naturally cool thanks to the soapstone's thermal properties.",
      "Elegant and sophisticated design — perfect for modern, luxury, or rustic kitchens.",
      "A beautiful statement piece for countertop decor and a great gift idea.",
      "Premium handcrafted finish in natural soapstone and pure copper — strong and durable."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Made using a completely handcrafted process, so slight variations in dimensions, texture, and coloration are normal and make each piece unique.",
    category: "tableware",
    images: [
      "/products/water-filter-10l/main.jpg",
      "/products/water-filter-10l/specs.jpg",
      "/products/water-filter-10l/top-open.jpg",
      "/products/water-filter-10l/faucet.jpg",
      "/products/water-filter-10l/filter-candles.jpg",
      "/products/water-filter-10l/lifestyle.jpg"
    ]
  },
  {
    slug: "soapstone-baking-pan-m",
    name: "Soapstone Baking Pan M",
    tagline: "The perfect pan for doughs, cakes and baked goods",
    capacity: "32 x 20 cm · Oven · Gas · Wood Stove",
    price: "$359",
    priceVal: 359,
    badge: "Bakeware",
    rating: 5,
    reviews: 17,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "A soapstone baking pan is the perfect option for making doughs, cakes, and all sorts of baked goods. Handcrafted from genuine soapstone with elegant copper handles, it distributes heat evenly and brings the authentic flavor and warmth of stone cooking to your oven creations.",
    includes: [
      "1 x Soapstone Baking Pan, size M (Length: 32 cm, Width: 20 cm, Height: 5.5 cm)",
      "Copper handles"
    ],
    benefits: [
      "It has the ability to release the heat contained in the stone gradually, keeping your food warm for about 1 to 2 hours after it's cooked.",
      "Much healthier! Some recent studies indicate the transfer of beneficial nutrients (Fe, Zn, Ca, Mg) from the cookware to the food.",
      "100% natural material — it does not transfer harmful substances to the food.",
      "Naturally non-stick, making cleaning and cooking much easier.",
      "Perfect for doughs, cakes, lasagnas, and all sorts of baked goods."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Made using a completely handcrafted process, so there may be slight variations in the dimensions of the piece.",
    category: "frying-pans",
    images: [
      "/products/baking-pan-m/main.png",
      "/products/baking-pan-m/with-food.png"
    ]
  },
  {
    slug: "soapstone-grill-32cm-rechaud",
    name: "Soapstone Grill 32cm + Rechaud",
    tagline: "Refractory stone grilling, right at the table",
    capacity: "32 cm · Open Fire · Gas · Tabletop Rechaud",
    price: "$159",
    priceVal: 159,
    badge: "Grill",
    rating: 5,
    reviews: 14,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "Soapstone grills stand out for their strength and hardness; they also have the advantage of being refractory stone, making them excellent for meats. But they can also be used to make omelets, meats, gratin vegetables, and many other delicious dishes. This 32 cm grill comes with a rechaud base to keep your food warm right at the table. The grill will arrive at its new home and will need to go through the curing process.",
    includes: [
      "1 x Soapstone Grill (32 cm) with copper handles",
      "1 x Soapstone Rechaud base"
    ],
    benefits: [
      "It has the ability to release the heat contained in the stone gradually, keeping your food warm for about 1 to 2 hours after it's cooked.",
      "Much healthier! Some recent studies indicate the transfer of beneficial nutrients (Fe, Zn, Ca, Mg) from the cookware to the food.",
      "100% natural material — it does not transfer harmful substances to the food.",
      "Refractory stone makes it excellent for grilling meats, omelets, and gratin vegetables.",
      "The included rechaud keeps your dishes warm right at the table."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Made using a completely handcrafted process, so there may be slight variations in the dimensions of the piece. The grill will need to go through a curing process before first use.",
    category: "grills",
    images: [
      "/products/grill-32cm-rechaud/main.png"
    ]
  },
  {
    slug: "fondue-set-pot-grill",
    name: "Fondue Set – Pot (0.8L) + Grill (32 cm)",
    tagline: "Grilled meats and fondue in a single set",
    capacity: "0.8L Pot + 32cm Grill + 2 Rechauds + Gravy Boats · Tabletop",
    price: "$399",
    priceVal: 399,
    badge: "Special Set",
    rating: 5,
    reviews: 22,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "In a single purchase, you'll have everything you need to make a delicious grilled meat dish and a tasty cheese or chocolate fondue! Handcrafted from genuine soapstone, this complete set brings the warmth and conviviality of tableside cooking to your gatherings — grill your meats and melt your fondue right at the table.",
    includes: [
      "1 x Soapstone grill, 32 cm",
      "1 x Soapstone pot, 0.8 L (Height: 10 cm | Width: 13 cm)",
      "2 x Soapstone stoves (rechauds)",
      "1 x Gravy boat (Height: 5 cm / Width: 7 cm)",
      "2 x Gravy boats (Height: 5 cm / Width: 10 cm)",
      "3 x Gravy boats (Height: 5 cm / Width: 12 cm)"
    ],
    benefits: [
      "It has the ability to release the heat contained in the stone gradually, keeping your food warm for about 1 to 2 hours after it's cooked.",
      "Much healthier! Some recent studies indicate the transfer of beneficial nutrients (Fe, Zn, Ca, Mg) from the cookware to the food.",
      "100% natural material — it does not transfer harmful substances to the food.",
      "Naturally non-stick, making cleaning and cooking much easier.",
      "Perfect for grilled meats and cheese or chocolate fondue, right at the table."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Made using a completely handcrafted process, so there may be slight variations in the dimensions of the pieces.",
    category: "sets",
    images: [
      "/products/fondue-set/main.png",
      "/products/fondue-set/pot-rechaud.png",
      "/products/fondue-set/grill.png",
      "/products/fondue-set/pot.png",
      "/products/fondue-set/bowls.png"
    ]
  },
  {
    slug: "fondue-set-pot-grill-27cm",
    name: "Fondue Set – Pot + Grill (27 cm)",
    tagline: "Grilled meats and fondue in a single set",
    capacity: "0.8L Pot + 27cm Grill + 2 Rechauds + Gravy Boats · Tabletop",
    price: "$392",
    priceVal: 392,
    badge: "Special Set",
    rating: 5,
    reviews: 20,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "In a single purchase, you'll have everything you need to make a delicious grilled meat dish and a tasty cheese or chocolate fondue! Handcrafted from genuine soapstone, this complete set brings the warmth and conviviality of tableside cooking to your gatherings — grill your meats and melt your fondue right at the table.",
    includes: [
      "1 x Soapstone grill, 27 cm",
      "1 x Soapstone pot, 0.8 L (Height: 10 cm | Width: 13 cm)",
      "2 x Soapstone stoves (rechauds)",
      "1 x Gravy boat (Height: 5 cm / Width: 7 cm)",
      "2 x Gravy boats (Height: 5 cm / Width: 10 cm)",
      "3 x Gravy boats (Height: 5 cm / Width: 12 cm)"
    ],
    benefits: [
      "It has the ability to release the heat contained in the stone gradually, keeping your food warm for about 1 to 2 hours after it's cooked.",
      "Much healthier! Some recent studies indicate the transfer of beneficial nutrients (Fe, Zn, Ca, Mg) from the cookware to the food.",
      "100% natural material — it does not transfer harmful substances to the food.",
      "Naturally non-stick, making cleaning and cooking much easier.",
      "Perfect for grilled meats and cheese or chocolate fondue, right at the table."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Made using a completely handcrafted process, so there may be slight variations in the dimensions of the pieces.",
    category: "sets",
    images: [
      "/products/fondue-set-27cm/main.png",
      "/products/fondue-set-27cm/pot-rechaud.png",
      "/products/fondue-set-27cm/grill.png",
      "/products/fondue-set-27cm/pot.png",
      "/products/fondue-set-27cm/bowls.png"
    ]
  },
  {
    slug: "soapstone-fondue-kit",
    name: "Soapstone Fondue Kit – Cheese or Chocolate + Sauce Dishes",
    tagline: "Everything you need for your dream fondue",
    capacity: "0.8L Pot + Rechaud + Gravy Boats · Tabletop",
    price: "$229",
    priceVal: 229,
    badge: "Fondue Kit",
    rating: 5,
    reviews: 16,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "In a single purchase, you'll have everything you need to make your dream cheese or chocolate fondue! Handcrafted from genuine soapstone, this kit keeps your fondue warm and creamy right at the table, bringing the warmth and conviviality of tableside cooking to your gatherings.",
    includes: [
      "1 x Soapstone pot, 0.8 L (Height: 10 cm | Width: 13 cm)",
      "1 x Soapstone stove (rechaud)",
      "1 x Gravy boat (Height: 5 cm / Width: 7 cm)",
      "1 x Gravy boat (Height: 5 cm / Width: 10 cm)",
      "1 x Gravy boat (Height: 5 cm / Width: 12 cm)"
    ],
    benefits: [
      "It has the ability to release the heat contained in the stone gradually, keeping your food warm for about 1 to 2 hours after it's cooked.",
      "Much healthier! Some recent studies indicate the transfer of beneficial nutrients (Fe, Zn, Ca, Mg) from the cookware to the food.",
      "100% natural material — it does not transfer harmful substances to the food.",
      "Naturally non-stick, making cleaning and cooking much easier.",
      "Perfect for cheese or chocolate fondue, right at the table."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Made using a completely handcrafted process, so there may be slight variations in the dimensions of the pieces.",
    category: "sets",
    images: [
      "/products/fondue-kit/main.png"
    ]
  },
  {
    slug: "complete-soapstone-fondue-set-32cm",
    name: "Complete Soapstone Fondue Set (32 cm Grate)",
    tagline: "Grilled steak and fondue for 3 to 6 people",
    capacity: "32cm Grill + 2x 0.8L Pots + 3 Rechauds + 6 Gravy Boats + 6 Forks · Tabletop",
    price: "$569",
    priceVal: 569,
    badge: "Complete Set",
    rating: 5,
    reviews: 24,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "In a single purchase, you'll have everything you need to make a delicious grilled steak and a tasty cheese or chocolate fondue! Ideal product for 3 to 6 people. Handcrafted from genuine soapstone, this complete set brings the warmth and conviviality of tableside cooking to your gatherings — grill your meats and melt your fondue right at the table, with stainless steel forks included.",
    includes: [
      "1 x 32 cm soapstone grill",
      "2 x Soapstone pot, 0.8 L (Height: 10 cm | Width: 13 cm)",
      "3 x Soapstone stoves (rechauds)",
      "2 x Gravy boats (Height: 5 cm / Width: 7 cm)",
      "2 x Sauce boats (Height: 5 cm / Width: 10 cm)",
      "2 x Sauce boats (Height: 5 cm / Width: 12 cm)",
      "6 x Stainless steel fondue forks with high-resistance plastic handles"
    ],
    benefits: [
      "It has the ability to release the heat contained in the stone gradually, keeping your food warm for about 1 to 2 hours after it's cooked.",
      "Much healthier! Some recent studies indicate the transfer of beneficial nutrients (Fe, Zn, Ca, Mg) from the cookware to the food.",
      "100% natural material — it does not transfer harmful substances to the food.",
      "Naturally non-stick, making cleaning and cooking much easier.",
      "Perfect for grilled steak and cheese or chocolate fondue, right at the table."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Stone pots are made using a completely handcrafted process, so there may be slight variations in the dimensions of the pieces.",
    category: "sets",
    images: [
      "/products/complete-fondue-set-32cm/main.png",
      "/products/complete-fondue-set-32cm/alt.png",
      "/products/complete-fondue-set-32cm/pot-rechaud.png",
      "/products/complete-fondue-set-32cm/grill.png",
      "/products/complete-fondue-set-32cm/bowls.png"
    ]
  },
  {
    slug: "complete-soapstone-fondue-set-27cm",
    name: "Complete Soapstone Fondue Set (27 cm Grate)",
    tagline: "Grilled steak and fondue for 1 to 4 people",
    capacity: "27cm Grill + 2x 0.8L Pots + 3 Rechauds + 6 Gravy Boats + 6 Forks · Tabletop",
    price: "$539",
    priceVal: 539,
    badge: "Complete Set",
    rating: 5,
    reviews: 21,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "In a single purchase, you'll have everything you need to make a delicious grilled steak and a tasty cheese or chocolate fondue! Ideal product for 1 to 4 people. Handcrafted from genuine soapstone, this complete set brings the warmth and conviviality of tableside cooking to your gatherings — grill your meats and melt your fondue right at the table, with stainless steel forks included.",
    includes: [
      "1 x 27 cm soapstone grill",
      "2 x Soapstone pot, 0.8 L (Height: 10 cm | Width: 13 cm)",
      "3 x Soapstone stoves (rechauds)",
      "2 x Gravy boats (Height: 5 cm / Width: 7 cm)",
      "2 x Sauce boats (Height: 5 cm / Width: 10 cm)",
      "2 x Sauce boats (Height: 5 cm / Width: 12 cm)",
      "6 x Stainless steel fondue forks with high-resistance plastic handles"
    ],
    benefits: [
      "It has the ability to release the heat contained in the stone gradually, keeping your food warm for about 1 to 2 hours after it's cooked.",
      "Much healthier! Some recent studies indicate the transfer of beneficial nutrients (Fe, Zn, Ca, Mg) from the cookware to the food.",
      "100% natural material — it does not transfer harmful substances to the food.",
      "Naturally non-stick, making cleaning and cooking much easier.",
      "Perfect for grilled steak and cheese or chocolate fondue, right at the table."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Soapstone pieces are shipped new in their natural state (ash) and need to go through a curing process before first use — after curing, your piece will be permanently black (a step-by-step curing manual is included). Stone pots are made using a completely handcrafted process, so there may be slight variations in the dimensions of the pieces.",
    category: "sets",
    images: [
      "/products/complete-fondue-set-27cm/main.png",
      "/products/complete-fondue-set-27cm/alt.png",
      "/products/complete-fondue-set-27cm/pot-rechaud.png",
      "/products/complete-fondue-set-27cm/grill.png",
      "/products/complete-fondue-set-27cm/bowls.png"
    ]
  },
  {
    slug: "soapstone-dinnerware-set-8",
    name: "Soapstone Dinnerware Set (8 place settings)",
    tagline: "Timeless elegance, expertly carved in stone",
    capacity: "8 Place Settings · 32 Pieces · Tableware",
    price: "$1,536",
    priceVal: 1536,
    badge: "Luxury",
    rating: 5,
    reviews: 19,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "Dazzle your guests with our exquisite Soapstone Dinnerware Set, a perfect fusion of timeless elegance and functionality. Each piece is expertly carved from soapstone, providing not only an exceptional culinary experience but also a magnificent presentation. Premium quality soapstone ensures durability, strength, and a touch of refined rustic charm, while the timeless design adds an aesthetic dimension to your table. The carefully chosen dimensions ensure practicality, and the versatility of the pieces allows for a variety of table configurations.",
    includes: [
      "8 x Pasta plates (22 cm)",
      "8 x Dinner plates (28 cm)",
      "8 x Dessert plates (20 cm)",
      "8 x Bowls with saucers (500 ml)"
    ],
    benefits: [
      "Each piece is expertly carved from premium-quality soapstone for durability and strength.",
      "Elegant and timeless design that adds an aesthetic dimension to your table.",
      "Practical and versatile dimensions for a variety of table configurations.",
      "100% natural material with a refined rustic charm.",
      "Secure shipping in wooden crates — every piece arrives protected and in perfect condition."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Each piece is carved from natural soapstone using a handcrafted process, so slight variations in dimensions, texture, and coloration are normal and make each piece unique. All pieces are carefully packed in wooden crates for safe transport.",
    category: "tableware",
    images: [
      "/products/dinnerware-set-8/main.png",
      "/products/dinnerware-set-8/stacked.png",
      "/products/dinnerware-set-8/set-ladles.png",
      "/products/dinnerware-set-8/lifestyle.png",
      "/products/dinnerware-set-8/plates.png",
      "/products/dinnerware-set-8/plates-detail.png"
    ]
  },
  {
    slug: "soapstone-bowls-8-with-saucer",
    name: "8 Soapstone Bowls 500 ML – With Saucer",
    tagline: "Versatile bowls that keep food at the right temperature",
    capacity: "8 x 500 ml · With Saucers · Tableware · Oven-safe",
    price: "$349",
    priceVal: 349,
    badge: "Tableware",
    rating: 5,
    reviews: 18,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "The soapstone bowl is a versatile piece with various uses; besides being used for serving meals, it can also be used in the oven. Keep your broths and ice creams at the right temperature for much longer! Each bowl comes with its own saucer. The pieces are made in a 100% handcrafted process, so there may be slight variations in dimensions.",
    includes: [
      "8 x Soapstone bowls, 500 ml (Height: 5.5 cm, Width: 13 cm)",
      "8 x Matching saucers (14.5 cm diameter)"
    ],
    benefits: [
      "Versatile piece — perfect for serving meals and also oven-safe.",
      "Keeps broths, soups, and ice creams at the right temperature for much longer.",
      "100% natural soapstone with a refined, rustic charm.",
      "Each bowl comes with its own matching saucer.",
      "No curing required — to darken the piece, simply apply oil to the surface and wait 30 minutes."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "The pieces are made in a 100% handcrafted process, so there may be slight variations in dimensions. Soapstone bowls do not need a curing process; if you prefer the piece to be black, simply apply oil to the surface and wait 30 minutes for it to darken.",
    category: "tableware",
    images: [
      "/products/bowls-8-saucer/main.png",
      "/products/bowls-8-saucer/single.png",
      "/products/bowls-8-saucer/with-food.png"
    ]
  },
  {
    slug: "stone-water-filter-10l",
    name: "10-Liter Stone Water Filter",
    tagline: "Purity, elegance, and tradition",
    capacity: "10L · Countertop · Residential & Commercial",
    price: "$399",
    priceVal: 399,
    badge: "Wellness",
    rating: 5,
    reviews: 22,
    accent: "#C67C3B",
    bg: "#F5F0E8",
    description: "Transform the water quality in your home with the 10-Liter Stone Water Filter. Made from highly durable natural stone, it helps keep water fresh for longer, combining efficiency, beauty, and tradition in a single product. Ideal for homes, offices, and leisure areas, its 10-liter reservoir offers excellent capacity to serve the whole family, reducing the need for constant refilling. Enjoy quality water always available and bring home the perfect combination of tradition, practicality, and well-being — more health, savings, and style for your everyday life.",
    includes: [
      "1 x 10-Liter Natural Stone Water Filter",
      "1 x Faucet",
      "Compatible with high-efficiency filter candles"
    ],
    benefits: [
      "Cleaner, more pleasant water for daily consumption.",
      "Keeps water naturally fresh for longer.",
      "10-liter capacity, ideal for the whole family.",
      "Resistant material with long-lasting durability.",
      "Elegant design that matches any environment, with easy installation and maintenance.",
      "A sustainable alternative to bottled water."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Made using a completely handcrafted process from natural stone, so slight variations in dimensions, texture, and coloration are normal and make each piece unique.",
    category: "tableware",
    images: [
      "/products/stone-water-filter-10l/main.jpg"
    ]
  }
];
