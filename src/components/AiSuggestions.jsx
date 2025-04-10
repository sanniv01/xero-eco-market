
import React, { useState } from 'react';
import { reuseProjects } from '../lib/data';

const AiSuggestions = () => {
  const [materialType, setMaterialType] = useState('Wood');
  const [description, setDescription] = useState('');

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            What Can You Make?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered suggestion engine helps you discover creative ways to reuse waste materials.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h3 className="font-medium text-lg mb-4">Get Creative Reuse Ideas</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Material Type
                </label>
                <div className="relative">
                  <select 
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-eco-green-500 focus:border-eco-green-500 sm:text-sm rounded-md"
                    value={materialType}
                    onChange={(e) => setMaterialType(e.target.value)}
                  >
                    <option>Wood</option>
                    <option>Fabric</option>
                    <option>Metal</option>
                    <option>Plastic</option>
                    <option>Food Waste</option>
                    <option>Paper</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Describe Your Material (optional)
                </label>
                <textarea 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-eco-green-500 focus:border-eco-green-500"
                  rows={4}
                  placeholder="E.g., I have wooden pallets from shipping..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              
              <button className="w-full bg-eco-green-600 hover:bg-eco-green-700 text-white py-2 rounded-lg font-medium cursor-pointer whitespace-nowrap">
                <i className="fas fa-lightbulb mr-2"></i>
                Get Ideas
              </button>
            </div>
            
            <div className="md:w-1/2 border-t pt-6 md:pt-0 md:border-t-0 md:border-l md:pl-6">
              <h3 className="font-medium text-lg mb-4">Popular Reuse Projects</h3>
              
              <div className="space-y-4">
                {reuseProjects.map(project => (
                  <div key={project.id} className="flex items-start">
                    <div className={`flex-shrink-0 h-10 w-10 rounded-full bg-eco-${project.color}-100 flex items-center justify-center text-eco-${project.color}-600`}>
                      <i className={`fas fa-${project.icon}`}></i>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium">{project.title}</h4>
                      <p className="text-xs text-gray-500">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSuggestions;
