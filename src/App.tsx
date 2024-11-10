import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Star, Truck, Shield, Clock, Facebook, Twitter, Instagram, Mail, MapPin, CheckCircle, Cross } from 'lucide-react';
import { CTAButton } from './components/CTAButton';
import { ProductImages } from './components/ProductImages';
import { FAQ } from './components/FAQ';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Shipping } from './pages/Shipping';

function App() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);
  const [stockCount, setStockCount] = useState(12);
  const [recentBuyers] = useState([
    "John from London",
    "Maria from New York",
    "David from Sydney",
    "Sarah from Toronto"
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 24 * 60 * 60);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stockTimer = setInterval(() => {
      setStockCount(prev => {
        if (prev > 3) {
          const decrease = Math.random() > 0.7;
          return decrease ? prev - 1 : prev;
        }
        return prev;
      });
    }, 30000);
    return () => clearInterval(stockTimer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-black text-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link to="/">
              <Cross className="text-white h-8 w-8" />
            </Link>
            <h1 className="text-2xl md:text-4xl font-bold text-center">christiancaps.store</h1>
            <div className="w-8"></div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <>
              <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Wear Your Faith with Bold Elegance</h2>
                  <p className="text-xl md:text-2xl mb-8">Premium Jesus PRAY Christian Baseball Cap</p>
                  <div className="bg-red-600 text-white inline-block px-4 py-2 rounded-lg animate-pulse">
                    Limited Time Offer - Free Worldwide Shipping
                  </div>
                </div>
              </div>

              <main className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <ProductImages />

                  <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-3xl font-bold">£21.95</h3>
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="fill-current" size={20} />
                          ))}
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-yellow-800 font-medium">Stock Level:</span>
                          <span className="text-yellow-800 font-bold">{stockCount} left</span>
                        </div>
                        <div className="w-full bg-yellow-200 rounded-full h-2 mt-2">
                          <div 
                            className="bg-yellow-500 rounded-full h-2 transition-all duration-500"
                            style={{ width: `${(stockCount / 20) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="bg-red-100 p-4 rounded-lg mb-6">
                        <p className="text-red-600 font-semibold text-center">Special Offer Ends In:</p>
                        <p className="text-2xl font-bold text-center">{formatTime(timeLeft)}</p>
                      </div>

                      <CTAButton />

                      <ul className="space-y-4 mt-6">
                        <li className="flex items-center">
                          <CheckCircle className="text-green-500 mr-2" />
                          Premium quality construction
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="text-green-500 mr-2" />
                          Elegant gold lettering
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="text-green-500 mr-2" />
                          Adjustable fit for comfort
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="text-green-500 mr-2" />
                          Free worldwide shipping
                        </li>
                      </ul>

                      <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="flex flex-col items-center text-center">
                          <Truck className="text-gray-600 mb-2" />
                          <span className="text-sm">Free Shipping</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <Shield className="text-gray-600 mb-2" />
                          <span className="text-sm">Secure Payment</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <Clock className="text-gray-600 mb-2" />
                          <span className="text-sm">24/7 Support</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h4 className="font-bold mb-4">Recent Orders:</h4>
                      <div className="space-y-2">
                        {recentBuyers.map((buyer, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            {buyer} purchased a Jesus PRAY Hat
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <FAQ />

                <div className="mt-12 grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <p className="flex items-center">
                        <MapPin className="mr-2" />
                        Kiosk 2, Trentham Shopping Village, ST4 8AX
                      </p>
                      <p className="flex items-center">
                        <Mail className="mr-2" />
                        <Link to="/contact" className="text-blue-600 hover:underline">
                          Contact Us
                        </Link>
                      </p>
                      <div className="flex space-x-4">
                        <a href="https://www.facebook.com/philip.booth.54" className="text-blue-600 hover:text-blue-800">
                          <Facebook />
                        </a>
                        <a href="https://x.com/jandphats" className="text-gray-800 hover:text-gray-600">
                          <Twitter />
                        </a>
                        <a href="https://www.instagram.com/philhats50/" className="text-pink-600 hover:text-pink-800">
                          <Instagram />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Why Choose Our Jesus PRAY Hat?</h3>
                    <ul className="space-y-2">
                      <li>✓ Share your faith with style</li>
                      <li>✓ Premium quality materials</li>
                      <li>✓ Comfortable all-day wear</li>
                      <li>✓ Perfect gift for Christians</li>
                      <li>✓ 100% satisfaction guaranteed</li>
                    </ul>
                  </div>
                </div>
              </main>
            </>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>

        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold mb-4">About Us</h4>
                <p className="text-gray-400">Premium Christian caps and headwear for expressing your faith with style.</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link to="/shipping" className="text-gray-400 hover:text-white">Shipping Info</Link></li>
                  <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                  <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/philip.booth.54" className="text-gray-400 hover:text-white">
                    <Facebook />
                  </a>
                  <a href="https://x.com/jandphats" className="text-gray-400 hover:text-white">
                    <Twitter />
                  </a>
                  <a href="https://www.instagram.com/philhats50/" className="text-gray-400 hover:text-white">
                    <Instagram />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-4">Newsletter</h4>
                <p className="text-gray-400 mb-2">Subscribe for updates and exclusive offers!</p>
                <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 rounded bg-gray-800 text-white" />
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p>© 2024 christiancaps.store - A J and P Hats Company</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;