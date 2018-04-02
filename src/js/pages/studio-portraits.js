import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OnLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillReceiveProps(nextProps) {}
  // shouldComponentUpdate(nextProps, nextState) { return true; }
  // componentWillUpdate(nextProps, nextState) {}
  // componentDidUpdate(prevProps, prevState) {}
  // componentWillUnmount() {}
  render() {
    return (
      <div className="on-location main-background">
      <h2>on location coming soon...</h2>
      </div>
    );
  }
}

OnLocation.propTypes = {};

OnLocation.defaultProps = {};

export default OnLocation;
