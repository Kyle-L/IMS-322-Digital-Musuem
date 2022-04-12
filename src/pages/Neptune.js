import Layout from '../components/Layout'
import Neptune from '../models/Neptune'

function Page () {
  return (
    <Layout model={<Neptune />}>
      <h1>Neptune</h1>
    </Layout>
  )
}

export default Page;