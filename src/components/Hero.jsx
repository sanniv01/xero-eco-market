
import React from 'react';

const Hero = ({ environmentalStats }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://public.readdy.ai/ai/img_res/4a984bb6330a5c897f2a2ad79dc7961e.jpg"
          alt="Sustainable waste marketplace" 
          className="w-full h-full object-cover object-top"
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Turn Waste into Worth
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The world's first marketplace for sustainable waste assets. 
            Buy and sell reusable materials, reduce your carbon footprint, 
            and join the circular economy revolution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-eco-green-600 hover:bg-eco-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition duration-200 flex items-center justify-center cursor-pointer whitespace-nowrap">
              <i className="fas fa-plus-circle mr-2"></i>
              List Waste
            </button>
            <button className="bg-white hover:bg-gray-100 text-eco-green-600 border border-eco-green-600 px-6 py-3 rounded-lg font-medium shadow-sm transition duration-200 flex items-center justify-center cursor-pointer whitespace-nowrap">
              <i className="fas fa-search mr-2"></i>
              Browse Items
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-sm eco-stat-card">
              <div className="text-2xl font-bold text-eco-green-600">{environmentalStats.co2Saved} kg</div>
              <div className="text-sm text-gray-600">CO₂ Saved</div>
            </div>
            <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-sm eco-stat-card">
              <div className="text-2xl font-bold text-eco-blue-600">{environmentalStats.waterSaved} L</div>
              <div className="text-sm text-gray-600">Water Saved</div>
            </div>
            <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-sm eco-stat-card">
              <div className="text-2xl font-bold text-eco-amber-600">{environmentalStats.itemsListed}</div>
              <div className="text-sm text-gray-600">Items Listed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
