import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const randColor = () => {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255,
  )},${Math.floor(Math.random() * 200)})`;
};

const Stats = ({ title, stats }) => (
  <section className={styles.main}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.list}>
      {stats.map(el => (
        <li
          style={{ backgroundColor: randColor() }}
          className={styles.item}
          key={el.id}
        >
          <span className={styles.block}>{el.label}</span>
          <span className={styles.block}>{el.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

Stats.defaultProps = {
  title: 'Upload stats',
};
export default Stats;
