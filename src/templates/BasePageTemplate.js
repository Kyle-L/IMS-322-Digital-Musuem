import PropTypes from "prop-types"
import { Helmet } from "react-helmet";
import Fade from "../components/animated/FadeWrapper";

/**
 * A simple page template that wraps the content in a container and adds a fade in animation.
 * @param {Object} props - The props passed to the component.
 * @returns The rendered page template populated with the content passed to the component.
 */
export default function BasePageTemplate({ children, title }) {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Digital Museum</title>}
        {!title && <title>Digital Museum</title>}
      </Helmet>
      <div className="container">
        <Fade>
          {children}
        </Fade>
      </div>
    </>
  );
}

BasePageTemplate.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any
}
