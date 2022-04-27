import PropTypes from "prop-types"
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

/**
 * A simple page template that wraps the content in a container and adds a fade in animation.
 * @param {Object} props - The props passed to the component.
 * @returns The rendered page template populated with the content passed to the component.
 */
export default function BasePageTemplate({ elems, title }) {
  const delayRate = 0.25;

  const initial = {
    opacity: 0,
    x: '-2rem',
  }

  const animate = {
    opacity: 1,
    x: 0,
  }

  const transition = {
    duration: 1,
  }

  return (
    <>
      <Helmet>
        {title && <title>{title} | Digital Museum</title>}
        {!title && <title>Digital Museum</title>}
      </Helmet>
      <div className="container">
          {elems.map((elem, i) => (
            <motion.div key={i} initial={initial} animate={animate} transition={{ delay: (i + 1) * delayRate, ...transition }}>
              {elem}
            </motion.div>
          ))
          }
      </div>
    </>
  );
}

BasePageTemplate.propTypes = {
  children: PropTypes.any,
  elems: PropTypes.shape({
    map: PropTypes.func
  }),
  title: PropTypes.any
}
