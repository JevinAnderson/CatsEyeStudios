import React from 'react';
import PropTypes from 'prop-types';

import './select.scss';
import { join } from '../../utilities/component';

const Select = ({ className, ...rest }) => <select className={join('shared-select', className)} {...rest} />;

Select.propTypes = {
  className: PropTypes.string
};

export default Select;
