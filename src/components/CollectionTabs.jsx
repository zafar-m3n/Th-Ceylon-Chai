import React from 'react';
import { motion } from 'framer-motion';
import { collections } from '../data/collections';

const CollectionTabs = ({ activeCollection, onCollectionChange }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {collections.map((collection) => (
        <motion.button
          key={collection.slug}
          onClick={() => onCollectionChange(collection.slug)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:ring-offset-2 ${
            activeCollection === collection.slug
              ? 'bg-orange-500 text-white shadow-lg border border-orange-500'
              : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-200 hover:border-orange-200'
          }`}
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.95 }}
        >
          {collection.name}
        </motion.button>
      ))}
    </div>
  );
};

export default CollectionTabs;