import React from 'react';
import SculptureModal from '../components/animated/SculptureModal';
import Model from '../components/models/ThreeGraces';
import SculptureLayout from '../layouts/SculptureLayout';

function Page() {

  const elems = [
    (<h1 key={0}>The Three Graces</h1>),
    (<SculptureModal key={1} name="The Three Graces" artist=" Antonio Canova" date="1703 - 1705 (signing)" held="Louvre Museum in Paris, France" heldLink="https://collections.louvre.fr/en/" moreInfo='https://collections.louvre.fr/en/ark:/53355/cl010094811' origin="Marlay, France" />),
    (<p key={2}>
      Antonio Canova’s statue The Three Graces is a Neoclassical sculpture, in marble, of the mythological three Charites. The 
      charities are daughters of Zeus – identified on some engravings of the statue as, from left to right, Euphrosyne, Aglaea and Thalia – who 
      were said to represent youth/beauty (Thalia), mirth (Euphrosyne), and elegance (Aglaea). The Graces presided over banquets 
      and gatherings, to delight the guests of the gods. As such they have served as subjects for historical artists including 
      Sandro Botticelli and Bertel Thorvaldsen. A version of the sculpture is in the Hermitage Museum, and another is owned 
      jointly and exhibited in turn by the Victoria and Albert Museum and the Scottish National Gallery.
    </p>),
    (<p key={3}>
        Depictions of Neptune in Roman mosaics, especially those of North Africa, are influenced by Hellenistic conventions.
        Neptune was likely associated with fresh water springs before the sea. Like Poseidon, Neptune was worshipped by the
        Romans also as a god of horses, under the name Neptunus Equester, a patron of horse-racing. This affiliation of with 
        Neptune being the god of horses directly influenced Antoine Coysevox&apos;s work here.
    </p>),
    (<p key={4}>
      The real sculpture currently reside in the Louvre Museum, Department of Sculptures from the Middle Ages, the Renaissance and Modern Times in Paris, France.
    </p>),
  ]

  return (
    <SculptureLayout title="Neptune" model={<Model />} modelOffset={[0, 18, 0]} fov={30} descriptionElems={elems} />
  );
}

export default Page;
