export type MenuCategory =
  | "pizza"
  | "burger"
  | "broast"
  | "starters"
  | "drinks"
  | "desserts";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  ingredients?: string[];
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
}

export interface Deal {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  badge?: string;
}

export interface SignaturePizza {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  image: string;
  tag?: string;
}

export const pizzaSizes = [
  { id: "small", label: "Small", price: 550 },
  { id: "regular", label: "Regular", price: 1200 },
  { id: "large", label: "Large", price: 1650 },
  { id: "xlarge", label: "X-Large", price: 2300 },
] as const;

export const crustOptions = [
  { id: "classic", label: "Classic Crust", price: 0 },
  { id: "cheese", label: "Cheese Crust", price: 199 },
  { id: "kabab", label: "Kabab Crust", price: 199 },
] as const;

export const toppingOptions = [
  { id: "chicken", label: "Extra Chicken", price: 200 },
  { id: "cheese", label: "Extra Cheese", price: 200 },
  { id: "jalapeno", label: "Jalapeño", price: 100 },
  { id: "mushroom", label: "Mushroom", price: 100 },
  { id: "olives", label: "Olives", price: 100 },
  { id: "capsicum", label: "Capsicum", price: 80 },
] as const;

// Confirmed working pizza photo IDs from Unsplash
const P1 = "https://images.unsplash.com/photo-1513104890138-7c749659a591"; // classic round pizza
const P2 = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"; // pizza with herbs
const P3 = "https://images.unsplash.com/photo-1574071318508-1cdbab80b002"; // pizza slice pull

export const signaturePizzas: SignaturePizza[] = [
  {
    id: "oresto-special",
    name: "O'Resto Special",
    ingredients:
      "Chicken tikka, malai chicken, olives, mushrooms, jalapeño, sweet corn & malai sauce",
    price: 1200,
    image: `${P1}?w=600&q=80`,
    tag: "Bestseller",
  },
  {
    id: "creamy-melt",
    name: "Creamy Melt",
    ingredients:
      "Garlic sauce base, special chicken, onion, capsicum & creamy sauce drizzle",
    price: 1200,
    image: `${P2}?w=600&q=80`,
    tag: "Chef's Pick",
  },
  {
    id: "chicken-fajita",
    name: "Chicken Fajita",
    ingredients: "Spicy fajita chicken, onion, capsicum & melted cheese",
    price: 1200,
    image: `${P3}?w=600&q=80`,
    tag: "Spicy",
  },
  {
    id: "chicken-supreme",
    name: "Chicken Supreme",
    ingredients: "Chicken tikka, olives, mushroom, capsicum, onion & tomato",
    price: 1200,
    image: `${P1}?w=600&q=80`,
  },
  {
    id: "malai-boti",
    name: "Malai Boti",
    ingredients: "Malai sauce base & top, malai chicken, onion & jalapeño",
    price: 1200,
    image: `${P2}?w=600&q=80`,
    tag: "Premium",
  },
  {
    id: "peri-peri",
    name: "Peri Peri",
    ingredients: "Peri peri sauce, peri peri chicken, capsicum & onion",
    price: 1200,
    image: `${P3}?w=600&q=80`,
    tag: "Fiery",
  },
];

export const valueDeals: Deal[] = [
  {
    id: "regular-deal",
    name: "Regular Deal",
    description: "1 Zinger Burger + Regular Fries + Regular Drink",
    price: 700,
    originalPrice: 950,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
    badge: "Save Rs. 250",
  },
  {
    id: "double-deal",
    name: "Double Deal",
    description: "2 Zinger Burgers + Regular Drink",
    price: 850,
    originalPrice: 1100,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    badge: "Save Rs. 250",
  },
  {
    id: "hunger-deal",
    name: "Hunger Deal",
    description: "1 Mighty Thunder Burger + Regular Fries + Regular Drink",
    price: 880,
    originalPrice: 1150,
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    badge: "Save Rs. 270",
  },
  {
    id: "elite-family",
    name: "Elite Family",
    description:
      "2 Large Pizzas + 10 Nuggets + Half Broast + Large Fries + 2 Dips + 1.5L Drink",
    price: 4250,
    originalPrice: 5200,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    badge: "Family Feast",
  },
  {
    id: "supreme-family",
    name: "Supreme Family",
    description:
      "2 X-Large Pizzas + Full Broast + 10 Nuggets + Large Fries + 2 Dips + 1.5L Drink",
    price: 4550,
    originalPrice: 5800,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80b002?w=600&q=80",
    badge: "Ultimate Value",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "p1",
    name: "O'Resto Special",
    description: "Our signature loaded pizza with premium toppings",
    price: 1200,
    category: "pizza",
    image: `${P1}?w=500&q=80`,
    ingredients: ["Chicken tikka", "Malai chicken", "Olives", "Mushrooms", "Jalapeño"],
    popular: true,
  },
  {
    id: "p2",
    name: "Creamy Melt",
    description: "Garlic base with creamy sauce drizzle",
    price: 1200,
    category: "pizza",
    image: `${P2}?w=500&q=80`,
    popular: true,
  },
  {
    id: "p3",
    name: "Chicken Fajita",
    description: "Spicy fajita chicken with peppers",
    price: 1200,
    category: "pizza",
    image: `${P3}?w=500&q=80`,
    spicy: true,
  },
  {
    id: "p4",
    name: "Malai Boti",
    description: "Creamy malai sauce with tender boti",
    price: 1200,
    category: "pizza",
    image: `${P1}?w=500&q=80`,
  },
  {
    id: "p5",
    name: "Peri Peri",
    description: "Fiery peri peri chicken pizza",
    price: 1200,
    category: "pizza",
    image: `${P2}?w=500&q=80`,
    spicy: true,
  },
  {
    id: "p6",
    name: "Chicken Supreme",
    description: "Loaded supreme chicken toppings",
    price: 1200,
    category: "pizza",
    image: `${P3}?w=500&q=80`,
  },
  {
    id: "p7",
    name: "Behari Kabab",
    description: "Smoky behari kabab with malai drizzle",
    price: 1200,
    category: "pizza",
    image: `${P1}?w=500&q=80`,
  },
  {
    id: "p8",
    name: "Very Veggie",
    description: "Garden fresh vegetables, no chicken",
    price: 1200,
    category: "pizza",
    image: `${P2}?w=500&q=80`,
    vegetarian: true,
  },
  {
    id: "b1",
    name: "Zinger Burger",
    description: "Crispy zinger fillet with signature sauce",
    price: 450,
    category: "burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
    popular: true,
  },
  {
    id: "b2",
    name: "Mighty Thunder",
    description: "Double patty beast burger",
    price: 650,
    category: "burger",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80",
    popular: true,
  },
  {
    id: "b3",
    name: "Patty Burger",
    description: "Classic beef patty burger",
    price: 350,
    category: "burger",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80",
  },
  {
    id: "b4",
    name: "O'Resto Special Wrap",
    description: "Grilled chicken wrap with fresh veggies",
    price: 480,
    category: "burger",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=80",
  },
  {
    id: "br1",
    name: "Quarter Spicy Broast",
    description: "2 leg/thigh + bun + fries + dips + drink",
    price: 750,
    category: "broast",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80",
    spicy: true,
  },
  {
    id: "br2",
    name: "Half Spicy Broast",
    description: "4 pieces + buns + fries + dips + drinks",
    price: 1199,
    category: "broast",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80",
    popular: true,
    spicy: true,
  },
  {
    id: "br3",
    name: "Full Spicy Broast",
    description: "8 pieces feast with all sides",
    price: 2350,
    category: "broast",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80",
    spicy: true,
  },
  {
    id: "s1",
    name: "Chicken Strips",
    description: "Crispy golden chicken strips",
    price: 380,
    category: "starters",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80",
  },
  {
    id: "s2",
    name: "Cheese Sticks",
    description: "Melty mozzarella cheese sticks",
    price: 350,
    category: "starters",
    image:
      "https://images.unsplash.com/photo-1573080496219-bf080d1e5194?w=500&q=80",
    vegetarian: true,
  },
  {
    id: "s3",
    name: "Oven Baked Wings",
    description: "Juicy wings with your choice of sauce",
    price: 450,
    category: "starters",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80",
  },
  {
    id: "s4",
    name: "Loaded Fries",
    description: "Fries topped with chicken & cheese",
    price: 420,
    category: "starters",
    image:
      "https://images.unsplash.com/photo-1573080496219-bf080d1e5194?w=500&q=80",
  },
  // ── ICE SHAKES ──
  {
    id: "d1",
    name: "Oreo Shake",
    description: "Thick creamy Oreo ice shake",
    price: 500,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80",
    popular: true,
  },
  {
    id: "d2",
    name: "Vanilla Shake",
    description: "Classic smooth vanilla ice shake",
    price: 500,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80",
  },
  {
    id: "d3",
    name: "Coffee Shake",
    description: "Rich coffee blended ice shake",
    price: 500,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80",
  },
  {
    id: "d4",
    name: "Chocolate Shake",
    description: "Decadent chocolate ice shake",
    price: 500,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80",
    popular: true,
  },
  {
    id: "d5",
    name: "Pistachio Shake",
    description: "Rich pistachio flavoured ice shake",
    price: 500,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80",
  },
  {
    id: "d6",
    name: "Praline Shake",
    description: "Nutty caramelised praline ice shake",
    price: 500,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80",
  },
  {
    id: "d7",
    name: "Caramel Shake",
    description: "Smooth buttery caramel ice shake",
    price: 500,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80",
  },
  {
    id: "d8",
    name: "Kulfa Shake",
    description: "Traditional kulfa flavoured ice shake",
    price: 500,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80",
  },
  {
    id: "d9",
    name: "Mango Shake",
    description: "Fresh tropical mango ice shake",
    price: 500,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80",
    popular: true,
  },
  {
    id: "d10",
    name: "O'Resto Special Shake",
    description: "Our signature house special ice shake",
    price: 550,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80",
    popular: true,
  },
  {
    id: "d11",
    name: "Iced Coffee",
    description: "Cold brew iced coffee",
    price: 550,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80",
  },
  {
    id: "d12",
    name: "Iced Chocolate",
    description: "Chilled rich chocolate drink",
    price: 550,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80",
  },
  {
    id: "d13",
    name: "Iced Caramel Latte",
    description: "Espresso with caramel over ice",
    price: 550,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80",
  },
  // ── TEA & COFFEE ──
  {
    id: "d14",
    name: "Cardamom Tea",
    description: "Aromatic desi cardamom chai",
    price: 200,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80",
  },
  {
    id: "d15",
    name: "Latte",
    description: "Smooth creamy coffee latte",
    price: 250,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80",
  },
  {
    id: "d16",
    name: "Coffee",
    description: "Freshly brewed hot coffee",
    price: 350,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80",
  },
  // ── LIME ──
  {
    id: "d17",
    name: "Fresh Lime",
    description: "Freshly squeezed chilled lime",
    price: 200,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80",
  },
  {
    id: "d18",
    name: "Sting Lime",
    description: "Zesty lime with a sting kick",
    price: 200,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80",
  },
  {
    id: "d19",
    name: "Dew Lime",
    description: "Refreshing dew-infused lime drink",
    price: 200,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80",
  },
  // ── MARGARITA ──
  {
    id: "d20",
    name: "Mint Margarita",
    description: "Cool refreshing mint margarita",
    price: 220,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80",
    popular: true,
  },
  {
    id: "d21",
    name: "Pineapple Margarita",
    description: "Tropical sweet pineapple margarita",
    price: 220,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80",
  },
  {
    id: "d22",
    name: "Strawberry Margarita",
    description: "Sweet fruity strawberry margarita",
    price: 220,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80",
  },
  {
    id: "ds1",
    name: "Molten Lava Cake",
    description: "Warm chocolate cake with molten center",
    price: 350,
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80",
    popular: true,
  },
  {
    id: "ds2",
    name: "Brownie with Ice Cream",
    description: "Fudgy brownie with vanilla scoop",
    price: 300,
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1564355808539-22bbd35fc2f8?w=400&q=80",
  },
  {
    id: "ds3",
    name: "Ice Cream",
    description: "Classic creamy ice cream scoop",
    price: 250,
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
    vegetarian: true,
  },
];

export const categories = [
  {
    id: "pizza",
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
    count: 17,
  },
  {
    id: "burger",
    name: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
    count: 8,
  },
  {
    id: "broast",
    name: "Broast",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80",
    count: 3,
  },
  {
    id: "drinks",
    name: "Drinks",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80",
    count: 22,
  },
  {
    id: "desserts",
    name: "Desserts",
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&q=80",
    count: 3,
  },
  {
    id: "deals",
    name: "Value Deals",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80",
    count: 5,
  },
];

export const categoryTabs: { id: MenuCategory; label: string }[] = [
  { id: "pizza", label: "Pizza" },
  { id: "burger", label: "Burger" },
  { id: "broast", label: "Broast" },
  { id: "starters", label: "Starters" },
  { id: "drinks", label: "Drinks" },
  { id: "desserts", label: "Desserts" },
];

export const aiRecommendations: Record<
  string,
  { items: string[]; message: string }
> = {
  spicy: {
    items: ["Chicken Fajita", "Peri Peri", "Half Spicy Broast"],
    message: "Turn up the heat! These fiery favorites are made for spice lovers.",
  },
  cheesy: {
    items: ["Creamy Melt", "Cheese Sticks", "O'Resto Special"],
    message: "Cheese pull goals! These melty masterpieces won't disappoint.",
  },
  family: {
    items: ["Elite Family Deal", "Supreme Family Deal", "Full Spicy Broast"],
    message: "Feed the whole crew with these generous family feasts.",
  },
  quick: {
    items: ["Regular Deal", "Zinger Burger", "Double Deal"],
    message: "Need it fast? These quick bites are ready in minutes.",
  },
  sweet: {
    items: ["Oreo Shake", "Molten Lava Cake", "Pistachio Shake"],
    message: "Sweet tooth activated! Indulge in these decadent treats.",
  },
  healthy: {
    items: ["Very Veggie Pizza", "O'Resto Special Wrap", "Lime Margarita"],
    message: "Lighter options that still pack incredible flavor.",
  },
  default: {
    items: ["O'Resto Special", "Mighty Thunder", "Elite Family Deal"],
    message: "Our top picks that customers can't stop ordering!",
  },
};
