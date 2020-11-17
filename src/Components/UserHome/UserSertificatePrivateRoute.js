import React from "react";
import { Route, Redirect } from "react-router-dom";

const UserSertificatePrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("UserModule") === "Module6" ? (
          <Component />
        ) : localStorage.getItem("UserInfo") ? (
          <Redirect
            to={{
              pathname: "/user",
              state: { from: location },
            }}
          />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default UserSertificatePrivateRoute;
