import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Icon */}
      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary-600">
        <span className="text-white text-xl font-bold">CC</span>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <span className="ml-3 text-xl font-bold text-primary-600">
          CivicConnect
        </span>
      )}
    </div>
  );
};

export default Logo; 