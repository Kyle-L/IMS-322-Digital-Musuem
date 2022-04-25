import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import LoadingIcon from './LoadingIcon';

/**
 * A wrapper component that fades everything wrapped. Includes optional loading icon.
 * @param {Object} props - The props passed to the component.
 * @returns The rendered modal.
 */
export default function Fade({ children, active = true, includeLoader = false }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <>
      {includeLoader && !isActive && (<LoadingIcon />)}
      {isActive && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </>

  );
}

Fade.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  includeLoader: PropTypes.bool
}
