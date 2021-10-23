import React from "react";
import ReactDOM from "react-dom";
import AppHome from "./App_home";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-hsywijqz.us.auth0.com"
    clientId="HRx0uuNBVO6r37SFOwj0U2FJAYIhwOj4"
    redirectUri={window.location.origin}
  >
    <AppHome />
  </Auth0Provider>,

  document.getElementById("app")
);
