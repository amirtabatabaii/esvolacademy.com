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
      {(close) => <MenuItems close={close} />}
    </Popup>
  );
}

export default PopupMenu;
