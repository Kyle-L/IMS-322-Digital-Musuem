import React from 'react';
import SculptureModal from '../components/animated/SculptureModal';
import TooltipWrapper from '../components/animated/Tooltip';
import Model from '../components/models/Philopoemen';
import SculptureLayout from '../templates/SculpturePageTemplate';

function Page() {

  const elems = [
    (<h1 className='heading' key={0}>Philopoemen</h1>),
    (<SculptureModal key={1} name="Philopoemen" artist="David d'Angers" date="1837" held="Louvre Museum in Paris, France" heldLink="https://collections.louvre.fr/en/" moreInfo='https://collections.louvre.fr/en/ark:/53355/cl010091414' origin="Marlay, France" />),
    (<p key={2}>
      This marble sculpture of Philopoemen was carved by the french artist David d&apos;Angers. Commissioned by the Ministry of the Household of the King for the court of the Louvre in September 27, 1831,
      this sculpture depicts Philopoemen, born in 252 BC, was a skilled Greek general and statesman, who was an skilled <TooltipWrapper label={'Strategos is used in Greek to mean military general.'}>strategos</TooltipWrapper> on eight occasions.
    </p>),
    (<p key={3}>
        Philopoemen first came to the attention of the Greek public when he helped defend Megalopolis against the Spartan king <TooltipWrapper label={'Cleomenes III was one of the two kings of Sparta from 235 to 222 BC. He was a member of the Agiad dynasty and succeeded his father, Leonidas II. He is known for his attempts to reform the Spartan state.'}>Cleomenes III</TooltipWrapper> in 223 BC. 
        Cleomenes III had seized Megalopolis. 
    </p>),
    (<p key={4}>
      The real sculpture currently reside in the Louvre Museum, Department of Sculptures from the Middle Ages, the Renaissance and Modern Times in Paris, France.
    </p>),
  ]

  return (
    <SculptureLayout title="Philopoemen" model={<Model />} modelOffset={[0, 125, 0]} fov={55} descriptionElems={elems} />
  );
}

export default Page;
