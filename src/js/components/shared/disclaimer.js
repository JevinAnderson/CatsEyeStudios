import React from 'react';
import PropTypes from 'prop-types';

import './disclaimer.scss';
import { join } from '../../utilities/component';

const Disclaimer = ({ children, className, italic, centered, ...rest }) => (
  <p
    className={join(
      'shared-disclaimer',
      italic && 'shared-disclaimer--italic',
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
