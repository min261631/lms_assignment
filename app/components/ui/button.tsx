import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline';
  children: React.ReactNode;
}

export function Button({ 
  size = 'md', 
  variant = 'default',
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  return (
    <button 
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

