import React from 'react';
import { render } from 'react-dom';

import './index.scss';
import Application from './application';

const node = document.getElementById('application-entry-point');
render(<Application />, node);

window._printCSS = () => {
  const nodes = [...document.querySelectorAll('style')];
  const style = nodes.map(node => node.innerHTML).join('');

  return style;
};

window._printDOM = () => {
  return node.innerHTML;
};
