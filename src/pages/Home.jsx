import React from "react";
import HeroBg from "../assets/images/hero1.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Section from "../components/Section";
import Container from "../components/Container";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import BestSellersCarousel from "../components/BestSellersCarousel";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import { products } from "../data/products";
import Hero2 from "../assets/images/hero2.webp";
import Fruity from "../assets/images/fruitytea.webp";
import Spiced from "../assets/images/spicetea.webp";
import Energy from "../assets/images/energytea.webp";
import Choco from "../assets/images/chocotea.webp";

const Home = () => {
  // Best sellers - mix from different categories
  const bestSellers = products.filter((product) =>
    ["passion-tea", "chai-masala", "green-tea", "chocolate-tea", "kesar-chai", "moroccan-mint"].includes(product.slug)
  );

  // Featured products for grid section
  const featuredProducts = products.filter((product) =>
    ["soursop-tea", "cardamom-tea", "energy-tea", "caramel-tea"].includes(product.slug)
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* New Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={HeroBg}
            alt="Ceylon tea garden"
            loading="eager"
            width="1920"
            height="1080"
            className="w-full h-full object-cover"
            style={{ background: "linear-gradient(135deg, #f59e0b, #ea580c)" }}
          />

          {/* NEW: Solid black overlay to deepen contrast */}
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

          {/* Gradient Overlay (kept) */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/40 to-black/65 backdrop-brightness-95"
            aria-hidden="true"
          />

          {/* Subtle Texture (kept) */}
          <div
            className="absolute inset-0 opacity-20"
            aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>

        {/* Hero Content */}
        <Container className="relative z-10 text-center text-white drop-shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className="
          text-stone-100/90 font-serif text-4xl sm:text-5xl lg:text-6xl
          font-bold mb-8 leading-tight text-balance
          drop-shadow-[0_0_24px_rgba(255,255,255,0.65)]
        "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Ceylon Heritage in Every Cup
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl mb-12 text-stone-100/90 leading-relaxed max-w-3xl mx-auto text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Discover authentic Sri Lankan tea experiences, from vibrant fruity blends to traditional spiced chai
              masalas, crafted with passion and heritage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button href="/shop" size="md" className="bg-orange-500 hover:bg-orange-600 shadow-2xl">
                Shop Now
              </Button>

              {/* Our Story — permanent glow */}
              <Button
                href="/about"
                variant="ghost"
                size="md"
                className="
            bg-white/10 backdrop-blur-sm text-white border-white/30
            ring-1 ring-white/40
            shadow-[0_0_18px_rgba(255,255,255,0.40),0_0_42px_rgba(255,255,255,0.25)]
            hover:bg-white/20
          "
              >
                Our Story
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* USP Strip */}
      <div className="py-12 bg-white border-t border-stone-100">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "mdi:leaf", title: "Ceylon-Sourced", desc: "Authentic Sri Lankan tea leaves" },
              { icon: "mdi:tea", title: "Small-Batch Blends", desc: "Carefully crafted in small quantities" },
              { icon: "mdi:package-variant", title: "Hand-Packed Freshness", desc: "Sealed for maximum flavor" },
              { icon: "mdi:whatsapp", title: "WhatsApp Ordering", desc: "Quick and easy ordering" },
            ].map((usp, index) => (
              <motion.div
                key={usp.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-2xl mb-4">
                  <Icon icon={usp.icon} className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="font-semibold text-stone-800 mb-2">{usp.title}</h3>
                <p className="text-sm text-stone-600">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* Best Sellers Carousel */}
      <Section
        title="Our Featured Products"
        subtitle="Our most popular Ceylon tea blends, loved by tea enthusiasts worldwide"
        background="orange"
      >
        <BestSellersCarousel products={bestSellers} />
      </Section>

      {/* Featured Products */}
      <Section
        title="Discover More Flavours"
        subtitle="Explore our diverse range of premium Ceylon tea blends crafted with authentic Ceylon heritage"
        background="stone"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button href="/shop" size="lg">
            Explore All Teas
          </Button>
        </div>
      </Section>

      {/* About Preview */}
      <div className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif mb-8">Ceylon Heritage in Every Cup</h2>
              <p className="text-stone-700 leading-relaxed mb-8">
                T&H Ceylon Chai brings you authentic Sri Lankan tea experiences, from tropical fruity blends to
                traditional spiced chai masalas. Each blend is crafted with premium Ceylon tea leaves, sourced directly
                from the misty hills of Sri Lanka.
              </p>
              <p className="text-stone-700 leading-relaxed mb-10">
                Whether you're seeking energizing morning blends, refreshing afternoon teas, or comforting evening chai,
                our collection offers something special for every tea lover.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button href="/about" variant="primary">
                  Our Story
                </Button>
                <Button href="/brewing" variant="ghost">
                  Brewing Guide
                </Button>
              </div>
            </div>
            <div className="relative lg:order-first">
              <img
                src={Hero2}
                alt="Ceylon tea plantation"
                loading="lazy"
                width="800"
                height="600"
                className="rounded-2xl shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #ea580c)",
                }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-transparent" />
            </div>
          </div>
        </Container>
      </div>

      {/* Testimonials Carousel */}
      <Section
        title="What Our Tea Lovers Say"
        subtitle="Trusted by thousands of tea enthusiasts worldwide"
        background="gray"
      >
        <TestimonialsCarousel />
      </Section>

      {/* Collections Preview */}
      <Section
        title="Our Tea Collections"
        subtitle="From vibrant fruity blends to traditional spiced chais"
        background="stone"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Fruity Teas",
              description: "Tropical and citrusy delights",
              image: Fruity,
              link: "/shop?collection=fruity",
            },
            {
              name: "Spiced & Chai",
              description: "Traditional masala blends",
              image: Spiced,
              link: "/shop?collection=spiced-chai-blends",
            },
            {
              name: "Wellness & Energy",
              description: "Energizing and healthy blends",
              image: Energy,
              link: "/shop?collection=wellness-energy",
            },
            {
              name: "Dessert-Inspired",
              description: "Rich and indulgent flavors",
              image: Choco,
              link: "/shop?collection=dessert-inspired",
            },
          ].map((collection, index) => (
            <motion.div
              key={collection.name}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg border border-gray-100/60 overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link to={collection.link} className="block">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    loading="lazy"
                    width="400"
                    height="300"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{
                      background: "linear-gradient(135deg, #f59e0b, #ea580c)",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-stone-100/90 font-serif font-semibold text-xl mb-2">{collection.name}</h3>
                    <p className="text-sm opacity-95">{collection.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default Home;
