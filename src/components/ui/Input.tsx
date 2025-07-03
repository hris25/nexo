import React from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'search' | 'minimal';
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  variant = 'default',
  className,
  ...props
}) => {
  const baseClasses = 'w-full transition-all duration-200 focus:outline-none';
  
  const variants = {
    default: 'px-4 py-3 border border-neutral-200 rounded-xl bg-surface-50 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent',
    search: 'px-6 py-4 border border-neutral-300 rounded-2xl bg-white text-neutral-900 placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-soft',
    minimal: 'px-0 py-2 border-0 border-b border-neutral-200 bg-transparent text-neutral-900 placeholder-neutral-400 focus:border-primary-500 rounded-none'
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
            {icon}
          </div>
        )}
        <input
          className={cn(
            baseClasses,
            variants[variant],
            icon && 'pl-10',
            error && 'border-red-300 focus:ring-red-500 focus:border-red-500',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;
