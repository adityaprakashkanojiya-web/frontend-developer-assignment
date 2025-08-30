'use client';

import { useState } from 'react';
import { Filter, Eye, EyeOff } from 'lucide-react';

interface SectionFilterProps {
  sections: string[];
  onToggleSection: (section: string) => void;
  visibleSections: string[];
}

export default function SectionFilter({ sections, onToggleSection, visibleSections }: SectionFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = (section: string) => {
    onToggleSection(section);
  };

  const showAllSections = () => {
    sections.forEach(section => {
      if (!visibleSections.includes(section)) {
        onToggleSection(section);
      }
    });
  };

  const hideAllSections = () => {
    sections.forEach(section => {
      if (visibleSections.includes(section)) {
        onToggleSection(section);
      }
    });
  };

  return (
    <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-secondary-100 p-4 z-10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-secondary-900">Section Filter</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-3 py-2 bg-secondary-100 hover:bg-secondary-200 rounded-lg transition-colors duration-200"
        >
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filter</span>
        </button>
      </div>

      {isOpen && (
        <div className="space-y-3">
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={showAllSections}
              className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors duration-200"
            >
              Show All
            </button>
            <button
              onClick={hideAllSections}
              className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium hover:bg-secondary-200 transition-colors duration-200"
            >
              Hide All
            </button>
          </div>

          {/* Section Toggles */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {sections.map((section) => {
              const isVisible = visibleSections.includes(section);
              return (
                <button
                  key={section}
                  onClick={() => toggleSection(section)}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                    isVisible
                      ? 'border-primary-200 bg-primary-50 text-primary-800'
                      : 'border-secondary-200 bg-secondary-50 text-secondary-600 hover:bg-secondary-100'
                  }`}
                >
                  <span className="text-sm font-medium">{section}</span>
                  {isVisible ? (
                    <Eye className="w-4 h-4 text-primary-600" />
                  ) : (
                    <EyeOff className="w-4 h-4 text-secondary-500" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
