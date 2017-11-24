import React from 'react';
import PropTypes from 'prop-types';

import './your-photographer.scss';
import ContentHeader from '../components/shared/content-header';
import Content from '../components/shared/content';
import Copy from '../components/shared/copy';
import Disclaimer from '../components/shared/disclaimer';

const PageCopy = ({ children }) => <Copy centered>{children}</Copy>;

const YourPhotographer = props => (
  <div className="your-photographer">
    <Content>
      <img
        src="images/photographer.jpg"
        alt="Portrait of the photographer"
        className="your-photographer__portrait"
      />
      <PageCopy>
        Hello! My name is Catriona Simental but feel free to call me Cat - my
        friends do!
      </PageCopy>
      <PageCopy>
        Two small, sweet children and a loving husband fill my heart and the
        corners of my residential studio in Mesa, Arizona. I know what beautiful
        looks like and I specialize in making women of all ages see their beauty
        through contemporary studio portraits. I want to photograph every person
        who has ever looked in the mirror and thought, "I'm not good enough" and
        prove them wrong. I want to document and celebrate every year of your
        life with you.
      </PageCopy>
      <PageCopy>
        I am currently servicing clients in the East Valley. Cities include but
        are not limited to: Mesa, Gilbert, Chandler, Scottsdale, Tempe.
      </PageCopy>
      <PageCopy>I look forward to working with you!</PageCopy>
    </Content>
  </div>
);

YourPhotographer.propTypes = {};

YourPhotographer.defaultProps = {};

export default YourPhotographer;
