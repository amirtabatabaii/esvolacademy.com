import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import module from "./Components/Module/ModuleHome";
import "./Components/Translate/i18n";
import AdminLogin from "./Components/AdminSection/Login/AdminLogin";
import AdminMain from "./Components/AdminSection/AdminMain/AdminMain";
import PrivateRoute from "./Components/AdminSection/Utility/PrivateRoute";

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
            path={process.env.PUBLIC_URL + "/modules"}
            component={module}
          />

          {/* Admin Login */}
          <Route
            exact
            path={process.env.PUBLIC_URL + "/site/admin-page"}
            component={AdminLogin}
          />

          {/* Admin Page */}
          <PrivateRoute
            exact
            path={process.env.PUBLIC_URL + "/site/admin-page/main"}
            component={AdminMain}
          />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
