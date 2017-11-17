import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './form.scss';
import {
  isRequiredValidator,
  Validator
} from '../../components/form-validation/build-validator';
import Form from '../../components/form-validation/form';
import Input from '../../components/form-validation/input';
import Submit from '../../components/form-validation/submit'
import Select from '../../components/shared/select';

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

  updateFirst = first => {
    this.update('first', first);
  };

  updateLast = last => {
    this.update('last', last);
  };

  updateEmail = email => {
    this.update('email', email);
  };

  updatePhone = phone => {
    this.update('phone', phone);
  };

  updateAddress = address => {
    this.update('address', address);
  };

  setContactPreference = ({ target: { value } }) => {
    this.update('contactPreference', value);
  };

  setSession = ({ target: { value } }) => {
    this.update('session', value);
  };

  updateReferer = referer => {
    this.update('referer', referer);
  };

  updateComments = comments => {
    this.update('comments', comments);
  };

  noValidation = () => [];

  createNameValidator = () => Validator(isRequiredValidator).build();

  render() {
    const { submit, value } = this.props;
    return (
      <Form className="contact-us__form" autoComplete="on">
        <Input
          value={value.first || ''}
          update={this.updateFirst}
          validator={this.nameValidator}
          placeholder="First Name"
          autoComplete="given-name"
        />
        <Input
          value={value.last || ''}
          update={this.updateLast}
          validator={this.nameValidator}
          placeholder="Last Name"
          autoComplete="family-name"
        />
        <Input
          value={value.email || ''}
          update={this.updateEmail}
          validator={this.nameValidator}
          placeholder="Email"
          autoComplete="email"
          type="email"
          name="email"
          required
        />
        <Input
          value={value.phone || ''}
          update={this.updatePhone}
          validator={this.nameValidator}
          placeholder="Phone #"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
        />
        <Select
          onChange={this.setContactPreference}
          value={value.contactPreference || 'call'}
        >
          <option value="call">Call (9am to 5pm Mon-Fri)</option>
          <option value="text">Text</option>
          <option value="email">Email</option>
        </Select>
        <Input
          value={value.address || ''}
          update={this.updateAddress}
          validator={this.noValidation}
          placeholder="Home address(optional)"
          name="ship-address"
          autoComplete="shipping street-address"
        />
        <Select
          onChange={this.setSession}
          value={value.session || 'Studio Portrait'}
        >
          <option value="Studio Portrait">Studio Portrait</option>
          <option value="Business Headshot">Business Headshot</option>
          <option value="Lifestyle Portrait">Lifestyle Portrait</option>
          <option value="Senior">Senior</option>
          <option value="Couple">Couple</option>
          <option value="Family">Family</option>
        </Select>
        <Input
          value={value.referer || ''}
          update={this.updateReferer}
          validator={this.noValidation}
          placeholder="How did you hear about us?"
        />
        <Input
          value={value.comments || ''}
          update={this.updateComments}
          validator={this.noValidation}
          placeholder="Do you have any other comments or questions?"
        />
        <Submit onClick={submit}>Send</Submit>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  value: PropTypes.object,
  update: PropTypes.func,
  submit: PropTypes.func
};

ContactForm.defaultProps = {};

export default ContactForm;
