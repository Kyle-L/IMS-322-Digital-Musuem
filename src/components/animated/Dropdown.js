import PropTypes from "prop-types"
import React from "react";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

export default function Dropdown({ title, links }) {
    const [isMouse, toggleMouse] = React.useState(false);

    const handleMouseEnter = () => {
        toggleMouse(true);
    };

    const handleMouseLeave = () => {
        toggleMouse(false);
    };

    const subMenuAnimate = {
        enter: {
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 0.5
            },
            display: "block"
        },
        exit: {
            opacity: 0,
            rotateX: -25,
            transition: {
                duration: 0.5,
                delay: 0.3
            },
            transitionEnd: {
                display: "none"
            }
        }
    };
    return (
        <>
            <motion.div
                className="menu-item"
                onHoverStart={handleMouseEnter}
                onHoverEnd={handleMouseLeave}
            >
                <p className="link">{title}</p>
                <motion.div
                    className="sub-menu"
                    initial="exit"
                    animate={isMouse ? "enter" : "exit"}
                    variants={subMenuAnimate}
                >
                    <div className="sub-menu-container">
                        {links.map((link, index) => (
                            <div key={index} className="sub-menu-item">
                                <NavLink to={link.link}>{link.title}</NavLink>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

Dropdown.propTypes = {
    links: PropTypes.any,
    title: PropTypes.any
}
