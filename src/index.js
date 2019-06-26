import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

import mainReducer from "./common/reducersIndex";
import mainSaga from "./common/sagas/saga";

import MainContainer from "./components/organism/MainContainer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mainSaga);

function App() {
  return <MainContainer />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
