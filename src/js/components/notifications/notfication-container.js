import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './notification.scss';
import Notification from './notification';

const getIdentifier = (() => {
  let id = 0;

  return () => id++ + 1;
})();

class NotificationContainer extends Component {
  state = {
    notifications: []
  };

  componentDidMount() {
    this.props.register(this.push);
  }

  dismiss = identifier => {
    this.setState(prevState => {
      const notifications = [...prevState.notifications];
      const index = notifications.findIndex(element => element.identifier === identifier);

      if (index !== -1) {
        notifications.splice(index, 1);
      }

      return { notifications };
    });
  };

  push = options => {
    const identifier = getIdentifier();
    const notification = { options, identifier };

    this.setState(prevState => ({
      notifications: [...prevState.notifications, notification]
    }));
  };

  render() {
    const { notifications } = this.state;
    const { dismiss } = this;

    return (
      <div className="notification-container">
        {notifications.map(({ identifier, options }) => (
          <Notification key={identifier} identifier={identifier} dismiss={dismiss} {...options} />
        ))}
      </div>
    );
  }
}

NotificationContainer.propTypes = {
  register: PropTypes.func
};

export default NotificationContainer;
