
import React from 'react';

const MapView = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[600px] relative">
      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-map-marked-alt text-5xl text-gray-400 mb-4"></i>
          <p className="text-gray-600">Map view would display available waste items as pins</p>
          <p className="text-gray-500 text-sm mt-2">Using Google Maps API integration</p>
        </div>
      </div>
    </div>
  );
};

export default MapView;
