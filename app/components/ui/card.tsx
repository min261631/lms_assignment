import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className = '', children }: CardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function CardHeader({ className = '', children, ...props }: CardHeaderProps) {
  return (
    <div className={`p-6 pb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className = '', children }: CardProps) {
  return (
    <h3 className={`text-2xl font-bold ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({ className = '', children }: CardProps) {
  return (
    <p className={`text-sm text-gray-600 dark:text-gray-400 mt-1 ${className}`}>
      {children}
    </p>
  );
}

export function CardContent({ className = '', children }: CardProps) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
}

