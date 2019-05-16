import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Counter = ({ count, items }) => (
  <p className={styles.counter}>
    {count + 1}/{items.length}
  </p>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Counter;
