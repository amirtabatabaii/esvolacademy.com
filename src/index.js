import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "./Components/Translate/i18n";

import store from "./Redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import "./css/MyAntd.css";

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
