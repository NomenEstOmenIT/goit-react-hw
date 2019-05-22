import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <>
    {
      <header className={styles.header}>
        <div className={styles.nav}>
          <NavLink activeStyle={{ color: '#eb3b5a' }} exact to="/">
            Home
          </NavLink>
          <NavLink activeStyle={{ color: '#eb3b5a' }} to="/pets">
            Pets
          </NavLink>
          <NavLink activeStyle={{ color: '#eb3b5a' }} to="/about">
            About
          </NavLink>
        </div>
      </header>
    }
  </>
);

export default Header;
