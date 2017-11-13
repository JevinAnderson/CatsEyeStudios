import React from 'react';
import PropTypes from 'prop-types';

import './copy.scss';
import { join } from '../../utilities/component';

const Copy = ({ centered, children, className, ...rest }) => (
  <p
    className={join(
      'shared-copy',
      centered && 'shared-copy--centered',
      className
    )}
  >
    {children}
  </p>
);

Copy.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string
};

export default Copy;
