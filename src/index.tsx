import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";

import PlayerContextProvider from "./context/playerContext/playerContextProvider";

import "./index.scss";

const App = () => <AppRoutes />;

ReactDOM.render(
  <BrowserRouter>
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
