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
    slug: "vulcanic-grand-pot",
    name: "Vulcanic Grand Pot",
    tagline: "The centerpiece of fire cooking",
    capacity: "6L · Open Fire · Wood Stove",
    price: "From $480",
    priceVal: 480,
    badge: "Bestseller",
    rating: 5,
    reviews: 38,
    accent: "#C67C3B",
    bg: "#F9F4EE",
    description: "Our signature volcanic stone pot. Perfect for cooking family-sized stews, slow-cooked meats, and authentic fire recipes. Handcrafted by local artisans using genuine Brazilian soapstone, this pot acts as a heat reservoir, maintaining your dishes warm long after they're taken off the stove.",
    includes: [
      "1 x 6.0 Liter Cauldron (18 cm height x 24 cm diameter)",
      "1 x Matching Soapstone Lid with Copper Details",
      "1 x Free Culinary Starter Pack (Artisanal Seasoning & Cure Oil)"
    ],
    benefits: [
      "Retains and gradually releases heat, keeping food hot for 1 to 2 hours after cooking.",
      "Healthier meals! Naturally transfers beneficial nutrients (Iron, Zinc, Calcium, Magnesium) to your food.",
      "Naturally non-stick surface, requiring less oil and making it extremely easy to clean.",
      "Versatile cooking: can be used on gas stoves, wood-burning stoves, ovens, and outdoor BBQs.",
      "Incredible durability — built to last for generations if properly cured and cared for."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Because each stone piece is completely handcrafted, slight variations in dimensions, texture, and coloration are normal and make your piece unique.",
    category: "pots"
  },
  {
    slug: "stone-dutch-oven",
    name: "Stone Dutch Oven",
    tagline: "Centuries of technique in one vessel",
    capacity: "4L · Charcoal · Wood Stove",
    price: "From $360",
    priceVal: 360,
    badge: "Popular",
    rating: 5,
    reviews: 54,
    accent: "#A36D3A",
    bg: "#F5F0E8",
    description: "Designed for premium baking, braising, and roasting. The thick soapstone walls distribute heat perfectly evenly, making it the ultimate vessel for baking artisan sourdough bread or slow-roasting pork shoulders. It serves up to 6 people.",
    includes: [
      "1 x 4.0 Liter Dutch Oven (14 cm height x 22 cm diameter)",
      "1 x Heavy Stone Seal Lid for Moisture Retention",
      "1 x Free Curing Oil Bottle"
    ],
    benefits: [
      "Gradual heat release keeps food hot on the table for up to 2 hours.",
      "Adds iron, calcium, and magnesium directly to the food, enriching your everyday diet.",
      "Soapstone is a non-porous and naturally non-stick material.",
      "Compatible with wood stoves, gas ranges, charcoal grills, and ovens up to 500°F.",
      "100% natural, chemical-free materials."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Soapstone pots are crafted using an entirely manual process; minor variations in shape and volume may occur.",
    category: "pots"
  },
  {
    slug: "artisan-skillet",
    name: "Artisan Stone Skillet",
    tagline: "Sear like nothing else",
    capacity: "28cm · Direct Flame · BBQ",
    price: "From $240",
    priceVal: 240,
    badge: "New",
    rating: 4,
    reviews: 22,
    accent: "#8B5E2A",
    bg: "#F2EDE4",
    description: "The ultimate searing tool. Soapstone handles extremely high heat without warping and holds its temperature even when cold meats are added, ensuring a perfect golden crust on steaks, fajitas, and fish files. Ideal for serving 2-4 people.",
    includes: [
      "1 x 28cm Stone Skillet (6 cm height x 28 cm diameter)",
      "1.x Heat-Resistant Copper Wrapped Handle",
      "1 x Curing Instructions Guide"
    ],
    benefits: [
      "Maintains sizzle and temperature at the table, keeping meats hot and juicy.",
      "Releases trace elements of healthy minerals (Fe, Zn, Ca, Mg) during cooking.",
      "Naturally non-stick once cured, preventing delicate ingredients like fish from sticking.",
      "Great for stovetops, direct flame, BBQ pits, and outdoor cooking setups."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Handmade stone cookware might feature minor cosmetic variations that do not affect usage.",
    category: "frying-pans"
  },
  {
    slug: "volcanic-wok",
    name: "Volcanic Stone Wok",
    tagline: "High heat. Ancient technique",
    capacity: "5L · Open Fire · Gas Wok",
    price: "From $420",
    priceVal: 420,
    badge: "Limited",
    rating: 5,
    reviews: 17,
    accent: "#C67C3B",
    bg: "#FAF5EF",
    description: "High-walled and designed for high-heat stir-frying, saucing, and outdoor pasta tossing. Unlike thin metal woks that cool down instantly, this thick stone wok retains a high heat core that cooks vegetables crisp and sears meat cleanly. Serves 4-6 people.",
    includes: [
      "1 x 5.0 Liter Wok Pan (12 cm height x 32 cm diameter)",
      "Double Side Helper Handles Wrapped in Copper Ring",
      "1 x Pack of Specialty Cure Herbs"
    ],
    benefits: [
      "Maintains high, continuous heat, crucial for authentic wok technique.",
      "Transfers health-promoting minerals (Iron, Calcium, Magnesium) into sauces.",
      "Naturally non-stick and highly resistant to acids.",
      "Perfect for open campfires, high-output gas rings, and wood stoves."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Minor sizing tolerances exist due to the handcrafted nature of the stone turning process.",
    category: "frying-pans"
  },
  {
    slug: "mini-cocotte",
    name: "Stone Mini Cocotte",
    tagline: "Individual. Intimate. Unforgettable",
    capacity: "600ml · Oven · BBQ",
    price: "From $160",
    priceVal: 160,
    badge: "Gift Idea",
    rating: 5,
    reviews: 41,
    accent: "#A36D3A",
    bg: "#F5F0E8",
    description: "Charming individual pots designed for personal soufflés, garlic roasts, baked cheese dips, or individual desserts. They look beautiful on the table and keep single-serving starters piping hot throughout the meal.",
    includes: [
      "1 x 600ml Mini Cocotte (7.5 cm height x 11 cm diameter)",
      "1 x Mini Stone Lid with Handle"
    ],
    benefits: [
      "Keeps personal portions warm from the first bite to the last.",
      "Adds healthy trace minerals (Zinc, Magnesium, Calcium, Iron) to food.",
      "100% natural, rustic appearance that stands out in table settings.",
      "Safe to move directly from the oven to the dinner plate."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Handmade product: slight weight and volume deviations are expected.",
    category: "tableware"
  },
  {
    slug: "grand-brasier",
    name: "Grand Stone Brasier",
    tagline: "For the fearless entertainer",
    capacity: "8L · Pit Fire · Outdoor",
    price: "From $580",
    priceVal: 580,
    badge: "Masterwork",
    rating: 5,
    reviews: 12,
    accent: "#8B5E2A",
    bg: "#F2EDE4",
    description: "Our largest artisanal piece. Built for feast cooking, pit fires, and large gatherings. Designed with heavy copper reinforcements, it accommodates large cuts of meat, whole poultry, or massive pots of stew for up to 12 people.",
    includes: [
      "1 x 8.0 Liter Grand Brasier (15 cm height x 30 cm diameter)",
      "1 x Matching Grand Lid with Double Copper Knobs",
      "1 x Premium Curing & Seasoning Kit"
    ],
    benefits: [
      "Massive thermal mass keeps large feasts hot at the table for up to 2.5 hours.",
      "Nutrient transfer: enriches your recipes with natural iron, zinc, magnesium, and calcium.",
      "Non-stick volcanic soapstone surface requires zero chemical coatings.",
      "Engineered for open pit fires, campfires, commercial ovens, and outdoor BBQs."
    ],
    warranty: "3 months against manufacturing defects.",
    dimensionsNote: "Due to the size of this masterwork piece, dimensions may vary slightly depending on the organic shape of the block stone.",
    category: "grills"
  },
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
      "/products/cookware-set-2-3-4/Conjunto-duas-panelas-de-pedra-sabao-com-panela-de-pressao_f950eeee-b502-487e-b02e-a350eee69be0.jpg",
      "/products/cookware-set-2-3-4/panela-de-2-litros-de-pedra-sabao_3c118b87-763e-4ca1-a464-ed1c70f8e8ae.jpg",
      "/products/cookware-set-2-3-4/panela-de-pedra-3-litros-lll_f28ab87a-b3e6-4817-be5a-9e1f972b91f4.jpg",
      "/products/cookware-set-2-3-4/Panela-de-pressao-de-pedra-4-litros-frente_1bfca15c-cbfa-4461-a7c9-c3b15e1b8a4a.jpg"
    ]
  }
];
