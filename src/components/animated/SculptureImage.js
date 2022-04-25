import PropTypes from "prop-types"
import { motion, useAnimation } from "framer-motion";
import * as React from "react";

/**
 * An image that animates when it is hovered over.
 * @param {Object} props - The props passed to the component.
 * @returns The rendered modal.
 */
const SculptureImage = ({ title, image, alt }) => {
    const backgroundControl = useAnimation();
    const imageControl = useAnimation();
    const textControl = useAnimation();

    const onHover = () => {
        backgroundControl.start({
            x: 10,
            y: -10
        });

        imageControl.start({
            x: -2,
            y: 2
        });

        textControl.start({
            fontSize: "2.25rem",
        });
    };

    const onLeave = () => {
        backgroundControl.start({
            x: 0,
            y: 0
        });

        imageControl.start({
            x: 0,
            y: 2,
        });

        textControl.start({
            fontSize: '2.125rem'
        });
    };

    return (
        <div style={{ position: 'relative', paddingTop: '1.5rem' }} onMouseOver={onHover} onMouseLeave={onLeave}>
            <motion.div style={{ position: "absolute", opacity: "30%" }} animate={backgroundControl}>
                <img className="img-fluid img-rounded" src={image} alt={alt} />
            </motion.div>
            <motion.div animate={imageControl} style={{display: 'flex', alignItems: 'center'}}>
                <motion.h1 initial={{fontSize: '2.125rem'}} animate={textControl} style={{ position: "absolute", paddingLeft: '1rem', color: 'white' }}>
                    {title}
                </motion.h1>
                <img className="img-fluid img-rounded" src={image} alt={alt} />
            </motion.div>
        </div>
    );
};

SculptureImage.propTypes = {
    alt: PropTypes.any,
    image: PropTypes.any,
    title: PropTypes.any
}

export default SculptureImage;
