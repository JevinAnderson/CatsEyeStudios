import React from 'react';
import PropTypes from 'prop-types';

import './disclaimer.scss';
import { join } from '../../utilities/component';

const Disclaimer = ({ children, className, centered, ...rest }) => (
  <p
    className={join(
      'shared-disclaimer',
      centered && 'shared-disclaimer--centered',
      className
    )}
    {...rest}
  >
    {children}
  </p>
);

Disclaimer.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string
};

export default Disclaimer;
