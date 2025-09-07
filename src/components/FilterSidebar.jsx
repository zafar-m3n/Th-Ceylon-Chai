import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Select from "react-select";

const FilterSidebar = ({
  isOpen,
  onOpen, // NEW: explicit open handler (for floating button)
  onClose,
  activeCollection,
  onCollectionChange,
  sortBy,
  onSortChange,
  productCounts = {},
}) => {
  // Category checkboxes (multi-select)
  const categories = [
    { slug: "fruity", name: "Fruity" },
    { slug: "spiced-chai-blends", name: "Spiced & Chai" },
    { slug: "wellness-energy", name: "Wellness & Energy" },
    { slug: "dessert-inspired", name: "Dessert-Inspired" },
  ];

  const sortOptions = [
    { value: "popularity", label: "Popularity" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "name", label: "Name A-Z" },
  ];

  // React-select custom styles
  const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "0.75rem",
      borderColor: state.isFocused ? "#f97316" : "#e5e7eb",
      boxShadow: state.isFocused ? "0 0 0 3px rgba(249, 115, 22, 0.1)" : "none",
      "&:hover": { borderColor: "#d1d5db" },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#f97316" : state.isFocused ? "#fff7ed" : "white",
      color: state.isSelected ? "white" : "#374151",
      "&:hover": { backgroundColor: state.isSelected ? "#f97316" : "#fff7ed" },
    }),
    placeholder: (provided) => ({ ...provided, color: "#6b7280" }),
  };

  const handleCategoryToggle = (categorySlug) => {
    const current = activeCollection === "all" ? [] : activeCollection.split(",");
    const next = current.includes(categorySlug)
      ? current.filter((c) => c !== categorySlug)
      : [...current, categorySlug];

    onCollectionChange(next.length === 0 ? "all" : next.join(","));
  };

  const selectedCategories = activeCollection === "all" ? [] : activeCollection.split(",");

  const sidebarContent = (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-stone-800 mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => {
            const isSelected = selectedCategories.includes(category.slug);
            const count = productCounts[category.slug];
            return (
              <button
                key={category.slug}
                onClick={() => handleCategoryToggle(category.slug)}
                className={`w-full flex items-center space-x-3 p-3 rounded-md border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30 ${
                  isSelected
                    ? "border-orange-500 bg-orange-50 text-orange-700"
                    : "border-gray-200 hover:border-gray-300 text-stone-700"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    isSelected ? "border-orange-500 bg-orange-500" : "border-gray-300"
                  }`}
                >
                  {isSelected && <Icon icon="mdi:check" className="h-3 w-3 text-white" />}
                </div>

                <span className="font-medium">{category.name}</span>

                {typeof count === "number" && <span className="text-xs text-gray-500 ml-auto">({count})</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sort */}
      <div>
        <h3 className="font-semibold text-stone-800 mb-4">Sort By</h3>
        <Select
          value={sortOptions.find((option) => option.value === sortBy)}
          onChange={(opt) => onSortChange(opt.value)}
          options={sortOptions}
          styles={selectStyles}
          placeholder="Sort by..."
        />
      </div>

      {/* Clear Filters */}
      {(activeCollection !== "all" || sortBy !== "popularity") && (
        <button
          onClick={() => {
            onCollectionChange("all");
            onSortChange("popularity");
          }}
          className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-medium text-sm"
        >
          <Icon icon="mdi:refresh" className="h-4 w-4" />
          <span>Clear All Filters</span>
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 flex-shrink-0">
        <div className="sticky top-24 bg-white rounded-2xl border border-gray-100/60 shadow-lg p-6">
          {sidebarContent}
        </div>
      </div>
      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="lg:hidden fixed inset-0 bg-black/50 z-50"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-80 bg-white z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-2xl font-semibold text-stone-800">Filters</h2>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                  >
                    <Icon icon="mdi:close" className="h-6 w-6 text-gray-600" />
                  </button>
                </div>

                {sidebarContent}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FilterSidebar;
