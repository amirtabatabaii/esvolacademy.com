import React from "react";

import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import MenuItems from "./MenuItems";

function PopupMenu(props) {
  return (
    <div>
      <Popup
        modal
        overlayStyle={{ background: "rgba(255,255,255,0.7" }}
        contentStyle={props.contentStyle}
        closeOnDocumentClick={false}
        trigger={(open) => <BurgerIcon open={open} />}
      >
        {(close) => <MenuItems close={close} />}
      </Popup>
    </div>
  );
}
export default PopupMenu;
