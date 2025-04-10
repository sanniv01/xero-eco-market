
import React from 'react';

const ItemGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-200 item-card">
          <div className="h-48 overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-lg">{item.title}</h3>
              <span className="bg-eco-green-100 text-eco-green-700 text-xs px-2 py-1 rounded-full">
                {item.category}
              </span>
            </div>
            
            <div className="flex justify-between mb-3">
              <div className="text-gray-700">
                <i className="fas fa-map-marker-alt mr-1 text-gray-400"></i>
                {item.location} ({item.distance} mi)
              </div>
              <div className="font-medium text-gray-900">${item.price}</div>
            </div>
            
            <div className="flex space-x-2 mb-4">
              <div className="bg-eco-green-50 text-eco-green-700 text-xs px-2 py-1 rounded-full flex items-center">
                <i className="fas fa-cloud mr-1"></i>
                {item.co2Saved} kg CO₂
              </div>
              <div className="bg-eco-blue-50 text-eco-blue-700 text-xs px-2 py-1 rounded-full flex items-center">
                <i className="fas fa-tint mr-1"></i>
                {item.waterSaved} L water
              </div>
            </div>
            
            <button className="w-full bg-eco-green-600 hover:bg-eco-green-700 text-white py-2 rounded-lg font-medium cursor-pointer whitespace-nowrap">
              Request Pickup
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;
