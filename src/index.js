import React from "react";

import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App";

import "./App.css";

import "./assets/scss/style.scss";

import { render, hydrate } from "react-dom";

const history = createBrowserHistory();
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <Router history={history}>
      <App />
    </Router>,
    rootElement
  );
} else {
  render(
    <Router history={history}>
      <App />
    </Router>,
    rootElement
  );
}
