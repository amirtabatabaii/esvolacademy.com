import React, { Component, Fragment } from "react";

import Media from "react-media";

import "./Menu.css";
import PopupMenu from "./PopupMenu";

class Menu extends Component {
  render() {
    const ExtraSmallContentStyle = {
      width: "250px",
      left: "6%",
      top: "-16%",
      height: "65%",
      borderRadius: "29px",
      background: "#f2f3f7",
      boxShadow: "10px 15px 15px #c0c5d8, -5px -5px 5px #ffffff",
      border: "none",
    };

    const smallContentStyle = {
      width: "250px",
      left: "12%",
      top: "-15%",
      height: "65%",
      borderRadius: "29px",
      background: "#f2f3f7",
      boxShadow: "10px 15px 15px #c0c5d8, -5px -5px 5px #ffffff",
      border: "none",
    };

    const MediumContentStyle = {
      width: "250px",
      left: "33%",
      top: "-15%",
      height: "65%",
      borderRadius: "29px",
      background: "#f2f3f7",
      boxShadow: "10px 15px 15px #c0c5d8, -5px -5px 5px #ffffff",
      border: "none",
    };

    const BigContentStyle = {
      width: "250px",
      left: "40%",
      top: "-15%",
      height: "65%",
      borderRadius: "29px",
      background: "#f2f3f7",
      boxShadow: "10px 15px 15px #c0c5d8, -10px -15px 15px #ffffff",
      border: "none",
    };

    return (
      <div>
        <Media
          queries={{
            Xsmall: "(max-width: 349px)",
            small: "(min-width: 350px) and (max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.Xsmall && (
                <PopupMenu contentStyle={ExtraSmallContentStyle} />
              )}
              {matches.small && <PopupMenu contentStyle={smallContentStyle} />}
              {matches.medium && (
                <PopupMenu contentStyle={MediumContentStyle} />
              )}
              {matches.large && <PopupMenu contentStyle={BigContentStyle} />}
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}

export default Menu;
