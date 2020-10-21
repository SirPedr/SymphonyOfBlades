import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/home";
import TextDisplayPage from "./pages/textDisplayPage";
import CharacterCustomizationPage from "./pages/characterCustomizationPage";
import HistoryDecisionsPage from "./pages/historyDecisionsPage";

import DisplayTexts from "./loreContent/displayTexts";

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route
      exact
      path="/introduction"
      render={() => (
        <TextDisplayPage
          textsToDisplay={DisplayTexts.INTRODUCTION}
          continueButtonLinkURL="/character"
        />
      )}
    />
    <Route exact path="/character" component={CharacterCustomizationPage} />
    <Route exact path="/history" component={HistoryDecisionsPage} />
  </Switch>
);

export default AppRoutes;
