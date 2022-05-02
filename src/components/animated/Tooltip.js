import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";
import React, { useState } from "react";

/**
 * A tooltip that animates when hovering over a child element.
 * @param {Object} props - The props passed to the component.
 * @returns The rendered modal.
 */
export default function TooltipWrapper({ children, label }) {
    // The animation API controls.
    const toolTipControl = useAnimation();

    // Controls the direction of the tooltip.
    const [direction, setDirection] = useState("right");

    // References to use to calculate the position of the tooltip.
    const toolTipTextRef = React.createRef();
    const toolTipRef = React.createRef();

    const onHoverStart = () => {
        if (toolTipTextRef.current.getBoundingClientRect().right + 300 < window.innerWidth) {
            setDirection("right");
        } else {
            setDirection("left");
        }

        // Animates in the tooltip.
        toolTipControl.start({
            opacity: 1,
            display: 'inline-block',
            x: 0,
            y: '-0.5rem',
        });
    }

    const onHoverEnd = () => {
        // Animates out the tooltip.
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
                ref={toolTipRef}
                className={'tooltip'}
                aria-label={label}
                data-tooltip={direction}
                animate={toolTipControl}
                initial={{ opacity: 0, y: '-4rem', display: 'none' }}
            >
            </motion.span>
            <span 
            ref={toolTipTextRef}
            className="tooltip-text">
                {children}
            </span>
        </span>
    )
}

TooltipWrapper.propTypes = {
    children: PropTypes.any,
    label: PropTypes.any
}
