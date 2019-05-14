import React from 'react';
import styles from './PricingPlan.module.css';

const PricingItems = ({ el }) => (
  <div className={styles.item}>
    <i className={styles.icon}>
      <img src={el.icon} alt="" />
    </i>
    <h2 className={styles.label}>{el.label}</h2>
    <p className={styles.abz}>{el.capacity}</p>
    <p className={styles.abz}>{el.description}</p>
    <p className={styles.price}>{el.price}/MO</p>
    <button className={styles.btn}>Get Started</button>
  </div>
);

export default PricingItems;
