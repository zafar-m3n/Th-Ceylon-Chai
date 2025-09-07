export const buildWhatsAppUrl = ({ phone, text }) => {
  // Remove all non-digit characters from phone
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Encode the message text for URL
  const encodedText = encodeURIComponent(text);
  
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
};

export const buildOrderMessage = (productName, productSlug = '') => {
  let message = `Hi T&H, I'd like to order: ${productName}`;
  
  if (productSlug) {
    message += ` (${productSlug})`;
  }
  
  message += '. Could you share price & availability?';
  
  return message;
};

export const buildContactMessage = (name, email, subject, message) => {
  return `Hi T&H,

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Looking forward to hearing from you!`;
};

export const buildSellWithUsMessage = (formData) => {
  return `Hi T&H,

I'm interested in selling with you!

Business Name: ${formData.businessName}
Contact Person: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Business Type: ${formData.businessType}
Location: ${formData.location}

Message:
${formData.message}

Looking forward to partnering with you!`;
};