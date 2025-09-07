import React from 'react';
import Container from './Container';

const Section = ({ 
  children, 
  title, 
  subtitle, 
  className = '',
  containerSize = 'default',
  background = 'transparent'
}) => {
  const backgroundClasses = {
    transparent: '',
    gray: 'bg-stone-50/50',
    white: 'bg-white',
    orange: 'bg-orange-50/30',
    stone: 'bg-stone-50'
  };

  return (
    <section className={`py-16 lg:py-24 ${backgroundClasses[background]} ${className}`}>
      <Container size={containerSize}>
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="mb-6 text-balance text-stone-800">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-stone-700 max-w-3xl mx-auto text-balance">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;