import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './input.scss';
import asAnInput from './as-an-input';
import { join } from '../../utilities/component';

class Input extends PureComponent {
  static propTypes = {
    validator: PropTypes.func,
    setValidity: PropTypes.func,
    value: PropTypes.any,
    update: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = this.validate(props);
    this.props.setValidity(this.state.isValid);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      let state = this.validate(nextProps);

      if (state.isValid !== this.state.isValid) {
        nextProps.setValidity(state.isValid);
      }

      this.setState(state);
    }
  }

  validate(props = {}) {
    const { validator, value } = props;

    const messages = validator(value);
    const isValid = !messages.length;

    return { messages, isValid };
  }

  onBlur = () => {
    if (!this.state.showMessages) {
      this.setState({ showMessages: true });
    }
  };

  onChange = event => {
    var { value } = event.target;

    this.props.update(value);
  };

  render() {
    const { value, className, update, validator, formIsValid, setValidity, ...rest } = this.props;
    const { messages, isValid, showMessages } = this.state;
    const { onBlur, onChange } = this;

    return (
      <span className={join('form-validation__input', className)}>
        {showMessages &&
          !isValid && (
            <p className="form-validation__input__error-message">
              {messages.join(' ')}
            </p>
          )}
        <input
          {...rest}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={rest.type || 'text'}
          className="form-validation__input__input"
        />
      </span>
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  update: PropTypes.func,
  validator: PropTypes.func,
  placeholder: PropTypes.string
};

export default asAnInput()(Input);
