'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import Image from 'next/image';
import { X, Star, MapPin, Calendar, Leaf, Award, Users, BarChart3 } from 'lucide-react';
import SectionFilter from './SectionFilter';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState([
    'Hero Image',
    'Description',
    'Features',
    'Nutrition',
    'Traceability',
    'Certifications',
    'Reviews',
    'Specifications',
    'Action'
  ]);

  const allSections = [
    'Hero Image',
    'Description',
    'Features',
    'Nutrition',
    'Traceability',
    'Certifications',
    'Reviews',
    'Specifications',
    'Action'
  ];

  const toggleSection = (section: string) => {
    setVisibleSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-accent-500 fill-current' : 'text-secondary-300'
        }`}
      />
    ));
  };

  return (
    <div 
      className={`modal-overlay transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div className={`modal-content transition-all duration-200 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-2xl p-6 border-b border-secondary-100 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-secondary-900">{product.name}</h2>
            <p className="text-secondary-600">{product.category}</p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-secondary-100 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-secondary-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Section Filter */}
          <SectionFilter
            sections={allSections}
            onToggleSection={toggleSection}
            visibleSections={visibleSections}
          />

          {/* Hero Image Card */}
          {visibleSections.includes('Hero Image') && (
            <div className="card overflow-hidden">
              <div className="relative h-80">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-3xl font-bold">{product.currency} {product.price}</div>
                  <div className="flex items-center space-x-2">
                    {renderStars(product.rating)}
                    <span className="text-white/90">({product.rating})</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Description Card */}
          {visibleSections.includes('Description') && (
            <div className="card">
              <div className="card-header">
                <h3 className="text-xl font-semibold text-secondary-900 flex items-center">
                  <Leaf className="w-5 h-5 text-primary-600 mr-2" />
                  Product Description
                </h3>
              </div>
              <div className="card-body">
                <p className="text-secondary-700 leading-relaxed">{product.description}</p>
              </div>
            </div>
          )}

          {/* Features Card */}
          {visibleSections.includes('Features') && (
            <div className="card">
              <div className="card-header">
                <h3 className="text-xl font-semibold text-secondary-900 flex items-center">
                  <Award className="w-5 h-5 text-accent-600 mr-2" />
                  Key Features
                </h3>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Nutrition Card */}
          {visibleSections.includes('Nutrition') && (
            <div className="card">
              <div className="card-header">
                <h3 className="text-xl font-semibold text-secondary-900 flex items-center">
                  <BarChart3 className="w-5 h-5 text-green-600 mr-2" />
                  Nutritional Information
                </h3>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-secondary-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600">{product.nutrition.calories}</div>
                    <div className="text-sm text-secondary-600">Calories</div>
                  </div>
                  <div className="text-center p-3 bg-secondary-50 rounded-lg">
                    <div className="text-lg font-semibold text-secondary-900">{product.nutrition.protein}</div>
                    <div className="text-sm text-secondary-600">Protein</div>
                  </div>
                  <div className="text-center p-3 bg-secondary-50 rounded-lg">
                    <div className="text-lg font-semibold text-secondary-900">{product.nutrition.carbohydrates}</div>
                    <div className="text-sm text-secondary-600">Carbs</div>
                  </div>
                  <div className="text-center p-3 bg-secondary-50 rounded-lg">
                    <div className="text-lg font-semibold text-secondary-900">{product.nutrition.fat}</div>
                    <div className="text-sm text-secondary-600">Fat</div>
                  </div>
                </div>
                
                {product.nutrition.vitamins.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-secondary-900 mb-2">Vitamins</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {product.nutrition.vitamins.map((vitamin, index) => (
                        <div key={index} className="text-sm text-secondary-700">
                          {vitamin.name}: {vitamin.amount} ({vitamin.dailyValue})
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {product.nutrition.minerals.length > 0 && (
                  <div>
                    <h4 className="font-medium text-secondary-900 mb-2">Minerals</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {product.nutrition.minerals.map((mineral, index) => (
                        <div key={index} className="text-sm text-secondary-700">
                          {mineral.name}: {mineral.amount} ({mineral.dailyValue})
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Traceability Card */}
          {visibleSections.includes('Traceability') && (
            <div className="card">
              <div className="card-header">
                <h3 className="text-xl font-semibold text-secondary-900 flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  Traceability & Origin
                </h3>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-secondary-900 mb-2">Farm Details</h4>
                    <div className="space-y-2 text-sm text-secondary-700">
                      <div><span className="font-medium">Farm:</span> {product.traceability.farm}</div>
                      <div><span className="font-medium">Location:</span> {product.traceability.location}</div>
                      <div><span className="font-medium">Coordinates:</span> {product.traceability.coordinates}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900 mb-2">Processing</h4>
                    <div className="space-y-2 text-sm text-secondary-700">
                      <div><span className="font-medium">Harvest Method:</span> {product.traceability.harvestMethod}</div>
                      <div><span className="font-medium">Processing:</span> {product.traceability.processingMethod}</div>
                      <div><span className="font-medium">Batch:</span> {product.traceability.batchNumber}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Certifications Card */}
          {visibleSections.includes('Certifications') && (
            <div className="card">
              <div className="card-header">
                <h3 className="text-xl font-semibold text-secondary-900 flex items-center">
                  <Award className="w-5 h-5 text-green-600 mr-2" />
                  Certifications
                </h3>
              </div>
              <div className="card-body">
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Reviews Card */}
          {visibleSections.includes('Reviews') && (
            <div className="card">
              <div className="card-header">
                <h3 className="text-xl font-semibold text-secondary-900 flex items-center">
                  <Users className="w-5 h-5 text-purple-600 mr-2" />
                  Customer Reviews
                </h3>
              </div>
              <div className="card-body">
                <div className="space-y-4">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-b border-secondary-100 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-secondary-900">{review.userName}</span>
                          {review.verified && (
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="text-secondary-700 mb-2">{review.comment}</p>
                      <div className="flex items-center space-x-2 text-sm text-secondary-500">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(review.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Specifications Card */}
          {visibleSections.includes('Specifications') && (
            <div className="card">
              <div className="card-header">
                <h3 className="text-xl font-semibold text-secondary-900 flex items-center">
                  <BarChart3 className="w-5 h-5 text-secondary-600 mr-2" />
                  Product Specifications
                </h3>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-secondary-100 last:border-b-0">
                      <span className="font-medium text-secondary-700">{spec.name}</span>
                      <span className="text-secondary-600">
                        {spec.value}{spec.unit && ` ${spec.unit}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Action Card */}
          {visibleSections.includes('Action') && (
            <div className="card bg-gradient-to-r from-primary-50 to-accent-50 border-primary-200">
              <div className="card-body text-center">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  Ready to Experience Premium Quality?
                </h3>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="btn-primary">
                    Add to Cart - {product.currency} {product.price}
                  </button>
                  <button className="btn-secondary">
                    Save for Later
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
