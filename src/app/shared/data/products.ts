export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  badgeText?: string;
  priceNum: number;
  images?: string[];
  ingredients?: string[];
  deliveryInfo?: string;
  flavors?: string[];
  weights?: { label: string; priceMultiplier: number }[];
}

export const PRODUCTS: Product[] = [
  {
    id: "signature-belgian-fudge",
    name: "Signature Belgian Fudge",
    price: "$39",
    originalPrice: "$55",
    image: "/cakes/Decadent%20Triple%20Chocolate%20Cake%20Recipe_%20Rich,%20Moist,%20and%20Irresistible!%20_%20Food%20&%20Recipes.jpg",
    description: "Layers of rich moist chocolate fudge cake filled and coated with smooth premium Belgian chocolate ganache. Handcrafted to chocolate perfection.",
    rating: 4.9,
    reviewCount: 182,
    badgeText: "Top Classic",
    priceNum: 39,
    images: [
      "/cakes/Decadent%20Triple%20Chocolate%20Cake%20Recipe_%20Rich,%20Moist,%20and%20Irresistible!%20_%20Food%20&%20Recipes.jpg",
      "/cakes/download%20(2).jpg",
      "/cakes/chocolate%20pumpkin%20cake%20with%20caramel%20buttercream%20for%20thanksgiving%20chocolate%20cake%20cake%20foo.jpg"
    ],
    ingredients: ["Belgian Dark Chocolate (54% Cocoa)", "Organic Cocoa Powder", "Fresh Dairy Cream", "Unsalted Butter", "Pure Cane Sugar", "Farm-fresh Eggs", "Organic Flour"],
    flavors: ["Signature Cocoa", "Double Dark Ganache", "Salted Caramel Fusion"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.4 },
      { label: "2.0 kg", priceMultiplier: 1.8 }
    ],
    deliveryInfo: "Baked fresh to order. Shipped in temperature-controlled insulating box with dry-ice packs. Best consumed within 3 days. Store refrigerated."
  },
  {
    id: "red-velvet-supreme",
    name: "Red Velvet Supreme",
    price: "$45",
    originalPrice: "$60",
    image: "/cakes/velvet%20cake.jpg",
    description: "Classic Southern red velvet layers filled and frosted with our signature light cream cheese frosting. Elegant, rich, and visually stunning.",
    rating: 4.8,
    reviewCount: 143,
    badgeText: "Top Classic",
    priceNum: 45,
    images: [
      "/cakes/velvet%20cake.jpg",
      "/cakes/🍓✨%20Red%20Velvet%20Strawberry%20Cheesecake%20✨🍰__Ingredients__For the Red Velvet Cake Layers___1 1_4 cups all-purpose flour_1_4 cup unsweetened cocoa powder_1 teaspoon baking soda_1_2 teaspoon salt_1_2 cup unsalted butter.jpg",
      "/cakes/download%20(4).jpg"
    ],
    ingredients: ["Premium Cocoa Powder", "Organic Beetroot Extract (for natural color)", "Tahitian Vanilla Bean", "Philadelphia Cream Cheese", "Buttermilk", "Organic Wheat Flour"],
    flavors: ["Classic Cream Cheese", "Strawberry swirl core", "White Chocolate Glaze"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.35 },
      { label: "2.0 kg", priceMultiplier: 1.75 }
    ],
    deliveryInfo: "Delivered fresh via cold-chain courier next-day. Store in a cool refrigerator. Best served at room temperature (let stand for 20 minutes before serving)."
  },
  {
    id: "classic-strawberry-cream",
    name: "Classic Strawberry Cream",
    price: "$35",
    originalPrice: "$48",
    image: "/cakes/Strawberry%20cake%20PNG_%20Fresh,%20sweet%20&%20ready%20to%20download!.jpg",
    description: "Light vanilla sponge cake layered with fresh handpicked strawberries and clouds of whipped cream. A sweet strawberry dream.",
    rating: 4.7,
    reviewCount: 95,
    badgeText: "Top Classic",
    priceNum: 35,
    images: [
      "/cakes/Strawberry%20cake%20PNG_%20Fresh,%20sweet%20&%20ready%20to%20download!.jpg",
      "/cakes/CASTLE101%20⚜️%20Ice%20Cream%20💖.jpg",
      "/cakes/download%20(4).jpg"
    ],
    ingredients: ["Fresh Strawberries", "Organic Vanilla Sponge", "Premium Pastry Cream", "Pure Whipping Cream", "Caster Sugar", "Fresh Whole Eggs"],
    flavors: ["Whipped Strawberry Cream", "Zesty Lemon Berry", "Custard strawberry layer"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.4 },
      { label: "2.0 kg", priceMultiplier: 1.8 }
    ],
    deliveryInfo: "Baking starts at 4 AM daily. Hand-delivered in clean protective boxes by our custom bakery transit team. Keep refrigerated and consume within 48 hours."
  },
  {
    id: "decadent-caramel-cheesecake",
    name: "Decadent Caramel Cheesecake",
    price: "$42",
    originalPrice: "$50",
    image: "/cakes/Decadent%20Caramel%20Cake%20🍰✨.jpg",
    description: "Rich and creamy cheesecake topped with a generous layer of house-made golden caramel sauce and toasted pecans.",
    rating: 4.9,
    reviewCount: 120,
    badgeText: "Best Seller",
    priceNum: 42,
    images: [
      "/cakes/Decadent%20Caramel%20Cake%20🍰✨.jpg",
      "/cakes/Indulge%20in%20the%20rich,%20creamy%20delight%20of%20this%20Caramel%20Cheesecake,%20topped%20with%20luscious%20caramel%20and%20a%20buttery%20graham%20cracker%20crust!%20🍰✨%20%20Ingredients_%20-%201%20cup%20granulated%20sugar%20(200%20grams)%20-%206%20tablespoons%20unsalted%20butte.jpg"
    ],
    ingredients: ["Graham Cracker Crust", "Premium Cream Cheese", "Salted Butter Fudge", "Brown Sugar Caramel", "Sour Cream", "Roasted Pecan Crumbs"],
    flavors: ["Salted Caramel Cream", "Vanilla Bean Caramel"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.4 }
    ],
    deliveryInfo: "Ships chilled inside our signature golden cake box. Keeps fresh in the freezer for up to 7 days. Serve cold."
  },
  {
    id: "classic-orange-sponge",
    name: "Classic Orange Sponge",
    price: "$28",
    originalPrice: "$35",
    image: "/cakes/Cake%20Orange.jpg",
    description: "Zesty and moist orange sponge cake infused with fresh citrus glaze and orange peel accents. Light, refreshing, and delicious.",
    rating: 4.6,
    reviewCount: 74,
    priceNum: 28,
    images: ["/cakes/Cake%20Orange.jpg", "/cakes/10%20Yellow%20Box%20Cake%20Recipes%20for%20Quick%20Creative%20Upgrades%20-%20Doughora.jpg"],
    ingredients: ["Fresh Orange Zest", "Orange Citrus Glaze", "Chiffon Cake Flour", "Organic Eggs", "Whipped Sweet Buttercream"],
    flavors: ["Orange Mandarin Cream", "Blood Orange Cardamom"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "2.0 kg", priceMultiplier: 1.7 }
    ],
    deliveryInfo: "Baked daily and shipped in eco-friendly protective packaging. Store in airtight container. Best enjoyed with a cup of warm tea."
  },
  {
    id: "boston-cream-pie-cheesecake",
    name: "Boston Cream Pie Cheesecake",
    price: "$48",
    originalPrice: "$58",
    image: "/cakes/Boston%20Cream%20Pie%20Cheesecake%20with%20Chocolate%20Ganache.jpg",
    description: "Silky custard cheesecake layered with soft sponge cake and covered in rich chocolate ganache. A luxury take on a timeless classic.",
    rating: 4.8,
    reviewCount: 112,
    badgeText: "Premium",
    priceNum: 48,
    images: [
      "/cakes/Boston%20Cream%20Pie%20Cheesecake%20with%20Chocolate%20Ganache.jpg",
      "/cakes/Chef%20Márcio%20Silva.jpg"
    ],
    ingredients: ["Custard Cream Base", "Dark Chocolate Glaze", "Pastry Cream Layers", "Graham Biscuit Crust", "Madagascar Vanilla Extract"],
    flavors: ["Classic Boston Custard", "Double Fudge Custard"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.4 },
      { label: "2.0 kg", priceMultiplier: 1.8 }
    ],
    deliveryInfo: "Chilled transport ensures the custard layers stay firm. Keep under refrigeration until ready to slice."
  },
  {
    id: "ice-cream-castle-cake",
    name: "Ice Cream Castle Cake",
    price: "$55",
    originalPrice: "$70",
    image: "/cakes/CASTLE101%20⚜️%20Ice%20Cream%20💖.jpg",
    description: "A magical ice cream cake featuring layered premium vanilla, strawberry, and chocolate gelatos. Crafted beautifully for kids and celebrations.",
    rating: 4.9,
    reviewCount: 85,
    badgeText: "Specialty",
    priceNum: 55,
    images: ["/cakes/CASTLE101%20⚜️%20Ice%20Cream%20💖.jpg", "/cakes/Neapolitan%20Ice%20Cream%20Cupcakes.jpg"],
    ingredients: ["Premium Vanilla Bean Gelato", "Fresh Strawberry Gelato", "Dark Chocolate gelato", "Soft Waffle base", "White Chocolate flakes"],
    flavors: ["Castle Neapolitan Classic", "Berry Mint Swirl"],
    weights: [
      { label: "1.5 kg", priceMultiplier: 1 },
      { label: "2.5 kg", priceMultiplier: 1.6 }
    ],
    deliveryInfo: "Shipped exclusively in deep-freeze insulation with dry-ice pellets. Must be placed in the freezer immediately upon arrival. Take out 10 minutes before cutting."
  },
  {
    id: "neapolitan-ice-cream-cupcakes",
    name: "Neapolitan Ice Cream Cupcakes",
    price: "$24",
    originalPrice: "$30",
    image: "/cakes/Neapolitan%20Ice%20Cream%20Cupcakes.jpg",
    description: "Delightful mini cupcakes featuring layered chocolate, strawberry, and vanilla frosting flavors. A colorful box of joy.",
    rating: 4.7,
    reviewCount: 63,
    priceNum: 24,
    images: ["/cakes/Neapolitan%20Ice%20Cream%20Cupcakes.jpg"],
    ingredients: ["Chocolate Chiffon cake", "Vanilla buttercream", "Strawberry buttercream", "Confetti sprinkles", "Fresh cream"],
    flavors: ["Assorted Box of 6", "Assorted Box of 12"],
    weights: [
      { label: "6 pieces", priceMultiplier: 1 },
      { label: "12 pieces", priceMultiplier: 1.8 }
    ],
    deliveryInfo: "Delivered in customized cupcake safety boxes to ensure frosting stays beautiful during transit. Keep chilled."
  },
  {
    id: "caramel-delight-cheesecake",
    name: "Caramel Delight Cheesecake",
    price: "$46",
    originalPrice: "$55",
    image: "/cakes/Indulge%20in%20the%20rich,%20creamy%20delight%20of%20this%20Caramel%20Cheesecake,%20topped%20with%20luscious%20caramel%20and%20a%20buttery%20graham%20cracker%20crust!%20🍰✨%20%20Ingredients_%20-%201%20cup%20granulated%20sugar%20(200%20grams)%20-%206%20tablespoons%20unsalted%20butte.jpg",
    description: "Rich cream cheese base over graham cracker crust, topped with buttery premium caramel layers and rock salt flakes.",
    rating: 4.9,
    reviewCount: 210,
    badgeText: "Best Seller",
    priceNum: 46,
    images: [
      "/cakes/Indulge%20in%20the%20rich,%20creamy%20delight%20of%20this%20Caramel%20Cheesecake,%20topped%20with%20luscious%20caramel%20and%20a%20buttery%20graham%20cracker%20crust!%20🍰✨%20%20Ingredients_%20-%201%20cup%20granulated%20sugar%20(200%20grams)%20-%206%20tablespoons%20unsalted%20butte.jpg",
      "/cakes/Decadent%20Caramel%20Cake%20🍰✨.jpg"
    ],
    ingredients: ["Pure Cream Cheese", "Graham Cracker Biscuit Crumbs", "Unsalted French Butter", "Organic Sugarcane Caramel", "Himalayan Pink Rock Salt"],
    flavors: ["Classic Salted Caramel", "Pecan Crunch Caramel"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.4 },
      { label: "2.0 kg", priceMultiplier: 1.8 }
    ],
    deliveryInfo: "Ships chilled inside our premium insulated thermal carriers. Keeps beautifully fresh in cold storage for 5-7 days."
  },
  {
    id: "red-velvet-strawberry-cheesecake",
    name: "Red Velvet Strawberry Cheesecake",
    price: "$49",
    originalPrice: "$65",
    image: "/cakes/🍓✨%20Red%20Velvet%20Strawberry%20Cheesecake%20%20🍰__Ingredients__For the Red Velvet Cake Layers___1 1_4 cups all-purpose flour_1_4 cup unsweetened cocoa powder_1 teaspoon baking soda_1_2 teaspoon salt_1_2 cup unsalted butter.jpg",
    description: "Double-layer chocolate cocoa red velvet cake combined with creamy strawberry-infused cheesecake. A delicious fusion of texture and flavor.",
    rating: 4.9,
    reviewCount: 312,
    badgeText: "Signature",
    priceNum: 49,
    images: [
      "/cakes/🍓✨%20Red%20Velvet%20Strawberry%20Cheesecake%20%20🍰__Ingredients__For the Red Velvet Cake Layers___1 1_4 cups all-purpose flour_1_4 cup unsweetened cocoa powder_1 teaspoon baking soda_1_2 teaspoon salt_1_2 cup unsalted butter.jpg",
      "/cakes/velvet%20cake.jpg",
      "/cakes/Strawberry%20cake%20PNG_%20Fresh,%20sweet%20&%20ready%20to%20download!.jpg"
    ],
    ingredients: ["Organic Red Velvet Sponge", "Strawberry puree cream", "Full-fat Cream Cheese", "Cocoa Butter", "White Chocolate curls"],
    flavors: ["Signature Red Velvet Strawberry", "Chocolate Berry Fusion"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.4 },
      { label: "2.0 kg", priceMultiplier: 1.8 }
    ],
    deliveryInfo: "Bespoke packaging includes cold gelpacks. Delivers within 24 hours of baking. Keep refrigerated."
  },
  {
    id: "golden-box-sponge-cake",
    name: "Golden Box Sponge Cake",
    price: "$29",
    originalPrice: "$38",
    image: "/cakes/10%20Yellow%20Box%20Cake%20Recipes%20for%20Quick%20Creative%20Upgrades%20-%20Doughora.jpg",
    description: "Quick upgrade classic yellow sponge cake with sweet cream frosting and vanilla glaze. Comfort food elevated.",
    rating: 4.5,
    reviewCount: 52,
    priceNum: 29,
    images: ["/cakes/10%20Yellow%20Box%20Cake%20Recipes%20for%20Quick%20Creative%20Upgrades%20-%20Doughora.jpg", "/cakes/5%20Easy%20Cake%20Recipes%20You%20Need%20to%20Try%20Right%20Now.jpg"],
    ingredients: ["Rich Yellow Chiffon Flour", "Sweet cream icing", "Madagascar Vanilla Glaze", "Pastry Butter", "Egg yolks"],
    flavors: ["Golden Butter Vanilla", "Custard Chiffon Cream"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.4 }
    ],
    deliveryInfo: "Delivered in a protective golden box. Best consumed at room temperature with butter tea or dark roast coffee."
  },
  {
    id: "easy-homemade-vanilla-cake",
    name: "Easy Homemade Vanilla Cake",
    price: "$26",
    originalPrice: "$32",
    image: "/cakes/5%20Easy%20Cake%20Recipes%20You%20Need%20to%20Try%20Right%20Now.jpg",
    description: "Soft, fluffy, and simple vanilla crumb cake topped with pastel buttercream frosting and festive sprinkles.",
    rating: 4.4,
    reviewCount: 38,
    priceNum: 26,
    images: ["/cakes/5%20Easy%20Cake%20Recipes%20You%20Need%20to%20Try%20Right%20Now.jpg", "/cakes/10%20Yellow%20Box%20Cake%20Recipes%20for%20Quick%20Creative%20Upgrades%20-%20Doughora.jpg"],
    ingredients: ["Organic Vanilla Bean paste", "Confectioner sugar buttercream", "Fluffy cake flour", "Buttercream swirls", "Whole milk"],
    flavors: ["Homemade Classic Vanilla", "Vanilla Raspberry Swirl"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.4 }
    ],
    deliveryInfo: "Standard shipping in biodegradable boxes. Best served fresh, store in airtight container at room temperature."
  },
  {
    id: "chefs-chocolate-mousse-cake",
    name: "Chef's Chocolate Mousse Cake",
    price: "$52",
    originalPrice: "$65",
    image: "/cakes/Chef%20Márcio%20Silva.jpg",
    description: "Artisanal triple layered chocolate mousse cake created by our executive pastry chef. Intense, velvety, and luxurious.",
    rating: 4.9,
    reviewCount: 160,
    badgeText: "Chef Special",
    priceNum: 52,
    images: [
      "/cakes/Chef%20Márcio%20Silva.jpg",
      "/cakes/Decadent%20Triple%20Chocolate%20Cake%20Recipe_%20Rich,%20Moist,%20and%20Irresistible!%20_%20Food%20&%20Recipes.jpg",
      "/cakes/download%20(2).jpg"
    ],
    ingredients: ["Belgian Dark Cocoa (70%)", "White Chocolate Mousse", "Milk Chocolate Whipped Ganache", "Gelatine sheets", "Organic Heavy Cream"],
    flavors: ["Chef Marcio's Triple Chocolate", "Espresso Chocolate Mousse"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.4 },
      { label: "2.0 kg", priceMultiplier: 1.8 }
    ],
    deliveryInfo: "Special refrigerated delivery. Mousse is extremely delicate, must be stored in the coldest part of the refrigerator."
  },
  {
    id: "caramel-buttercream-pumpkin-cake",
    name: "Caramel Buttercream Pumpkin Cake",
    price: "$38",
    originalPrice: "$45",
    image: "/cakes/chocolate%20pumpkin%20cake%20with%20caramel%20buttercream%20for%20thanksgiving%20chocolate%20cake%20cake%20foo.jpg",
    description: "Rich chocolate pumpkin spice cake filled and coated with sweet caramel buttercream. Perfect autumn comfort cake.",
    rating: 4.8,
    reviewCount: 118,
    priceNum: 38,
    images: [
      "/cakes/chocolate%20pumpkin%20cake%20with%20caramel%20buttercream%20for%20thanksgiving%20chocolate%20cake%20cake%20foo.jpg",
      "/cakes/Decadent%20Caramel%20Cake%20🍰✨.jpg"
    ],
    ingredients: ["Organic Pumpkin Puree", "Nutmeg & Cinnamon Spices", "Cocoa powder", "Salted Caramel Buttercream", "Toasted pumpkin seeds"],
    flavors: ["Spiced Pumpkin Caramel", "Double Chocolate Pumpkin Fudge"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.4 },
      { label: "2.0 kg", priceMultiplier: 1.8 }
    ],
    deliveryInfo: "Baked fresh for Thanksgiving and seasonal orders. Shipped in premium airtight packages. Best served slightly warm."
  },
  {
    id: "sugar-free-fruity-dream",
    name: "Sugar-Free Fruity Dream",
    price: "$34",
    originalPrice: "$42",
    image: "/cakes/Need%20Sugar%20Free%20Desserts_%20What%20type%20and%20flavor%20of%20Sugar%20Free%20Desserts%20are%20you%20craving_%20What%20would%20you%20like%20to%20see%20us%20offer_.jpg",
    description: "Guilt-free dessert naturally sweetened with Stevia extract and decorated with vibrant fresh berries. Deliciously healthy.",
    rating: 4.6,
    reviewCount: 84,
    badgeText: "Sugar-Free",
    priceNum: 34,
    images: [
      "/cakes/Need%20Sugar%20Free%20Desserts_%20What%20type%20and%20flavor%20of%20Sugar%20Free%20Desserts%20are%20you%20craving_%20What%20would%20you%20like%20to%20see%20us%20offer_.jpg",
      "/cakes/Strawberry%20cake%20PNG_%20Fresh,%20sweet%20&%20ready%20to%20download!.jpg"
    ],
    ingredients: ["Organic Stevia Powder", "Almond Flour", "Sugar-Free Vanilla Glaze", "Fresh Blackberries & Strawberries", "Low-Fat Whipping Cream"],
    flavors: ["Berry Vanilla Sugar-Free", "Lemon Chiffon Sugar-Free"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.4 }
    ],
    deliveryInfo: "Made in a certified allergen-conscious kitchen. Ships chilled in clean eco-boxes. Keep stored in freezer or cold fridge."
  },
  {
    id: "premium-anniversary-cake",
    name: "Premium Anniversary Cake",
    price: "$59",
    originalPrice: "$75",
    image: "/cakes/Discover%20Stunning%20Cakes%20With%20Recipes%20for%20Every%20Occasion_.jpg",
    description: "Stunning double-layered cake designed for celebrations, decorated with handcrafted white chocolate flowers.",
    rating: 4.9,
    reviewCount: 140,
    badgeText: "Premium",
    priceNum: 59,
    images: [
      "/cakes/Discover%20Stunning%20Cakes%20With%20Recipes%20for%20Every%20Occasion_.jpg",
      "/cakes/Chef%20Márcio%20Silva.jpg",
      "/cakes/The%20Light%20of%20My%20Life.jpg"
    ],
    ingredients: ["Vanilla Velvet Cake", "Pistachio Praline frosting", "White Chocolate ganache", "Handmade sugar flowers", "Organic butter cream"],
    flavors: ["Celebration White Chocolate Pistachio", "Luxury Vanilla Cream"],
    weights: [
      { label: "1.5 kg", priceMultiplier: 1 },
      { label: "2.5 kg", priceMultiplier: 1.6 },
      { label: "3.5 kg", priceMultiplier: 2.2 }
    ],
    deliveryInfo: "Premium priority shipping with fragile markings. Deliveries scheduled directly with customer convenience. Keep cool."
  },
  {
    id: "chocolate-passion-drip",
    name: "Chocolate Passion Drip",
    price: "$44",
    originalPrice: "$55",
    image: "/cakes/Dessert%20Time%20(@DessertPassion)%20on%20X.jpg",
    description: "Irresistible chocolate cake with dark chocolate drip glaze, chocolate curls, and fresh berries. A visual chocolate masterpiece.",
    rating: 4.8,
    reviewCount: 92,
    priceNum: 44,
    images: ["/cakes/Dessert%20Time%20(@DessertPassion)%20on%20X.jpg", "/cakes/download%20(2).jpg"],
    ingredients: ["Gourmet Dark Chocolate (60%)", "Drip Chocolate frosting", "Fresh Raspberry decorations", "Grated chocolate curls", "Chiffon cake layers"],
    flavors: ["Dark Passion Drip", "Milk Chocolate Drip Delight"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.4 },
      { label: "2.0 kg", priceMultiplier: 1.8 }
    ],
    deliveryInfo: "Priority cold delivery. Glaze is delicate, avoid direct sunlight and store in refrigerator."
  },
  {
    id: "the-light-celebration-cake",
    name: "The Light Celebration Cake",
    price: "$32",
    originalPrice: "$40",
    image: "/cakes/The%20Light%20of%20My%20Life.jpg",
    description: "Moist light yellow chiffon cake layered with fresh vanilla custard and fluffy meringue. Simply celestial.",
    rating: 4.6,
    reviewCount: 50,
    priceNum: 32,
    images: ["/cakes/The%20Light%20of%20My%20Life.jpg", "/cakes/Discover%20Stunning%20Cakes%20With%20Recipes%20for%20Every%20Occasion_.jpg"],
    ingredients: ["Yellow Chiffon flour", "Light Custard cream", "Whipped meringue frosting", "Vanilla essence", "Pure Cane Sugar"],
    flavors: ["Celestial Vanilla Custard", "Lemon Meringue Twist"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.35 }
    ],
    deliveryInfo: "Shipped in protective box with cooling liners. Best consumed on day of delivery. Keep cool."
  },
  {
    id: "belgian-chocolate-gateau",
    name: "Belgian Chocolate Gateau",
    price: "$41",
    originalPrice: "$52",
    image: "/cakes/download%20(2).jpg",
    description: "Classic dark chocolate gateau layered with cherry compote and Belgian chocolate curls. A deep, decadent classic.",
    rating: 4.7,
    reviewCount: 105,
    priceNum: 41,
    images: ["/cakes/download%20(2).jpg", "/cakes/Chef%20Márcio%20Silva.jpg"],
    ingredients: ["Kirsch-soaked cherries", "Chocolate Gateau sponge", "Fresh Whipped Cream", "Belgian chocolate shavings", "Maraschino cherries"],
    flavors: ["Black Forest Gateau Style", "Triple Chocolate Gateau"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.4 },
      { label: "2.0 kg", priceMultiplier: 1.8 }
    ],
    deliveryInfo: "Bespoke boxed packaging. Refrigerate immediately upon delivery. Serve slightly chilled."
  },
  {
    id: "raspberry-white-chocolate",
    name: "Raspberry White Chocolate",
    price: "$43",
    originalPrice: "$54",
    image: "/cakes/download%20(4).jpg",
    description: "Sweet white chocolate cake layered with tart raspberry puree and premium vanilla cream. Perfect sweet and sour harmony.",
    rating: 4.8,
    reviewCount: 88,
    priceNum: 43,
    images: ["/cakes/download%20(4).jpg", "/cakes/🍓✨%20Red%20Velvet%20Strawberry%20Cheesecake%20%20🍰__Ingredients__For the Red Velvet Cake Layers___1 1_4 cups all-purpose flour_1_4 cup unsweetened cocoa powder_1 teaspoon baking soda_1_2 teaspoon salt_1_2 cup unsalted butter.jpg"],
    ingredients: ["Premium White Chocolate chips", "Fresh Raspberry compote", "Sponge Cake base", "Vanilla sweet pastry cream"],
    flavors: ["White Chocolate Raspberry", "White Chocolate Strawberry swirl"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.4 },
      { label: "2.0 kg", priceMultiplier: 1.8 }
    ],
    deliveryInfo: "Ships chilled with bubble lining to protect frosting detail. Consume within 48 hours."
  },
  {
    id: "hazelnut-praline-dream",
    name: "Hazelnut Praline Dream",
    price: "$47",
    originalPrice: "$58",
    image: "/cakes/download%20(5).jpg",
    description: "Fluffy hazelnut sponge layered with crunchy chocolate praline filling and rich hazelnut buttercream.",
    rating: 4.8,
    reviewCount: 135,
    priceNum: 47,
    images: ["/cakes/download%20(5).jpg", "/cakes/download%20(2).jpg"],
    ingredients: ["Roasted Ground Hazelnut Flour", "Chocolate Praline crunch", "Hazelnut Buttercream", "Milk chocolate shavings"],
    flavors: ["Gourmet Hazelnut Crunch", "Dark Chocolate Praline Swirl"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.4 },
      { label: "2.0 kg", priceMultiplier: 1.8 }
    ],
    deliveryInfo: "Cold dispatch inside our signature wooden box carriers. Keep cool. Excellent when paired with hazelnut espresso."
  },
  {
    id: "black-forest-classique",
    name: "Black Forest Classique",
    price: "$37",
    originalPrice: "$46",
    image: "/cakes/download%20(6).jpg",
    description: "Traditional Black Forest cake with layers of kirsch-soaked chocolate sponge, sweet cherries, and fresh cream.",
    rating: 4.7,
    reviewCount: 79,
    priceNum: 37,
    images: ["/cakes/download%20(6).jpg", "/cakes/download%20(2).jpg"],
    ingredients: ["German Kirsch Brandy", "Sweet Cherries", "Chocolate Sponge layers", "Freshly whipped cream", "Grated dark cocoa slabs"],
    flavors: ["Traditional Kirsch Black Forest", "Alcohol-Free Kid Friendly Forest"],
    weights: [
      { label: "1.0 kg", priceMultiplier: 1 },
      { label: "1.5 kg", priceMultiplier: 1.4 },
      { label: "2.0 kg", priceMultiplier: 1.8 }
    ],
    deliveryInfo: "Baked fresh to order. Shipped with cold pack lining. Consume within 3 days. Best served chilled."
  }
];
