import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import Select from "@material-ui/core/Select";
import styles from "./themeStyle";
import { withStyles } from "@material-ui/core/styles";

class EditBuyer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imageUrl: "/static/images/kamereo.png",
      disabled: true
    };
  }

  removeImage = e => {
    e.preventDefault();
    this.setState({
      file: "",
      imageUrl: "/static/images/kamereo.png",
      disabled: true
    });
  };

  handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        disabled: false,
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };
  render() {
    const { classes } = this.props;
    const { imageUrl, disabled } = this.state;
    return (
      <>
        <h4 style={{ textAlign: "left" }}>
          <CreateOutlinedIcon color="primary" />
          EDIT STORE PROFILE
        </h4>
        <hr color={"green"} align="left" width="100px" />
        <Divider />
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <h5>STORE IMAGE</h5>
            <Card>
              <img
                alt="Store"
                src={imageUrl}
                width="90%"
                height="auto"
                className={classes.image}
              />
              <div align="right">
                <Button disabled={disabled} onClick={this.removeImage}>
                  Remove
                </Button>

                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  onChange={this.handleImageChange}
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    component="span"
                    size={"large"}
                    className={classes.button}
                  >
                    Upload Image
                  </Button>
                </label>
              </div>
            </Card>
          </Grid>
          <Grid item xs={9}>
            <form className={classes.root} autoComplete="off">
              <h5>BASIC INFO</h5>
              <Grid container>
                <Grid item xs={12}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="store-name">
                      Store Name
                    </InputLabel>
                    <Input id="store-name" placeholder="Store Name" />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container direction={"row"} alignContent={"flex-start"}>
                <Grid item xs={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="store-address">
                      Store Address
                    </InputLabel>
                    <Input id="store-address" placeholder="Address" />
                  </FormControl>
                </Grid>

                <Grid item xs={3}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="store-district">
                      District
                    </InputLabel>
                    <Select
                      inputProps={{
                        name: "district",
                        id: "store-district"
                      }}
                    >
                      <MenuItem value="" disabled>
                        <em>District</em>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="store-city">
                      City
                    </InputLabel>
                    <Select
                      inputProps={{
                        name: "city",
                        id: "store-city"
                      }}
                    >
                      <MenuItem value="" disabled>
                        <em>City</em>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="phone">
                  Phone
                </InputLabel>
                <Input id="phone" placeholder="(338) 999 844" />
              </FormControl>

              <h5>RED INVOICE INFO</h5>
              <Grid container>
                <Grid item xs={12}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="company-name">
                      Company Name
                    </InputLabel>
                    <Input id="company-name" placeholder="Company Name" />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container direction={"row"} alignContent={"flex-start"}>
                <Grid item xs={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="company-address">
                      Company Address
                    </InputLabel>
                    <Input id="company-address" placeholder="Address" />
                  </FormControl>
                </Grid>

                <Grid item xs={3}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="company-district">
                      District
                    </InputLabel>
                    <Select
                      inputProps={{
                        name: "company-district",
                        id: "company-district"
                      }}
                    >
                      <MenuItem value="" disabled>
                        <em>District</em>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="company-city">
                      City
                    </InputLabel>
                    <Select
                      inputProps={{
                        name: "company-city",
                        id: "company-city"
                      }}
                    >
                      <MenuItem value="" disabled>
                        <em>City</em>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="mst">
                  MST
                </InputLabel>
                <Input id="mst" placeholder="PN0121209122" />
              </FormControl>
              <Grid container direction={"column"}>
                <Grid item xs={10}>
                  <Button color="primary" variant="contained" fullWidth>
                    Save
                  </Button>
                </Grid>
                <Grid item xs={10}>
                  <Button color="secondary" fullWidth>
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </>
    );
  }
}

EditBuyer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditBuyer);
