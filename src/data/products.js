// Existing imports…
import Passion1 from "../assets/products/passion1.webp";
import Passion2 from "../assets/products/passion2.webp";
import Passion3 from "../assets/products/passion3.webp";
import Pineapple1 from "../assets/products/pineapple1.webp";
import Pineapple2 from "../assets/products/pineapple2.webp";
import Pineapple3 from "../assets/products/pineapple3.webp";
import Lemon1 from "../assets/products/lemon1.webp";
import Lemon2 from "../assets/products/lemon2.webp";
import Lemon3 from "../assets/products/lemon3.webp";
import Soursop1 from "../assets/products/soursop1.webp";
import Soursop2 from "../assets/products/soursop2.webp";
import Soursop3 from "../assets/products/soursop3.webp";
import Rose1 from "../assets/products/rose1.webp";
import Rose2 from "../assets/products/rose2.webp";
import Rose3 from "../assets/products/rose3.webp";
import PassionMint1 from "../assets/products/passionmint1.webp";
import PassionMint2 from "../assets/products/passionmint2.webp";
import PassionMint3 from "../assets/products/passionmint3.webp";

// NEW imports (3 per product) for items 7–20
import Blueberry1 from "../assets/products/blueberry1.webp";
import Blueberry2 from "../assets/products/blueberry2.webp";
import Blueberry3 from "../assets/products/blueberry3.webp";

import Strawberry1 from "../assets/products/strawberry1.webp";
import Strawberry2 from "../assets/products/strawberry2.webp";
import Strawberry3 from "../assets/products/strawberry3.webp";

import Mango1 from "../assets/products/mango1.webp";
import Mango2 from "../assets/products/mango2.webp";
import Mango3 from "../assets/products/mango3.webp";

import Peach1 from "../assets/products/peach1.webp";
import Peach2 from "../assets/products/peach2.webp";
import Peach3 from "../assets/products/peach3.webp";

import SlimRose1 from "../assets/products/slimrose1.webp";
import SlimRose2 from "../assets/products/slimrose2.webp";
import SlimRose3 from "../assets/products/slimrose3.webp";

import Cardamom1 from "../assets/products/cardamom1.webp";
import Cardamom2 from "../assets/products/cardamom2.webp";
import Cardamom3 from "../assets/products/cardamom3.webp";

import KesarChai1 from "../assets/products/kesar1.webp";
import KesarChai2 from "../assets/products/kesar2.webp";
import KesarChai3 from "../assets/products/kesar3.webp";

import ChaiMasala1 from "../assets/products/masala1.webp";
import ChaiMasala2 from "../assets/products/masala2.webp";
import ChaiMasala3 from "../assets/products/masala3.webp";

import ChaiKarak1 from "../assets/products/karak1.webp";
import ChaiKarak2 from "../assets/products/karak2.webp";
import ChaiKarak3 from "../assets/products/karak3.webp";

import Energy1 from "../assets/products/energy1.webp";
import Energy2 from "../assets/products/energy2.webp";
import Energy3 from "../assets/products/energy3.webp";

import MoroccanMint1 from "../assets/products/moroccanmint1.webp";
import MoroccanMint2 from "../assets/products/moroccanmint2.webp";
import MoroccanMint3 from "../assets/products/moroccanmint3.webp";

import GreenTea1 from "../assets/products/green1.webp";
import GreenTea2 from "../assets/products/green2.webp";
import GreenTea3 from "../assets/products/green3.webp";

import Chocolate1 from "../assets/products/chocolate1.webp";
import Chocolate2 from "../assets/products/chocolate2.webp";
import Chocolate3 from "../assets/products/chocolate3.webp";

import Caramel1 from "../assets/products/caramel1.webp";
import Caramel2 from "../assets/products/caramel2.webp";
import Caramel3 from "../assets/products/caramel3.webp";

export const products = [
  // Fruity
  {
    id: 1,
    slug: "passion-tea",
    name: "Passion Tea",
    description: "Black tea with passion flavour; vibrant & zesty.",
    category: "Fruity",
    price: 850,
    pkg: "100g",
    bestSeller: true,
    rating: 4.5,
    reviewCount: 127,
    ingredients: "Black Ceylon tea, natural passion fruit flavour",
    tags: ["fruity", "zesty", "vibrant"],
    images: [Passion1, Passion2, Passion3],
  },
  {
    id: 2,
    slug: "pineapple-tea",
    name: "Pineapple Tea",
    description: "Black tea with pineapple flavour/pieces; tropical & refreshing.",
    category: "Fruity",
    price: 900,
    pkg: "100g",
    bestSeller: false,
    rating: 4.3,
    reviewCount: 89,
    ingredients: "Black Ceylon tea, dried pineapple pieces, natural pineapple flavour",
    tags: ["tropical", "refreshing", "fruity"],
    images: [Pineapple1, Pineapple2, Pineapple3],
  },
  {
    id: 3,
    slug: "lemon-tea",
    name: "Lemon Tea",
    description: "Black tea with lemon flavour/peel; bright & citrusy.",
    category: "Fruity",
    price: 800,
    pkg: "100g",
    bestSeller: false,
    rating: 4.4,
    reviewCount: 156,
    ingredients: "Black Ceylon tea, lemon peel, natural lemon flavour",
    tags: ["citrusy", "bright", "refreshing"],
    images: [Lemon1, Lemon2, Lemon3],
  },
  {
    id: 4,
    slug: "soursop-tea",
    name: "Soursop Tea",
    description: "Black tea with tangy soursop flavour; vibrant classic.",
    category: "Fruity",
    price: 950,
    pkg: "100g",
    bestSeller: false,
    rating: 4.2,
    reviewCount: 73,
    ingredients: "Black Ceylon tea, natural soursop flavour",
    tags: ["tangy", "vibrant", "classic"],
    images: [Soursop1, Soursop2, Soursop3],
  },
  {
    id: 5,
    slug: "rose-tea",
    name: "Rose Tea",
    description: "Black tea with rose petals/flavour; elegant and fragrant.",
    category: "Fruity",
    price: 1100,
    pkg: "100g",
    bestSeller: false,
    rating: 4.6,
    reviewCount: 94,
    ingredients: "Black Ceylon tea, rose petals, natural rose flavour",
    tags: ["elegant", "fragrant", "floral"],
    images: [Rose1, Rose2, Rose3],
  },
  {
    id: 6,
    slug: "passion-mint-tea",
    name: "Passion & Mint Tea",
    description: "Black tea w/ mint leaves + passion; vibrant cooling blend.",
    category: "Fruity",
    price: 950,
    pkg: "100g",
    bestSeller: false,
    rating: 4.3,
    reviewCount: 68,
    ingredients: "Black Ceylon tea, mint leaves, natural passion fruit flavour",
    tags: ["cooling", "vibrant", "refreshing"],
    images: [PassionMint1, PassionMint2, PassionMint3],
  },
  {
    id: 7,
    slug: "blueberry-tea",
    name: "Blueberry Tea",
    description: "Black tea with blueberry pieces/flavour; fruity & refreshing.",
    category: "Fruity",
    price: 1000,
    pkg: "100g",
    bestSeller: false,
    rating: 4.4,
    reviewCount: 112,
    ingredients: "Black Ceylon tea, dried blueberry pieces, natural blueberry flavour",
    tags: ["fruity", "refreshing", "antioxidants"],
    images: [Blueberry1, Blueberry2, Blueberry3],
  },
  {
    id: 8,
    slug: "strawberry-tea",
    name: "Strawberry Tea",
    description: "Black tea with strawberry pieces/flavour; sweet & tangy.",
    category: "Fruity",
    price: 950,
    pkg: "100g",
    bestSeller: false,
    rating: 4.5,
    reviewCount: 98,
    ingredients: "Black Ceylon tea, dried strawberry pieces, natural strawberry flavour",
    tags: ["sweet", "tangy", "fruity"],
    images: [Strawberry1, Strawberry2, Strawberry3],
  },
  {
    id: 9,
    slug: "mango-tea",
    name: "Mango Tea",
    description: "Black tea with mango pieces/flavour; tropical.",
    category: "Fruity",
    price: 950,
    pkg: "100g",
    bestSeller: false,
    rating: 4.2,
    reviewCount: 85,
    ingredients: "Black Ceylon tea, dried mango pieces, natural mango flavour",
    tags: ["tropical", "sweet", "exotic"],
    images: [Mango1, Mango2, Mango3],
  },
  {
    id: 10,
    slug: "peach-tea",
    name: "Peach Tea",
    description: "Black tea with peach pieces/flavour; smooth & fragrant.",
    category: "Fruity",
    price: 950,
    pkg: "100g",
    bestSeller: false,
    rating: 4.3,
    reviewCount: 76,
    ingredients: "Black Ceylon tea, dried peach pieces, natural peach flavour",
    tags: ["smooth", "fragrant", "delicate"],
    images: [Peach1, Peach2, Peach3],
  },
  // Spiced & Chai Blends
  {
    id: 11,
    slug: "slim-rose-tea",
    name: "Slim Rose Tea",
    description: "Black tea with rose petals & cinnamon; calming and metabolism-friendly; great hot or iced.",
    category: "Spiced & Chai Blends",
    price: 1200,
    pkg: "100g",
    bestSeller: false,
    rating: 4.4,
    reviewCount: 134,
    ingredients: "Black Ceylon tea, rose petals, cinnamon, natural rose flavour",
    tags: ["wellness", "metabolism", "calming"],
    images: [SlimRose1, SlimRose2, SlimRose3],
  },
  {
    id: 12,
    slug: "cardamom-tea",
    name: "Cardamom Tea",
    description: "Black tea with cardamom pieces; aids digestion & calming.",
    category: "Spiced & Chai Blends",
    price: 1000,
    pkg: "100g",
    bestSeller: true,
    rating: 4.7,
    reviewCount: 189,
    ingredients: "Black Ceylon tea, green cardamom pods",
    tags: ["digestive", "calming", "aromatic"],
    images: [Cardamom1, Cardamom2, Cardamom3],
  },
  {
    id: 13,
    slug: "kesar-chai",
    name: "Kesar Chai",
    description: "Black tea with saffron/safflower; energizing & flavorful.",
    category: "Spiced & Chai Blends",
    price: 1500,
    pkg: "100g",
    bestSeller: false,
    rating: 4.8,
    reviewCount: 67,
    ingredients: "Black Ceylon tea, saffron threads, safflower petals",
    tags: ["energizing", "premium", "luxurious"],
    images: [KesarChai1, KesarChai2, KesarChai3],
  },
  {
    id: 14,
    slug: "chai-masala",
    name: "Chai Masala",
    description: "Black tea + 8 spices (fennel, anise, cloves, cardamom, ginger, pepper, cinnamon, nutmeg).",
    category: "Spiced & Chai Blends",
    price: 1100,
    pkg: "100g",
    bestSeller: true,
    rating: 4.6,
    reviewCount: 203,
    ingredients: "Black Ceylon tea, fennel, star anise, cloves, cardamom, ginger, black pepper, cinnamon, nutmeg",
    tags: ["traditional", "warming", "spiced"],
    images: [ChaiMasala1, ChaiMasala2, ChaiMasala3],
  },
  {
    id: 15,
    slug: "chai-karak",
    name: "Chai Karak",
    description: "Black tea w/ saffron + cardamom; strong & energizing.",
    category: "Spiced & Chai Blends",
    price: 1300,
    pkg: "100g",
    bestSeller: false,
    rating: 4.5,
    reviewCount: 91,
    ingredients: "Black Ceylon tea, saffron, green cardamom",
    tags: ["strong", "energizing", "bold"],
    images: [ChaiKarak1, ChaiKarak2, ChaiKarak3],
  },
  // Wellness & Energy
  {
    id: 16,
    slug: "energy-tea",
    name: "Energy Tea",
    description: "Black tea, cinnamon, licorice, ginger, chamomile, cornflower, vanilla; energy & digestion.",
    category: "Wellness & Energy",
    price: 1200,
    pkg: "100g",
    bestSeller: false,
    rating: 4.3,
    reviewCount: 78,
    ingredients: "Black Ceylon tea, cinnamon, licorice root, ginger, chamomile, cornflower petals, vanilla",
    tags: ["energizing", "digestive", "wellness"],
    images: [Energy1, Energy2, Energy3],
  },
  {
    id: 17,
    slug: "moroccan-mint",
    name: "Moroccan Mint",
    description: "Black tea with mint flavour/leaves; refreshing hot or iced.",
    category: "Wellness & Energy",
    price: 900,
    pkg: "100g",
    bestSeller: false,
    rating: 4.4,
    reviewCount: 145,
    ingredients: "Black Ceylon tea, dried mint leaves, natural mint flavour",
    tags: ["refreshing", "cooling", "versatile"],
    images: [MoroccanMint1, MoroccanMint2, MoroccanMint3],
  },
  {
    id: 18,
    slug: "green-tea",
    name: "Green Tea",
    description: "Pure Ceylon green tea; antioxidant-rich, refreshing.",
    category: "Wellness & Energy",
    price: 1000,
    pkg: "100g",
    bestSeller: true,
    rating: 4.5,
    reviewCount: 167,
    ingredients: "Pure Ceylon green tea leaves",
    tags: ["antioxidants", "healthy", "pure"],
    images: [GreenTea1, GreenTea2, GreenTea3],
  },
  // Dessert-Inspired
  {
    id: 19,
    slug: "chocolate-tea",
    name: "Chocolate Tea",
    description: "Black tea with chocolate flavour/pieces; rich and indulgent.",
    category: "Dessert-Inspired",
    price: 1100,
    pkg: "100g",
    bestSeller: false,
    rating: 4.6,
    reviewCount: 123,
    ingredients: "Black Ceylon tea, cocoa pieces, natural chocolate flavour",
    tags: ["indulgent", "rich", "dessert"],
    images: [Chocolate1, Chocolate2, Chocolate3],
  },
  {
    id: 20,
    slug: "caramel-tea",
    name: "Caramel Tea",
    description: "Black tea with caramel pieces/flavour; sweet and cozy.",
    category: "Dessert-Inspired",
    price: 1050,
    pkg: "100g",
    bestSeller: false,
    rating: 4.4,
    reviewCount: 87,
    ingredients: "Black Ceylon tea, caramel pieces, natural caramel flavour",
    tags: ["sweet", "cozy", "comforting"],
    images: [Caramel1, Caramel2, Caramel3],
  },
];
