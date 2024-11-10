import React from 'react';
import { Truck, Clock, Globe } from 'lucide-react';

export function Shipping() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">Shipping Information</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section className="border-b pb-6">
            <div className="flex items-center mb-4">
              <Globe className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-semibold">Free Worldwide Shipping</h2>
            </div>
            <p className="text-gray-600">We're proud to offer free shipping to all our customers worldwide. No minimum purchase required!</p>
          </section>
          
          <section className="border-b pb-6">
            <div className="flex items-center mb-4">
              <Clock className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-semibold">Processing Time</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Orders are typically processed within 1-2 business days</li>
              <li>• All orders are dispatched within 3 business days</li>
              <li>• You'll receive a tracking number once your order ships</li>
            </ul>
          </section>
          
          <section className="border-b pb-6">
            <div className="flex items-center mb-4">
              <Truck className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-semibold">Delivery Times</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">United Kingdom:</h3>
                <p className="text-gray-600">2-4 business days</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Europe:</h3>
                <p className="text-gray-600">4-7 business days</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">United States & Canada:</h3>
                <p className="text-gray-600">5-10 business days</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Rest of World:</h3>
                <p className="text-gray-600">7-14 business days</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• All orders are shipped via tracked delivery</li>
              <li>• No customs or import fees - we handle everything</li>
              <li>• Package insurance included at no extra cost</li>
              <li>• Contact us if your order hasn't arrived within the expected timeframe</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}