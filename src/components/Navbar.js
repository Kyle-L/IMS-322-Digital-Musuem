import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
        <header>
            <nav className="nav">
                <h1 className="navHeading">Digital Museum</h1>
                <ul className="navList">
                    <li className="li">
                        <NavLink className="link" to="/augustus">
                            Augustus
                        </NavLink>
                    </li>
                    <li className="li">
                        <NavLink className="link" to="/death">
                            Death
                        </NavLink>
                    </li>
                    <li className="li">
                        <NavLink className="link" to="/diane">
                            Diane
                        </NavLink>
                    </li>
                    <li className="li">
                        <NavLink className="link" to="/neptune">
                            Neptune
                        </NavLink>
                    </li>
                    <li className="li">
                        <NavLink className="link" to="/three-graces">
                            The Three Graces
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <hr />
        </>

    )
}

export default Navbar;