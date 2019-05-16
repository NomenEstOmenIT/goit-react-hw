import React from 'react';
import PropTypes from 'prop-types';
import styles from './Movie.module.css';

const SearchBar = ({ onChange }) => (
  <input onChange={onChange} type="text" className={styles.input} />
);

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
