import React from 'react';

export function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600">By accessing and placing an order with christiancaps.store, you confirm that you are in agreement with and bound by the terms and conditions contained herein.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Product Information</h2>
            <p className="text-gray-600">We strive to display our products as accurately as possible. However, actual colors may vary depending on your device's display settings. We reserve the right to modify product specifications without notice.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Pricing and Payment</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>All prices are listed in GBP and include VAT where applicable</li>
              <li>We reserve the right to modify prices without prior notice</li>
              <li>Payment is required at the time of order placement</li>
              <li>We accept major credit cards and secure online payment methods</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Shipping and Delivery</h2>
            <p className="text-gray-600">We offer free worldwide shipping on all orders. Delivery times vary by location. While we strive to meet estimated delivery times, delays may occur due to circumstances beyond our control.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Returns and Refunds</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>30-day return policy for unused items in original condition</li>
              <li>Return shipping costs are the responsibility of the customer</li>
              <li>Refunds will be processed within 14 days of receiving the returned item</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="text-gray-600">All content, designs, and trademarks on this website are the property of christiancaps.store and protected by applicable intellectual property laws.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Privacy Policy</h2>
            <p className="text-gray-600">Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p className="text-gray-600">For any questions regarding these terms, please contact us at info@christiancaps.store</p>
          </section>
        </div>
      </div>
    </div>
  );
}