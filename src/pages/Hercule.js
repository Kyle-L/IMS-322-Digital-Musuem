import React from 'react';
import SculptureModal from '../components/animated/SculptureModal';
import TooltipWrapper from '../components/animated/Tooltip';
import Model from '../components/models/Hercule';
import SculptureLayout from '../templates/SculpturePageTemplate';

function Page() {

  const elems = [
    (<h1 className='heading' key={0}>Hercule</h1>),
    (<SculptureModal key={1} name="Hercule" artist="Gilles-Lambert Godecharle" date="1801" held="Royal Musuems of Fine Arts of Belgium" heldLink="https://www.fine-arts-museum.be/fr/open-museum" moreInfo='https://www.fine-arts-museum.be/fr/la-collection/gilles-lambert-godecharle-hercule' origin="Marlay, France" />),
    (<p key={2}>
        Held by the Royal Musuems of Fine Arts of Belgium, <i>Hercule</i> is a sculpture of <TooltipWrapper label={'Hercules is a multifaceted figure with contradictory characteristics, which enabled later artists and writers to pick and choose how to represent him.'}>Hercules</TooltipWrapper>, the god of war and the hero of ancient Rome. 
        Hercule was crafted by Gilles-Lambert Godecharle, a Belgian sculptor and pupil of the popular flemish sculptor Laurent Delvaux. Hercule
        was acquired by the Royal Musuems of Fine Arts of Belgium in in 1898 among a collection of sculptures by the same Godecharle.
    </p>),
    (<p key={3}>
      The sculpture used to be located on the grounds of <TooltipWrapper label={'Château de Wespelaer, located in Louvain, Belgium, was once know for its extensive art collection. Now, it is known for is trees and scrubs where there some 2000 different taxa that can be seen on the 20 hectare grounds.'}>Château de Wespelaer</TooltipWrapper> near Louvain, Belgium. The sculpture is made of Avesne stone called de France.
      Presently, the sculpture remains on display at the Royal Musuems of Fine Arts of Belgium.
    </p>),
  ]

  return (
    <SculptureLayout title="Hercule" model={<Model />} modelOffset={[0, 10, 0]} descriptionElems={elems} />
  );
}

export default Page;
