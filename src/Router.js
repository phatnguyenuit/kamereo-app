import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { ConnectedRouter } from "connected-react-router";
import HomePage from "./pages/HomePage/";
import { history } from "./redux/configStore";

export default class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </ConnectedRouter>
    );
  }
}
