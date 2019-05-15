import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ trans }) => (
  <table className={styles.history}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {trans.map(el => (
        <tr key={el.id}>
          <td>{el.type}</td>
          <td>{el.amount}</td>
          <td>{el.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  trans: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default TransactionHistory;
