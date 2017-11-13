import React from 'react';
import PropTypes from 'prop-types';

import asAForm from './as-a-form';
import { join } from '../../utilities/component';

const Form = ({ className, isValid, ...rest }) => (
  <form
    className={join(
      'form-validation__form',
      isValid && 'form-validation__form--valid',
      !isValid && 'form-validation__form--invalid',
      className
    )}
    {...rest}
  />
);

Form.propTypes = {
  className: PropTypes.string,
  isValid: PropTypes.bool
};

export default asAForm()(Form);
