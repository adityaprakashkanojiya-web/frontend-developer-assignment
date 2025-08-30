import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Hedamo Organic Wild Honey",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=600&fit=crop",
    category: "Organic Food",
    description: "Pure wild honey harvested from pristine organic farms, rich in natural enzymes and antioxidants. This premium honey is collected from wildflower sources, ensuring a unique flavor profile and maximum nutritional benefits.",
    shortDescription: "Pure wild honey from organic farms with rich natural enzymes",
    price: 24.99,
    currency: "USD",
    features: [
      "100% Organic Certified",
      "Unprocessed & Raw",
      "Rich in Antioxidants",
      "Natural Sweetener",
      "Eco-friendly Packaging"
    ],
    nutrition: {
      calories: 64,
      protein: "0.1g",
      carbohydrates: "17g",
      fat: "0g",
      fiber: "0g",
      sugar: "17g",
      sodium: "1mg",
      vitamins: [
        { name: "Vitamin C", amount: "0.5mg", dailyValue: "1%" },
        { name: "Vitamin B6", amount: "0.02mg", dailyValue: "1%" }
      ],
      minerals: [
        { name: "Calcium", amount: "1mg", dailyValue: "0.1%" },
        { name: "Iron", amount: "0.1mg", dailyValue: "0.6%" },
        { name: "Zinc", amount: "0.1mg", dailyValue: "0.7%" }
      ]
    },
    traceability: {
      farm: "Sunset Valley Organic Farm",
      location: "Blue Ridge Mountains, Virginia",
      coordinates: "37.4316° N, 78.6569° W",
      harvestMethod: "Sustainable Beekeeping",
      processingMethod: "Cold Extraction",
      certificationBody: "USDA Organic",
      batchNumber: "HV-2024-001",
      qrCode: "https://hedamo.com/trace/HV-2024-001"
    },
    reviews: [
      {
        id: 1,
        userName: "Sarah M.",
        rating: 5,
        comment: "Amazing quality! The taste is incredible and you can really tell it's pure honey.",
        date: "2024-01-15",
        verified: true
      },
      {
        id: 2,
        userName: "Michael R.",
        rating: 5,
        comment: "Best honey I've ever tasted. Great for tea and baking.",
        date: "2024-01-10",
        verified: true
      },
      {
        id: 3,
        userName: "Lisa K.",
        rating: 4,
        comment: "Very good quality, though a bit pricey. Worth it for the organic certification.",
        date: "2024-01-08",
        verified: true
      }
    ],
    specifications: [
      { name: "Weight", value: "500", unit: "g" },
      { name: "Shelf Life", value: "24", unit: "months" },
      { name: "Storage", value: "Room Temperature", unit: "" },
      { name: "Origin", value: "USA", unit: "" },
      { name: "Certification", value: "USDA Organic", unit: "" }
    ],
    certifications: [
      "USDA Organic",
      "Non-GMO Project Verified",
      "Kosher Certified",
      "Fair Trade Certified"
    ],
    origin: "Blue Ridge Mountains, Virginia, USA",
    harvestDate: "2024-01-15",
    expiryDate: "2026-01-15",
    stock: 150,
    rating: 4.7,
    tags: ["organic", "honey", "wildflower", "raw", "natural", "sweetener"]
  },
  {
    id: 2,
    name: "Hedamo Premium Olive Oil",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&h=600&fit=crop",
    category: "Premium Oils",
    description: "Extra virgin olive oil pressed from hand-picked olives grown in the Mediterranean region. This premium oil features a fruity aroma, peppery finish, and is perfect for both cooking and finishing dishes.",
    shortDescription: "Extra virgin olive oil with fruity aroma and peppery finish",
    price: 39.99,
    currency: "USD",
    features: [
      "Extra Virgin Quality",
      "Cold Pressed",
      "Single Origin",
      "Rich in Polyphenols",
      "Sustainable Farming"
    ],
    nutrition: {
      calories: 120,
      protein: "0g",
      carbohydrates: "0g",
      fat: "14g",
      fiber: "0g",
      sugar: "0g",
      sodium: "0mg",
      vitamins: [
        { name: "Vitamin E", amount: "1.9mg", dailyValue: "13%" },
        { name: "Vitamin K", amount: "8.1µg", dailyValue: "10%" }
      ],
      minerals: [
        { name: "Iron", amount: "0.1mg", dailyValue: "0.6%" }
      ]
    },
    traceability: {
      farm: "Mediterranean Grove Estate",
      location: "Tuscany, Italy",
      coordinates: "43.7711° N, 11.2486° E",
      harvestMethod: "Hand Picking",
      processingMethod: "Cold Pressing",
      certificationBody: "EU Organic",
      batchNumber: "OO-2024-002",
      qrCode: "https://hedamo.com/trace/OO-2024-002"
    },
    reviews: [
      {
        id: 4,
        userName: "Carlos D.",
        rating: 5,
        comment: "Exceptional olive oil! The flavor is outstanding and perfect for Mediterranean dishes.",
        date: "2024-01-12",
        verified: true
      },
      {
        id: 5,
        userName: "Emma W.",
        rating: 5,
        comment: "Love the peppery finish. Great quality for the price.",
        date: "2024-01-09",
        verified: true
      }
    ],
    specifications: [
      { name: "Volume", value: "500", unit: "ml" },
      { name: "Shelf Life", value: "18", unit: "months" },
      { name: "Storage", value: "Cool, Dark Place", unit: "" },
      { name: "Origin", value: "Italy", unit: "" },
      { name: "Acidity", value: "0.3", unit: "%" }
    ],
    certifications: [
      "EU Organic",
      "PDO (Protected Designation of Origin)",
      "Kosher Certified"
    ],
    origin: "Tuscany, Italy",
    harvestDate: "2024-01-10",
    expiryDate: "2025-07-10",
    stock: 75,
    rating: 4.9,
    tags: ["olive-oil", "extra-virgin", "mediterranean", "cold-pressed", "premium"]
  },
  {
    id: 3,
    name: "Hedamo Artisan Sea Salt",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    category: "Artisan Salt",
    description: "Hand-harvested sea salt from pristine coastal waters, naturally evaporated and minimally processed. This artisan salt features a delicate crystal structure and rich mineral content that enhances any dish.",
    shortDescription: "Hand-harvested sea salt with delicate crystals and rich minerals",
    price: 18.99,
    currency: "USD",
    features: [
      "Hand Harvested",
      "Naturally Evaporated",
      "Rich in Minerals",
      "No Additives",
      "Sustainable Harvesting"
    ],
    nutrition: {
      calories: 0,
      protein: "0g",
      carbohydrates: "0g",
      fat: "0g",
      fiber: "0g",
      sugar: "0g",
      sodium: "390mg",
      vitamins: [],
      minerals: [
        { name: "Sodium", amount: "390mg", dailyValue: "17%" },
        { name: "Magnesium", amount: "1mg", dailyValue: "0.2%" },
        { name: "Calcium", amount: "1mg", dailyValue: "0.1%" }
      ]
    },
    traceability: {
      farm: "Celtic Sea Salt Works",
      location: "Brittany Coast, France",
      coordinates: "47.6582° N, 2.7608° W",
      harvestMethod: "Traditional Evaporation",
      processingMethod: "Natural Drying",
      certificationBody: "French Organic",
      batchNumber: "SS-2024-003",
      qrCode: "https://hedamo.com/trace/SS-2024-003"
    },
    reviews: [
      {
        id: 6,
        userName: "Pierre L.",
        rating: 5,
        comment: "Authentic French sea salt. The texture and flavor are perfect for finishing dishes.",
        date: "2024-01-14",
        verified: true
      },
      {
        id: 7,
        userName: "Anna B.",
        rating: 4,
        comment: "Great quality salt, though I wish it came in a larger size.",
        date: "2024-01-11",
        verified: true
      }
    ],
    specifications: [
      { name: "Weight", value: "250", unit: "g" },
      { name: "Shelf Life", value: "Unlimited", unit: "" },
      { name: "Storage", value: "Dry Place", unit: "" },
      { name: "Origin", value: "France", unit: "" },
      { name: "Crystal Size", value: "Medium", unit: "" }
    ],
    certifications: [
      "French Organic",
      "BIO Certified",
      "Kosher Certified"
    ],
    origin: "Brittany Coast, France",
    harvestDate: "2024-01-05",
    expiryDate: "N/A",
    stock: 200,
    rating: 4.6,
    tags: ["sea-salt", "artisan", "hand-harvested", "natural", "minerals", "french"]
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductCards = () => {
  return products.map(product => ({
    id: product.id,
    name: product.name,
    image: product.image,
    category: product.category,
    shortDescription: product.shortDescription,
    price: product.price,
    currency: product.currency,
    rating: product.rating,
    stock: product.stock
  }));
};
