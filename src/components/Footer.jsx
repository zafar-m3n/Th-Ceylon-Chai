import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { siteData } from "../data/site";
import Container from "./Container";
import Button from "./Button";
import { buildWhatsAppUrl, buildOrderMessage } from "../utils/whatsapp";
import logoWhite from "../assets/images/logoWhite.webp";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = buildOrderMessage("General Inquiry");
    const whatsappUrl = buildWhatsAppUrl({
      phone: siteData.whatsappPhone,
      text: message,
    });
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Shop Teas", path: "/shop" },
    { name: "Brewing Guide", path: "/brewing" },
    { name: "Contact", path: "/contact" },
    { name: "Sell With Us", path: "/sell" },
  ];

  const categories = [
    { name: "Fruity Teas", path: "/shop?collection=fruity" },
    { name: "Spiced & Chai", path: "/shop?collection=spiced-chai-blends" },
    { name: "Wellness & Energy", path: "/shop?collection=wellness-energy" },
    { name: "Dessert-Inspired", path: "/shop?collection=dessert-inspired" },
  ];

  return (
    <footer className="bg-black text-white">
      {/* CTA Section */}
      <div className="bg-orange-500">
        <Container>
          <div className="py-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience Ceylon's Finest?</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Start your journey with authentic Ceylon chai. Order now through WhatsApp for quick service!
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-white text-orange-500 hover:bg-gray-100"
            >
              <Icon icon="mdi:whatsapp" className="h-5 w-5 mr-2" />
              Order Now
            </Button>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img src={logoWhite} alt="Logo" className="h-14 w-14 object-contain" />
                <div>
                  <div className="font-bold text-xl">{siteData.brandName}</div>
                  <div className="text-sm text-gray-400">{siteData.brandTagline}</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Bringing you the authentic taste of Ceylon with premium quality teas, carefully selected from the finest
                tea gardens of Sri Lanka.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon icon="mdi:email" className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <a href={`mailto:${siteData.email}`} className="text-gray-400 hover:text-white transition-colors">
                    {siteData.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon icon="mdi:map-marker" className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400">{siteData.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon icon="mdi:whatsapp" className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400">{siteData.whatsappPhone}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-stone-100/90 font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tea Categories */}
            <div>
              <h4 className="text-stone-100/90 font-semibold text-lg mb-6">Tea Categories</h4>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.path}>
                    <Link
                      to={category.path}
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div>
              <h4 className="text-stone-100/90 font-semibold text-lg mb-6">Connect With Us</h4>

              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                <a
                  href={siteData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-2xl hover:bg-orange-500 transition-all duration-200 group"
                >
                  <Icon icon="mdi:instagram" className="h-6 w-6 text-gray-400 group-hover:text-white" />
                </a>

                {/* Facebook - Icon visible but no link */}
                <div className="p-3 bg-gray-800 rounded-2xl opacity-50 cursor-not-allowed">
                  <Icon icon="mdi:facebook" className="h-6 w-6 text-gray-400" />
                </div>

                {/* TikTok - Icon visible but no link */}
                <div className="p-3 bg-gray-800 rounded-2xl opacity-50 cursor-not-allowed">
                  <Icon icon="ic:baseline-tiktok" className="h-6 w-6 text-gray-400" />
                </div>
              </div>

              <p className="text-gray-400 text-sm">
                Follow us on Instagram for the latest updates and tea inspiration!
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <Container>
          <div className="py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">Copyright 2025. All Rights Reserved.</p>
            <p className="text-gray-400 text-sm">
              Made with ❤️ for tea lovers worldwide by
              <a
                href="https://zafarm3n.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                {" "}
                zafar.m3n
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
