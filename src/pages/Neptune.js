import Layout from '../components/Layout'
import Model from '../components/models/Neptune'

function Page () {
  return (
    <Layout model={<Model />} modelOffset={[0, 6, 0]}>
      <h1>Neptune</h1>
    </Layout>
  )
}

export default Page;