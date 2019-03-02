import * as themes from "../config/themes";

import React, { Component } from "react";

import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import { RootConsumer } from "../providers/RootProvider";
import Select from "@material-ui/core/Select";

const themeSelection = Object.keys(themes);

class ChangeTheme extends Component {
  constructor(props) {
    super(props);
    const { theme, themeName } = this.props;
    this.state = {
      themeName,
      theme
    };
  }
  render() {
    const { themeName } = this.state;
    return (
      <Select
        value={themeName}
        onChange={this.handleChange}
        input={<Input name="themeName" id="theme-switch" />}
      >
        <MenuItem value="" disabled>
          Choose Theme
        </MenuItem>
        {themeSelection.map((themeValue, index) => (
          <MenuItem key={`theme-${index}`} value={themeValue}>
            {themeValue}
          </MenuItem>
        ))}
      </Select>
    );
  }
  handleChange = event => {
    const { value, name } = event.target;
    const { updateTheme } = this.props;
    this.setState({ [name]: value });
    updateTheme(value);
  };
}

ChangeTheme.propTypes = {
  theme: PropTypes.object.isRequired,
  themeName: PropTypes.string.isRequired,
  updateTheme: PropTypes.func.isRequired
};

const WrappedChangeTheme = props => (
  <RootConsumer>
    {values => <ChangeTheme {...props} {...values} />}
  </RootConsumer>
);

export default WrappedChangeTheme;
