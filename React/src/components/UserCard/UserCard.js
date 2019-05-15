import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserCard.module.css';

const UserCard = ({ name, avatar, tag, location, stats }) => (
  <div className={styles.profile}>
    <div className="description">
      <img src={avatar} alt="user avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.tag}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

UserCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape(PropTypes.shape).isRequired,
};

export default UserCard;
