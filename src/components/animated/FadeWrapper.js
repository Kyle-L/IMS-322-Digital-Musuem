import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import LoadingIcon from './LoadingIcon';

/**
 * A wrapper component that fades everything wrapped. Includes optional loading icon.
 */
export default function Fade({ children, active = true, includeLoader = false }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      {includeLoader && !isActive && (<LoadingIcon />)}
      {isActive && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{ position: 'relative', height: '100%', width: '100%' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </div>

  );
}

Fade.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  includeLoader: PropTypes.bool
}
