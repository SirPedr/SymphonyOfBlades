import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/home";
import TextDisplayPage from "./pages/textDisplayPage";
import TextDisplayPage from "./pages/textDisplay";

import DisplayTexts from "./loreContent/displayTexts";

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route
      exact
      path="/introduction"
      render={() => <TextDisplayPage textsToDisplay={DisplayTexts.INTRODUCTION} />}
    />
  </Switch>
);

export default AppRoutes;
