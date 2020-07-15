import React from "react";

import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import MenuItems from "./MenuItems";

function PopupMenu(props) {
  return (
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.7" }}
      contentStyle={props.contentStyle}
      closeOnDocumentClick={false}
      trigger={(open) => <BurgerIcon open={open} />}
      // trigger={(open) => (
      //   <button className='button' open={open}>
      //     Open Modal
      //   </button>
      // )}
    >
      {(close) => <MenuItems close={close} />}
    </Popup>
  );
}

export default PopupMenu;
