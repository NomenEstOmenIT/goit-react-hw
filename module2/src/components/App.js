import React, { Component } from 'react';
import publication from './Publications/publication.json';
import Reader from './Publications/Reader';
import MoviePage from './Movies/MoviePage';
import movies from './Movies/movies.json';
import Dashboard from './Bank/Dashboard';
import styles from './Bank/Bank.module.css';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <h2 className={styles.number}>Task 1</h2>
        <Reader items={publication} />
        <h2 className={styles.number}>Task 2</h2>
        <MoviePage item={movies} />
        <h2 className={styles.number}>Task 3</h2>
        <Dashboard />
      </>
    );
  }
}

export default App;
