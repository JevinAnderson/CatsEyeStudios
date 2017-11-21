import React from 'react';
import { render } from 'react-dom';
import ready from 'ready-and-able';

import NotificationContainer from './notfication-container';

let push;
const register = x => {
  push = x;
};

ready(() => {
  const node = document.createElement('div');
  document.body.appendChild(node);
  render(<NotificationContainer register={register} />, node);
});

export function postNotification(options) {
  if (!push) return;

  push(options);
}

export function quickPost(
  header = '',
  message = '',
  type = 'success',
  delay = 5000
) {
  postNotification({ header, message, type, delay });
}

export function postSuccess(header, message) {
  quickPost(header, message, 'success');
}

export function postInfo(header, message) {
  quickPost(header, message, 'info');
}

export function postWarning(header, message) {
  quickPost(header, message, 'warning');
}

export function postDanger(header, message) {
  quickPost(header, message, 'danger');
}
