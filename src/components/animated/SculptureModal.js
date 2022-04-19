import PropTypes from "prop-types";
import { useState } from 'react';
import Modal from './Modal';

/**
 * A modal that includes a layout for a scultpure's information.
 */
function SculptureModal({ name, date, origin, artist, held, heldLink, moreInfo = '' }) {
  const [modalVisible, modalSetVisible] = useState(false);

  return (
    <>
      <button className="w-100" onClick={() => modalSetVisible(true)}>
        Sculpture Details
      </button>
      <Modal modalVisible={modalVisible} modalSetVisible={modalSetVisible}>
        <h1>{name} Details</h1>
        <hr />
        <p>Date of fabrication: {date}</p>
        <p>Place of origin: {origin}</p>
        <p>Artist: {artist}</p>
        <p>Held by: <a href={heldLink} target="_blank" rel="noreferrer">{held}</a></p>
        {moreInfo && <p>More info: <a href={moreInfo} target="_blank" rel="noreferrer">{moreInfo}</a></p>}
      </Modal>
    </>
  );
}

SculptureModal.propTypes = {
  artist: PropTypes.any,
  date: PropTypes.any,
  held: PropTypes.any,
  heldLink: PropTypes.any,
  moreInfo: PropTypes.string,
  name: PropTypes.any,
  origin: PropTypes.any
}

export default SculptureModal;
