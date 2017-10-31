import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactUs extends Component {
  state = {
    clickCount: 0
  }

  onClick = event => {
    this.setState(prevState => ({
      clickCount: prevState.clickCount + 1
    }));
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
      <div className="Component Class" onClick={this.onClick}>
        Contact us coming soon...
      </div>
    );
  }
}

ContactUs.propTypes = {};

ContactUs.defaultProps = {};

export default ContactUs;
