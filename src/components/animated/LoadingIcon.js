import { motion } from 'framer-motion';
import React from 'react';

const spinTransition = {
  loop: Infinity,
  ease: 'linear',
  duration: 1,
};

/**
 * A component that animates a loading icon.
 * @returns {JSX.Element} The rendered component.
 */
export default function CircleLoader() {
  return (
      <motion.span
        className="loader"
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
  );
}
