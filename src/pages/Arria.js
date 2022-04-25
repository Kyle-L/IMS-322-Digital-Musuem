import Model from '../components/models/Arria';
import React from 'react';
import SculptureModal from '../components/animated/SculptureModal';
import SculptureLayout from '../templates/SculpturePageTemplate';

function Page() {

  const elems = [
    (<h1 key={0}>Arria et Poetus</h1>),
    (<SculptureModal key={1} name="Arria et Poetus" artist="Pierre Lepautre &amp; Jean Baptiste Théodon" date="1685 - 1695" held="Louvre Museum in Paris, France" heldLink="https://collections.louvre.fr/en/" moreInfo='https://collections.louvre.fr/en/ark:/53355/cl010092120' origin="Marlay, France" />),
    (<p key={2}>
        <i>Arria et Paetus</i> is a sculpture by Pierre Lepautre and Jean-Baptiste Théodon. It depicts the death of Arria. Arria was a woman in ancient Rome. Her husband, Caecina Paetus, was ordered by the emperor Claudius to commit suicide for his part in a rebellion but was not capable of forcing himself 
        to do so. Arria wrenched the dagger from him and stabbed herself, then returned it to her husband, telling him that it didn&apos;t hurt (&quot;Non dolet, Paete!&quot;).
    </p>),
    (<p key={3}>
      We know this story thanks to the message of Pliny the Younger, who received information from Arria&apos;s granddaughter, Arria Fanna. The very theme of Arria&apos;s suicide was used in later centuries by numerous artists who thus portrayed the death.
    </p>),
    (<p key={4}>
      Currently, a cast this statue resides in the the Tuileries Garden of the Louvre Musuem in Paris, France with the original remaining the in the musuems private colleciton.
    </p>)
  ]

  return (
    <SculptureLayout title="Arria et Poetus" model={<Model />} modelOffset={[0, 14, 0]} descriptionElems={elems} />
  );
}

export default Page;
