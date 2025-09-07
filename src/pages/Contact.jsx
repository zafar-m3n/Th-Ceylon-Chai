import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SectionHeader from "../components/SectionHeader";
import Container from "../components/Container";
import Section from "../components/Section";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
import WhatsAppButton from "../components/WhatsAppButton";
import { siteData } from "../data/site";
import { buildWhatsAppUrl, buildContactMessage } from "../utils/whatsapp";
import { formatPhoneNumber } from "../utils/format";
import ContactImage from "../assets/images/contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
      const whatsappMessage = buildContactMessage(formData.name, formData.email, formData.subject, formData.message);

      const whatsappUrl = buildWhatsAppUrl({
        phone: siteData.whatsappPhone,
        text: whatsappMessage,
      });

      // Open WhatsApp
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      // Fallback to email
      const emailSubject = encodeURIComponent(`Contact Form: ${formData.subject}`);
      const emailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${siteData.email}?subject=${emailSubject}&body=${emailBody}`;
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: "mdi:whatsapp",
      title: "WhatsApp",
      description: "Quick orders and inquiries",
      value: formatPhoneNumber(siteData.whatsappPhone),
      action: () => {
        const url = buildWhatsAppUrl({
          phone: siteData.whatsappPhone,
          text: "Hi T&H, I have a question about your teas.",
        });
        window.open(url, "_blank", "noopener,noreferrer");
      },
    },
    {
      icon: "mdi:email",
      title: "Email",
      description: "General inquiries and support",
      value: siteData.email,
      action: () => {
        window.location.href = `mailto:${siteData.email}`;
      },
    },
    {
      icon: "mdi:map-marker",
      title: "Location",
      description: "Based in Sri Lanka",
      value: siteData.location,
      action: null,
    },
    {
      icon: "mdi:instagram",
      title: "Instagram",
      description: "Follow for updates",
      value: "@teaandherbs.sl",
      action: () => {
        window.open(siteData.socials.instagram, "_blank", "noopener,noreferrer");
      },
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
        title="Get in Touch"
        subtitle="Have questions about our Ceylon teas? We're here to help with quick responses and personalized service"
        bgImage={ContactImage}
      />

      {/* Contact Info Cards */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gray-50 rounded-2xl p-6 text-center group ${
                info.action ? "cursor-pointer hover:bg-orange-50 hover:shadow-md" : ""
              } transition-all duration-200`}
              onClick={info.action}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-2xl mb-4 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                <Icon icon={info.icon} className="h-6 w-6 text-orange-500 group-hover:text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{info.description}</p>
              <p className="font-medium text-gray-900">{info.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                />
              </div>

              <Input
                label="Subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
              />

              <Textarea
                label="Message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us how we can help you..."
              />

              <Button type="submit" size="lg" className="w-full" loading={isSubmitting} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-orange-50 rounded-xl">
              <p className="text-sm text-gray-600 flex items-start space-x-2">
                <Icon icon="mdi:information" className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span>
                  Submitting this form will open WhatsApp with your message pre-filled. This ensures faster response
                  times!
                </span>
              </p>
            </div>
          </motion.div>

          {/* Map Placeholder & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
              <img
                src="https://picsum.photos/seed/sri-lanka-map/600/400"
                alt="Sri Lanka map"
                loading="lazy"
                width="600"
                height="400"
                className="w-full h-full object-cover"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #ea580c)",
                }}
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <Icon icon="mdi:map-marker" className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-semibold">{siteData.location}</div>
                  <div className="text-sm">Sri Lanka</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-orange-500 rounded-2xl p-8 text-white text-center">
              <Icon icon="mdi:whatsapp" className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="mb-6 opacity-90">
                Chat with us on WhatsApp for instant support and quick order processing.
              </p>
              <WhatsAppButton fixed={false} className="bg-white text-orange-500 hover:bg-gray-100" />
            </div>

            {/* Business Hours */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Icon icon="mdi:clock" className="h-5 w-5 text-orange-500 mr-2" />
                Response Times
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">WhatsApp</span>
                  <span className="font-medium">Usually within 1 hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email</span>
                  <span className="font-medium">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Best time to reach us</span>
                  <span className="font-medium">9 AM - 7 PM IST</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section title="Frequently Asked Questions" subtitle="Quick answers to common questions" background="gray">
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "How do I place an order?",
              a: "Simply click any 'Order on WhatsApp' button on our products or contact us directly. We'll help you with pricing, availability, and delivery options.",
            },
            {
              q: "Do you deliver island-wide?",
              a: "Yes! We deliver across Sri Lanka. Delivery fees and timeframes depend on your location. Contact us for specific details.",
            },
            {
              q: "Are your teas 100% natural?",
              a: "Absolutely! All our teas use natural Ceylon tea leaves and natural flavoring. We don't use artificial colors or preservatives.",
            },
            {
              q: "Can I visit your location?",
              a: "We operate primarily online and through WhatsApp orders. For bulk orders or special arrangements, please contact us first.",
            },
            {
              q: "What's the shelf life of your teas?",
              a: "Our teas stay fresh for 2-3 years when stored properly in airtight containers, away from light and moisture.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-semibold text-gray-900 mb-3">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default Contact;
