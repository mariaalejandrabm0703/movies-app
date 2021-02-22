import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import App from "../components/App";
import MovieDetail from "../components/MovieDetail";

function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/movie/:movieId" component={MovieDetail} />
          <Route exact path="/" component={App} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
