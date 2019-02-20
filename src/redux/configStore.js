import { applyMiddleware, compose, createStore } from "redux";

import { createBrowserHistory } from "history";
// import createSagaMiddleware from "redux-saga";
import reducers from "./rootReducer";
import { routerMiddleware } from "connected-react-router";

// import sagas from "./sagas";

export const history = createBrowserHistory();
// const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

if (process.env.NODE_ENV === "development") {
  const composeWithDevToolsExtension =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  if (typeof composeWithDevToolsExtension === "function") {
    composeEnhancers = composeWithDevToolsExtension;
  }
}

const store = createStore(
  reducers(history),
  composeEnhancers(applyMiddleware(routerMiddleware(history)))
);

// sagaMiddleware.run(sagas);

export default store;
