import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './notification.scss';

class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fading: true
    };
  }
  // componentWillMount(){}
  componentDidMount() {
    setTimeout(this.stopFading, 1);
    this.timeout = setTimeout(this.dismiss, this.props.delay);
  }

  stopFading = () => {
    this.setState({ fading: false });
  };

  dismiss = () => {
    this.props.dismiss(this.props.identifier);
  };

  onClick = event => {
    event.preventDefault();

    clearTimeout(this.timeout);

    this.dismiss();
  };

  // componentWillReceiveProps(nextProps) {}
  // shouldComponentUpdate(nextProps, nextState) { return true; }
  // componentWillUpdate(nextProps, nextState) {}
  // componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {
    console.log('Notification componentWillUnmount this.props', this.props);

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
        {header && (
          <h3 className="notification__notification-header">{header}</h3>
        )}
        {message && (
          <p className="notification__notification-message">{message}</p>
        )}
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

Notification.defaultProps = {};

export default Notification;
