import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SectionHeader from "../components/SectionHeader";
import Container from "../components/Container";
import Section from "../components/Section";
import Button from "../components/Button";
import MilkTea from "../assets/images/milktea.jpg";
import IcedTea from "../assets/images/icedtea.jpg";
import GreenTea from "../assets/images/greentea.jpg";

const Brewing = () => {
  const brewingMethods = [
    {
      id: 1,
      title: "Classic Milk Chai",
      subtitle: "Traditional Sri Lankan style",
      icon: "mdi:tea",
      image: MilkTea,
      steps: [
        "Boil 1 cup water with 1 cup milk",
        "Add 1-2 tsp of your favorite T&H spiced chai",
        "Simmer for 3-4 minutes on medium heat",
        "Add sugar or honey to taste",
        "Strain and serve hot in your favorite mug",
      ],
      tips: "For stronger flavor, crush the tea leaves gently before brewing. Perfect with cardamom or ginger!",
    },
    {
      id: 2,
      title: "Refreshing Iced Fruit Tea",
      subtitle: "Perfect for tropical weather",
      icon: "mdi:ice-cream",
      image: IcedTea,
      steps: [
        "Brew 2 tsp T&H fruity tea in 1 cup hot water (90°C)",
        "Steep for 4-5 minutes for stronger flavor",
        "Add honey or sugar while tea is hot",
        "Let cool to room temperature",
        "Pour over ice cubes and add lemon slices",
      ],
      tips: "Try with passion tea or pineapple tea. Add fresh mint leaves for extra freshness!",
    },
    {
      id: 3,
      title: "Pure Green Tea Ritual",
      subtitle: "Mindful wellness brewing",
      icon: "mdi:leaf",
      image: GreenTea,
      steps: [
        "Heat water to 80-85°C (not boiling)",
        "Use 1 tsp T&H Ceylon green tea per cup",
        "Pour water gently over the leaves",
        "Steep for 2-3 minutes only",
        "Enjoy the pure, natural flavor without additions",
      ],
      tips: "Never use boiling water with green tea. Multiple infusions are possible - each brings different notes!",
    },
  ];

  const generalTips = [
    {
      icon: "mdi:water",
      title: "Water Quality",
      description: "Use fresh, filtered water for the best taste. Hard water can make tea bitter.",
    },
    {
      icon: "mdi:thermometer",
      title: "Temperature Matters",
      description: "Different teas need different temperatures. Green teas are delicate, black teas can handle heat.",
    },
    {
      icon: "mdi:timer",
      title: "Timing is Key",
      description: "Don't over-steep! Follow our brewing guides for the perfect extraction.",
    },
    {
      icon: "mdi:storage",
      title: "Proper Storage",
      description: "Keep teas in airtight containers, away from light and moisture for freshness.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Section Header */}
      <SectionHeader
        title="Perfect Brewing Guide"
        subtitle="Unlock the full potential of your T&H Ceylon teas with our expert brewing techniques"
        bgImage="https://picsum.photos/seed/brewing-guide/1920/600"
      />

      {/* Brewing Methods */}
      <Section
        title="Three Essential Brewing Methods"
        subtitle="Master these techniques for the perfect cup every time"
        background="white"
      >
        <div className="space-y-16">
          {brewingMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={method.image}
                    alt={method.title}
                    loading="lazy"
                    width="600"
                    height="400"
                    className="w-full h-64 sm:h-80 object-cover"
                    style={{
                      background: "linear-gradient(135deg, #f59e0b, #ea580c)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
                    <Icon icon={method.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{method.title}</h3>
                    <p className="text-orange-600 font-medium">{method.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Steps */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Steps:</h4>
                    <ol className="space-y-3">
                      {method.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white text-sm font-medium rounded-full flex items-center justify-center">
                            {stepIndex + 1}
                          </span>
                          <span className="text-gray-600 leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Pro Tip */}
                  <div className="bg-orange-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Icon icon="mdi:lightbulb" className="h-5 w-5 text-orange-500 mr-2" />
                      Pro Tip
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{method.tips}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* General Tips */}
      <Section title="Essential Tea Tips" subtitle="Simple guidelines for consistently great results" background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {generalTips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                <Icon icon={tip.icon} className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{tip.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Tea Temperature Guide */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Temperature Guide by Tea Type</h2>
            <p className="text-gray-600">Get the temperature right for optimal flavor extraction</p>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { type: "Green Tea", temp: "80-85°C", color: "text-green-600" },
                { type: "Black Tea", temp: "95-100°C", color: "text-red-600" },
                { type: "Fruity Blends", temp: "90-95°C", color: "text-purple-600" },
                { type: "Spiced Chai", temp: "95-100°C", color: "text-orange-600" },
              ].map((item, index) => (
                <motion.div
                  key={item.type}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center bg-white rounded-xl p-4 shadow-sm"
                >
                  <div className={`text-2xl font-bold mb-2 ${item.color}`}>{item.temp}</div>
                  <div className="text-gray-700 font-medium">{item.type}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Brew the Perfect Cup?</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Now that you know the secrets to perfect brewing, it's time to explore our premium Ceylon tea collection and
            put these techniques into practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/shop" size="lg">
              Shop Ceylon Teas
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Ask Our Experts
            </Button>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default Brewing;
