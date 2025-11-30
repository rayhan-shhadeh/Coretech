import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  featured = false,
  glass = false,
}) => {
  const cardClass = glass
    ? 'glass p-6'
    : featured
    ? 'card-featured p-6'
    : 'card p-6';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${cardClass} ${className}`}
    >
      {children}
    </motion.div>
  );
};
