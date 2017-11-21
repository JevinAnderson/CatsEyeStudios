import React from 'react';
import { render } from 'react-dom';

import Notification from './notification';

const notifications = [];

const getIdentifier = (() => {
  let id = 0;

  return () => id++ + 1;
})();

function dismiss(identifier) {
  const index = notifications.findIndex(
    element => element.identifier === identifier
  );

  if (index !== -1) {
    const notification = notifications[index];
    notifications.splice(index, 1);
    document.body.removeChild(notification.node);
  }
}

export function postNotification(options) {
  if (typeof document === 'undefined') return;
  console.log('postNotification options', options);

  const identifier = getIdentifier();
  const node = document.createElement('div');
  document.body.appendChild(node);
  notifications.push({ identifier, node });

  const props = { ...options, identifier, dismiss };

  render(<Notification {...props} />, node);
}
