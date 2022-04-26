import React from 'react';
import SculptureModal from '../components/animated/SculptureModal';
import Model from '../components/models/Louis';
import SculptureLayout from '../templates/SculpturePageTemplate';
import TooltipWrapper from '../components/animated/Tooltip';

function Page() {

  const elems = [
    (<h1 className='heading' key={0}>Equestrian Statue of King Louis XIV</h1>),
    (<SculptureModal key={1} name="Louis XIV" artist="Gian Lorenzo Bernini" date="1665 - 1684" held="The Palace of Versailles in Versailles, France" heldLink="https://en.chateauversailles.fr/" moreInfo='https://en.wikipedia.org/wiki/Equestrian_statue_of_Louis_XIV_(Bernini)' origin="Rome, Italy" />),
    (<p key={2}>
      <i>The Equestrian Statue of King Louis XIV</i> is a sculpture designed and partially executed by the Italian artist <TooltipWrapper label={'Gian Lorenzo Bernini was an Italian sculptor and architect. While a major figure in the world of architecture, he was more prominently the leading sculptor of his age, credited with creating the Baroque style of sculpture.'}>Gian Lorenzo Bernini</TooltipWrapper> and comissioned by the Louis XIV. Bernini first discussed the project while in France in the mid-1660s, but it did not start until later in the decade, when back in Rome. 
      where he finished it in almost 20 years later in 1684. In 1685 was the finished statue was sent Paris where he was extremely unhappy with the statue.
    </p>),
    (<p key={3}>
        Louis XIV had it moved to a remote and almost hidden location of the gardens of Versailles and then had French sculptor <TooltipWrapper label={'François Girardon was a French sculptor of the Louis XIV style or French Baroque, best known for his statues and busts of Louis XIV and for his statuary in the gardens of the Palace of Versailles.'}>François Girardon</TooltipWrapper> &quot;fix&quot; it by by adding a helmet on the head and flames under the horse; the statue now depicted Marcus Curtius: a Roman mythology general who jumped in 
        the fires of hell and sacrificed himself to save the Republic! A century later, when the French revolutionaries set out to destroy all statues of kings, they spared the statue of Louis XIV disguised as Marcus Curtius… The mythological general who had saved the Roman republic, now saved the 
        statue of a king from the fires of the French republic!
    </p>),
    (<p key={4}>
      Now, the statue resides in the Palace of Versailles, where it is currently being displayed.
    </p>),
  ]

  return (
    <SculptureLayout title="Louis XIV" model={<Model />} modelOffset={[0, 5, 0]} descriptionElems={elems} />
  );
}

export default Page;
