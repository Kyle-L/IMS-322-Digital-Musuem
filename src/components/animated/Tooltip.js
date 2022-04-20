import { motion } from "framer-motion";

function Tooltip (props) {
    const { children, tooltipVisible, tooltipSetVisible } = props;
    return (
        tooltipVisible && (
        <motion.div
            className="tooltip-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => tooltipSetVisible(false)}
        >
            <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="tooltip-content"
            >
            {children}
            <button className="close-button" onClick={() => tooltipSetVisible(false)}>
                Close
            </button>
            </motion.div>
        </motion.div>
        )
    );
}

export default Tooltip;