import React from 'react';
import { NavLink } from 'react-router-dom';

import './home.scss';
import Content from '../components/shared/content';
import Copy from '../components/shared/copy';

const HomeCopy = ({ children }) => <Copy centered>{children}</Copy>;

const Home = props => (
  <div className="home-page main-background">
    <iframe
      className="home-page-video"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/4oHPpU7G1WY?rel=0&autoplay=1"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
    <Content className="home-page-content">
      <HomeCopy>
        <NavLink className="home-page__link navigation__link" to="/contact-us.html" exact>
          CONTACT US
        </NavLink>
      </HomeCopy>
    </Content>
  </div>
);

export default Home;
