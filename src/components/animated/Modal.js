import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from "prop-types";
import React from 'react';

/**
 * A simple modal with a modalVisible and a modalSetVisible prop to control the visibility through
 * the useState hook.
 * @param {Object} props - The props passed to the component.
 * @returns The rendered modal.
 */
function Modal({ children, modalVisible, modalSetVisible }) {
  return (
    modalVisible && (
    <AnimatePresence>
      <motion.div
        className="modal-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => modalSetVisible(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="modal-content"
        >
          {children}
          <button className="btn close-button" onClick={() => modalSetVisible(false)}>
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
    )
  );
}

Modal.propTypes = {
  children: PropTypes.any,
  modalSetVisible: PropTypes.func,
  modalVisible: PropTypes.any
}

export default Modal;
