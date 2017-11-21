import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

function scrollToTop() {
  window.scrollTo(0, 0);
}

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      scrollToTop();
    }
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object
};

export default withRouter(ScrollToTop);
