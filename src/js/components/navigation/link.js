import React from 'react';
import { NavLink } from 'react-router-dom';

import { join } from '../../utilities/component';

const toFromChildren = children => '/' + `${children}`.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-') + '.html';

const activeClassName = 'navigation__link--active';
const Link = ({ children, className, to, active }) => (
  <NavLink
    exact
    className={join('navigation__link', className, active && activeClassName)}
    activeClassName={activeClassName}
    to={to || toFromChildren(children)}
  >
    {children}
  </NavLink>
);

export default Link;
