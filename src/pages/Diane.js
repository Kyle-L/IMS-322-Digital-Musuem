import SculptureLayout from '../layouts/SculptureLayout';
import Model from '../components/models/Diane';

function Page() {
  return (
    <SculptureLayout title="Diane" model={<Model />} modelOffset={[0, 6, 0]}>
      <h1>Diane</h1>
    </SculptureLayout>
  );
}

export default Page;
