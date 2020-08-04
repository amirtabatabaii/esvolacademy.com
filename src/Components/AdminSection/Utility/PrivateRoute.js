import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import AdminMain from "../AdminMain/AdminMain";

class PrivateRoute extends Component {
  render() {
    return (
      <div>
        <Route
          render={({ location }) =>
            localStorage.getItem("administratorToken") ? (
              <AdminMain />
            ) : (
              <Redirect
                to={{
                  pathname: "/site/admin-page",
                  state: { from: location },
                }}
              />
            )
          }
        />
      </div>
    );
  }
}
export default PrivateRoute;
