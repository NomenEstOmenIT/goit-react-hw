import React from 'react';
import PropTypes from 'prop-types';
import styles from './Bank.module.css';

const Balance = ({ balance, sumWithdraw, sumDeposit }) => (
  <section className={styles.balance}>
    <span>
      <span role="img" aria-label="arrowUP">
        &#11014;
      </span>
      {sumDeposit}$
    </span>
    <span>
      <span role="img" aria-label="arrowDown">
        &#11015;
      </span>
      {sumWithdraw}$
    </span>
    <span>Balance: {balance}$</span>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number,
  sumWithdraw: PropTypes.number,
  sumDeposit: PropTypes.number,
};

Balance.defaultProps = {
  balance: 0,
  sumWithdraw: 0,
  sumDeposit: 0,
};

export default Balance;
