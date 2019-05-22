import React, { Component } from 'react';
import Book from './Book/Book';
import Gallery from './Gallery/Gallery';
import styles from './App.module.css';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className={styles.app}>
        <Book />
        <Gallery />
      </div>
    );
  }
}
