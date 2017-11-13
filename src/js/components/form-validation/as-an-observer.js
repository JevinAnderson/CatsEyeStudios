import React, { Component } from 'react';
import PropTypes from 'prop-types';

const asAnObserver = (options = WrappedComponent => {
  class FormObserver extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        formIsValid: context.formValidationFormIsValid
      };
    }

    componentDidMount() {
      this.unsubscribe = this.context.formValidationFormSubscribe(this);
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    update = () => {
      const formIsValid = this.context.formValidationFormIsValid;

      if (formIsValid !== this.state.formIsValid) {
        this.setState({ formIsValid });
      }
    };

    render() {
      const props = {
        ...this.props,
        ...this.state
      };

      return <WrappedComponent {...props} />;
    }
  }

  FormObserver.contextTypes = {
    formValidationFormSubscribe: PropTypes.func,
    formValidationFormRegister: PropTypes.func,
    formValidationFormPublish: PropTypes.func,
    formValidationFormIsValid: PropTypes.bool
  };

  return FormObserver;
});
