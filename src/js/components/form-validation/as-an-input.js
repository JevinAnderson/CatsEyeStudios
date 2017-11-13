import React, { Component } from 'react';
import PropTypes from 'prop-types';

const asAnInput = options => WrappedComponent => {
  class ValidatedInput extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        formIsValid: context.formValidationFormIsValid
      };
    }

    isValid = true;

    componentDidMount() {
      this.unsubscribe = this.context.formValidationFormSubscribe(this);
      this.unregister = this.context.formValidationFormRegister(this);
    }

    componentWillUnmount() {
      this.unsubscribe();
      this.unregister();
    }

    getValidity = () => {
      return this.isValid;
    };

    setValidity = isValid => {
      let dirty = isValid !== this.isValid;
      this.isValid = isValid;

      if (dirty) {
        this.context.formValidationFormPublish();
      }
    };

    update = () => {
      const formIsValid = this.context.formValidationFormIsValid;

      if (formIsValid !== this.state.formIsValid) {
        this.setState({ formIsValid });
      }
    };

    render() {
      const props = {
        ...this.props,
        ...this.state,
        setValidity: this.setValidity
      };

      return <WrappedComponent {...props} />;
    }
  }

  ValidatedInput.contextTypes = {
    formValidationFormSubscribe: PropTypes.func,
    formValidationFormRegister: PropTypes.func,
    formValidationFormPublish: PropTypes.func,
    formValidationFormIsValid: PropTypes.bool
  };

  return ValidatedInput;
};

export default asAnInput;
