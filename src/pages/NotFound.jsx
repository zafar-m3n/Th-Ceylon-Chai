import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Container from '../components/Container';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center bg-gray-50"
    >
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <Icon icon="mdi:tea-outline" className="h-24 w-24 text-orange-500 mx-auto mb-6" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-4">
              404
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
              Page Not Found
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Looks like this page has steeped away! The page you're looking for 
              might have been moved, deleted, or doesn't exist.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center"
          >
            <Button href="/" size="lg">
              <Icon icon="mdi:home" className="h-5 w-5 mr-2" />
              Go Home
            </Button>
            <Button href="/shop" variant="outline" size="lg">
              <Icon icon="mdi:tea" className="h-5 w-5 mr-2" />
              Shop Teas
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-gray-500 mb-4">
              Need help finding something specific?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/about" className="text-orange-500 hover:text-orange-600 transition-colors">
                About Us
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/contact" className="text-orange-500 hover:text-orange-600 transition-colors">
                Contact Us
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/brewing" className="text-orange-500 hover:text-orange-600 transition-colors">
                Brewing Guide
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/sell" className="text-orange-500 hover:text-orange-600 transition-colors">
                Sell With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default NotFound;