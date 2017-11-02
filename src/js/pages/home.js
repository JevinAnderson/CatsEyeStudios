import React from 'react';
import PropTypes from 'prop-types';

import './home.scss';
import Content from '../components/shared/content';
import Copy from '../components/shared/copy';
import Disclaimer from '../components/shared/disclaimer';

const HomeCopy = ({ children }) => <Copy centered>{children}</Copy>;

const Home = props => (
  <div className="home-page">
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
