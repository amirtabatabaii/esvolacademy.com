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
import Settings from "./Components/UserHome/Settings";
import UserSertificatePrivateRoute from "./Components/UserHome/UserSertificatePrivateRoute";
import PrivateRouteViewer from "./Components/ViewerSection/Utility/PrivateRouteViewer";
import ViewerLogin from "./Components/ViewerSection/Login/ViewerLogin";
import ViewerMain from "./Components/ViewerSection/ViewerMain/ViewerMain";
import Error404Page from "./Components/Utility/Error404Page";

// window.onload = () => {
//   // Clear localStorage
//   if (localStorage.getItem("UserID") === null) {
//     localStorage.removeItem("UserID");
//     localStorage.removeItem("firstName");
//     localStorage.removeItem("lastName");
//     localStorage.removeItem("UserInfo");
//     // Show them the sign in form
//   }
// };

// window.onload = () => {
// localStorage.removeItem("UserID");
// localStorage.removeItem("firstName");
// localStorage.removeItem("lastName");
// localStorage.removeItem("UserInfo");
// };

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
          <UserSertificatePrivateRoute
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

          {/* User Setting */}
          <UserPrivateRoute
            exact
            path={process.env.PUBLIC_URL + "/user/setting"}
            component={Settings}
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

          {/* Viewer Login */}
          <Route
            exact
            path={process.env.PUBLIC_URL + "/site/viewer-page"}
            component={ViewerLogin}
          />

          {/* Viewer Page */}
          <PrivateRouteViewer
            exact
            path={process.env.PUBLIC_URL + "/site/viewer-page/main"}
            component={ViewerMain}
          />

          <Route
            path={process.env.PUBLIC_URL + "*"}
            //component={Error404Page}
            render={() => (
              <Error404Page
                status='404'
                title='<h3>404</h3>'
                subTitle='<h4>Sorry, the page you visited does not exist.</h4>'
              />
            )}
          />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
