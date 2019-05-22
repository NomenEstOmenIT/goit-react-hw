import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

const SearchForm = ({ genres, submit, onChange, query }) => (
  <form onSubmit={submit} className={styles.form}>
    <input value={query} onChange={onChange} type="text" />
    <select onChange={onChange} name="arr" id="first">
      {genres.map(el => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
    <button type="submit">Submitt</button>
  </form>
);

SearchForm.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  submit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
export default SearchForm;
