import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import module from "./Components/Module/ModuleHome";
import "./Components/Translate/i18n";

function App() {
  return (
    <Suspense fallback={null}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          {/* Home */}
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />

          {/* Module */}
          <Route
            exact
            path={process.env.PUBLIC_URL + "/module1"}
            component={module}
          />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
