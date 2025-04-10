
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MapView from '../components/MapView';
import Footer from '../components/Footer';
import { categories, locations } from '../lib/data';

const MapViewPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        categories={categories}
        locations={locations}
      />

      {/* Map View Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Waste Asset Map
          </h2>
          
          <div className="flex items-center">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-eco-green-500"
              >
                <option value="All">All Categories</option>
                {categories.filter(cat => cat !== 'All').map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
            </div>

            <div className="relative ml-4">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-eco-green-500"
              >
                <option value="All">All Locations</option>
                {locations.filter(loc => loc !== 'All').map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-[600px]">
          <MapView />
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <i className="fas fa-info-circle text-blue-400"></i>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                The map view shows all available waste items near your location. Click on a pin to see details about each item.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MapViewPage;
