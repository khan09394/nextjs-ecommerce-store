export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
  notes: {
    top: string[]
    middle: string[]
    base: string[]
  }
  stock: number
}

export const products: Product[] = [
  {
    id: "1",
    name: "Midnight Oud",
    price: 12500,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
    category: "Oriental",
    description: "A captivating blend of smoky oud and rich amber for the sophisticated soul.",
    notes: {
      top: ["Saffron", "Cardamom"],
      middle: ["Rose", "Oud"],
      base: ["Amber", "Musk", "Sandalwood"]
    },
    stock: 25
  },
  {
    id: "2",
    name: "Rose Elixir",
    price: 9800,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=500&fit=crop",
    category: "Floral",
    description: "An elegant bouquet of Damascan rose with delicate peony undertones.",
    notes: {
      top: ["Bergamot", "Pink Pepper"],
      middle: ["Rose", "Peony", "Jasmine"],
      base: ["White Musk", "Cedar"]
    },
    stock: 40
  },
  {
    id: "3",
    name: "Citrus Breeze",
    price: 7500,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=500&fit=crop",
    category: "Fresh",
    description: "A refreshing burst of Italian citrus with oceanic accords.",
    notes: {
      top: ["Lemon", "Bergamot", "Grapefruit"],
      middle: ["Sea Salt", "Neroli"],
      base: ["White Woods", "Musk"]
    },
    stock: 60
  },
  {
    id: "4",
    name: "Velvet Noir",
    price: 15000,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop",
    category: "Woody",
    description: "Deep, mysterious blend of black orchid and smoky vetiver.",
    notes: {
      top: ["Black Pepper", "Bergamot"],
      middle: ["Black Orchid", "Iris"],
      base: ["Vetiver", "Leather", "Patchouli"]
    },
    stock: 15
  },
  {
    id: "5",
    name: "Golden Amber",
    price: 11000,
    image: "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=400&h=500&fit=crop",
    category: "Oriental",
    description: "Warm, sensual amber infused with vanilla and precious woods.",
    notes: {
      top: ["Orange Blossom", "Cinnamon"],
      middle: ["Amber", "Benzoin"],
      base: ["Vanilla", "Sandalwood", "Tonka Bean"]
    },
    stock: 30
  },
  {
    id: "6",
    name: "White Jasmine",
    price: 8500,
    image: "https://images.unsplash.com/photo-1595425964071-2c1ecb10b52d?w=400&h=500&fit=crop",
    category: "Floral",
    description: "Pure, intoxicating jasmine with a creamy, feminine trail.",
    notes: {
      top: ["Green Notes", "Pear"],
      middle: ["Jasmine Sambac", "Tuberose"],
      base: ["Creamy Musk", "Cashmeran"]
    },
    stock: 45
  },
  {
    id: "7",
    name: "Cedar & Sage",
    price: 9000,
    image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=400&h=500&fit=crop",
    category: "Woody",
    description: "A grounding blend of aromatic sage and majestic cedar.",
    notes: {
      top: ["Sage", "Lavender"],
      middle: ["Geranium", "Violet Leaf"],
      base: ["Cedar", "Moss", "Ambroxan"]
    },
    stock: 35
  },
  {
    id: "8",
    name: "Musk Royale",
    price: 13500,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=500&fit=crop",
    category: "Musk",
    description: "The ultimate expression of clean, powdery white musk.",
    notes: {
      top: ["Aldehydes", "Lily of the Valley"],
      middle: ["White Musk", "Iris"],
      base: ["Cashmere Wood", "Ambergris"]
    },
    stock: 20
  }
]

export const categories = ["All", "Oriental", "Floral", "Fresh", "Woody", "Musk"]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}
