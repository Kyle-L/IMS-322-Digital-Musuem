import Layout from '../components/SculptureLayout'
import Model from '../components/models/Diane'

function Page () {
  return (
    <Layout model={<Model />} modelOffset={[0, 6, 0]}>
      <h1>Diane</h1>
    </Layout>
  )
}

export default Page;