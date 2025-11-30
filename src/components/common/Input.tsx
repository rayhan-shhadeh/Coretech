import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <input
        {...props}
        className="input-field peer"
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== '');
        }}
        onChange={(e) => {
          setHasValue(e.target.value !== '');
          props.onChange?.(e);
        }}
      />
      <motion.label
        initial={false}
        animate={{
          top: isFocused || hasValue ? '-8px' : '12px',
          fontSize: isFocused || hasValue ? '12px' : '16px',
          color: isFocused ? '#00D4FF' : '#666',
        }}
        className="absolute left-4 bg-white dark:bg-dark-charcoal px-2 pointer-events-none transition-all"
      >
        {label}
      </motion.label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, error, className = '', ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <textarea
        {...props}
        className="input-field peer min-h-[120px]"
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== '');
        }}
        onChange={(e) => {
          setHasValue(e.target.value !== '');
          props.onChange?.(e);
        }}
      />
      <motion.label
        initial={false}
        animate={{
          top: isFocused || hasValue ? '-8px' : '12px',
          fontSize: isFocused || hasValue ? '12px' : '16px',
          color: isFocused ? '#00D4FF' : '#666',
        }}
        className="absolute left-4 bg-white dark:bg-dark-charcoal px-2 pointer-events-none transition-all"
      >
        {label}
      </motion.label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};
