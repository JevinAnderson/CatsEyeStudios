import React from 'react';
import { render } from 'react-dom';

import './index.scss';
import ContactUs from './pages/contact-us';
import Application from './application';

const node = document.getElementById('application-entry-point');

render(<Application />, node);