import SculptureImage from '../components/animated/SculptureImage';
import BasePageTemplate from '../templates/BasePageTemplate';
import death from '../assets/images/death.png';
import arria from '../assets/images/arria.png';
import caesar from '../assets/images/caesar.png';
import hercule from '../assets/images/hercule.png';
import louis from '../assets/images/louis.png';
import neptune from '../assets/images/neptune.png';
import threeGraces from '../assets/images/three-graces.png';
import { NavLink } from 'react-router-dom';

function Sculptures() {
  return (
    <BasePageTemplate title={'Sculptures'}>
      <div className="row col"><h1 className='heading'>Welcome!</h1></div>
      <div className="row">
        <div className="col">
          <p>
            Welcome to the Digital Museum! The digital museum is a collection of sculptures that can be viewed and explored in 3 dimensions. Often, the problem of viewing a sculpture is that it is difficult to see the details of the it through just a picture.
            The digital museum solves that problem by allowing you to view the sculpture in 3D. While a picture speaks a 1000 words, a 3D model speaks quite a few more in this case! Take a moment to explore some of the sculptures!
          </p>
        </div>
      </div>
      <hr />
      <div className="row col"><h1 className='heading'>Explore Sculptures!</h1></div>
      <div className='row'>
        <div className='col'>
          <NavLink to='/sculpture/arria'><SculptureImage title='Arria et Poetus' image={arria} alt='Arria et Poetus' /></NavLink>
          <NavLink to='/sculpture/caesar'><SculptureImage title='Julius Caesar' image={caesar} alt='Julius Caesar' /></NavLink>
          <NavLink to='/sculpture/death'><SculptureImage title='Death and the Mother' image={death} alt='Death and the Mother' /></NavLink>
          <NavLink to='/sculpture/hercule'><SculptureImage title='Hercule' image={hercule} alt='Hercule' /></NavLink>
        </div>
        <div className='col'>
          <NavLink to='/sculpture/louis-xiv'><SculptureImage title='Louis XIV' image={louis} alt='Louis XIV' /></NavLink>
          <NavLink to='/sculpture/neptune'><SculptureImage title='Neptune' image={neptune} alt='Neptune' /></NavLink>
          <NavLink to='/sculpture/three-graces'><SculptureImage title='The Three Graces' image={threeGraces} alt='The Three Graces' /></NavLink>
        </div>
      </div>
      <div style={{ paddingTop: '4rem' }}></div>
    </BasePageTemplate>
  );
}

export default Sculptures;
