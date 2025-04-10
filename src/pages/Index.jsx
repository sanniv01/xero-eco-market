
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FilterSidebar from '../components/FilterSidebar';
import ItemGrid from '../components/ItemGrid';
import MapView from '../components/MapView';
import AiSuggestions from '../components/AiSuggestions';
import Footer from '../components/Footer';
import { 
  categories, 
  locations, 
  wasteItems, 
  calculateEnvironmentalImpact 
} from '../lib/data';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [distance, setDistance] = useState(25);
  const [showMapView, setShowMapView] = useState(false);
  
  const environmentalStats = calculateEnvironmentalImpact();

  // Filter items based on selected category and location
  const filteredItems = wasteItems.filter(item => {
    // Filter by category
    if (selectedCategory !== 'All' && item.category !== selectedCategory) {
      return false;
    }
    
    // Filter by location
    if (selectedLocation !== 'All' && item.location !== selectedLocation) {
      return false;
    }
    
    // Filter by price
    if (item.price < priceRange[0] || item.price > priceRange[1]) {
      return false;
    }
    
    // Filter by distance
    if (item.distance > distance) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation & Header */}
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

      {/* Hero Section */}
      <Hero environmentalStats={environmentalStats} />

      {/* Main Marketplace Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Available Waste Assets
          </h2>
          
          <div className="flex items-center space-x-4">
            <button 
              className={`flex items-center px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap ${!showMapView ? 'bg-eco-green-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
              onClick={() => setShowMapView(false)}
            >
              <i className="fas fa-th-large mr-2"></i>
              Grid View
            </button>
            <button 
              className={`flex items-center px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap ${showMapView ? 'bg-eco-green-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
              onClick={() => setShowMapView(true)}
            >
              <i className="fas fa-map-marked-alt mr-2"></i>
              Map View
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <FilterSidebar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            distance={distance}
            setDistance={setDistance}
          />
          
          {/* Main Content Area */}
          <div className="flex-1">
            {!showMapView ? (
              <ItemGrid items={filteredItems} />
            ) : (
              <MapView />
            )}
          </div>
        </div>
      </section>

      {/* AI Suggestions Section */}
      <AiSuggestions />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
