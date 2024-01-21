import React from "react";
import ReactDOM from "react-dom/client";
//----    ----    ----

//styles:
import "../styles/reset.css";
import "../styles/styles.css";

//----    ----    ----

//components:
import App from "./Components/App";

//----    ----    ----
/*
  Dependencies:

  npm install react
  npm install parcel-bundler

*/
//.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
