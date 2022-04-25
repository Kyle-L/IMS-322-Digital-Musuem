import React from 'react';
import SculptureModal from '../components/animated/SculptureModal';
import Model from '../components/models/Hercule';
import SculptureLayout from '../templates/SculpturePageTemplate';

function Page() {

  const elems = [
    (<h1 key={0}>Hercule</h1>),
    (<SculptureModal key={1} name="Hercule" artist="Gilles-Lambert Godecharle" date="1801" held="Royal Musuems of Fine Arts of Belgium" heldLink="https://www.fine-arts-museum.be/fr/open-museum" moreInfo='https://www.fine-arts-museum.be/fr/la-collection/gilles-lambert-godecharle-hercule' origin="Marlay, France" />),
    (<p key={2}>
        Held by the Royal Musuems of Fine Arts of Belgium, <i>Hercule</i> is a sculpture of Hercules, the god of war and the hero of ancient Rome. 
        Hercule was crafted by Gilles-Lambert Godecharle, a Belgian sculptor and pupil of the popular flemish sculptor Laurent Delvaux. Hercule
        was acquired by the Royal Musuems of Fine Arts of Belgium in in 1898 among a collection of sculptures by the same Godecharle.
    </p>),
    (<p key={3}>
      The sculpture used to be located on the grounds of Château de Wespelaer near Louvain. The sculpture is made of Avesne stone called de France.
      Presently, the sculpture remains on display at the Royal Musuems of Fine Arts of Belgium.
    </p>),
  ]

  return (
    <SculptureLayout title="Hercule" model={<Model />} modelOffset={[0, 10, 0]} descriptionElems={elems} />
  );
}

export default Page;
