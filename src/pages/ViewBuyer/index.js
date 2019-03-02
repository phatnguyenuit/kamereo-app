import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import styles from "./themeStyle";
import { withStyles } from "@material-ui/core/styles";

class ViewBuyer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <h4 style={{ textAlign: "left" }}>Store Information</h4>
        <hr color={"green"} align="left" width="100px" />
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img
                alt="Store"
                src="/static/images/kamereo.png"
                width="80%"
                height="auto"
              />
              <div style={{ marginBottom: "20px" }}>
                <Grid container>
                  <strong>STORE INFO</strong>
                  <br />
                  <Grid container>
                    <Grid item xs={5}>
                      <span>Name:</span>
                    </Grid>
                    <Grid item xs={7}>
                      <span>The KOI The</span>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={5}>
                      <span>Address:</span>
                    </Grid>
                    <Grid item xs={7}>
                      <span>HCM</span>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={5}>
                      <span>Phone#:</span>
                    </Grid>
                    <Grid item xs={7}>
                      <span>0985305846</span>
                    </Grid>
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <strong>RED INVOICE</strong>
                  <br />
                  <Grid container>
                    <Grid item xs={5}>
                      <span>Company Name:</span>
                    </Grid>
                    <Grid item xs={7}>
                      <span>The KOI The</span>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={5}>
                      <span>Address:</span>
                    </Grid>
                    <Grid item xs={7}>
                      <span>30/3 District 1, Ho Chi Minh city</span>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={5}>
                      <span>MST:</span>
                    </Grid>
                    <Grid item xs={7}>
                      <span>0912285305846</span>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              <Button className={classes.buttonDark} fullWidth>
                Edit
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <p>Delivery Message</p>
              <Grid container alignItems={"baseline"}>
                <Grid item xs={1}>
                  <Checkbox checked readOnly />
                </Grid>
                <Grid item xs={11}>
                  <Paper className={classes.paper}>
                    <span>Blah Blah</span>
                    {/* <TextField multiline value={"Blah blah"} fullWidth /> */}
                  </Paper>
                </Grid>
              </Grid>
              <br />
              <Button className={classes.buttonDark}>Update</Button>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

ViewBuyer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ViewBuyer);
