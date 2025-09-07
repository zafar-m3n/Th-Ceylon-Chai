import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import Button from './Button';
import Container from './Container';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Ceylon Heritage in Every Cup",
      subtitle: "Discover authentic flavors from Sri Lanka's finest tea gardens",
      image: "https://picsum.photos/seed/ceylon-heritage/1920/1080",
      cta: { text: "Shop Ceylon Teas", link: "/shop" }
    },
    {
      id: 2,
      title: "Vibrant Fruity Blends", 
      subtitle: "Tropical passion fruits and citrusy delights await",
      image: "https://picsum.photos/seed/fruity-blends/1920/1080",
      cta: { text: "Explore Fruity Teas", link: "/shop?collection=fruity" }
    },
    {
      id: 3,
      title: "Authentic Spiced Chai",
      subtitle: "Traditional masala blends with aromatic spices",
      image: "https://picsum.photos/seed/spiced-chai/1920/1080",
      cta: { text: "Discover Chai Blends", link: "/shop?collection=spiced-chai-blends" }
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div 
      className="relative h-[75vh] sm:h-[85vh] lg:h-[95vh] overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlideData.id}
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src={currentSlideData.image}
            alt={currentSlideData.title}
            loading="lazy"
            width="1920"
            height="1080"
            className="w-full h-full object-cover"
            style={{
              background: 'linear-gradient(135deg, #f59e0b, #ea580c)'
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <Container className="relative h-full flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlideData.id}`}
            className="max-w-4xl text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            <motion.h1 
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-balance"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {currentSlideData.title}
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl mb-10 text-gray-100 leading-relaxed max-w-2xl text-balance"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {currentSlideData.subtitle}
            </motion.p>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                href={currentSlideData.cta.link}
                size="xl"
                className="bg-orange-500 hover:bg-orange-600 shadow-2xl"
              >
                {currentSlideData.cta.text}
              </Button>
              <Button 
                href="/about"
                variant="ghost"
                size="xl"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              >
                Our Story
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
        aria-label="Previous slide"
      >
        <Icon icon="mdi:chevron-left" className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
        aria-label="Next slide"
      >
        <Icon icon="mdi:chevron-right" className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:ring-offset-2 ${
              index === currentSlide
                ? 'bg-orange-500 scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;