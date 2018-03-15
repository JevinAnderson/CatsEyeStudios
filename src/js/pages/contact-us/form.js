import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './form.scss';
import { isRequiredValidator, Validator } from '../../components/form-validation/build-validator';
import Form from '../../components/form-validation/form';
import Input from '../../components/form-validation/input';
import Submit from '../../components/form-validation/submit';
import Select from '../../components/shared/select';

const Row = props => <div className="contact-us__form__row" {...props} />;
const Column = props => <div className="contact-us__form__column" {...props} />;

const SUBMISSION_WAIT = 7 * 24 * 60 * 60 * 1000;

class ContactForm extends Component {
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

  updateReferrer = referrer => {
    this.update('referrer', referrer);
  };

  updateComments = comments => {
    this.update('comments', comments);
  };

  updateDate = date => {
    this.update('date', date);
  };

  recentlySubmitted = () => {
    return this.props.value.submitted && Date.now() - this.props.value.submitted < SUBMISSION_WAIT;
  };

  noValidation = () => [];

  createNameValidator = () => Validator(isRequiredValidator).build();

  render() {
    const { submit, value } = this.props;

    if (this.recentlySubmitted()) {
      return (
        <div className="contact-us__form">
          <h3>Your request was submitted. Thanks for your interest. We hope to get back to you shortly.</h3>
        </div>
      );
    }

    return (
      <Form className="contact-us__form" autoComplete="on">
        {value.error && <h3 className="contact-us__form__error">{value.error}</h3>}
        <Row>
          <Column>
            <Input
              value={value.first || ''}
              update={this.updateFirst}
              validator={this.nameValidator}
              placeholder="First Name"
              autoComplete="given-name"
            />
          </Column>
          <Column>
            <Input
              value={value.last || ''}
              update={this.updateLast}
              validator={this.nameValidator}
              placeholder="Last Name"
              autoComplete="family-name"
            />
          </Column>
        </Row>
        <Row>
          <Column>
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
          </Column>
          <Column>
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
          </Column>
        </Row>
        <Row>
          <Input
            type="date"
            value={value.date || ''}
            update={this.updateDate}
            validator={this.noValidation}
            placeholder="Desired Consultation Date"
          />
        </Row>
        <Row>
          <p className="contact-us__form__placeholder">How would you like us to contact you?</p>
          <Select onChange={this.setContactPreference} value={value.contactPreference || 'call'}>
            <option value="call">Call (9am to 5pm Mon-Fri)</option>
            <option value="text">Text</option>
            <option value="email">Email</option>
          </Select>
        </Row>
        <Row>
          <Input
            value={value.address || ''}
            update={this.updateAddress}
            validator={this.noValidation}
            placeholder="Home address(optional)"
            name="ship-address"
            autoComplete="shipping street-address"
          />
        </Row>
        <Row>
          <p className="contact-us__form__placeholder">What are you interested in?</p>
          <Select onChange={this.setSession} value={value.session || 'Studio Portrait'}>
            <option value="Contemporary Portrait">Contemporary Portrait</option>
            <option value="Creative Portrait">Creative Portrait</option>
            <option value="Fantasy Photoshoot">Fantasy Photoshoot</option>
            <option value="On Location Portrait">On Location Portrait</option>
            <option value="Personal Branding">Personal Branding</option>
            <option value="Professional Headshot">Professional Headshot</option>
            <option value="Corporate Volume Shoot">Corporate Volume Shoot</option>
            <option value="Collaborative Shoot">Collaborative Shoot</option>
          </Select>
        </Row>
        <Row>
          <Input
            value={value.referrer || ''}
            update={this.updateReferrer}
            validator={this.noValidation}
            placeholder="How did you hear about us?"
          />
        </Row>
        <Row>
          <Input
            value={value.comments || ''}
            update={this.updateComments}
            validator={this.noValidation}
            placeholder="Comments or questions?"
          />
        </Row>
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
