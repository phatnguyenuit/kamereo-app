import React from "react";

const lazyLoad = getComponentFn => {
  class AsyncComponent extends React.Component {
    state = {
      LoadedComponent: null
    };

    componentDidMount(prevProps, prevState) {
      const { LoadedComponent } = this.state;
      if (!LoadedComponent) {
        getComponentFn().then(Component => {
          this.setState({ LoadedComponent: Component });
        });
      }
    }

    render() {
      const { LoadedComponent } = this.state;
      return LoadedComponent ? <LoadedComponent {...this.props} /> : null;
    }
  }
  return AsyncComponent;
};

export default lazyLoad;
