import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './form.scss';
import {
  isRequiredValidator,
  Validator
} from '../../components/form-validation/build-validator';
import Form from '../../components/form-validation/form';
import Input from '../../components/form-validation/input';

class ContactForm extends Component {
  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillReceiveProps(nextProps) {}
  // shouldComponentUpdate(nextProps, nextState) { return true; }
  // componentWillUpdate(nextProps, nextState) {}
  // componentDidUpdate(prevProps, prevState) {}
  // componentWillUnmount() {}

  constructor(props) {
    super(props);

    this.nameValidator = Validator(isRequiredValidator).build();
  }

  update = (key, value) => {
    this.props.update({
      ...this.props.value,
      [key]: value
    });
  };

  updateName = name => {
    this.update('name', name);
  };

  createNameValidator = () => Validator(isRequiredValidator).build();

  render() {
    const { value } = this.props;
    return (
      <Form className="contact-us__form">
        <Input
          value={value.name || ''}
          update={this.updateName}
          validator={this.nameValidator}
        />
        Contact us form coming soon...
      </Form>
    );
  }
}

ContactForm.propTypes = {
  value: PropTypes.object
};

ContactForm.defaultProps = {};

export default ContactForm;
