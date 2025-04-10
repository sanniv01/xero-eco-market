
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { categories, locations } from '../lib/data';

const Sell = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Your waste item has been listed successfully!');
  };

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

      {/* Sell Form Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            List Your Waste Item
          </h2>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Item Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-eco-green-500 focus:border-eco-green-500"
                    placeholder="e.g., Reclaimed Wood Planks"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    id="category"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-eco-green-500 focus:border-eco-green-500"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    required
                  >
                    <option disabled value="All">Select a category</option>
                    {categories.filter(cat => cat !== 'All').map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-eco-green-500 focus:border-eco-green-500"
                    rows="4"
                    placeholder="Describe your item, its condition, and potential uses..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-eco-green-500 focus:border-eco-green-500"
                    placeholder="0.00"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <select
                    id="location"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-eco-green-500 focus:border-eco-green-500"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    required
                  >
                    <option disabled value="All">Select a location</option>
                    {locations.filter(loc => loc !== 'All').map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    {imagePreview ? (
                      <div className="text-center">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="mx-auto h-32 object-cover rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setImageFile(null);
                            setImagePreview('');
                          }}
                          className="mt-2 text-sm text-red-600 hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-1 text-center">
                        <i className="fas fa-cloud-upload-alt text-gray-400 text-3xl mb-3"></i>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-eco-green-600 hover:text-eco-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-eco-green-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={handleImageChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-sm text-gray-700 mb-3">Environmental Impact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">
                        Estimated CO₂ Savings (kg)
                      </label>
                      <input
                        type="number"
                        className="w-full px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-eco-green-500 focus:border-eco-green-500"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">
                        Estimated Water Savings (L)
                      </label>
                      <input
                        type="number"
                        className="w-full px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-eco-green-500 focus:border-eco-green-500"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-eco-green-600 hover:bg-eco-green-700 text-white py-3 rounded-lg font-medium cursor-pointer whitespace-nowrap flex items-center justify-center"
                >
                  <i className="fas fa-plus-circle mr-2"></i>
                  List Waste Item
                </button>
              </div>
            </form>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <i className="fas fa-info-circle text-blue-400"></i>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  Listing your waste items helps keep them out of landfills and contributes to a circular economy. 
                  You'll also earn eco-points with each successful transaction!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sell;
