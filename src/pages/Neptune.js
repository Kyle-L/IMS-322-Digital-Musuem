import Modal from 'components/animated/SculptureModal';
import Layout from '../components/SculptureLayout';
import Model from '../components/models/Neptune';

function Page() {
  return (
    <Layout model={<Model />} modelOffset={[0, 4, 0]}>
      <h1>Neptune</h1>
      <Modal name="Neptune" artist={'Antoine Coysevox'} date={'1703 - 1705 (signing)'} held={'Louvre Museum in Paris, France'} origin={'Marlay, France'} />
      <p>
        This marble sculpture of Neptune was carved by the french artist Antoine Coysevox. Neptune (Latin: Neptūnus) was the god of freshwater and the sea in
        Roman religion. He is the counterpart of the Greek god Poseidon. In the Greek-influenced tradition,
        Neptune was the brother of Jupiter andPluto; the brothers presided over the realms of Heaven,
        the earthly world, and the Underworld. Salacia was his consort.</p>
      <p>
        Depictions of Neptune in Roman mosaics, especially those of North Africa, are influenced by Hellenistic conventions.
        Neptune was likely associated with fresh water springs before the sea. Like Poseidon, Neptune was worshipped by the
        Romans also as a god of horses, under the name Neptunus Equester, a patron of horse-racing.
      </p>
      <p>The real sculpture currently reside in the Louvre Museum, Department of Sculptures from the Middle Ages, the Renaissance and Modern Times in Paris, France.</p>
    </Layout>
  )
}

export default Page;