import React from 'react';
import styles from './GalleryModal.module.css';

const GalleryModal = ({ items, closeModal, index }) => (
  <div className={styles.overlay} onClick={closeModal}>
    <div className="modal">
      <img src={items[index].largeImageURL} alt="" />
    </div>
  </div>
);

export default GalleryModal;
