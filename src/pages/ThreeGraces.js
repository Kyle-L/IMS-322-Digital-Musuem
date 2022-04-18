import Modal from 'components/animated/SculptureModal';
import React from 'react';
import Layout from '../components/SculptureLayout'
import Model from '../components/models/ThreeGraces'

function Page() {
  return (
    <Layout model={<Model />} modelOffset={[0, 18, 0]} fov={30}>
      <h1>The Three Graces</h1>
      <Modal name={"Three Graces"}/>
      <p>Antonio Canova’s statue The Three Graces is a Neoclassical sculpture, in marble, of the mythological three Charites, daughters of Zeus – identified on some engravings of the statue as, from left to right, Euphrosyne, Aglaea and Thalia – who were said to represent youth/beauty (Thalia), mirth (Euphrosyne), and elegance (Aglaea). The Graces presided over banquets and gatherings, to delight the guests of the gods. As such they have served as subjects for historical artists including Sandro Botticelli and Bertel Thorvaldsen. A version of the sculpture is in the Hermitage Museum, and another is owned jointly and exhibited in turn by the Victoria and Albert Museum and the Scottish National Gallery.</p>
    </Layout>
  )
}

export default Page;