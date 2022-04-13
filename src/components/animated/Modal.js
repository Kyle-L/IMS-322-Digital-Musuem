import React from "react";
import { motion, AnimatePresence } from "framer-motion"

function ModalButton({ children, modalVisible, modalSetVisible }) {
    return (
        modalVisible && <AnimatePresence>
            <motion.div
                className="modal-background"
                initial={{ opacity: 0, }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => modalSetVisible(false)}
            >
                <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="modal-content">
                    {children}
                    <button className="close-button" onClick={() => modalSetVisible(false)}>
                        Close
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default ModalButton;
