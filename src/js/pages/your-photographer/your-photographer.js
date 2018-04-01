import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './your-photographer.scss';
import ContentHeader from '../../components/shared/content-header';
import Content from '../../components/shared/content';
import Copy from '../../components/shared/copy';
import Disclaimer from '../../components/shared/disclaimer';
import Collage from './collage';
import { join } from '../../utilities/component';

const PageCopy = ({ children }) => <Copy centered>{children}</Copy>;

class YourPhotographer extends Component {
  state = {
    error: false,
    loaded: false
  };

  onError = () => {
    this.setState({
      error: true,
      loaded: true
    });
  };

  onLoad = () => {
    this.setState({ loaded: true });
  };

  render = () => (
    <div className="your-photographer main-background">
      {!this.state.error && (
        <img
          src="images/MeetYourPhotographer.jpg"
          alt="Pictures of photographer and family."
          className={join('your-photographer__collage', this.state.loaded && 'your-photographer__collage--loaded')}
          onLoad={this.onLoad}
          onError={this.onError}
        />
      )}
      <Content className="your-photographer__content" loadFirst loaded={this.state.loaded}>
        <PageCopy>Hello! My name is Catriona Simental but feel free to call me Cat - my friends do!</PageCopy>
        <PageCopy>
          Two small, sweet children and a loving husband fill my heart and the corners of my residential studio in Mesa,
          Arizona. I know what beautiful looks like and I specialize in making women of all ages see their beauty
          through contemporary studio portraits. I want to photograph every person who has ever looked in the mirror and
          thought, "I'm not good enough" and prove them wrong. I want to document and celebrate every year of your life
          with you.
        </PageCopy>
        <PageCopy>
          I am currently servicing clients in the East Valley. Cities include but are not limited to: Mesa, Gilbert,
          Chandler, Scottsdale, Tempe.
        </PageCopy>
        <PageCopy>I look forward to working with you!</PageCopy>
      </Content>
    </div>
  );
}

YourPhotographer.propTypes = {};

YourPhotographer.defaultProps = {};

export default YourPhotographer;
