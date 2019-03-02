import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    flexGrow: 1,
    wordWrap: "anywhere"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },
  buttonDark: {
    backgroundColor: theme.palette.secondary.main
  },
  mt5: {
    marginTop: "5px"
  }
});

class EditBuyer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24} className={classes.mt5}>
        <Grid item xs={4}>
          <strong>STORE IMAGE</strong>
          <img
            alt="Store"
            src="/static/images/kamereo.png"
            width="80%"
            height="auto"
            style={{ border: "1px solid black" }}
          />
        </Grid>
        <Grid item xs={8}>
          BASIC INFO
        </Grid>
      </Grid>
    );
  }
}

EditBuyer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditBuyer);
