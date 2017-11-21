import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { connect } from 'react-redux';
import { compose } from 'redux';

import './contact-us.scss';
import * as Actions from '../../actions/contact-form';
import Content from '../../components/shared/content';
import Copy from '../../components/shared/copy';
import Disclaimer from '../../components/shared/disclaimer';
import Form from './form';
import Socials from './socials';
import { postJSON } from '../../utilities/ajax';
import withLoaderControls from '../../components/higher-order-components/with-loader-controls';
import { IS_PRODUCTION } from '../../utilities/environment';
import { postSuccess, postDanger } from '../../components/notifications';
const ENDPOINT = IS_PRODUCTION
  ? 'http://api.jevinanderson.com/cats-eye-studios/contact'
  : 'http://127.0.0.1:1985/cats-eye-studios/contact';

const ContactCopy = ({ children }) => (
  <Copy className="contact-us__copy" centered>
    {children}
  </Copy>
);

class ContactUs extends Component {
  clear = () => {
    this.props.setContactFormData({});
  };

  submit = event => {
    event.preventDefault();
    this.props.startLoading();

    postJSON(ENDPOINT, this.props.form)
      .then(results => {
        this.props.setContactFormData({
          ...this.props.form,
          submitted: Date.now(),
          error: undefined
        });

        this.props.stopLoading();
        postSuccess(
          'Success!',
          'Thank you for your interest in Cats Eye Studios. Your contact request was successfully submitted. Please allow one to two weeks for a response.'
        );
      })
      .catch(reason => {
        this.props.setContactFormData({
          ...this.props.form,
          error: 'There was an ERROR with your request. Please try again later.'
        });
        this.props.stopLoading();
        postDanger(
          'Error',
          'Something went wrong with your contact request. We apologize for any inconvenience. Please try again at a later time.'
        );
      });

    console.log('submit this.props.form', this.props.form);
  };

  render() {
    const { form, setContactFormData } = this.props;
    const { submit } = this;

    return (
      <div className="contact-us" onClick={this.onClick}>
        <Content>
          <ContactCopy>
            As a full service photographer I pride myself in having a good
            relationship with my client. It's the best feeling in the world to
            get sincere hugs from my happy clients. For this reason, I’d love to
            meet you for a complimentary in-home consultation!
          </ContactCopy>
          <ContactCopy>
            We will get to know each other a bit as we ask each other questions
            and discuss the details of your session. Then we will go over
            products that I offer and how and where you would like them
            displayed in your home. Of course we will also chat about your
            investment and go over our contract. Thank you for your
            consideration and I look forward to getting to know you!
          </ContactCopy>
          <Form value={form} update={setContactFormData} submit={submit} />
          <Socials />
        </Content>
      </div>
    );
  }
}

ContactUs.propTypes = {
  form: PropTypes.object,
  setContactFormData: PropTypes.func
};

const mapStateToProps = state => ({ contactForm }) => ({ form: contactForm });

export default compose(connect(mapStateToProps, Actions), withLoaderControls())(
  ContactUs
);
