import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookListItem.module.css';

const BookListItem = ({ articles }) => (
  <div className={styles.box}>
    <div className={styles.BookListItemImgContainer}>
      <img src={articles.volumeInfo.imageLinks.smallThumbnail} alt="book" />
    </div>
    <div className={styles.BookListItemTextContainer}>
      <h2 className={styles.BookListItemTextTitle}>
        {articles.volumeInfo.title}
      </h2>
      <p className={styles.BookListItemTextDescription}>
        {articles.volumeInfo.description}
      </p>
      <span>auhtor: {articles.volumeInfo.authors} </span>
      <span>publisher: {articles.volumeInfo.publisher} </span>
      <span>publishedDate: {articles.volumeInfo.publishedDate} </span>
      <span>pageCount: {articles.volumeInfo.pageCount} </span>
      <span>rating: {articles.volumeInfo.averageRating}</span>
    </div>
  </div>
);

BookListItem.propTypes = {
  articles: PropTypes.shape().isRequired,
};

export default BookListItem;
