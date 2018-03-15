import React from 'react';
import PropTypes from 'prop-types';

import './home.scss';
import Content from '../components/shared/content';
import Copy from '../components/shared/copy';
import Disclaimer from '../components/shared/disclaimer';
import SimpleFadeIn from '../components/effects/simple-fade-in';

const HomeCopy = ({ children }) => <Copy centered>{children}</Copy>;
const FadeIn = props => <SimpleFadeIn duration={5000} {...props} />;

const Home = props => (
  <div className="home-page">
    <Content className="home-page-content">
      <FadeIn>
        <HomeCopy>
          Hello<br />
          Welcome to catseyestudios.com<br />
          This is the beginning of<br />
          Something beautiful.<br />
          What is it?
        </HomeCopy>
      </FadeIn>
      <FadeIn delay={1000}>
        <HomeCopy>
          A journey<br />
          Not just a point A to point B journey<br />
          A journey of self love<br />
          To find that misplaced you<br />
          To celebrate you<br />
          Because<br />
          You<br />
          Are
        </HomeCopy>
      </FadeIn>
      <FadeIn delay={2000}>
        <HomeCopy>
          Portraits<br />
          Not just any old portraits<br />
          The best portraits of you<br />
          To have and pass on forever<br />
          To celebrate the now<br />
          Because<br />
          You<br />
          Are
        </HomeCopy>
      </FadeIn>
      <FadeIn delay={3000}>
        <HomeCopy>
          A friend<br />
          Not just a fairweathered friend<br />
          A friendship with Cat<br />
          To have someone lend an ear<br />
          To celebrate it all together<br />
          Because<br />
          You<br />
          Are
        </HomeCopy>
      </FadeIn>
    </Content>
  </div>
);

export default Home;
