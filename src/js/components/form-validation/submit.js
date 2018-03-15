import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './submit.scss';
import { join } from '../../utilities/component';
import asAnObserver from './as-an-observer';

const Submit = ({ formIsValid, className, ...rest }) => (
  <button className={join('form-validation__submit', className)} disabled={!formIsValid} {...rest} />
);

Submit.propTypes = {
  formIsValid: PropTypes.bool,
  className: PropTypes.string
};

export default asAnObserver()(Submit);
