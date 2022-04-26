import React from 'react';
import SculptureModal from '../components/animated/SculptureModal';
import TooltipWrapper from '../components/animated/Tooltip';
import Model from '../components/models/Death';
import SculptureLayout from '../templates/SculpturePageTemplate';

function Page() {

  const elems = [
    (<h1 className='heading' key={0}>Death and the Mother</h1>),
    (<SculptureModal key={1} name="Death and the Mother" artist="Niels Hansen Jacobsen" date="1892" held="Danish National Gallery in Copenhagen, Denmark" heldLink="https://www.smk.dk/en/" moreInfo='https://en.wikipedia.org/wiki/Death_and_the_Mother' origin="Paris, France" />),
    (<p key={2}>
      <i>Death and the Mother</i> is a sculpture created by the Danish sculptor Niels Hansen Jacobsen.
      Inspired by <TooltipWrapper label={'Hans Christian Andersen was a Danish author. Although a prolific writer of plays, travelogues, novels, and poems, he is best remembered for his literary fairy tales such as the Little Mermaid and the Princess and the Pea.'}>Hans Christian Andersen&apos;s</TooltipWrapper> tale <i>The Story of a Mother</i>, it depicts a Grim Reaper figure, in a dynamic pose,
      carrying a scythe, striding over a mother with a dead child crouching on the ground. Jacobsen created the model in 1892
      shortly after arriving in Paris, France where he lived until 1902.
    </p>),
    (<p key={3}>
      The model was first exhibited at the Société Nationale des Beaux-Arts in Paris where it was well received.
      The next year it was exhibited at Charlottenborg and in 1899 Hansen Jacobsen gave the model to
      the Danish National Gallery. The model has resided in Denmark at the Danish National Gallery since.
    </p>),
    (<p key={4}>
      However, while the original plaster model is in the holdings of the Danish National Gallery, two bronze castings are located
      outside St. Peter&apos;s Church in Copenhagen and Vejen Art Museum.
    </p>),
  ]

  return (
    <SculptureLayout title="Death and the Mother" model={<Model />} modelOffset={[0, 2, 0]} fov={40} descriptionElems={elems} />
  );
}

export default Page;
