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
        </div>
        <div className='col'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet vitae lectus non interdum. Maecenas ligula velit, congue eu urna vel, condimentum ultricies dui. Integer ac est diam. Fusce vel erat sapien. Aenean sit amet purus in augue ultrices imperdiet non ac urna. Donec odio velit, faucibus accumsan consectetur et, lacinia ut odio. Aliquam erat volutpat. Etiam ac magna et tortor iaculis ultricies eu a nisi. Maecenas finibus condimentum massa eget lacinia. Suspendisse viverra velit id dictum tempor. Ut hendrerit magna leo, vel ullamcorper mi consectetur ac. Etiam a dignissim risus, sed congue ante. Sed bibendum ullamcorper libero at consequat. Aliquam auctor in risus at suscipit. Sed sit amet urna et metus pulvinar varius quis vel dui. Etiam et sagittis dui.</p>
        </div>
      </div>
    </BasePageTemplate>
  );
}

export default Home;
