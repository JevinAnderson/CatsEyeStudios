import React from 'react';
import PropTypes from 'prop-types';

import './content.scss';
import { join } from '../../utilities/component';

const Content = ({ children, className, ...rest }) => (
  <div className={join('main-content-section', className)} {...rest}>
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Content;
