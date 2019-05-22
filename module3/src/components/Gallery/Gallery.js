import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import { articleGalleryAPI } from '../../services/api-article';
import GallerySearchForm from '../GallerySearchForm/GallerySearchForm';
import GalleryModal from '../GalleryModal/GalleryModal';
import styles from './Gallery.module.css';

export default class Gallery extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    error: null,
    isModalOpen: false,
    clicElIndex: '',
  };

  onHandleChange = e => {
    this.setState(
      {
        query: e.target.value,
      },
      this.updateState,
    );
  };

  onHandleClick = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      this.loadMore,
    );
  };

  updateState = () => {
    articleGalleryAPI(this.state.query, this.state.page)
      .then(response =>
        this.setState({
          items: response.data.hits,
        }),
      )
      .catch(error => this.setState({ error }));
  };

  openModal = e => {
    this.setState({
      isModalOpen: true,
      clicElIndex: e.currentTarget.id,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  loadMore() {
    const { query, page } = this.state;
    articleGalleryAPI(query, page)
      .then(response =>
        this.setState(prevState => ({
          items: [...prevState.items, ...response.data.hits],
        })),
      )
      .catch(error => this.setState({ error }));
  }

  render() {
    const { items, isModalOpen, clicElIndex } = this.state;
    console.log(items);
    return (
      <div className={styles.app}>
        <GallerySearchForm onHandleChange={this.onHandleChange} />
        <ul className={styles.gallery}>
          <GalleryItem items={items} openModal={this.openModal} />
        </ul>
        <button
          className={styles.button}
          type="button"
          onClick={this.onHandleClick}
        >
          Load More
        </button>
        {isModalOpen && (
          <GalleryModal
            closeModal={this.closeModal}
            items={items}
            index={clicElIndex}
          />
        )}
      </div>
    );
  }
}
