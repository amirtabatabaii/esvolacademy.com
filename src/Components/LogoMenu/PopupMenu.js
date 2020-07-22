import React from "react";

import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import MenuItems from "./MenuItems";

function PopupMenu(props) {
  return (
    <Popup
      modal
      overlayStyle={{ background: "rgba(230,230,230,0.7" }}
      contentStyle={props.contentStyle}
      closeOnDocumentClick={false}
      trigger={(open) => <BurgerIcon open={open} />}
    >
      {(close) => (
        <MenuItems
          close={close}
          MenuItem1={props.MenuItem1}
          MenuItem2={props.MenuItem2}
          MenuItem3={props.MenuItem3}
          MenuItem4={props.MenuItem4}
        />
      )}
    </Popup>
  );
}

export default PopupMenu;
