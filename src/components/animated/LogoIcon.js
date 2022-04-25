import PropTypes from "prop-types"
import {motion} from 'framer-motion';


function LogoIcon() {
    const transition = { duration: 3, ease: 'easeInOut' };
    const initial = { opacity: 1, pathLength: 0 };
    const animate = { opacity: 1, pathLength: 1 };

    return (
        <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 289.47 245.91">     
            <style>{`.cls-1{ fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12px; }`}</style>       
            <motion.path transition={transition} initial={initial} animate={animate} className="cls-1" d="M363.76,331c0-39,.07-78-.05-117,0-8.07,1-9.37,9.05-9,2.78.11,5.58.13,8.36,0,3.19-.16,5-2.4,5.68-5.14.58-2.43-.53-4.56-3.1-5.78-8.39-4-16.68-8.21-25.09-12.18-31.91-15-64-29.79-95.72-45.16-9.28-4.49-17.1-1.67-25.13,2.11-25.76,12.12-51.44,24.4-77.17,36.6-11.35,5.39-22.68,10.81-34.09,16-3.93,1.8-8.17,3-8.42,8.4,0,0-1.21,0-1.85,0" transform="translate(-108.7 -128.37)" />
            <motion.path transition={transition} initial={initial} animate={animate} className="cls-1" d="M372.76,332.84c6.47.1,10.58,3.1,12.89,9.06,1.77,4.56,4,8.94,5.71,13.53,2.63,7.05-1.42,12.82-8.95,12.82q-129.24,0-258.46,0c-7.81,0-11-4.65-8.32-12.18,1.93-5.43,4.32-10.7,6.36-16.1,1.83-4.83,5.3-6.55,10.32-6.47Z" transform="translate(-108.7 -128.37)" />
            <motion.path transition={transition} initial={initial} animate={animate} className="cls-1" d="M269.89,331.62q0-42.44,0-84.87c0-10.11-7.62-18-17.36-18-10.45,0-17.35,7.15-17.35,18q0,38.58,0,77.16c0,2.35-.4,4.71-.62,7.07" transform="translate(-108.7 -128.37)" />
            <motion.path transition={transition} initial={initial} animate={animate} className="cls-1" d="M211.39,331c0-27.65-.1-55.29,0-82.94.07-14.53-10.37-20-19.33-19.31-7.95.62-15.68,8.54-15.56,18,.36,28.07.13,56.14.13,84.22" transform="translate(-108.7 -128.37)" />
            <motion.path transition={transition} initial={initial} animate={animate} className="cls-1" d="M329,331c-.21-2.57-.61-5.14-.61-7.72-.05-25.07-.13-50.15,0-75.22.06-11.28-6.93-20-19.33-19.28-7.83.46-15.68,8.4-15.56,18,.36,28.07.13,56.14.13,84.22" transform="translate(-108.7 -128.37)" />
            <motion.path transition={transition} initial={initial} animate={animate} className="cls-1" d="M266,205c-38.36,0-76.72-.2-115.08.17-7.91.08-15.86.36-23.79.51-4,.08-7.07-1-8.36-5.18" transform="translate(-108.7 -128.37)" />
            <motion.path transition={transition} initial={initial} animate={animate} className="cls-1" d="M140.66,207.54c.22,2.57.62,5.14.62,7.71q.06,58.19,0,116.37" transform="translate(-108.7 -128.37)" />
        </motion.svg>
    );
  }

LogoIcon.propTypes = {
  delay: PropTypes.number
}
  
  export default LogoIcon;


