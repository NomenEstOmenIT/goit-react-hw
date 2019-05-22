import React from 'react';
import PropTypes from 'prop-types';
import styles from './GallerySearchForm.module.css';

const GallerySearchForm = ({ onHandleChange }) => (
  <form className={styles.searchForm}>
    <input
      onChange={onHandleChange}
      type="text"
      autoComplete="off"
      placeholder="Search images..."
    />
  </form>
);

GallerySearchForm.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
};

export default GallerySearchForm;
