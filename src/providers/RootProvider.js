import * as themes from "../config/themes";

import React from "react";

export const rootContext = React.createContext();

class RootProvider extends React.Component {
  constructor(props) {
    super(props);
    const { themeName = "GreenTheme" } = this.props;
    this.state = {
      themeName,
      theme: themes[themeName],
      name: "Phat Nguyen",
      updateTheme: theme => this.updateTheme(theme)
    };
  }

  updateTheme = theme => {
    this.setState(prevState => ({
      ...prevState,
      theme: themes[theme]
    }));
  };

  render() {
    return (
      // value prop is where we define what values
      // that are accessible to consumer components
      <rootContext.Provider value={this.state}>
        {this.props.children}
      </rootContext.Provider>
    );
  }
}

export default RootProvider;
export const RootConsumer = rootContext.Consumer;
