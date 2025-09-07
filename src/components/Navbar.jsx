import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { siteData } from "../data/site";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Brewing", path: "/brewing" },
    { name: "Contact", path: "/contact" },
    { name: "Sell With Us", path: "/sell" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and reset scroll to top on route change
  useEffect(() => {
    setIsOpen(false);
    // ensure it runs after DOM paint for consistent behavior
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // use 'smooth' if you prefer
    });
  }, [location.pathname]);

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100/50" : "bg-white"
      }`}
    >
      <nav className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
            <div>
              <div className="font-serif font-bold text-xl text-gray-900">{siteData.brandName}</div>
              <div className="text-xs text-gray-500 hidden sm:block font-sans">{siteData.brandTagline}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all duration-200 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:ring-offset-2 rounded-full px-4 py-2 ${
                  isActiveLink(link.path) ? "text-orange-500 bg-orange-50" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((o) => !o)}
            className="lg:hidden p-2 rounded-2xl text-gray-700 hover:text-orange-500 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md"
              id="mobile-menu"
            >
              <div className="py-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 font-medium rounded-xl transition-all duration-200 hover:bg-orange-50 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30 ${
                      isActiveLink(link.path) ? "text-orange-500 bg-orange-50" : "text-gray-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
