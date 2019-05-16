import React from 'react';
import PropTypes from 'prop-types';
import styles from './Bank.module.css';

const TransactionHistory = ({ history }) => (
  <table className={styles.history}>
    <thead>
      <tr>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {history.map(el => (
        <tr key={el.id}>
          <td>{el.type}</td>
          <td>{el.ammount}$</td>
          <td>{new Date(el.date).toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape),
};

TransactionHistory.defaultProps = {
  history: [],
};

export default TransactionHistory;
