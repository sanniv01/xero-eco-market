
import React from 'react';
import { categories } from '../lib/data';

const FilterSidebar = ({ 
  selectedCategory,
  setSelectedCategory,
  priceRange, 
  setPriceRange, 
  distance, 
  setDistance
}) => {
  return (
    <div className="w-full md:w-64 bg-white rounded-lg shadow-sm p-6">
      <h3 className="font-medium text-lg mb-4">Filters</h3>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category} className="flex items-center">
              <input
                type="radio"
                id={`category-${category}`}
                name="category"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="h-4 w-4 text-eco-green-600 focus:ring-eco-green-500 border-gray-300 rounded"
              />
              <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">${priceRange[0]}</span>
          <span className="text-sm text-gray-500">${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Distance (miles)</label>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">0</span>
          <span className="text-sm text-gray-500">{distance} miles</span>
        </div>
        <input
          type="range"
          min="1"
          max="50"
          value={distance}
          onChange={(e) => setDistance(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Environmental Impact</label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="co2"
              className="h-4 w-4 text-eco-green-600 focus:ring-eco-green-500 border-gray-300 rounded"
            />
            <label htmlFor="co2" className="ml-2 text-sm text-gray-700">
              CO₂ Reduction
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="water"
              className="h-4 w-4 text-eco-green-600 focus:ring-eco-green-500 border-gray-300 rounded"
            />
            <label htmlFor="water" className="ml-2 text-sm text-gray-700">
              Water Conservation
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="plastic"
              className="h-4 w-4 text-eco-green-600 focus:ring-eco-green-500 border-gray-300 rounded"
            />
            <label htmlFor="plastic" className="ml-2 text-sm text-gray-700">
              Plastic Reduction
            </label>
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="available-now"
              className="h-4 w-4 text-eco-green-600 focus:ring-eco-green-500 border-gray-300 rounded"
              defaultChecked
            />
            <label htmlFor="available-now" className="ml-2 text-sm text-gray-700">
              Available Now
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="pickup-only"
              className="h-4 w-4 text-eco-green-600 focus:ring-eco-green-500 border-gray-300 rounded"
            />
            <label htmlFor="pickup-only" className="ml-2 text-sm text-gray-700">
              Pickup Only
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="delivery"
              className="h-4 w-4 text-eco-green-600 focus:ring-eco-green-500 border-gray-300 rounded"
            />
            <label htmlFor="delivery" className="ml-2 text-sm text-gray-700">
              Delivery Available
            </label>
          </div>
        </div>
      </div>
      
      <button className="mt-8 w-full bg-eco-green-100 text-eco-green-700 hover:bg-eco-green-200 py-2 rounded-lg font-medium cursor-pointer whitespace-nowrap">
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
