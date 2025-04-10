
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">XeroDrop</h3>
            <p className="text-gray-400 text-sm">
              The world's first marketplace for sustainable waste assets. 
              Join the circular economy revolution.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white cursor-pointer">Browse Marketplace</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Sell Your Waste</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Map View</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Success Stories</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Environmental Impact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white cursor-pointer">Reuse Ideas</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Sustainability Guide</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Business Partners</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer">Carbon Footprint Calculator</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                <span>123 Green Street, Eco City, EC 12345</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2"></i>
                <span>hello@xerodrop.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-2"></i>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Our Partners</h4>
              <div className="flex space-x-4">
                <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
                <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
                <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 XeroDrop. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white cursor-pointer">Privacy Policy</a>
            <a href="#" className="hover:text-white cursor-pointer">Terms of Service</a>
            <a href="#" className="hover:text-white cursor-pointer">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
