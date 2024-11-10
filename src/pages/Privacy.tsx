import React from 'react';

export function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">We collect information you provide directly to us when making a purchase or signing up for our newsletter, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Name and contact information</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely through our payment provider)</li>
              <li>Email address for order updates and newsletters</li>
              <li>Shopping preferences and history</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>To process and fulfill your orders</li>
              <li>To send order confirmations and updates</li>
              <li>To respond to your questions and requests</li>
              <li>To improve our products and services</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
            <p className="text-gray-600">We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve your shopping experience</li>
              <li>Provide personalized content and ads</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
            <p className="text-gray-600">We do not sell or share your personal information with third parties except as necessary to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Fulfill your orders (shipping providers)</li>
              <li>Process payments (payment processors)</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and prevent fraud</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-600">We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. All payment information is encrypted and processed securely.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-600">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-gray-600">We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600">If you have any questions about our Privacy Policy, please contact us at info@christiancaps.store</p>
          </section>
        </div>
      </div>
    </div>
  );
}