import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "components/site/app.js";
import Admin from "components/admin/App.js";
import Test from "components/site/test.js";

ReactDOM.render(
  <BrowserRouter>
    <Admin />
  </BrowserRouter>,
  document.getElementById("root")
);
