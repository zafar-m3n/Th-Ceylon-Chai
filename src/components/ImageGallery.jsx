import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImageGallery = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-50 shadow-lg">
        <motion.img
          key={selectedImage}
          src={images[selectedImage]}
          alt={`${productName} - Image ${selectedImage + 1}`}
          loading="lazy"
          width="960"
          height="720"
          className="w-full h-96 lg:h-[500px] object-cover"
          style={{
            background: 'linear-gradient(135deg, #f59e0b, #ea580c)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative overflow-hidden rounded-xl bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30 ${
              selectedImage === index
                ? 'ring-2 ring-orange-500 ring-offset-2 shadow-lg'
                : 'hover:ring-2 hover:ring-gray-300 hover:shadow-md'
            }`}
          >
            <img
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              loading="lazy"
              width="960"
              height="720"
              className="w-full h-20 lg:h-24 object-cover"
              style={{
                background: 'linear-gradient(135deg, #f59e0b, #ea580c)'
              }}
            />
            {selectedImage === index && (
              <div className="absolute inset-0 bg-orange-500/20 backdrop-blur-[1px]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;