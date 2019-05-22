import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from '../BookListItem/BookListItem';
import styles from './BookList.module.css';

const BookList = ({ articles }) => (
  <div className={styles.main}>
    {articles.map(el => (
      <BookListItem key={el.id} articles={el} />
    ))}
  </div>
);

BookList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default BookList;
