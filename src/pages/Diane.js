import Model from '../components/models/Diane';
import React from 'react';
import SculptureModal from '../components/animated/SculptureModal';
import SculptureLayout from '../layouts/SculptureLayout';

function Page() {

  const elems = [
    (<h1 key={0}>Diane</h1>),
    (<SculptureModal key={1} name="Diane" artist="Antoine Coysevox" date="1703 - 1705 (signing)" held="Louvre Museum in Paris, France" heldLink="https://collections.louvre.fr/en/" moreInfo='https://collections.louvre.fr/en/ark:/53355/cl010094811' origin="Marlay, France" />),
    (<p key={2}>
      This marble sculpture of Neptune was carved by the french artist Antoine Coysevox. Neptune (Latin: Neptūnus) was the god of freshwater and the sea in
      Roman religion. He is the counterpart of the Greek god Poseidon. In the Greek-influenced tradition,
      Neptune was the brother of Jupiter andPluto; the brothers presided over the realms of Heaven,
      the earthly world, and the Underworld. Salacia was his consort.
    </p>),
    (<p key={3}>
        Depictions of Neptune in Roman mosaics, especially those of North Africa, are influenced by Hellenistic conventions.
        Neptune was likely associated with fresh water springs before the sea. Like Poseidon, Neptune was worshipped by the
        Romans also as a god of horses, under the name Neptunus Equester, a patron of horse-racing.
    </p>),
    (<p key={4}>
      The real sculpture currently reside in the Louvre Museum, Department of Sculptures from the Middle Ages, the Renaissance and Modern Times in Paris, France.
    </p>),
  ]

  return (
    <SculptureLayout title="Neptune" model={<Model />} modelOffset={[0, 6, 0]} descriptionElems={elems} />
  );
}

export default Page;
