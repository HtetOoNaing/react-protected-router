import React from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import AboutLayout from "./components/AboutLayout";
import { AppLayout } from "./components/AppLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App(props) {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <ProtectedRoute path="/app" component={AppLayout} />
      <ProtectedRoute path="/about" component={AboutLayout} />
      <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
  );
}

export default App;
