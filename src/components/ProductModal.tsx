'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import Image from 'next/image';
import { X, Star, MapPin, Calendar, Leaf, Award, Users, BarChart3, Thermometer, Droplets, Wind, Eye, Shield, Clock, Package, Globe, TrendingUp } from 'lucide-react';
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
            <div className="card overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 border-primary-200">
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
            <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <div className="card-header bg-gradient-to-r from-green-100 to-emerald-100">
                <h3 className="text-xl font-semibold text-green-900 flex items-center">
                  <Leaf className="w-6 h-6 text-green-600 mr-3" />
                  Product Description
                </h3>
              </div>
              <div className="card-body">
                <p className="text-green-800 leading-relaxed text-lg">{product.description}</p>
              </div>
            </div>
          )}

          {/* Features Card */}
          {visibleSections.includes('Features') && (
            <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <div className="card-header bg-gradient-to-r from-blue-100 to-indigo-100">
                <h3 className="text-xl font-semibold text-blue-900 flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  Key Features
                </h3>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg border border-blue-200">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Nutrition Card */}
          {visibleSections.includes('Nutrition') && (
            <div className="card bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
              <div className="card-header bg-gradient-to-r from-orange-100 to-amber-100">
                <h3 className="text-xl font-semibold text-orange-900 flex items-center">
                  <BarChart3 className="w-6 h-6 text-orange-600 mr-3" />
                  Nutritional Information
                </h3>
              </div>
              <div className="card-body">
                {/* Main Nutrition Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-white/60 rounded-xl border border-orange-200">
                    <div className="text-3xl font-bold text-orange-600 mb-1">{product.nutrition.calories}</div>
                    <div className="text-sm text-orange-700 font-medium">Calories</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl border border-orange-200">
                    <div className="text-2xl font-bold text-orange-600 mb-1">{product.nutrition.protein}</div>
                    <div className="text-sm text-orange-700 font-medium">Protein</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl border border-orange-200">
                    <div className="text-2xl font-bold text-orange-600 mb-1">{product.nutrition.carbohydrates}</div>
                    <div className="text-sm text-orange-700 font-medium">Carbs</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl border border-orange-200">
                    <div className="text-2xl font-bold text-orange-600 mb-1">{product.nutrition.fat}</div>
                    <div className="text-sm text-orange-700 font-medium">Fat</div>
                  </div>
                </div>
                
                {/* Additional Nutrition Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/60 rounded-lg p-4 border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                      <Thermometer className="w-5 h-5 mr-2" />
                      Vitamins
                    </h4>
                    <div className="space-y-2">
                      {product.nutrition.vitamins.map((vitamin, index) => (
                        <div key={index} className="flex justify-between text-sm text-orange-700">
                          <span className="font-medium">{vitamin.name}</span>
                          <span>{vitamin.amount} ({vitamin.dailyValue})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/60 rounded-lg p-4 border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                      <Droplets className="w-5 h-5 mr-2" />
                      Minerals
                    </h4>
                    <div className="space-y-2">
                      {product.nutrition.minerals.map((mineral, index) => (
                        <div key={index} className="flex justify-between text-sm text-orange-700">
                          <span className="font-medium">{mineral.name}</span>
                          <span>{mineral.amount} ({mineral.dailyValue})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Traceability Card */}
          {visibleSections.includes('Traceability') && (
            <div className="card bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
              <div className="card-header bg-gradient-to-r from-purple-100 to-violet-100">
                <h3 className="text-xl font-semibold text-purple-900 flex items-center">
                  <MapPin className="w-6 h-6 text-purple-600 mr-3" />
                  Traceability & Origin
                </h3>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/60 rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      Farm Details
                    </h4>
                    <div className="space-y-3 text-sm text-purple-700">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Farm:</span>
                        <span className="bg-white px-2 py-1 rounded border border-purple-200">{product.traceability.farm}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Location:</span>
                        <span className="bg-white px-2 py-1 rounded border border-purple-200">{product.traceability.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Coordinates:</span>
                        <span className="bg-white px-2 py-1 rounded border border-purple-200 font-mono text-xs">{product.traceability.coordinates}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/60 rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                      <Package className="w-5 h-5 mr-2" />
                      Processing
                    </h4>
                    <div className="space-y-3 text-sm text-purple-700">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Harvest Method:</span>
                        <span className="bg-white px-2 py-1 rounded border border-purple-200">{product.traceability.harvestMethod}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Processing:</span>
                        <span className="bg-white px-2 py-1 rounded border border-purple-200">{product.traceability.processingMethod}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Batch:</span>
                        <span className="bg-white px-2 py-1 rounded border border-purple-200 font-mono">{product.traceability.batchNumber}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Certifications Card */}
          {visibleSections.includes('Certifications') && (
            <div className="card bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
              <div className="card-header bg-gradient-to-r from-emerald-100 to-teal-100">
                <h3 className="text-xl font-semibold text-emerald-900 flex items-center">
                  <Shield className="w-6 h-6 text-emerald-600 mr-3" />
                  Certifications & Quality
                </h3>
              </div>
              <div className="card-body">
                <div className="flex flex-wrap gap-3">
                  {product.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="bg-white/80 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200 flex items-center space-x-2"
                    >
                      <Award className="w-4 h-4 text-emerald-600" />
                      <span>{cert}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Reviews Card */}
          {visibleSections.includes('Reviews') && (
            <div className="card bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
              <div className="card-header bg-gradient-to-r from-pink-100 to-rose-100">
                <h3 className="text-xl font-semibold text-pink-900 flex items-center">
                  <Users className="w-6 h-6 text-pink-600 mr-3" />
                  Customer Reviews
                </h3>
              </div>
              <div className="card-body">
                <div className="space-y-4">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="bg-white/60 rounded-lg p-4 border border-pink-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="font-semibold text-pink-800">{review.userName}</span>
                          {review.verified && (
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                              <Shield className="w-3 h-3 mr-1" />
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="text-pink-700 mb-3 leading-relaxed">{review.comment}</p>
                      <div className="flex items-center space-x-2 text-sm text-pink-600">
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
            <div className="card bg-gradient-to-br from-slate-50 to-gray-50 border-slate-200">
              <div className="card-header bg-gradient-to-r from-slate-100 to-gray-100">
                <h3 className="text-xl font-semibold text-slate-900 flex items-center">
                  <BarChart3 className="w-6 h-6 text-slate-600 mr-3" />
                  Product Specifications
                </h3>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="bg-white/60 rounded-lg p-3 border border-slate-200 flex justify-between items-center">
                      <span className="font-medium text-slate-700">{spec.name}</span>
                      <span className="text-slate-600 bg-white px-3 py-1 rounded border border-slate-200">
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
              <div className="card-body text-center p-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 mr-3 text-primary-600" />
                  Ready to Experience Premium Quality?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary text-lg px-8 py-4">
                    Add to Cart - {product.currency} {product.price}
                  </button>
                  <button className="btn-secondary text-lg px-8 py-4">
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
