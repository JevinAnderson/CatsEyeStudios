import React from 'react';
import PropTypes from 'prop-types';

import './content-header.scss';
import { join } from '../../utilities/component';

const ContentHeader = ({ centered, children, className, ...rest }) => (
  <h2 className={join('shared-content-header', centered && 'shared-content-header--centered', className)}>
    {children}
  </h2>
);

ContentHeader.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string
};

export default ContentHeader;
