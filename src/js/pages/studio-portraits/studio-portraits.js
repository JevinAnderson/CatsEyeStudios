import React, { Component } from 'react';
import PropTypes from 'prop-types';
import images from './images';
import options from './options';
import Gallery from './gallery';
import throttle from 'lodash/throttle';

import './studio-portraits.scss';

class OnLocation extends Component {
  state = {
    containerWidth: Math.min(window.innerWidth, 1024)
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = throttle(event => {
    this.setState({
      containerWidth: Math.min(window.innerWidth, 1024)
    });
  }, 1000);

  onClick = event => {
    event.preventDefault();
    const element = event.target;
    options.index = parseInt(element.getAttribute('data-image-index'), 10);

    this.gallery = new PhotoSwipe(this.pswp, PhotoSwipeUI_Default, images, options);
    this.gallery.init();
  };

  render() {
    return (
      <div className="studio-portraits main-background">
        <Gallery onClick={this.onClick} {...this.state} />
        <div
          className="pswp"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
          ref={div => {
            this.pswp = div;
          }}
        >
          <div className="pswp__bg" />
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter" />
                <button className="pswp__button pswp__button--close" title="Close (Esc)" />
                <button className="pswp__button pswp__button--share" title="Share" />
                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />
                <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip" />
              </div>
              <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />
              <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />
              <div className="pswp__caption">
                <div className="pswp__caption__center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

OnLocation.propTypes = {};

OnLocation.defaultProps = {};

export default OnLocation;
