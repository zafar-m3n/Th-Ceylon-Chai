import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import shopBgImage from "../assets/images/shop.jpg";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SectionHeader from "../components/SectionHeader";
import Container from "../components/Container";
import ProductGrid from "../components/ProductGrid";
import FilterSidebar from "../components/FilterSidebar";
import { products } from "../data/products";
import { collections } from "../data/collections";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("popularity");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeCollection, setActiveCollection] = useState(searchParams.get("collection") || "all");

  // Categories + slugify used in both counts and filtering
  const categories = [
    { slug: "fruity", name: "Fruity" },
    { slug: "spiced-chai-blends", name: "Spiced & Chai Blends" },
    { slug: "wellness-energy", name: "Wellness & Energy" },
    { slug: "dessert-inspired", name: "Dessert-Inspired" },
  ];

  const slugifyCategory = (raw = "") =>
    String(raw)
      .toLowerCase()
      .replace(/&/g, "") // remove ampersands
      .replace(/[^a-z0-9]+/g, "-") // non-alnum -> '-'
      .replace(/-+/g, "-") // collapse '--'
      .replace(/^-|-$/g, ""); // trim hyphens

  // Sync state from URL
  useEffect(() => {
    const collectionFromUrl = searchParams.get("collection");
    if (collectionFromUrl && collectionFromUrl !== activeCollection) {
      setActiveCollection(collectionFromUrl);
    }
  }, [searchParams, activeCollection]);

  // Counts (robust and aligned with filtering)
  const productCounts = useMemo(() => {
    const counts = { all: products?.length || 0 };
    for (const { slug } of categories) counts[slug] = 0;

    for (const p of products || []) {
      const slug = slugifyCategory(p?.category || "");
      if (slug in counts) counts[slug] += 1;
    }
    return counts;
  }, [products]); // 'products' is static data; keep dependency for clarity

  // Filter + sort using the SAME slugify logic as counts
  const filteredProducts = useMemo(() => {
    const selected = activeCollection === "all" ? [] : activeCollection.split(",");

    let filtered = products;
    if (selected.length) {
      filtered = products.filter((p) => selected.includes(slugifyCategory(p?.category || "")));
    }

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        case "popularity":
        default:
          return a.id - b.id; // default order
      }
    });

    return sorted;
  }, [activeCollection, sortBy]);

  const handleCollectionChange = (collectionSlug) => {
    setActiveCollection(collectionSlug);

    // Update URL params
    const next = new URLSearchParams(searchParams);
    if (collectionSlug === "all") {
      next.delete("collection");
    } else {
      next.set("collection", collectionSlug);
    }
    setSearchParams(next);
  };

  const handleSortChange = (newSortBy) => setSortBy(newSortBy);

  const getCurrentCollectionName = () => {
    if (activeCollection === "all") return "All Teas";
    const selected = activeCollection.split(",");
    const names = selected.map((slug) => {
      switch (slug) {
        case "fruity":
          return "Fruity";
        case "spiced-chai-blends":
          return "Spiced & Chai";
        case "wellness-energy":
          return "Wellness & Energy";
        case "dessert-inspired":
          return "Dessert-Inspired";
        default:
          return slug;
      }
    });
    return names.join(", ");
  };

  const productCount = filteredProducts.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Section Header */}
      <SectionHeader
        title="Premium Ceylon Teas"
        subtitle="Discover our carefully curated collection of authentic Ceylon teas, from vibrant fruity blends to traditional spiced chais"
        bgImage={shopBgImage}
        showBreadcrumb={true}
      />

      {/* Products */}
      <div className="py-16 lg:py-24 bg-gray-50/50">
        <Container>
          <div className="flex gap-8">
            {/* Filter Sidebar */}
            <FilterSidebar
              isOpen={isFilterOpen}
              onOpen={() => setIsFilterOpen(true)}
              onClose={() => setIsFilterOpen(false)}
              activeCollection={activeCollection}
              onCollectionChange={handleCollectionChange}
              sortBy={sortBy}
              onSortChange={handleSortChange}
              productCounts={productCounts}
            />

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Results Bar */}
              <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100/60 shadow-sm p-4 mb-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="font-serif text-xl font-semibold text-stone-800">{getCurrentCollectionName()}</h2>
                    <p className="text-stone-600 text-sm">
                      {productCount} {productCount === 1 ? "tea" : "teas"} found
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* Mobile Filter Button */}
                    <button
                      onClick={() => setIsFilterOpen(true)}
                      className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                    >
                      <Icon icon="mdi:filter-variant" className="h-4 w-4" />
                      <span>Filters</span>
                    </button>

                    {activeCollection !== "all" && (
                      <button
                        onClick={() => handleCollectionChange("all")}
                        className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-medium text-sm"
                      >
                        <Icon icon="mdi:close" className="h-4 w-4" />
                        <span>Clear Filters</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <motion.div
                  className="text-center py-24"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon icon="mdi:tea-outline" className="h-20 w-20 text-gray-300 mx-auto mb-6" />
                  <h3 className="font-serif text-2xl font-semibold text-stone-800 mb-4">No teas found</h3>
                  <p className="text-stone-600 mb-8 max-w-md mx-auto">
                    No teas match your current filters. Try adjusting your selection.
                  </p>
                  <button
                    onClick={() => handleCollectionChange("all")}
                    className="text-orange-500 hover:text-orange-600 font-medium underline underline-offset-4"
                  >
                    Clear filters and view all teas
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </motion.div>
  );
};

export default Shop;
