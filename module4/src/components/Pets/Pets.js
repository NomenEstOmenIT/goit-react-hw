import React from 'react';
import { NavLink } from 'react-router-dom';
import petsDb from '../../services/pets.json';
import styles from './Pets.module.css';

const Pets = () => (
  <div className={styles.petsContainer}>
    <h2 className={styles.petTitle}>Avaliable pets</h2>
    <div className={styles.petsCardContainer}>
      {petsDb.map(el => (
        <NavLink className={styles.petCard} key={el.id} to={`pets/${el.id}`}>
          <div>
            <img src={el.image} alt="" />
            <h2>{el.name}</h2>
          </div>
        </NavLink>
      ))}
    </div>
  </div>
);

export default Pets;
