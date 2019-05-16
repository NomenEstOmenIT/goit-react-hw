import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Controller = ({ increment, decrement }) => (
  <section className={styles.controls}>
    <button onClick={decrement} type="button" className={styles.button}>
      Назад
    </button>
    <button onClick={increment} type="button" className={styles.button}>
      Вперед
    </button>
  </section>
);

Controller.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};
export default Controller;
