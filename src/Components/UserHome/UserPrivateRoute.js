import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import UserHome from "./UserHome";

class UserPrivateRoute extends Component {
  render() {
    return (
      <div>
        <Route
          render={({ location }) =>
            localStorage.getItem("UserToken") ? (
              <UserHome />
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
      </div>
    );
  }
}
export default UserPrivateRoute;
