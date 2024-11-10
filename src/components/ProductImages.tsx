import React from 'react';

export function ProductImages() {
  return (
    <div className="space-y-6">
      <img 
        src="https://items-images-production.s3.us-west-2.amazonaws.com/files/102ac010e3e2b38294690a4a97748eb83f60815f/original.jpeg"
        alt="Jesus PRAY Hat - Front View" 
        className="w-full rounded-lg shadow-lg object-cover aspect-square"
      />
      <div className="grid grid-cols-2 gap-4">
        <img 
          src="https://items-images-production.s3.us-west-2.amazonaws.com/files/102ac010e3e2b38294690a4a97748eb83f60815f/original.jpeg"
          alt="Jesus PRAY Hat - Side View" 
          className="rounded-lg shadow-lg object-cover aspect-square"
        />
        <img 
          src="https://items-images-production.s3.us-west-2.amazonaws.com/files/102ac010e3e2b38294690a4a97748eb83f60815f/original.jpeg"
          alt="Jesus PRAY Hat - Back View" 
          className="rounded-lg shadow-lg object-cover aspect-square"
        />
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-blue-800 font-medium text-center">Available in Black, Navy, and White - Choose your color on checkout!</p>
      </div>
    </div>
  );
}