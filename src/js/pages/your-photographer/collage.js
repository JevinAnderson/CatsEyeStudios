import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './collage.scss';
import { join } from '../../utilities/component';

const Image = ({ main, className, ...rest }) => (
  <img
    className={join('your-photographer__collage__image', main && 'your-photographer__collage__image--main')}
    {...rest}
  />
);

class Collage extends Component {
  state = {
    frankLoaded: false,
    catrionaLoaded: false,
    kidsLoaded: false
  };

  onFrankLoad = () => {
    this.setState({ frankLoaded: true }, this.callback);
  };

  onCatrionaLoad = () => {
    this.setState({ catrionaLoaded: true }, this.callback);
  };

  onKidsLoad = () => {
    this.setState({ kidsLoaded: true }, this.callback);
  };

  callback = () => {
    if (this.state.frankLoaded && this.state.catrionaLoaded && this.state.kidsLoaded) {
      this.props.onLoad();
    }
  };

  render() {
    return (
      <div className={join('your-photographer__collage', this.props.loaded && 'your-photographer__collage--loaded')}>
        <div className="your-photographer__collage__images">
          <Image
            src="images/frank.jpg"
            alt="Frank and Catriona Simental"
            onLoad={this.onFrankLoad}
            onError={this.onFrankLoad}
          />
          <Image
            src="images/catriona.jpg"
            alt="Catriona Simental"
            onLoad={this.onCatrionaLoad}
            onError={this.onCatrionaLoad}
            main
          />
          <Image
            src="images/kids.jpg"
            alt="Antonio Javier Simental and Ophelia RosaLyn Simental"
            onLoad={this.onKidsLoad}
            onError={this.onKidsLoad}
          />
        </div>
      </div>
    );
  }
}

Collage.propTypes = {
  loaded: PropTypes.bool,
  onLoad: PropTypes.func
};

export default Collage;
