import React from "react";

const Button = ({ title, id, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 flex items-center justify-center gap-3 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 bg-yellow-300 text-black transition-all duration-300 ease-in-out hover:scale-105 ${containerClass}`}
    >
      {/* Icon Section */}
      {leftIcon && <span className="flex items-center size-5 text-2x ">{leftIcon}</span>}
      
      {/* Title Section */}
      {title && <span className="relative z-20 font-medium">{title}</span>}
      
      {/* Background Effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
    </button>
  );
};

export default Button;
