import Layout from '../components/Layout'
import Diane from '../models/Diane'

function Page () {
  return (
    <Layout model={<Diane />}>
      <h1>Diane</h1>
    </Layout>
  )
}

export default Page;