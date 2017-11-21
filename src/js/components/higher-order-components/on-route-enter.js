import React, { Component } from 'react';

const onRouteEnter = options => WrappedComponent => {
  const { renderAfterEnter, onEnter } = options;

  class OnEnterHigherOrderComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        render: !renderAfterEnter
      };
    }

    componentDidMount() {
      onEnter();

      this.setState({ render: true });
    }

    render() {
      return this.state.render ? <WrappedComponent {...this.props} /> : null;
    }
  }

  return OnEnterHigherOrderComponent;
};

export default onRouteEnter;
