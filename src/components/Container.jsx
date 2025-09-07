import React from 'react';

const Container = ({ children, className = '', size = 'default' }) => {
  const sizeClasses = {
    sm: 'max-w-4xl',
    default: 'max-w-screen-xl', 
    lg: 'max-w-screen-2xl',
    full: 'max-w-full'
  };

  return (
    <div className={`mx-auto px-4 md:px-6 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;