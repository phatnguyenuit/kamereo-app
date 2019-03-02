import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";
import purple from "@material-ui/core/colors/purple";

export const GreenTheme = {
  palette: {
    primary: {
      light: green[500],
      main: green[600],
      dark: green[800]
    },
    secondary: {
      light: grey[300],
      main: grey[400],
      dark: grey[700]
    },
    text: {
      primary: grey[900],
      secondary: grey[800],
      disabled: grey[400],
      hint: grey[300]
    }
  },
  typography: {
    useNextVariants: true
  }
};

export const PurpleTheme = {
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  },
  typography: {
    useNextVariants: true
  }
};
