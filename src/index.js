import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Reducers/rootReducer";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import CalculateNewTime from "./Actions/calculateNewTime";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);
setInterval(() => CalculateNewTime(store), 1000);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
