import React from 'react';
import './GalleryItem.css';

const GalleryItem = ({ items, openModal }) => {
  return (
    <>
      {items.map((el, i) => (
        <li key={el.id} id={i} onClick={openModal} className="gallery-item">
          <img src={el.webformatURL} alt="" />

          <div className="stats">
            <p className="stats-item">
              <i className="material-icons">thumb_up</i>
              {el.likes}
            </p>
            <p className="stats-item">
              <i className="material-icons">visibility</i>
              {el.views}
            </p>
            <p className="stats-item">
              <i className="material-icons">comment</i>
              {el.comments}
            </p>
            <p className="stats-item">
              <i className="material-icons">cloud_download</i>
              {el.downloads}
            </p>
          </div>

          <button type="button" className="fullscreen-button">
            <i className="material-icons">zoom_out_map</i>
          </button>
        </li>
      ))}
    </>
  );
};

export default GalleryItem;
