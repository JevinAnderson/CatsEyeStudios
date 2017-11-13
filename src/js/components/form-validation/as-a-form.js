import React, { Component } from 'react';
import PropTypes from 'prop-types';

const asAForm = options => WrappedComponent => {
  class ValidatedForm extends Component {
    subscriptions = [];
    authors = [];
    state = {
      isValid: true
    };

    getChildContext = () => ({
      formValidationFormSubscribe: this.subscribe,
      formValidationFormRegister: this.register,
      formValidationFormPublish: this.updateValidity,
      formValidationFormIsValid: this.state.isValid
    });

    updateValidity = () => {
      const isValid = this.authors.every(author => author.getValidity());

      if (isValid !== this.state.isValid) {
        this.setState({ isValid }, () => {
          this.subscriptions.forEach(subscriber => {
            subscriber.update();
          });
        });
      }
    };

    register = author => {
      this.authors.push(author);
      var registered = true;
      this.updateValidity();

      return () => {
        if (registered && this.authors) {
          const index = this.authors.indexOf(author);
          this.authors.splice(index, 1);
          registered = false;
        }
      };
    };

    subscribe = subscriber => {
      this.subscriptions.push(subscriber);
      var subscribed = true;

      return () => {
        if (subscribed && this.subscriptions) {
          const index = this.subscriptions.indexOf(subscriber);
          this.subscriptions.splice(index, 1);
          subscribed = false;
        }
      };
    };

    render() {
      const props = {
        ...this.state,
        ...this.props
      };

      return <WrappedComponent {...props} />;
    }
  }

  ValidatedForm.childContextTypes = {
    formValidationFormSubscribe: PropTypes.func,
    formValidationFormRegister: PropTypes.func,
    formValidationFormPublish: PropTypes.func,
    formValidationFormIsValid: PropTypes.bool
  };

  return ValidatedForm;
};

export default asAForm;
