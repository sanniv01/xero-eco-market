
import React from 'react';
import { MapPin } from 'lucide-react';

const MapView = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[600px] relative">
      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
        <img 
          src="public/lovable-uploads/3409ed56-3613-4765-9cd8-556bab85a6db.png" 
          alt="Map Background" 
          className="w-full h-full object-cover opacity-50"
        />
        
        <div className="absolute inset-0">
          {/* Sample pins with improved spacing and hover effects */}
          <div className="absolute" style={{ top: '30%', left: '40%' }}>
            <div className="relative group cursor-pointer transform transition-transform hover:scale-110">
              <MapPin className="h-8 w-8 text-eco-green-600 drop-shadow-lg" />
              <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block">
                <div className="bg-white p-3 rounded-lg shadow-lg text-xs whitespace-nowrap space-y-1">
                  <strong className="block text-sm">Reclaimed Wood Planks</strong>
                  <p className="text-gray-600">$15 - Seattle (3.2 mi)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute" style={{ top: '45%', left: '60%' }}>
            <div className="relative group cursor-pointer transform transition-transform hover:scale-110">
              <MapPin className="h-8 w-8 text-eco-green-600 drop-shadow-lg" />
              <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block">
                <div className="bg-white p-3 rounded-lg shadow-lg text-xs whitespace-nowrap space-y-1">
                  <strong className="block text-sm">Fabric Scraps Bundle</strong>
                  <p className="text-gray-600">$8 - New York (1.5 mi)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute" style={{ top: '55%', left: '25%' }}>
            <div className="relative group cursor-pointer transform transition-transform hover:scale-110">
              <MapPin className="h-8 w-8 text-eco-green-600 drop-shadow-lg" />
              <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block">
                <div className="bg-white p-3 rounded-lg shadow-lg text-xs whitespace-nowrap space-y-1">
                  <strong className="block text-sm">Metal Scrap Collection</strong>
                  <p className="text-gray-600">$22 - Chicago (4.7 mi)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-2">
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <i className="fas fa-plus text-gray-700"></i>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <i className="fas fa-minus text-gray-700"></i>
            </button>
            <div className="border-t border-gray-200 my-1 w-full"></div>
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <i className="fas fa-location-arrow text-gray-700"></i>
            </button>
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-md text-center">
            <i className="fas fa-map-marked-alt text-5xl text-eco-green-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Interactive Map View</h3>
            <p className="text-gray-600 mb-4">
              Explore available waste items as pins on this interactive map. 
              Click on a pin to view details and request pickup.
            </p>
            <button className="bg-eco-green-600 hover:bg-eco-green-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200">
              <i className="fas fa-map-pin mr-2"></i>
              Find Nearby Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;

