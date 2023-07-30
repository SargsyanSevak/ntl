import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// eslint-disable-next-line
import { Provider } from "react-redux";
// eslint-disable-next-line
import { store } from "./store/store";
// eslint-disable-next-line
import "./i18n";

root.render(
  <Provider store={store}>
   
      <App />

  </Provider>
);
reportWebVitals();
