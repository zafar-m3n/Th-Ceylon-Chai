import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TestimonialStrip = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "The passion tea is absolutely divine! The flavor is so vibrant and refreshing.",
      author: "Sarah M.",
      rating: 5
    },
    {
      id: 2, 
      text: "Best chai masala I've ever tasted. The spice blend is perfect!",
      author: "Raj P.",
      rating: 5
    },
    {
      id: 3,
      text: "Love the quality of T&H teas. You can taste the Ceylon heritage in every cup.",
      author: "Emma K.",
      rating: 5
    },
    {
      id: 4,
      text: "The chocolate tea is my guilty pleasure. Rich, indulgent, and so comforting.",
      author: "Michael R.",
      rating: 5
    }
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="bg-orange-50/30 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h3 className="font-serif mb-4">
            What Our Tea Lovers Say
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of tea enthusiasts worldwide
          </p>
        </div>

        <div className="relative mask-fade-x">
          <motion.div
            className="flex space-x-6"
            animate={prefersReducedMotion ? {} : { x: [-1200, 0] }}
            transition={
              prefersReducedMotion 
                ? {} 
                : {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                  }
            }
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-gray-100/60"
              >
                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-gray-700 italic mb-6 leading-relaxed text-sm">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="font-semibold text-gray-900 text-sm">
                  {testimonial.author}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialStrip;