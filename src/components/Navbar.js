import { NavLink } from 'react-router-dom';
import Dropdown from './animated/Dropdown';
import LogoIcon from './animated/LogoIcon';

function Navbar() {
  const links = [
    {
      title: 'Bust of Caesar',
      link: '/augustus',
    },
    {
      title: 'Death of the Mother',
      link: '/death'
    },
    {
      title: 'Diane',
      link: '/diane'
    },
    {
      title: 'Neptune',
      link: '/neptune'
    },
    {
      title: 'The Three Graces',
      link: '/three-graces'
    }
  ];

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
              <Dropdown title={'Sculptures'} links={links}/>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
    </>
  );
}

export default Navbar;
