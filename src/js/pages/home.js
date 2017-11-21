import React from 'react';
import PropTypes from 'prop-types';

import './home.scss';
import Content from '../components/shared/content';
import Copy from '../components/shared/copy';
import Disclaimer from '../components/shared/disclaimer';
import { postNotification } from '../components/notifications/index';

const randomElement = arr => arr[Math.floor(Math.random() * arr.length)];

const TYPES = ['success', 'info', 'warning', 'danger'];
const HEADERS = ['Batman', 'Superman', 'Green Lantern'];
const MESSAGES = [
  `Because, I'm Batman.`,
  `Look up in the sky! It's a bird. It's a plane. It's Superman!`,
  `In brightest day, in blackest night, beware my power, Green Lantern's might!`
];

function postRandom() {
  const type = randomElement(TYPES);
  const header = randomElement(HEADERS);
  const message = randomElement(MESSAGES);
  const delay = 1000 * (Math.floor(Math.random() * 10) + 1);
  const options = { type, header, message, delay };

  postNotification(options);
}

const HomeCopy = ({ children }) => <Copy centered>{children}</Copy>;

const Home = props => (
  <div className="home-page" onClick={postRandom}>
    <Content>
      <Disclaimer centered>
        We are working diligently to improve our website's aesthetics! In the
        meantime please browse our tabs for information about Cat, your
        personalized experience, and how to contact Cat's Eye Studios. If you
        would like to follow our work, find us on Facebook and Instagram by
        searching for CatsEyeStudiosAZ.
      </Disclaimer>
      <HomeCopy>
        When you partner with us, our goal is to help you find and bring out
        your essence of today and preserve it for a lifetime. We believe that
        every person needs to celebrate who they are and where they are right
        now in their life. Every person deserves to exist in photographs!
      </HomeCopy>
      <HomeCopy>
        From your complimentary consultation to long after your artwork is
        delivered to your home; you will enjoy a premium service, respect, and
        friendship unlike any other.
      </HomeCopy>
      <img
        className="home-page__logo"
        src="images/logo-black-bg.jpg"
        alt="The studio logo"
      />
      <HomeCopy>
        Find your essence of today and preserve it for a lifetime.
      </HomeCopy>
    </Content>
  </div>
);

export default Home;
