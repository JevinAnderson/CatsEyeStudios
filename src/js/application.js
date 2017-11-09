import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navigation from './components/navigation';
import Home from './pages/home';
import YourPhotographer from './pages/your-photographer';
import TheExperience from './pages/the-experience';
import ContactUs from './pages/contact-us/contact-us';
import Header from './components/header/header';
import store from './utilities/store';

const Application = props => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="cats-eye-studios">
        <Header />
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/index.html" exact component={Home} />
          <Route path="/your-photographer.html" exact component={YourPhotographer} />
          <Route path="/the-experience.html" exact component={TheExperience} />
          <Route path="/contact-us.html" exact component={ContactUs} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);


export default Application;
