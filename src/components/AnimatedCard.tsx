'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  index: number;
  className?: string;
  onClick?: () => void;
}

export default function AnimatedCard({ children, index, className = '', onClick }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative ${className}`}
    >
      {/* Glow Effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-xl blur-xl -z-10"
          />
        )}
      </AnimatePresence>

      {/* Content */}
      <motion.div
        className="relative z-10"
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>

      {/* Floating Particles Effect */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0, 1, 0], 
                  x: Math.random() * 100 - 50, 
                  y: Math.random() * 100 - 50 
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute w-2 h-2 bg-accent-400 rounded-full pointer-events-none"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${20 + i * 20}%`
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
