import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SimpleFadeIn extends Component {
  state = {
    hidden: true
  };

  componentDidMount() {
    this.timeout = setTimeout(this.fadeIn, this.props.delay);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  fadeIn = () => {
    this.setState({ hidden: false });
  };

  getStyle = () => ({
    opacity: this.state.hidden ? 0 : 1,
    transition: `all ${this.props.duration}ms ease`
  });

  render() {
    const { delay, duration, children, style, ...rest } = this.props;

    return (
      <div style={this.getStyle()} {...rest}>
        {children}
      </div>
    );
  }
}

SimpleFadeIn.propTypes = {
  children: PropTypes.any,
  delay: PropTypes.number,
  duration: PropTypes.number
};

SimpleFadeIn.defaultProps = {
  delay: 100,
  duration: 1000
};

export default SimpleFadeIn;
