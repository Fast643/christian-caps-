import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <MapPin className="text-gray-600 mr-4" />
              <div>
                <h3 className="font-semibold">Visit Us</h3>
                <p>Kiosk 2, Trentham Shopping Village, ST4 8AX</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Mail className="text-gray-600 mr-4" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:info@christiancaps.store" className="text-blue-600 hover:underline">
                  info@christiancaps.store
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="text-gray-600 mr-4" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+44 (0) 1234 567890</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/philip.booth.54" className="text-blue-600 hover:text-blue-800">
                <Facebook size={24} />
              </a>
              <a href="https://x.com/jandphats" className="text-gray-800 hover:text-gray-600">
                <Twitter size={24} />
              </a>
              <a href="https://www.instagram.com/philhats50/" className="text-pink-600 hover:text-pink-800">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}