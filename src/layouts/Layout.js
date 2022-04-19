import PropTypes from "prop-types"
import { Helmet } from "react-helmet";
import FadeWrapper from "../components/animated/FadeWrapper";

export default function Viewer({ children }) {
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

Viewer.propTypes = {
  children: PropTypes.any
}
