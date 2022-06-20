import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';
import {HomePage} from "./pages";
import {TestPage} from "./pages/test";

export default function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL||''}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/test" component={TestPage}/>
        </Switch>
      </Router>
    </>
  );
}
