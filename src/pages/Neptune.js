import React from 'react';
import SculptureModal from '../components/animated/SculptureModal';
import TooltipWrapper from '../components/animated/Tooltip';
import Model from '../components/models/Neptune';
import SculptureLayout from '../templates/SculpturePageTemplate';

function Page() {

  const elems = [
    (<h1 className='heading' key={0}>Neptune</h1>),
    (<SculptureModal key={1} name="Neptune" artist="Antoine Coysevox" date="1703 - 1705 (signing)" held="Louvre Museum in Paris, France" heldLink="https://collections.louvre.fr/en/" moreInfo='https://collections.louvre.fr/en/ark:/53355/cl010094811' origin="Marlay, France" />),
    (<p key={2}>
      This marble sculpture of Neptune was carved by the french artist Antoine Coysevox. Neptune was the god of freshwater and the sea in
      Roman religion. He is the counterpart of the Greek god Poseidon. In the Greek-influenced tradition,
      Neptune was the brother of Jupiter and Pluto; the brothers presided over the realms of Heaven,
      the earthly world, and the Underworld. Salacia was his consort.
    </p>),
    (<p key={3}>
        Like Poseidon, Neptune was worshipped by the Romans also as a god of horses, under the name <TooltipWrapper label={'Before Poseidon was known as the god of the sea, he was connected to the horse and may have originally been depicted in equine form.'}>Neptunus Equester</TooltipWrapper>, a patron of horse-racing. This affiliation of with 
        Neptune being the god of horses directly influenced Antoine Coysevox&apos;s work.
    </p>),
    (<p key={4}>
      The real sculpture currently reside in the Louvre Museum, Department of Sculptures from the Middle Ages, the Renaissance and Modern Times in Paris, France.
    </p>),
  ]

  return (
    <SculptureLayout title="Neptune" model={<Model />} modelOffset={[0, 4, 0]} descriptionElems={elems} />
  );
}

export default Page;
