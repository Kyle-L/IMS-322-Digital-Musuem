import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './animated/Dropdown';
import LogoIcon from './animated/LogoIcon';
import NavigationModal from './animated/NavigationModal';

function Navbar() {
  const [mobile, setMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
  }, []);

  const links = [
    {
      title: 'Arria et Poetus',
      link: '/arria'
    },
    {
      title: 'Death and the Mother',
      link: '/death'
    },
    {
      title: 'Hercule',
      link: '/hercule',
    },
    {
      title: 'Julius Caesar',
      link: '/caesar',
    },
    {
      title: 'Louis XIV',
      link: '/louis-xiv',
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
              {!mobile && (<Dropdown title={'Sculptures'} links={links}/>)}
              {mobile && (<NavigationModal title={'Sculptures'} links={links}/>)}
            </li>
          </ul>
        </nav>
      </header>
      <hr />
    </>
  );
}

export default Navbar;
