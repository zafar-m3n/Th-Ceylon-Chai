import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { siteData } from '../data/site';
import { buildWhatsAppUrl, buildOrderMessage } from '../utils/whatsapp';

const WhatsAppButton = ({ productName, className = '', fixed = true }) => {
  const handleClick = () => {
    const message = buildOrderMessage(productName || 'General Inquiry');
    const whatsappUrl = buildWhatsAppUrl({
      phone: siteData.whatsappPhone,
      text: message
    });
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const baseClasses = `inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg hover:shadow-xl ${className}`;
  
  const fixedClasses = fixed 
    ? 'fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full' 
    : 'px-4 py-2.5 rounded-2xl';

  return (
    <motion.button
      onClick={handleClick}
      className={`${baseClasses} ${fixedClasses}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
    >
      <Icon icon="mdi:whatsapp" className={fixed ? "h-6 w-6" : "h-5 w-5 mr-2"} />
      {!fixed && <span>Order on WhatsApp</span>}
    </motion.button>
  );
};

export default WhatsAppButton;