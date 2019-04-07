import rootReducer from "./Reducers/rootReducer";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./Config/fbConfig";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, { attachAuthIsReady: true })
  )
);

store.firebaseAuthIsReady().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

const Action = projects => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    firestore
      .collection("projects")
      .add({ ...projects, authorName: "Thanh Nguyen" })
      .then(() => dispatch({ type: "...", projects }))
      .catch(err => dispatch({ type: "ERROR", err }));

    firebase
      .auth()
      .signInWithEmailAndPassword(projects.email, projects.password)
      .then(() => dispatch({ type: "LOGIN_SUC" }))
      .catch(err => dispatch({ type: "LOGIN_FAIL" }));

    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: "LOGOUT_SUC" }));
  };
};

import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./Reducers/authReducer";
import projectReducer from "./Reducers/projectReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const mapStateToProps = projects => {
  return {
    auth: projects.firebase.auth.uid
  };
};
