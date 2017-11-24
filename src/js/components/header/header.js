import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { dangerous } from '../../utilities/component';

import './header.scss';

function headerContentFromPath(path) {
  switch (path) {
    case '/':
    case '/index.html':
      return `CAT'S EYE STUDIOS`;
    case '/your-photographer.html':
      return 'The Photographer';
    case '/the-experience.html':
      return 'The Experience';
    case '/contact-us.html':
      return 'Your Consultation';
    default:
      return;
  }
}

const Header = ({ location: { pathname } }) => {
  let content = headerContentFromPath(pathname);

  if (!content) return null;

  content = dangerous(content);

  return (
    <div className="header">
      <h1 className="header__header" dangerouslySetInnerHTML={content} />
    </div>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default withRouter(Header);
