import axios from 'axios';

const BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const GALLERY_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';

export const articleBookAPI = (query, genres) =>
  axios.get(`${BOOKS_URL}${query}+subject:${genres}`);

export const articleGalleryAPI = (query, page) =>
  axios.get(
    `${GALLERY_URL}${query}&page=${page}&per_page=12&key=${
      process.env.REACT_APP_GALLERY_KEY
    }`,
  );
