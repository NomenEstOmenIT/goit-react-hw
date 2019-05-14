import React from 'react';
import PricingItem from './PricingItem';
import styles from './PricingPlan.module.css';

const PricingPlans = ({ plan }) => (
  <ul className={styles.main}>
    {plan.map(el => (
      <li key={el.id}>
        <PricingItem el={el} />
      </li>
    ))}
  </ul>
);

export default PricingPlans;
