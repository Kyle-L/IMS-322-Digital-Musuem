import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }, [location.pathname]);
    return children
}

export default Wrapper;