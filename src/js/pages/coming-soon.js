import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LoremIpsum from 'lorem-ipsum';

import Content from '../components/shared/content';
import { randomNumberLessThan, randomString } from '../utilities/random';

let key = 1;

class ComingSoon extends PureComponent {
  constructor(props) {
    super(props);

    this.state = this.randomInitialState();
  }

  randomInitialState = () => {
    console.log('creating random initial state');
    let count = randomNumberLessThan(100);
    let paragraphs = [];

    while (count--) {
      paragraphs.push(<p key={key++}>{LoremIpsum()}</p>);
    }

    return { paragraphs };
  };

  render() {
    return (
      <div className="coming-soon">
        <Content>
          <p>This page is coming soon...</p>
          <br />
          <p>Meanwhile, here is some Lorem Ipsum</p>
          <br />
          {this.state.paragraphs}
        </Content>
      </div>
    );
  }
}

export default ComingSoon;
