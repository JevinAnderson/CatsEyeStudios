import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './header.scss';

function headerContentFromPath(path) {
  switch (path) {
    case '/':
    case '/index.html':
      return `CAT'S EYE STUDIOS`;
    case '/your-photographer.html':
      return 'A Note From Your Photographer';
    case '/the-experience.html':
      return 'Your Personalized Experience';
    case '/contact-us.html':
      return 'Your Complimentary Consultation';
    default:
      return;
  }
}

const Header = ({ location: { pathname } }) => {
  const content = headerContentFromPath(pathname);

  if (!content) return null;

  return (
    <div className="header">
      <h1 className="header__header">{content}</h1>
    </div>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default withRouter(Header);
