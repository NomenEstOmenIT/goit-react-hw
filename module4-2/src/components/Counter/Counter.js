import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ count, length }) => (
  <p className={styles.counter}>
    {count}/{length}
  </p>
);

Counter.propTypes = {
  count: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
};

export default Counter;
