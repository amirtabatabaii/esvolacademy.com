import React, { Component, Fragment } from "react";

import Media from "react-media";

import "./Menu.css";
import PopupMenu from "./PopupMenu";

class Menu extends Component {
  render() {
    const smallContentStyle = {
      width: "300px",
      height: "95%",
      borderRadius: "29px",
      background: "#f2f3f7",
      boxShadow: "10px 15px 15px #c0c5d8, -5px -5px 5px #ffffff",
    };

    const MediumContentStyle = {
      width: "300px",
      left: "28%",
      height: "95%",
      borderRadius: "29px",
      background: "#f2f3f7",
      boxShadow: "10px 15px 15px #c0c5d8, -5px -5px 5px #ffffff",
    };

    const BigContentStyle = {
      width: "300px",
      left: "38%",
      height: "95%",
      borderRadius: "29px",
      background: "#f2f3f7",
      boxShadow: "10px 15px 15px #c0c5d8, -5px -5px 5px #ffffff",
    };

    return (
      <div>
        <Media
          queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && (
                <>
                  <PopupMenu contentStyle={smallContentStyle} />
                </>
              )}
              {matches.medium && (
                <>
                  <PopupMenu contentStyle={MediumContentStyle} />
                </>
              )}
              {matches.large && (
                <>
                  <PopupMenu contentStyle={BigContentStyle} />
                </>
              )}
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}

export default Menu;
