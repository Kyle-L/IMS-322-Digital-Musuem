import { useState } from 'react';
import Modal from './Modal';

/**
 * A modal that includes a layout for a scultpure's information.
 */
function ModelModal({ name, date, origin, artist, held }) {
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
                <p>Held by: {held}</p>
            </Modal>
        </>
    );
}

export default ModelModal;