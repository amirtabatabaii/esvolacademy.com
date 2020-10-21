import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import module from "./Components/Module/ModuleHome";
import "./Components/Translate/i18n";
import AdminLogin from "./Components/AdminSection/Login/AdminLogin";
import AdminMain from "./Components/AdminSection/AdminMain/AdminMain";
import PrivateRoute from "./Components/AdminSection/Utility/PrivateRoute";
import Register from "./Components/LoginRegister/Register";
import Login from "./Components/LoginRegister/Login";
import UserHome from "./Components/UserHome/UserHome";
import UserPrivateRoute from "./Components/UserHome/UserPrivateRoute";
import ModuleFinished from "./Components/Module/ModuleFinished";

function App() {
  return (
    <Suspense fallback={null}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          {/* Home */}
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />

          {/* Module */}
          <UserPrivateRoute
            exact
            path={process.env.PUBLIC_URL + "/modules"}
            component={module}
          />

          {/* Register */}
          <Route
            exact
            path={process.env.PUBLIC_URL + "/register"}
            component={Register}
          />

          {/* Login */}
          <Route
            exact
            path={process.env.PUBLIC_URL + "/login"}
            component={Login}
          />

          {/* User Certificate */}
          <UserPrivateRoute
            exact
            path={process.env.PUBLIC_URL + "/certificate"}
            component={ModuleFinished}
          />

          {/* User Home */}
          <UserPrivateRoute
            exact
            path={process.env.PUBLIC_URL + "/user"}
            component={UserHome}
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
