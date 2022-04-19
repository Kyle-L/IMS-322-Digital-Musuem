import { NavLink } from 'react-router-dom';
import LogoIcon from './animated/LogoIcon';

function Navbar() {
  return (
    <>
      <header>
        <nav className="nav">
          <NavLink className="heading" to="/"><span className="img"><LogoIcon /></span> Digital Museum</NavLink>
          <ul className="list">
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

  );
}

export default Navbar;
