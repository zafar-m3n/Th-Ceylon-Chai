import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { formatPrice } from "../utils/format";

const ProductCard = ({ product }) => {
  const { slug, name, description, category, price, pkg, bestSeller, rating, reviewCount, images = [] } = product || {};
  const imgSrc = images?.[0];

  const renderStars = (val) => {
    const v = Math.max(0, Math.min(5, Number(val) || 0));
    const full = Math.floor(v);
    const half = v % 1 >= 0.25 && v % 1 < 0.75;
    const empty = 5 - full - (half ? 1 : 0);
    return (
      <>
        {[...Array(full)].map((_, i) => (
          <Icon key={`f-${i}`} icon="mdi:star" className="h-4 w-4 text-amber-400" />
        ))}
        {half && <Icon icon="mdi:star-half-full" className="h-4 w-4 text-amber-400" />}
        {[...Array(empty)].map((_, i) => (
          <Icon key={`e-${i}`} icon="mdi:star-outline" className="h-4 w-4 text-amber-400" />
        ))}
      </>
    );
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi T&H, I'd like to order: ${name}. Could you share price & availability?`;
    const whatsappUrl = `https://wa.me/94777634121?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const priceText =
    typeof price === "number"
      ? formatPrice?.(price) ?? `Rs. ${price.toLocaleString("en-LK")}`
      : typeof price === "string"
      ? price
      : "";

  const truncate = (s, n = 50) => (s && s.length > n ? s.slice(0, n - 1) + "…" : s || "");

  return (
    <motion.div
      className="
        h-full flex flex-col bg-white rounded-2xl border border-stone-200/80 shadow-sm
        transition-all duration-300 hover:shadow-md
      "
      whileHover={{ y: -2 }}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      {/* Image: square on mobile, 3:2 on md+ to avoid 'long' feel */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <div className="aspect-[1/1] md:aspect-[3/2] bg-stone-100">
          {imgSrc && <img src={imgSrc} alt={name} loading="lazy" className="w-full h-full object-cover" />}
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {bestSeller && (
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold bg-orange-500 text-white shadow">
              <Icon icon="mdi:fire" className="h-3 w-3" />
              Best Seller
            </span>
          )}
        </div>
        {pkg && (
          <span className="absolute top-3 right-3 rounded-full bg-white/90 text-stone-700 text-[11px] px-2 py-1 border border-stone-200 backdrop-blur-sm">
            {pkg}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 flex flex-col gap-2.5 flex-1">
        {/* Title + Category chip in same block to save vertical space */}
        <div>
          <Link to={`/product/${slug}`} className="block group">
            <h3 className="font-serif text-[15px] md:text-lg font-semibold text-stone-900 leading-tight line-clamp-2 group-hover:text-orange-600 transition-colors">
              {name}
            </h3>
          </Link>
          {category && (
            <span className="mt-1 inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-stone-50 text-stone-700 border border-stone-200">
              {category}
            </span>
          )}
        </div>

        {/* Price + Rating in one row */}
        <div className="mt-1 flex items-center justify-between">
          {priceText ? (
            <span className="text-emerald-600 font-semibold text-base md:text-lg">{priceText}</span>
          ) : (
            <span />
          )}
          {(typeof rating === "number" || typeof reviewCount === "number") && (
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">{renderStars(rating)}</div>
              {typeof reviewCount === "number" && <span className="text-xs text-stone-500">({reviewCount})</span>}
            </div>
          )}
        </div>

        {description && <p className="hidden md:block text-sm text-stone-600">{truncate(description, 65)}</p>}

        {/* CTA row pinned to bottom; always single line to reduce height */}
        <div className="mt-auto pt-3 border-t border-stone-100">
          <div className="flex items-stretch gap-2">
            <button
              onClick={handleWhatsAppOrder}
              className="
                flex-1 inline-flex items-center justify-center gap-2
                rounded-md px-3 py-2 text-sm font-medium
                bg-orange-600 text-white hover:bg-orange-700
                focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40
              "
              aria-label={`Order ${name} via WhatsApp`}
            >
              <Icon icon="mdi:whatsapp" className="h-4 w-4" />
              Order
            </button>

            <Link
              to={`/product/${slug}`}
              className="
                flex-1 inline-flex items-center justify-center gap-2
                rounded-md px-3 py-2 text-sm font-medium
                bg-white text-stone-700 hover:text-stone-900
                ring-1 ring-stone-200 hover:ring-stone-300
                focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40
              "
              aria-label={`View details for ${name}`}
            >
              Details
              <Icon icon="mdi:chevron-right" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
