'use client';

import { useState, useMemo } from 'react';
import { getProductCards, getProductById } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import SearchAndFilter from '@/components/SearchAndFilter';
import { Product } from '@/types/product';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const allProductCards = getProductCards();
  
  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return allProductCards.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allProductCards, searchQuery, selectedCategory]);
  
  // Get unique categories for filter
  const categories = useMemo(() => {
    const categorySet = new Set<string>();
    allProductCards.forEach(product => categorySet.add(product.category));
    return Array.from(categorySet);
  }, [allProductCards]);

  const handleProductClick = (productId: number) => {
    const fullProduct = getProductById(productId);
    if (fullProduct) {
      setSelectedProduct(fullProduct);
      setIsModalOpen(true);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-500/10" aria-hidden="true"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold text-gradient mb-6 animate-fade-in">
            Hedamo
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto animate-slide-up">
            Discover premium organic products with our innovative card-based showcase. 
            Each product aspect gets its own beautiful, informative card.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-scale-in" role="list" aria-label="Product highlights">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-secondary-700 font-medium" role="listitem">
              🍯 Organic Honey
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-secondary-700 font-medium" role="listitem">
              🫒 Premium Olive Oil
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-secondary-700 font-medium" role="listitem">
              🧂 Artisan Sea Salt
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="products-heading" className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Premium Collection
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Click on any product to explore detailed information in our beautiful card-based layout, 
              inspired by modern design principles.
            </p>
          </div>
          
          {/* Search and Filter */}
          <SearchAndFilter
            onSearch={handleSearch}
            onFilter={handleCategoryFilter}
            categories={categories}
            selectedCategory={selectedCategory}
          />
          
          {/* Results Count */}
          <div className="text-center mb-8" aria-live="polite" aria-atomic="true">
            <p className="text-secondary-600">
              Showing {filteredProducts.length} of {allProductCards.length} products
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory && ` in ${selectedCategory}`}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Product grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} role="listitem">
                  <ProductCard
                    product={product}
                    onClick={() => handleProductClick(product.id)}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-6xl mb-4" aria-hidden="true">🔍</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">No products found</h3>
                <p className="text-secondary-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose Hedamo?
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Our innovative showcase design makes it easy to understand every aspect of our products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Company features">
            <div className="text-center" role="listitem">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Detailed Information</h3>
              <p className="text-secondary-600">Every product aspect gets its own dedicated card for easy understanding.</p>
            </div>
            
            <div className="text-center" role="listitem">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Organic Quality</h3>
              <p className="text-secondary-600">All products are certified organic and sustainably sourced.</p>
            </div>
            
            <div className="text-center" role="listitem">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Full Traceability</h3>
              <p className="text-secondary-600">Track every product from farm to table with detailed information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
        />
      )}
    </main>
  );
}
