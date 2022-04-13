import React from "react";
import { motion } from "framer-motion";

const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1
};

export default function CircleLoader() {
    return (
        <div className="loader-container">
            <motion.span
                className="loader"
                animate={{ rotate: 360 }}
                transition={spinTransition}
            />
        </div>
    );
}