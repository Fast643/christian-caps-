import React from 'react';

export function FAQ() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">What materials are used in your caps?</h3>
          <p className="text-gray-600">Our caps are made from premium quality cotton blend materials, ensuring both comfort and durability. The PRAY lettering is crafted with high-quality gold embroidery.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">How long does shipping take?</h3>
          <p className="text-gray-600">We offer free worldwide shipping with all orders typically dispatched within 3 business days. Delivery times vary by location but usually take 5-12 business days.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Are the caps adjustable?</h3>
          <p className="text-gray-600">Yes, all our caps feature an adjustable strap at the back, making them one-size-fits-most and ensuring a comfortable fit for everyone.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Do you offer returns?</h3>
          <p className="text-gray-600">Yes, we offer a 30-day return policy for unused items in original condition. Contact us for return shipping instructions.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Are bulk orders available?</h3>
          <p className="text-gray-600">Yes, we offer special pricing for bulk orders of 10 or more caps. Contact us directly for bulk order inquiries and pricing.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">How do I care for my cap?</h3>
          <p className="text-gray-600">Hand wash in cold water with mild detergent. Air dry only. Do not machine wash or dry to preserve the quality of the embroidery.</p>
        </div>
      </div>
    </div>
  );
}