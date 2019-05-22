import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <section className={styles.controls}>
    <button onClick={onDecrement} className={styles.button} type="button">
      Назад
    </button>
    <button onClick={onIncrement} className={styles.button} type="button">
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Controls;
