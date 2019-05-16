import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Movie.module.css';
import SearchBar from './SearchBar';
import MovieGrid from './MovieGrid';

class MoviePage extends Component {
  state = {
    filmsDb: this.props.item,
    item: this.props.item,
    currentEnter: '',
    message: 'Sorry nothing found',
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentEnter } = this.state;
    if (prevState.currentEnter === currentEnter) return;
    this.updateState();
  }

  handleChange = e => {
    if (typeof this.state.currentEnter === 'string') {
      this.setState({
        currentEnter: e.target.value,
      });
      // setTimeout(() => {
      //   this.updateState();
      // }, 0);
    }
  };

  updateState = () => {
    const newDb = [];
    const regObj = new RegExp(this.state.currentEnter, 'gi');
    this.props.item.forEach(el => {
      if (el.title.match(regObj)) {
        newDb.push(el);
      }
    });
    this.setState({
      filmsDb: newDb,
    });
  };

  render() {
    const { filmsDb, currentEnter, message, item } = this.state;
    return (
      <div className={styles.container}>
        <SearchBar onChange={this.handleChange} />
        <MovieGrid
          message={message}
          videoDb={currentEnter.length === 0 ? item : filmsDb}
        />
      </div>
    );
  }
}

MoviePage.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default MoviePage;
