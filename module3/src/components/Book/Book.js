import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import SearchForm from '../SearchForm/SearchForm';
import BookList from '../BookList/BookList';
import genresDB from '../../services/genres.json';
import styles from './Book.module.css';
import { articleBookAPI } from '../../services/api-article';

// const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default class App extends Component {
  state = {
    genres: genresDB,
    query: '',
    selectGenres: '',
    articles: [],
    error: null,
    isLoading: false,
  };

  onChange = e => {
    if (e.target.type === 'text') {
      return this.setState({
        query: String(e.target.value),
      });
    }

    return this.setState({
      selectGenres: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true, articles: [] });
    setTimeout(() => {
      articleBookAPI(this.state.query, this.state.selectGenres)
        .then(response =>
          this.setState({
            articles: response.data.items,
          }),
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false, query: '' }));
    }, 3000);
  };

  render() {
    const { genres, articles, error, isLoading, query } = this.state;
    return (
      <>
        <SearchForm
          submit={this.onSubmit}
          genres={genres}
          onChange={this.onChange}
          query={query}
        />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {articles.length > 0 && <BookList articles={articles} />}
        {isLoading && (
          <div className={styles.pacman}>
            <Spinner name="pacman" />
          </div>
        )}
      </>
    );
  }
}
