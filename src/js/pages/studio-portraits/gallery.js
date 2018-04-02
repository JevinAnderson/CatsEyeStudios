import React, { Component } from 'react';
import PropTypes from 'prop-types';
import images from './images';

import './gallery.scss';

const Gallery = ({ onClick }) => (
  <div className="studio-portraits__gallery" itemScope itemType="http://schema.org/ImageGallery">
    {images.map((image, index) => (
      <figure
        key={image.src}
        className="studio-portraits__gallery__photo-container"
        itemProp="associatedMedia"
        itemScope
        itemType="http://schema.org/ImageObject"
      >
        <a href={image.src} itemProp="contentUrl" data-size="326x489" data-image-index={index} onClick={onClick}>
          <img
            className="studio-portraits__gallery__photo"
            src={image.msrc}
            itemProp="thumbnail"
            alt="thumbnail"
            data-image-index={index}
          />
        </a>
        {image.title && <figcaption itemProp="caption description">Caption</figcaption>}
      </figure>
    ))}
  </div>
);

Gallery.propTypes = {
  onClick: PropTypes.func
};

export default Gallery;
