import React from 'react';
import { ShoppingCart } from 'lucide-react';

export function CTAButton() {
  return (
    <a 
      href="https://square.link/u/6qgnXlLR"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-4 px-6 rounded-lg text-center transition duration-300 transform hover:scale-105 animate-[pulse_2s_ease-in-out_infinite]"
    >
      <div className="flex items-center justify-center space-x-2">
        <ShoppingCart className="w-6 h-6" />
        <span>FREE Worldwide Shipping - Order Now!</span>
      </div>
    </a>
  );
}