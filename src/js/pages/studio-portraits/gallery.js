import React, { Component } from 'react';
import PropTypes from 'prop-types';
import images from './images';

import './gallery.scss';
const STARTING_HEIGHT = 400;

const Galleryx = ({ onClick }) => (
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

const mapToWidth = width => image => ({
  ...image,
  width: `${Math.floor(image.proportionalWidth / width * 97)}%`
});

class Gallery extends Component {
  state = Gallery.getDerivedStateFromProps(this.props, {});
  static getDerivedStateFromProps(nextProps, prevState) {
    const { containerWidth } = nextProps;
    let groupWidth = 0;
    let group = [];
    let imageGroups = [];

    images.forEach((image, index) => {
      const { w, h } = image;
      const proportionalWidth = Math.floor(w / h * STARTING_HEIGHT);
      console.log('gdsfp proportionalWidth', proportionalWidth);
      if (proportionalWidth > containerWidth) {
        imageGroups.push([
          {
            ...image,
            width: '100%',
            height: 'auto',
            index
          }
        ]);
      } else if (proportionalWidth + groupWidth > containerWidth) {
        imageGroups.push(group.map(mapToWidth(groupWidth)));
        group = [
          {
            ...image,
            proportionalWidth,
            height: 'auto',
            index
          }
        ];
        groupWidth = proportionalWidth;
      } else {
        groupWidth += proportionalWidth;
        group.push({
          ...image,
          proportionalWidth,
          height: 'auto',
          index
        });
      }
    });

    return {
      imageGroups
    };
  }

  imageGroup = group =>
    group.map(image => (
      <img
        key={image.src}
        src={image.src}
        onClick={this.props.onClick}
        data-image-index={image.index}
        className="studio-portraits__gallery-image"
        style={{
          width: image.width
        }}
      />
    ));

  render = () => {
    return (
      <div
        className="Gallery"
        style={{
          margin: 'auto',
          maxWidth: '1024px'
        }}
      >
        {this.state.imageGroups.map(this.imageGroup)}
      </div>
    );
  };
}

Gallery.propTypes = {
  containerWidth: PropTypes.number,
  onClick: PropTypes.func
};

export default Gallery;
