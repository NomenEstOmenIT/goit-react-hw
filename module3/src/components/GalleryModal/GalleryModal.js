import React from 'react';
import PropTypes from 'prop-types';
import styles from './GalleryModal.module.css';

const GalleryModal = ({ items, closeModal, index }) => (
  <div className={styles.overlay} onClick={closeModal} role="presentation">
    <div className="modal">
      <img src={items[index].largeImageURL} alt="" />
    </div>
  </div>
);

GalleryModal.propTypes = {
  items: PropTypes.shape(PropTypes.arrayOf().isRequired).isRequired,
  closeModal: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default GalleryModal;
