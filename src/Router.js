import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Base from "./pages/Base";
import { ConnectedRouter } from "connected-react-router";
import EditBuyer from "./pages/EditBuyer";
import ViewBuyer from "./pages/ViewBuyer";
import { history } from "./redux/configStore";

export default class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Base>
          <Switch>
            <Route exact path="/" component={ViewBuyer} />
            <Route exact path="/edit" component={EditBuyer} />
          </Switch>
        </Base>
      </ConnectedRouter>
    );
  }
}
