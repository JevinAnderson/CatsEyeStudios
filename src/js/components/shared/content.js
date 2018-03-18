import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './content.scss';
import { join } from '../../utilities/component';

class Content extends Component {
  getStyles = (style = {}) => ({
    ...style,
    transition: 'opacity 1000ms ease',
    opacity: this.props.loadFirst && !this.props.loaded ? 0 : 1
  });

  render() {
    const { loadFirst, loaded, children, className, style, ...rest } = this.props;

    return (
      <div className={join('main-content-section', className)} style={this.getStyles()} {...rest}>
        {children}
      </div>
    );
  }
}

Content.propTypes = {
  loadFirst: PropTypes.bool,
  loaded: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string
};

Content.defaultProps = {
  loadFirst: false,
  loaded: true
};

export default Content;
