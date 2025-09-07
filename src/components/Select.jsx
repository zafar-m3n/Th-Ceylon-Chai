import React from 'react';

const Select = ({ 
  label, 
  error, 
  required = false,
  className = '',
  id,
  children,
  ...props 
}) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        id={selectId}
        className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 bg-white ${
          error 
            ? 'border-red-300 bg-red-50/50' 
            : 'border-gray-200 hover:border-gray-300'
        }`}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Select;