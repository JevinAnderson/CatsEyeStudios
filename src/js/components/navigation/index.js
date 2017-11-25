import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './navigation.scss';
import Link from './link';
import { join } from '../../utilities/component';

class Navigation extends Component {
  state = {};

  toggle = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  render() {
    const { location: { pathname } } = this.props;
    const { state: { expanded }, toggle } = this;
    const isHome = pathname === '/' || pathname === '/index.html';
    const linkContainerClass = join(
      'navigation__links',
      expanded && 'navigation__links--expanded'
    );

    return (
      <div className="navigation">
        {expanded && (
          <div className="navigation__modal-background" onClick={this.toggle} />
        )}
        <div className={linkContainerClass} onClick={toggle}>
          <div className="navigation__links__inner-container">
            <Link to="/index.html" active={isHome}>
              Welcome
            </Link>
            <Link to="/your-photographer.html">Meet Your Photographer</Link>
            <Link to="/the-experience.html">The Experience</Link>
            <Link to="/contact-us.html">Contact</Link>
          </div>
        </div>
        <div className="navigation__menu" onClick={toggle}>
          Menu
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

Navigation.defaultProps = {};

export default withRouter(Navigation);
