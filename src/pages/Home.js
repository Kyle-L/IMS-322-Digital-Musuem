import { NavLink } from 'react-router-dom';
import BasePageTemplate from '../templates/BasePageTemplate';

function Home() {
  return (
    <BasePageTemplate>
      <div className='row'>
        <div className='col'>
          <h1>Welcome!</h1>
          <p>
            Welcome to the Digital Museum! The digital museum is a collection of sculptures that can be viewed and explored in 3 dimensions.
          </p>
          <p>
          Often, the problem of viewing a sculpture is that it is difficult to see the details of the it through just a picture.
          </p>
          <p>
          The digital museum solves that problem by allowing you to view the sculpture in 3D. While a picture speaks a 1000 words, a 3d models speaks quite a few more in this case!
          </p>
          <p>Take a moment to explore some of the exhibits!</p>
          <NavLink to='/sculptures'>Explore the Sculptures</NavLink>
        </div>
      </div>
    </BasePageTemplate>
  );
}

export default Home;
