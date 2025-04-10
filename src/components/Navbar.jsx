
import React, { useState } from 'react';

const Navbar = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  selectedLocation, 
  setSelectedLocation,
  categories,
  locations
}) => {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-eco-green-600">
            <i className="fas fa-leaf mr-2"></i>
            XeroDrop
          </h1>
          <nav className="ml-10 hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-eco-green-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-eco-green-600 font-medium">Browse</a>
            <a href="#" className="text-gray-700 hover:text-eco-green-600 font-medium">Sell</a>
            <a href="#" className="text-gray-700 hover:text-eco-green-600 font-medium">Map View</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="flex items-center bg-gray-100 rounded-full p-1 pl-4 pr-2">
              <input 
                type="text" 
                placeholder="Search items..."
                className="bg-transparent border-none outline-none text-sm w-40 md:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-eco-green-500 text-white p-2 rounded-full cursor-pointer whitespace-nowrap">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          
          <div className="relative">
            <button 
              className="flex items-center text-gray-700 hover:text-eco-green-600 cursor-pointer whitespace-nowrap"
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            >
              <i className="fas fa-tag mr-1"></i>
              <span className="hidden md:inline">{selectedCategory}</span>
              <i className="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            
            {showCategoryDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                {categories.map(category => (
                  <button
                    key={category}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowCategoryDropdown(false);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="relative">
            <button 
              className="flex items-center text-gray-700 hover:text-eco-green-600 cursor-pointer whitespace-nowrap"
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            >
              <i className="fas fa-map-marker-alt mr-1"></i>
              <span className="hidden md:inline">{selectedLocation}</span>
              <i className="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            
            {showLocationDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                {locations.map(location => (
                  <button
                    key={location}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                    onClick={() => {
                      setSelectedLocation(location);
                      setShowLocationDropdown(false);
                    }}
                  >
                    {location}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button className="bg-gray-100 p-2 rounded-full text-gray-700 hover:bg-gray-200 cursor-pointer whitespace-nowrap">
            <i className="fas fa-bell"></i>
          </button>
          
          <div className="flex items-center">
            <div className="w-10 h-10 bg-eco-green-100 rounded-full flex items-center justify-center text-eco-green-600">
              <i className="fas fa-user"></i>
            </div>
            <div className="ml-2 hidden md:block">
              <div className="text-sm font-medium">EcoUser</div>
              <div className="text-xs text-eco-green-600">
                <i className="fas fa-award mr-1"></i>
                245 Points
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
