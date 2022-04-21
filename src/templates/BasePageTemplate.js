import PropTypes from "prop-types"
import { Helmet } from "react-helmet";
import FadeWrapper from "../components/animated/FadeWrapper";

/**
 * A simple page template that wraps the content in a container and adds a fade in animation.
 * @param {Object} props - The props passed to the component.
 * @returns The rendered page template populated with the content passed to the component.
 */
export default function BasePageTemplate({ children }) {
  return (
    <>
      <Helmet>
        <title>Digital Museum</title>
      </Helmet>
      <div className="container row h-100">
        <div className="col">
          <FadeWrapper active>
            {children}
          </FadeWrapper>
        </div>
      </div>
    </>
  );
}

BasePageTemplate.propTypes = {
  children: PropTypes.any
}
