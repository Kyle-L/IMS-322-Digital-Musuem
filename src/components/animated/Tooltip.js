import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";

export default function TooltipWrapper({ children, label }) {
    const toolTipControl = useAnimation();

    toolTipControl.initial = { opacity: 0, y: -10 };

    const onHoverStart = () => {
        toolTipControl.start({
            opacity: 1,
            display: 'inline-block',
            x: 0,
            y: '-0.5rem',
        });
    }

    const onHoverEnd = () => {
        toolTipControl.start({
            opacity: 0,
            display: 'none',
            y: '-2rem',
            transition: {
                display: {
                    delay: 0.2,
                }
            }
        });
    }

    return (
        <span
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}>
            <motion.span
                className={'tooltip'}
                aria-label={label}
                data-tooltip='top'
                initial={{ opacity: 0, y: '-4rem', display: 'none' }}
                animate={toolTipControl}
            >
            </motion.span>
            <span className="tooltip-text">
                {children}
            </span>
        </span>
    )
}

TooltipWrapper.propTypes = {
    children: PropTypes.any,
    label: PropTypes.any
}
