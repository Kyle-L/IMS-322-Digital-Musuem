import SculptureLayout from '../layouts/SculptureLayout';
import Model from '../components/models/Augustus';

function Page() {
  return (
    <>
      <SculptureLayout title="Augustus" model={<Model />} modelOffset={[0, 4, 0]}>
        <h1>Augustus</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum eros id leo convallis, nec ultricies lorem blandit. Aenean luctus commodo mattis. Fusce sodales erat in urna feugiat ultrices. Maecenas congue ut urna eu ornare. Praesent efficitur porttitor orci nec fermentum. Cras at pharetra ligula, vel dapibus libero. Vivamus feugiat, urna vitae tempor semper, elit est interdum sem, quis scelerisque lacus mi non leo. Morbi ut lacus sit amet lorem vulputate ornare nec id massa. Cras non augue purus. Quisque quis ullamcorper nunc. Vestibulum sapien nisl, cursus quis massa sodales, ornare maximus eros. Nam interdum, massa tempus fringilla suscipit, purus arcu condimentum lorem, ac rhoncus nisl nibh pretium risus. In et suscipit diam, nec iaculis nisi. Pellentesque justo diam, vestibulum quis consequat eu, vehicula eu lectus. Nulla et elit finibus, aliquet odio ac, lobortis nulla.</p>
      </SculptureLayout>
    </>
  );
}

export default Page;
