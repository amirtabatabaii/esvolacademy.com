import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import ViewerMain from "../ViewerMain/ViewerMain";

class PrivateRouteViewer extends Component {
  render() {
    return (
      <div>
        <Route
          render={({ location }) =>
            localStorage.getItem("viewerToken") ? (
              <ViewerMain />
            ) : (
              <Redirect
                to={{
                  pathname: "/site/viewer-page",
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
export default PrivateRouteViewer;
