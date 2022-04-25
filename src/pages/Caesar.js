import Model from '../components/models/Caesar';
import React from 'react';
import SculptureModal from '../components/animated/SculptureModal';
import SculptureLayout from '../templates/SculpturePageTemplate';

function Page() {

  const elems = [
    (<h1 key={0}>Julius Caesar</h1>),
    (<SculptureModal key={1} name="Julius Caesar" artist="Nicolas Coustou" date="1696 - 1722" held="Louvre Museum in Paris, France" heldLink="https://collections.louvre.fr/en/" moreInfo='https://collections.louvre.fr/en/ark:/53355/cl010091988' origin="Lyon, France" />),
    (<p key={2}>
      <i>Julius Caesar</i> (French: Jules César), is a sculpture by French sculptor Nicolas Coustou comissioned by King Louis XIV in 1696.
      The sculpture is a portrait of the Roman Emperor Julius Caesar, the last emperor of the Roman Republic. The sculpture 
      was made to pair with with a statue of the Carthaginian general and statesman Hannibal by the artist Sebastien Slodtz.
      Both Caesar and Hannibal are considered some of the most famous figures in history in ancient history.
    </p>),
    (<p key={3}>
        The sculpture is most recognized by many visitors of the Lourve Museum in Paris, France as a marbel sculpture in the Garden of 
        Tuileries, the most oldest square in Paris. However, this is only a moulding of the sculpture, and the sculpture is resides
        in the private archives of the Louvre Museum.
    </p>),
  ]

  return (
    <SculptureLayout title="Neptune" model={<Model />} modelOffset={[0, 0.35, 0]} descriptionElems={elems} />
  );
}

export default Page;
