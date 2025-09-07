import React from 'react';

const Textarea = ({ 
  label, 
  error, 
  required = false,
  className = '',
  id,
  rows = 4,
  ...props 
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={rows}
        className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 resize-vertical ${
          error 
            ? 'border-red-300 bg-red-50/50' 
            : 'border-gray-200 hover:border-gray-300 bg-white'
        }`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Textarea;