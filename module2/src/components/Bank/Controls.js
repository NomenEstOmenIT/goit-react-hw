import React from 'react';
import PropTypes from 'prop-types';
import styles from './Bank.module.css';

const Controls = ({ onClick, handelChange, voidI }) => (
  <section className={styles.controls}>
    <input value={voidI} onChange={handelChange} type="number" />
    <button onClick={onClick} type="button">
      Deposit
    </button>
    <button onClick={onClick} type="button">
      Withdraw
    </button>
  </section>
);

Controls.propTypes = {
  onClick: PropTypes.func.isRequired,
  handelChange: PropTypes.func.isRequired,
  voidI: PropTypes.string,
};

Controls.defaultProps = {
  voidI: '',
};

export default Controls;
