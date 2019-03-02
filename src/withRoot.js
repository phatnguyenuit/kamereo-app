import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import { RootConsumer } from "./providers/RootProvider";

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <RootConsumer>
        {({ theme }) => {
          const muiTheme = createMuiTheme(theme);
          return (
            <MuiThemeProvider theme={muiTheme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...props} />
            </MuiThemeProvider>
          );
        }}
      </RootConsumer>
    );
  }

  return WithRoot;
}

export default withRoot;
