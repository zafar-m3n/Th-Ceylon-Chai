import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Brewing from './pages/Brewing';
import Contact from './pages/Contact';
import SellWithUs from './pages/SellWithUs';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetails />} />
            <Route path="/brewing" element={<Brewing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sell" element={<SellWithUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;