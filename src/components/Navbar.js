import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <NavLink to="/death">Death</NavLink>
            <NavLink to="/Neptune">Neptune</NavLink>
            <NavLink to="/diane">Diane</NavLink>
        </>
    )
}

export default Navbar;