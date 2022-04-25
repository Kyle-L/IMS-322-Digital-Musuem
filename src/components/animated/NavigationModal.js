import PropTypes from "prop-types";
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import Modal from './Modal';

/**
 * A modal that includes a layout for a scultpure's information.
 */
function NavigationModal({ title, links }) {
  const [modalVisible, modalSetVisible] = useState(false);

  return (
    <>
      <p className="link" onClick={() => modalSetVisible(true)}>
        {title}
      </p>
      <Modal modalVisible={modalVisible} modalSetVisible={modalSetVisible}>
        <h1>{title}</h1>
        {links.map((link, index) => (
          <div key={index} className="sub-menu-item">
            <NavLink to={link.link}>{link.title}</NavLink>
          </div>
        ))}
      </Modal>
    </>
  );
}

NavigationModal.propTypes = {
  links: PropTypes.shape({
    map: PropTypes.func
  }),
  title: PropTypes.any
}

export default NavigationModal;
