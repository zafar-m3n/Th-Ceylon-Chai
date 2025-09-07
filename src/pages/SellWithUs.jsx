import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Select from "react-select";
import SectionHeader from "../components/SectionHeader";
import Container from "../components/Container";
import Section from "../components/Section";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
import { siteData } from "../data/site";
import { buildWhatsAppUrl, buildSellWithUsMessage } from "../utils/whatsapp";
import Seller from "../assets/images/sellers.webp";
import Partner from "../assets/images/partners.webp";

const SellWithUs = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create WhatsApp message
      const whatsappMessage = buildSellWithUsMessage(formData);

      const whatsappUrl = buildWhatsAppUrl({
        phone: siteData.whatsappPhone,
        text: whatsappMessage,
      });

      // Open WhatsApp
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      // Reset form
      setFormData({
        businessName: "",
        contactName: "",
        email: "",
        phone: "",
        businessType: "",
        location: "",
        message: "",
      });
    } catch (error) {
      // Fallback to email
      const emailSubject = encodeURIComponent("Partnership Inquiry - Sell With Us");
      const emailBody = encodeURIComponent(
        `Business Name: ${formData.businessName}\nContact: ${formData.contactName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nBusiness Type: ${formData.businessType}\nLocation: ${formData.location}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${siteData.email}?subject=${emailSubject}&body=${emailBody}`;
    }

    setIsSubmitting(false);
  };

  // React-select options and styles
  const businessTypeOptions = [
    { value: "retail-store", label: "Retail Store" },
    { value: "cafe-restaurant", label: "Café/Restaurant" },
    { value: "online-retailer", label: "Online Retailer" },
    { value: "corporate-client", label: "Corporate Client" },
    { value: "distributor", label: "Distributor" },
    { value: "other", label: "Other" },
  ];

  const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "0.75rem",
      borderColor: state.isFocused ? "#f97316" : "#e5e7eb",
      boxShadow: state.isFocused ? "0 0 0 3px rgba(249, 115, 22, 0.1)" : "none",
      padding: "0.5rem 0",
      "&:hover": {
        borderColor: "#d1d5db",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#f97316" : state.isFocused ? "#fff7ed" : "white",
      color: state.isSelected ? "white" : "#374151",
      "&:hover": {
        backgroundColor: state.isSelected ? "#f97316" : "#fff7ed",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#6b7280",
    }),
  };

  const benefits = [
    {
      icon: "mdi:chart-line",
      title: "Expand Your Reach",
      description:
        "Access our established customer base and grow your business with premium Ceylon tea products that customers love.",
    },
    {
      icon: "mdi:handshake",
      title: "Perfect Brand Fit",
      description:
        "If you share our values of quality, authenticity, and customer satisfaction, we can create a strong partnership together.",
    },
    {
      icon: "mdi:award",
      title: "Quality Assurance",
      description:
        "We maintain strict quality standards and provide marketing support to ensure your success with T&H Ceylon Chai products.",
    },
  ];

  const idealPartners = [
    {
      type: "Retail Stores",
      description: "Grocery stores, specialty food shops, and organic markets looking to offer premium Ceylon teas.",
      icon: "mdi:store",
    },
    {
      type: "Cafés & Restaurants",
      description: "Food service businesses wanting to serve authentic Ceylon chai and tea beverages.",
      icon: "mdi:coffee",
    },
    {
      type: "Online Retailers",
      description: "E-commerce platforms and online marketplaces seeking quality tea products.",
      icon: "mdi:shopping",
    },
    {
      type: "Corporate Clients",
      description: "Offices, hotels, and hospitality businesses needing bulk tea supplies.",
      icon: "mdi:office-building",
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
        title="Partner With T&H Ceylon Chai"
        subtitle="Join our network of partners and bring authentic Ceylon tea experiences to your customers"
        bgImage={Seller}
      />

      {/* Benefits */}
      <Section
        title="Why Partner With Us?"
        subtitle="Discover the advantages of selling T&H Ceylon Chai products"
        background="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-6 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                <Icon icon={benefit.icon} className="h-8 w-8 text-orange-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Ideal Partners */}
      <Section
        title="Who We're Looking For"
        subtitle="We partner with businesses that align with our values and vision"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {idealPartners.map((partner, index) => (
            <motion.div
              key={partner.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                <Icon icon={partner.icon} className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{partner.type}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* What We Offer */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer Our Partners</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Premium Product Range",
                  description:
                    "20+ authentic Ceylon tea blends across fruity, spiced, wellness, and dessert categories.",
                },
                {
                  title: "Competitive Pricing",
                  description: "Attractive wholesale rates and volume discounts for larger orders.",
                },
                {
                  title: "Marketing Support",
                  description:
                    "Product images, descriptions, and promotional materials to help you market effectively.",
                },
                {
                  title: "Reliable Supply Chain",
                  description: "Consistent product availability and timely delivery across Sri Lanka.",
                },
                {
                  title: "Training & Support",
                  description: "Product knowledge training and ongoing support to help your team succeed.",
                },
                {
                  title: "Flexible Terms",
                  description: "Customizable partnership arrangements to fit your business model and needs.",
                },
              ].map((offer, index) => (
                <div key={offer.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Icon icon="mdi:check" className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{offer.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{offer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={Partner}
              alt="Partnership and collaboration"
              loading="lazy"
              width="700"
              height="500"
              className="rounded-2xl shadow-lg"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #ea580c)",
              }}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* Application Form */}
      <Section
        id="apply"
        title="Ready to Partner?"
        subtitle="Tell us about your business and let's explore partnership opportunities"
        background="gray"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  label="Business Name"
                  name="businessName"
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Your business name"
                />
                <Input
                  label="Contact Person"
                  name="contactName"
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="business@example.com"
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+94 77 123 4567"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Business Type <span className="text-red-500 ml-1">*</span>
                  </label>
                  <Select
                    value={businessTypeOptions.find((option) => option.value === formData.businessType)}
                    onChange={(selectedOption) =>
                      setFormData((prev) => ({ ...prev, businessType: selectedOption?.value || "" }))
                    }
                    options={businessTypeOptions}
                    styles={selectStyles}
                    placeholder="Select business type"
                  />
                </div>
                <Input
                  label="Location"
                  name="location"
                  type="text"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="City, Province"
                />
              </div>

              <Textarea
                label="Tell us about your business"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your business, target customers, and why you'd like to partner with T&H Ceylon Chai..."
              />

              <Button type="submit" size="lg" className="w-full" loading={isSubmitting} disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Partnership Application"}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-orange-50 rounded-xl">
              <p className="text-sm text-gray-600 flex items-start space-x-2">
                <Icon icon="mdi:information" className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span>
                  Submitting this form will open WhatsApp with your application details. We'll review your application
                  and get back to you within 48 hours.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Process */}
      <Section
        title="Partnership Process"
        subtitle="Here's how we build successful partnerships together"
        background="white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Apply",
                description: "Submit your partnership application with business details.",
              },
              {
                step: "2",
                title: "Review",
                description: "We review your application and assess partnership fit.",
              },
              {
                step: "3",
                title: "Discussion",
                description: "We discuss terms, pricing, and partnership structure.",
              },
              {
                step: "4",
                title: "Launch",
                description: "Begin partnership with product training and support.",
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-500 text-white font-bold text-xl rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions About Partnership?</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our partnership team is ready to discuss opportunities and answer any questions you might have about selling
            T&H Ceylon Chai products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={buildWhatsAppUrl({
                phone: siteData.whatsappPhone,
                text: "Hi T&H, I have questions about partnership opportunities.",
              })}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              <Icon icon="mdi:whatsapp" className="h-5 w-5 mr-2" />
              WhatsApp Us
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Form
            </Button>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default SellWithUs;
