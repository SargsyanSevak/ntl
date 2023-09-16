import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();

/// test autocomplate
const script = document.createElement("script");
script.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyAylJ09laT7k9vKX5UbLQ5zKV0W4BKi3Gw&libraries=places";
script.defer = true;

script.onload = function () {};

document.head.appendChild(script);
/// test autocomplate
