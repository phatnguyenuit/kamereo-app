import React, { Component } from "react";

import AccountCircle from "@material-ui/icons/AccountCircle";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Business from "@material-ui/icons/Business";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Dashboard from "@material-ui/icons/Dashboard";
import Description from "@material-ui/icons/Description";
import { Divider } from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreIcon from "@material-ui/icons/MoreVert";
import Notes from "@material-ui/icons/Notes";
import Paper from "@material-ui/core/Paper";
import People from "@material-ui/icons/People";
import PropTypes from "prop-types";
import Restaurant from "@material-ui/icons/Restaurant";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Store from "@material-ui/icons/Store";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withRoot from "../../withRoot";
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

class PrimaryAppBar extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              KAMEREO
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
        <Grid container spacing={24} className={classes.mt5}>
          <Grid
            item
            xs={2}
            style={{
              overflow: "auto",
              height: "90%"
            }}
          >
            <Grid container alignItems={"center"} spacing={4}>
              <Grid item xs={3}>
                <Avatar alt="Kamereo" src="/static/images/kamereo.png" />
              </Grid>
              <Grid item xs={9}>
                <span>
                  <b>KAMEREO</b>
                </span>
                <br />
                <span>135 Hai Ba Trung</span>
              </Grid>
              <Button fullWidth style={{ marginLeft: "10px" }} color="primary">
                Change store
              </Button>
            </Grid>
            <Divider />
            <ListItem>
              <ListItemIcon button>
                <Favorite style={{ color: "red" }} />
              </ListItemIcon>
              <ListItemText primary="FAVORITE ITEMS" />
            </ListItem>
            <Divider />
            <List>
              <ListItem>
                <ListItemText>
                  <b>Dashboard</b>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Overview" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Description />
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ShoppingBasket />
                </ListItemIcon>
                <ListItemText primary="Supplier List" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Notes />
                </ListItemIcon>
                <ListItemText primary="Statistic" />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemText>
                  <b>Market Place</b>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Store />
                </ListItemIcon>
                <ListItemText primary="Market" />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemText>
                  <b>General Settings</b>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Business />
                </ListItemIcon>
                <ListItemText primary="Company info" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Restaurant />
                </ListItemIcon>
                <ListItemText primary="Store info" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <People />
                </ListItemIcon>
                <ListItemText primary="User Management" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={10}>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
              style={{ textAlign: "left" }}
            >
              Store Information
            </Typography>
            <hr color={"green"} align="left" width="100px" />
            <Grid container spacing={24} className={classes.mt5}>
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
          </Grid>
        </Grid>
      </div>
    );
  }
}

PrimaryAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(PrimaryAppBar));