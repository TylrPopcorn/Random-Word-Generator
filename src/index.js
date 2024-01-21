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

//vars:
const TITLE = "WORD GENERATOR"; /* Change the title to whatever */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1 className="title" data-text={TITLE}>
      {TITLE}
    </h1>
    <App />
  </React.StrictMode>
);
