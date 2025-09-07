import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Icon } from "@iconify/react";
import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BestSellersCarousel = ({ products }) => {
  return (
    <div className="relative">
      {/* ROW: left arrow · swiper · right arrow */}
      <div className="flex items-center gap-3">
        {/* Prev (now inline, not absolute) */}
        <button
          className="swiper-button-prev-custom grid place-items-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100/60 text-gray-600 hover:text-orange-500 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
          aria-label="Previous product"
        >
          <Icon icon="mdi:chevron-left" className="h-6 w-6" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          pagination={{
            el: ".swiper-pagination-custom",
            clickable: true,
          }}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 32 },
          }}
          a11y={{
            prevSlideMessage: "Previous product",
            nextSlideMessage: "Next product",
            paginationBulletMessage: "Go to slide {{index}}",
          }}
          className="pb-12 flex-1"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next (now inline, not absolute) */}
        <button
          className="swiper-button-next-custom grid place-items-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100/60 text-gray-600 hover:text-orange-500 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
          aria-label="Next product"
        >
          <Icon icon="mdi:chevron-right" className="h-6 w-6" />
        </button>
      </div>

      {/* Pagination stays below */}
      <div className="swiper-pagination-custom flex justify-center space-x-2 mt-8"></div>

      <style jsx>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.2s ease;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #f97316;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default BestSellersCarousel;
