import React from 'react';
import SculptureModal from '../components/animated/SculptureModal';
import TooltipWrapper from '../components/animated/Tooltip';
import Model from '../components/models/ThreeGraces';
import SculptureLayout from '../templates/SculpturePageTemplate';

function Page() {

  const elems = [
    (<h1 className='heading' key={0}>The Three Graces</h1>),
    (<SculptureModal key={1} name="The Three Graces" artist="Antonio Canova" date="1814 - 1817" held="Hermitage Museum in Saint Petersburg, Russia" heldLink="https://thehermitagemuseum.org/" moreInfo='https://en.wikipedia.org/wiki/The_Three_Graces_(sculpture)' origin="Bedfordshire, England" />),
    (<p key={2}>
      Antonio Canova&apos;s statue <i>The Three Graces</i> in marble depicts the mythological three <TooltipWrapper label={'In Greek mythology, the Charites, singular Charis, or Graces, were three or more goddesses of charm, beauty, nature, human creativity, goodwill, and fertility. The Charities are often some of the most frequently depicted characters in Greek mythology.'}>Charities</TooltipWrapper>. The 
      charities are daughters of Zeus. They are identified on some engravings of the statue as, from left to right, Euphrosyne, Aglaea and Thalia.
      They were said to were said to represent youth/beauty (Thalia), mirth (Euphrosyne), and elegance (Aglaea).
      </p>),
    (<p key={3}>
      The Graces presided over banquets and gatherings, to delight the guests of the gods. As such they have served as subjects for historical artists including 
      Sandro Botticelli and Bertel Thorvaldsen. A version of the sculpture is in the Hermitage Museum, and another is owned 
      jointly and exhibited in turn by the Victoria and Albert Museum and the Scottish National Gallery.
    </p>),
    (<p key={4}>
      Multiple versions of the statue exist in different locations in the world. The orginal statue is currently in the Hermitage Museum in Saint Petersburg, Russia
      where it was brought shortly after being brought there by the son of <TooltipWrapper label={'Joséphine Bonaparte, born Marie Josèphe Rose Tascher de La Pagerie, was Empress of the French as the first wife of Emperor Napoleon I.'}>Empress Joséphine of France</TooltipWrapper>, the original woman who comissioned it.
    </p>),
  ]

  return (
    <SculptureLayout title="The Three Graces" model={<Model />} modelOffset={[0, 18, 0]} fov={30} descriptionElems={elems} />
  );
}

export default Page;
