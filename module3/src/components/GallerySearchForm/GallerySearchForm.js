import React from 'react';
import styles from './GallerySearchForm.module.css';

const GallerySearchForm = ({ onHandleSubmit, onHandleChange }) => (
  <form className={styles.searchForm}>
    <input
      onChange={onHandleChange}
      type="text"
      autoComplete="off"
      placeholder="Search images..."
    />
  </form>
);
export default GallerySearchForm;
