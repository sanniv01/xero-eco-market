
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Search, Tag, MapPin, Bell, User } from 'lucide-react';

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
          <Link to="/" className="text-2xl font-bold text-eco-green-600 flex items-center">
            <svg 
              className="w-8 h-8 mr-2" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M21 8C19.8954 8 19 7.10457 19 6C19 4.89543 19.8954 4 21 4C22.1046 4 23 4.89543 23 6C23 7.10457 22.1046 8 21 8Z" 
                className="fill-eco-green-500"
              />
              <path 
                d="M3 6.5C3 9.42595 4.0914 11.9153 5.75531 13.7931C7.41922 15.671 9.62304 17 12 17C12.7393 17 13.4557 16.8972 14.1394 16.7074C12.9978 15.5325 12.2103 13.9607 12.0257 12.1993C11.3464 12.3811 10.6195 12.5 9.85714 12.5C8.78104 12.5 7.79214 12.3177 6.9078 12.0051C6.02346 11.6925 5.20245 11.2186 4.54422 10.6262C3.88598 10.0339 3.31259 9.29417 2.91518 8.46178C2.51777 7.62939 2.2984 6.67263 2.2984 5.625L2.25 5.5L3 6.5Z" 
                className="fill-eco-green-600"
              />
              <path 
                d="M12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22ZM12 20C15.866 20 19 16.866 19 13C19 9.13401 15.866 6 12 6C8.13401 6 5 9.13401 5 13C5 16.866 8.13401 20 12 20Z" 
                className="fill-eco-green-500"
              />
            </svg>
            XeroDrop
          </Link>
          <nav className="ml-10 hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-eco-green-600 font-medium">Home</Link>
            <Link to="/browse" className="text-gray-700 hover:text-eco-green-600 font-medium">Browse</Link>
            <Link to="/sell" className="text-gray-700 hover:text-eco-green-600 font-medium">Sell</Link>
            <Link to="/map-view" className="text-gray-700 hover:text-eco-green-600 font-medium">Map View</Link>
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
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <button 
              className="flex items-center text-gray-700 hover:text-eco-green-600 cursor-pointer whitespace-nowrap"
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            >
              <Tag className="h-4 w-4 mr-1" />
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
              <MapPin className="h-4 w-4 mr-1" />
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
            <Bell className="h-4 w-4" />
          </button>
          
          <div className="flex items-center">
            <div className="w-10 h-10 bg-eco-green-100 rounded-full flex items-center justify-center text-eco-green-600">
              <User className="h-5 w-5" />
            </div>
            <div className="ml-2 hidden md:block">
              <div className="text-sm font-medium">EcoUser</div>
              <div className="text-xs text-eco-green-600 flex items-center">
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
