type CatalogItem = {
  id: number;
  imageUri: string;
  title: string;
  description: string;
  price: number;
  info: string;
  whatIsInTheBox: string[];
  morePhotos: string[];
};

export const catalogItems: CatalogItem[] = [
  {
    id: 1,
    imageUri:
      "/images/coffee-machine/barista-express/barista-express-1-steel.png",
    title: "the Barista Express",
    description:
      "The best-selling, home espresso machine, with a built-in grinder",
    price: 798,
    info: "One of the world’s popular and well-recommended espresso machines for home use, the Barista Express is perfect for anyone wanting to get into coffee.This semi-automatic machine balances simplicity and flexibility. With automated, low pressure pre-infusion and shot timers, you can pull espresso at just the press of a button. Hone your skills tamping, and experimenting with various beans, doses and grind sizes.With an in-built grinder and steam wand, this all-in-one setup is all you need is freshly roasted coffee beans and a weighing scale, to take your espresso to the next level and make cafe-level, specialty coffee at home.",
    whatIsInTheBox: [
      "54mm Portafilter, stainless steel with double spout",
      "4 Espresso Filter Baskets – 9g & 18g pressurised, 9g & 18g unpressurised",
      "Integrated, Magnetic Tamper",
      "480ml (16oz) Thermal Milk Jug",
      "Dosing Funnel",
      "Leveling Tool",
      "Water Filter",
      "Maintenance Kit – cleaning brush, Allen key, cleaning disc, steam wand pin",
      "1 Descaling Dose, and 2 Cleaning Tablets",
    ],
    morePhotos: [
      "/images/coffee-machine/barista-express/barista-express-2-steel-black.png",
      "/images/coffee-machine/barista-express/barista-express-3-steel.png",
      "/images/coffee-machine/barista-express/barista-express-4-steel.png",
      "/images/coffee-machine/barista-express/barista-express-5-acc.png",
    ],
  },
  {
    id: 2,
    imageUri: "/images/coffee-machine/bambino/bambino-1.png",
    title: "the Bambino",
    description: "The best value for money, standalone espresso machine",
    price: 498,
    info: "The Breville Bambino is one of the best, entry-level espresso machines to brew café, specialty coffee from home. With its small, compact profile, the Bambino is perfect for budding enthusiasts, letting you step up and pair this with a grinder of your choice. Compared to the Bambino Plus, this has a fully manual steam wand, letting you to practice and hone your milk steaming, and impress guests with your latte art.",
    whatIsInTheBox: [
      "54mm Portafilter, with double spout",
      "4 Espresso Filter Baskets – 9g & 18g pressurised, 9g & 18g unpressurised",
      "54mm Plastic Tamper",
      "480ml (16oz) Thermal Milk Jug",
      "Maintenance Kit – cleaning disc, steam wand pin",
      "1 Descaling Dose",
    ],
    morePhotos: [
      "/images/coffee-machine/bambino/bambino-2.png",
      "/images/coffee-machine/bambino/bambino-3.png",
      "/images/coffee-machine/bambino/bambino-4.png",
      "/images/coffee-machine/barista-express/barista-express-5-acc.png",
    ],
  },
  {
    id: 3,
    imageUri: "/images/coffee-machine/bambino-plus/bambino-plus-1.png",
    title: "the Bambino Plus",
    description: "Everything in the Bambino, plus automatic milk frothing",
    price: 598,
    info: "The Breville Bambino is already one of the best, entry-level espresso machines to brew café, specialty coffee from home. The Bambino Plus takes that even further, giving you more simplicity with automatic milk frothing, to elevate your lattes and cappuccinos. With its small, compact profile, the Bambino Plus is perfect for budding enthusiasts, letting you step up and pair this with a grinder of your choice.",
    whatIsInTheBox: [
      "54mm Portafilter, with double spout",
      "4 Espresso Filter Baskets – 9g & 18g pressurised, 9g & 18g unpressurised",
      "54mm Tamper",
      "480ml (16oz) Thermal Milk Jug",
      "Leveling Tool",
      "Maintenance Kit – cleaning disc, steam wand pin",
      "1 Descaling Dose, and 2 Cleaning Tablets",
    ],
    morePhotos: [
      "/images/coffee-machine/bambino-plus/bambino-plus-2.png",
      "/images/coffee-machine/bambino-plus/bambino-plus-3.png",
      "/images/coffee-machine/bambino-plus/bambino-plus-4.png",
      "/images/coffee-machine/barista-express/barista-express-5-acc.png",
    ],
  },
  {
    id: 4,
    imageUri: "/images/coffee-machine/oracle-touch/oracle-touch-1.png",
    title: "the Oracle Touch",
    description:
      "Top of the line Dual Boiler performance with touch screen usability.",
    price: 3988,
    info: "The Oracle Touch is the pinnacle of Breville’s espresso machines. This semi-automatic machine balances simplicity and flexibility. With automated, low pressure pre-infusion and shot timers, you can pull espresso at just the press of a button. Hone your skills tamping, and experimenting with various beans, doses and grind sizes. With an in-built grinder and steam wand, this all-in-one setup is all you need is freshly roasted coffee beans and a weighing scale, to take your espresso to the next level and make cafe-level, specialty coffee at home.",
    whatIsInTheBox: [
      "58mm Portafilter, stainless steel with double spout",
      "2 Espresso Filter Baskets – 9g & 18g unpressurised",
      "Integrated, Magnetic Tamper",
      "480ml (16oz) Thermal Milk Jug",
      "Dosing Funnel",
      "Leveling Tool",
      "Knock Box",
      "Water Filter",
      "Maintenance Kit – cleaning brushes, Allen keys, cleaning disc, steam wand pin",
      "1 Descaling Dose, Steam Wand Cleaner and 2 Cleaning Tablets",
    ],
    morePhotos: [
      "/images/coffee-machine/oracle-touch/oracle-touch-2.png",
      "/images/coffee-machine/oracle-touch/oracle-touch-3.png",
      "/images/coffee-machine/oracle-touch/oracle-touch-4.png",
      "/images/coffee-machine/barista-express/barista-express-5-acc.png",
    ],
  },
];
