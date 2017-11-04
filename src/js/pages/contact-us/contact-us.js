import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';

import './contact-us.scss';
import Content from '../../components/shared/content';
import Copy from '../../components/shared/copy';
import Disclaimer from '../../components/shared/disclaimer';
import Form from './form';

const CONTACT_FORM_STORAGE_KEY = 'CATSEYESTUDIOS_CONTACT_US_FORM_DATA';

const persistForm = throttle(data => {
  console.log('persistForm data', data);
  try {
    const json = JSON.stringify(data);
    localStorage.setItem(CONTACT_FORM_STORAGE_KEY, json);
  } catch (error) {
    console.error(`Error persisting contact us form: ${error}`);
  }
}, 1000);

const ContactCopy = ({ children }) => (
  <Copy className="contact-us__copy" centered>
    {children}
  </Copy>
);

class ContactUs extends Component {
  state = {
    clickCount: 0,
    formData: {}
  };

  componentDidMount() {
    this.readForm();
  }

  readForm = () => {
    try {
      const json = localStorage.getItem(CONTACT_FORM_STORAGE_KEY);
      const formData = JSON.parse(json) || {};

      this.setState({ formData });
    } catch (error) {
      console.error(
        `Error reading contact us form from local storage: ${error}`
      );
    }
  };

  clear = () => {
    this.updateForm({});
  };

  updateForm = formData => {
    this.setState({formData});

    persistForm(formData);
  };

  submit = () => {
    console.log('Submit!');
  }

  onClick = event => {
    this.setState(prevState => ({
      clickCount: prevState.clickCount + 1
    }));
  };
  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillReceiveProps(nextProps) {}
  // shouldComponentUpdate(nextProps, nextState) { return true; }
  // componentWillUpdate(nextProps, nextState) {}
  // componentDidUpdate(prevProps, prevState) {}
  // componentWillUnmount() {}
  render() {
    const { updateForm, submit } = this;
    const { formData } = this.state;

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
          <Form value={formData} update={updateForm} submit={submit} />
        </Content>
      </div>
    );
  }
}

ContactUs.propTypes = {};

ContactUs.defaultProps = {};

export default ContactUs;
