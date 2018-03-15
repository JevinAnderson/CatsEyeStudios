import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './notification.scss';

class Notification extends Component {
  state = {
    fading: true
  };

  componentDidMount() {
    setTimeout(this.stopFading, 1);
    this.timeout = setTimeout(this.dismiss, this.props.delay || 5000);
  }

  stopFading = () => {
    this.setState({ fading: false });
  };

  dismiss = () => {
    if (this.dismissing) return;

    this.setState({ fading: true });
    setTimeout(() => {
      this.props.dismiss(this.props.identifier);
    }, 900);
  };

  onClick = event => {
    event.preventDefault();

    clearTimeout(this.timeout);

    this.dismiss();
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  getClassName = () => {
    const fading = this.state.fading ? ' notification--fading' : '';
    return `notification notification--${this.props.type || 'info'}${fading}`;
  };

  render() {
    const { header, message } = this.props;

    return (
      <div className={this.getClassName()} onClick={this.onClick}>
        {header && <h3 className="notification__notification-header">{header}</h3>}
        {message && <p className="notification__notification-message">{message}</p>}
      </div>
    );
  }
}

Notification.propTypes = {
  type: PropTypes.string,
  header: PropTypes.string,
  message: PropTypes.string,
  delay: PropTypes.number,
  identifier: PropTypes.any,
  dismiss: PropTypes.func
};

export default Notification;
