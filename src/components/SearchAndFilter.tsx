'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
  categories: string[];
  selectedCategory: string;
}

export default function SearchAndFilter({ onSearch, onFilter, categories, selectedCategory }: SearchAndFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const filterDropdownRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleCategoryFilter = (category: string) => {
    onFilter(category);
    setIsFilterOpen(false);
    // Return focus to filter button after selection
    filterButtonRef.current?.focus();
  };

  const clearFilters = () => {
    setSearchQuery('');
    onSearch('');
    onFilter('');
  };

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation for filter dropdown
  const handleFilterKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsFilterOpen(false);
      filterButtonRef.current?.focus();
    }
  };

  const handleFilterButtonKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFilterOpen(!isFilterOpen);
    } else if (e.key === 'ArrowDown' && !isFilterOpen) {
      e.preventDefault();
      setIsFilterOpen(true);
    }
  };

  return (
    <div className="mb-8" role="search" aria-label="Product search and filtering">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            suppressHydrationWarning
            aria-label="Search products by name, description, or category"
            role="searchbox"
          />
        </div>

        {/* Filter Button */}
        <div className="relative">
          <button
            ref={filterButtonRef}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            onKeyDown={handleFilterButtonKeyDown}
            className="flex items-center space-x-2 px-4 py-3 bg-white border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors duration-200"
            suppressHydrationWarning
            aria-label={`Filter products by category. Currently selected: ${selectedCategory || 'All products'}`}
            aria-expanded={isFilterOpen}
            aria-haspopup="listbox"
            aria-controls="filter-dropdown"
          >
            <Filter className="w-5 h-5 text-secondary-600" aria-hidden="true" />
            <span className="text-secondary-700 font-medium">Filter</span>
            {selectedCategory && (
              <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium">
                {selectedCategory}
              </span>
            )}
          </button>

          {/* Filter Dropdown */}
          {isFilterOpen && (
            <div 
              ref={filterDropdownRef}
              id="filter-dropdown"
              className="absolute right-0 top-full mt-2 w-48 bg-white border border-secondary-200 rounded-lg shadow-lg z-10"
              role="listbox"
              aria-label="Product categories"
              onKeyDown={handleFilterKeyDown}
            >
              <div className="p-3 border-b border-secondary-100">
                <h3 className="font-medium text-secondary-900">Categories</h3>
              </div>
              <div className="p-2">
                <button
                  onClick={() => handleCategoryFilter('')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                    selectedCategory === '' 
                      ? 'bg-primary-100 text-primary-800' 
                      : 'text-secondary-700 hover:bg-secondary-50'
                  }`}
                  suppressHydrationWarning
                  role="option"
                  aria-label="Show all products"
                  aria-selected={selectedCategory === ''}
                >
                  All Products
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryFilter(category)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                      selectedCategory === category 
                        ? 'bg-primary-100 text-primary-800' 
                        : 'text-secondary-700 hover:bg-secondary-50'
                    }`}
                    suppressHydrationWarning
                    role="option"
                    aria-label={`Filter by ${category} category`}
                    aria-selected={selectedCategory === category}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Clear Filters */}
        {(searchQuery || selectedCategory) && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-2 px-4 py-3 text-secondary-600 hover:text-secondary-800 transition-colors duration-200"
            suppressHydrationWarning
            aria-label="Clear all search and filter criteria"
          >
            <X className="w-4 h-4" aria-hidden="true" />
            <span>Clear</span>
          </button>
        )}
      </div>
    </div>
  );
}
