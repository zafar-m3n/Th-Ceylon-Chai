import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Section from "../components/Section";
import Hero3 from "../assets/images/hero3.jpg";
import Container from "../components/Container";
import Button from "../components/Button";
import { siteData } from "../data/site";

const About = () => {
  const values = [
    {
      icon: "mdi:tea",
      title: "Authentic Ceylon Quality",
      description:
        "We source our teas directly from the finest Ceylon tea gardens, ensuring authenticity and premium quality in every blend.",
    },
    {
      icon: "mdi:heart",
      title: "Crafted with Passion",
      description:
        "Each blend is carefully crafted with passion and expertise, combining traditional methods with innovative flavor profiles.",
    },
    {
      icon: "mdi:leaf",
      title: "Natural Ingredients",
      description:
        "We use only natural ingredients and flavors, ensuring a pure and healthy tea experience for our customers.",
    },
    {
      icon: "mdi:earth",
      title: "Sustainable Sourcing",
      description:
        "Committed to ethical sourcing and supporting local tea communities in Sri Lanka for a sustainable future.",
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "T&H Ceylon Chai was founded with a vision to share authentic Ceylon tea experiences with tea lovers worldwide.",
    },
    {
      year: "2021",
      title: "First Blends",
      description:
        "Launched our signature fruity and spiced chai collections, quickly gaining popularity among tea enthusiasts.",
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Expanded our range with wellness and dessert-inspired teas, reaching customers across Sri Lanka.",
    },
    {
      year: "2024",
      title: "Today",
      description:
        "Now offering 20+ premium tea blends, continuing to innovate while preserving Ceylon tea traditions.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-16 lg:pt-20"
    >
      {/* Hero Section */}
      <Section background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Ceylon Heritage in Every Cup</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              T&H Ceylon Chai is more than just tea – it's a journey through the rich traditions and vibrant flavors of
              Sri Lankan tea culture.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Founded with a passion for authentic Ceylon teas, we bring you carefully crafted blends that celebrate the
              island's tea heritage while embracing modern flavor innovations.
            </p>
            <Button href="/shop" size="lg">
              Explore Our Teas
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={Hero3}
              alt="Ceylon tea garden"
              loading="lazy"
              width="800"
              height="600"
              className="rounded-2xl shadow-xl"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #ea580c)",
              }}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* Our Values */}
      <Section
        title="What We Stand For"
        subtitle="The values that drive our commitment to exceptional Ceylon tea experiences"
        background="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-6 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                <Icon icon={value.icon} className="h-8 w-8 text-orange-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Our Story Timeline */}
      <Section background="gray" title="Our Journey" subtitle="From passion to premium Ceylon tea experiences">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex flex-col md:flex-row gap-8 items-start"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white font-bold rounded-2xl text-lg">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team/Contact Section */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <img
              src="https://picsum.photos/seed/tea-tasting/700/500"
              alt="Tea tasting and quality control"
              loading="lazy"
              width="700"
              height="500"
              className="rounded-2xl shadow-lg"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #ea580c)",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet the T&H Team</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our dedicated team of tea experts and enthusiasts work tirelessly to bring you the finest Ceylon tea
              experiences. From sourcing to blending, every step is handled with care and expertise.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Based in {siteData.location}, we're always ready to help you discover your perfect cup of Ceylon tea.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Icon icon="mdi:email" className="h-5 w-5 text-orange-500" />
                <span className="text-gray-700">{siteData.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon icon="mdi:whatsapp" className="h-5 w-5 text-orange-500" />
                <span className="text-gray-700">{siteData.whatsappPhone}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary">
                Get in Touch
              </Button>
              <Button href="/sell" variant="outline">
                Partner With Us
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </motion.div>
  );
};

export default About;
