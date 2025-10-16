import React from 'react';

interface AlertProps {
  className?: string;
  children: React.ReactNode;
}

export function Alert({ className = '', children }: AlertProps) {
  return (
    <div className={`flex items-center gap-2 p-4 rounded-lg border ${className}`}>
      {children}
    </div>
  );
}


