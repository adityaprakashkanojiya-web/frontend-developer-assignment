import { ProductCard as ProductCardType } from '@/types/product';
import Image from 'next/image';

interface ProductCardProps {
  product: ProductCardType;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div 
      className="card cursor-pointer group overflow-hidden animate-fade-in hover:animate-bounce-gentle"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${product.name}, ${product.category} product`}
      aria-describedby={`product-${product.id}-description`}
    >
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        <Image
          src={product.image}
          alt={`${product.name} - ${product.category} product`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true"></div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-secondary-700 px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-accent-500" aria-label="Rating">★</span>
            <span className="text-secondary-700 font-medium">{product.rating}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
          {product.name}
        </h3>
        <p 
          id={`product-${product.id}-description`}
          className="text-secondary-600 mb-4 line-clamp-2"
        >
          {product.shortDescription}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-primary-600" aria-label={`Price: ${product.currency} ${product.price}`}>
            {product.currency} {product.price}
          </div>
          <div className="text-sm text-secondary-500" aria-label={`Stock status: ${product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}`}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </div>
        </div>
        
        <button 
          className="w-full btn-primary group-hover:bg-primary-700 transition-all duration-200 flex items-center justify-center space-x-2 py-3 text-lg font-semibold" 
          suppressHydrationWarning
          aria-label={`Learn more about ${product.name}`}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          <span>Know More</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
