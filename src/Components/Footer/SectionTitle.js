import React from "react";
import FooterItem from "../Translate/Footer/FooterItem";

function SectionTitle(props) {
  return (
    <h5 className='mb-2'>
      <FooterItem FooterItemText={props.FooterItemText} />
    </h5>
  );
}
export default SectionTitle;
