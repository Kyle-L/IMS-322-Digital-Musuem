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
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li className="li">
              <NavLink className="link" to="/sculptures">
                Sculptures
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
