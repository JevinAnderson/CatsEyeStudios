import React from 'react';
import PropTypes from 'prop-types';

import './socials.scss';

const Row = props => <div className="contact-us__socials__row" {...props} />;
const Column = props => <div className="contact-us__socials__column" {...props} />;
const Anchor = props => <a className="contact-us__socials__anchor" {...props} />;

const Socials = props => (
  <div className="contact-us__socials">
    <Row>
      <Column>
        <Anchor href="https://www.facebook.com/CatsEyeStudiosAZ/" target="_blank">
          <i className="fa fa-facebook" />Facebook
        </Anchor>
      </Column>
      <Column>
        <Anchor href="https://www.instagram.com/CatsEyeStudiosAZ/">
          <i className="fa fa-instagram" />Instagram
        </Anchor>
      </Column>
    </Row>
    <Row>
      <Column>
        <Anchor href="mailto:info@catseyestudios.com">
          <i className="fa fa-envelop" /> Email
        </Anchor>
      </Column>
      <Column>
        <Anchor href="tel:602.345.1740">
          <i className="fa fa-phone" />Phone
        </Anchor>
      </Column>
    </Row>
  </div>
);

export default Socials;
