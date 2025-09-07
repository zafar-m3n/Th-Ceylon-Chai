import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper/modules';
import { Icon } from '@iconify/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      text: "The passion tea is absolutely divine! The flavor is so vibrant and refreshing. I've been ordering from T&H for months now.",
      author: "Sarah M.",
      rating: 5,
      initial: "S"
    },
    {
      id: 2, 
      text: "Best chai masala I've ever tasted. The spice blend is perfect and authentic. Reminds me of home in Sri Lanka.",
      author: "Raj P.",
      rating: 5,
      initial: "R"
    },
    {
      id: 3,
      text: "Love the quality of T&H teas. You can taste the Ceylon heritage in every cup. The chocolate tea is my favorite!",
      author: "Emma K.",
      rating: 5,
      initial: "E"
    },
    {
      id: 4,
      text: "The green tea is so pure and refreshing. Perfect for my morning routine. Great customer service too!",
      author: "Michael R.",
      rating: 5,
      initial: "M"
    },
    {
      id: 5,
      text: "Ordered the fruity collection and loved every single blend. The pineapple tea is tropical paradise in a cup!",
      author: "Lisa T.",
      rating: 5,
      initial: "L"
    }
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          el: '.testimonials-pagination',
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        a11y={{
          paginationBulletMessage: 'Go to testimonial {{index}}',
        }}
        className="pb-12"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100/60 h-full flex flex-col">
              {/* Quote Icon */}
              <div className="mb-6">
                <Icon icon="mdi:format-quote-open" className="h-8 w-8 text-orange-500" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    icon="mdi:star"
                    className="h-5 w-5 text-orange-500"
                  />
                ))}
              </div>

              {/* Message */}
              <blockquote className="text-stone-700 leading-relaxed mb-8 flex-grow">
                "{testimonial.text}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.initial}
                </div>
                <div>
                  <div className="font-semibold text-stone-800">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-stone-600">
                    Verified Customer
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="testimonials-pagination flex justify-center space-x-2 mt-8"></div>

      <style jsx>{`
        .testimonials-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.2s ease;
        }
        .testimonials-pagination .swiper-pagination-bullet-active {
          background: #f97316;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default TestimonialsCarousel;