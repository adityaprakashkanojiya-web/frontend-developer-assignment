export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
  shortDescription: string;
  price: number;
  currency: string;
  features: string[];
  nutrition: NutritionInfo;
  traceability: TraceabilityInfo;
  reviews: Review[];
  specifications: Specification[];
  certifications: string[];
  origin: string;
  harvestDate: string;
  expiryDate: string;
  stock: number;
  rating: number;
  tags: string[];
}

export interface NutritionInfo {
  calories: number;
  protein: string;
  carbohydrates: string;
  fat: string;
  fiber: string;
  sugar: string;
  sodium: string;
  vitamins: VitaminInfo[];
  minerals: MineralInfo[];
}

export interface VitaminInfo {
  name: string;
  amount: string;
  dailyValue: string;
}

export interface MineralInfo {
  name: string;
  amount: string;
  dailyValue: string;
}

export interface TraceabilityInfo {
  farm: string;
  location: string;
  coordinates: string;
  harvestMethod: string;
  processingMethod: string;
  certificationBody: string;
  batchNumber: string;
  qrCode: string;
}

export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface Specification {
  name: string;
  value: string;
  unit?: string;
}

export interface ProductCard {
  id: number;
  name: string;
  image: string;
  category: string;
  shortDescription: string;
  price: number;
  currency: string;
  rating: number;
  stock: number;
}
