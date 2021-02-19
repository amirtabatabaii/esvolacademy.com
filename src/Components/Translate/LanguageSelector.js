import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
import "./LanguageSelector.css";

import { SelectedLanguage } from "../../Redux/action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const LanguageSelector = (props) => {
  // const [language, setLanguage] = useState("EN");
  const [language, setLanguage] = useState(
    props.selectedLanguage.toUpperCase()
  );

  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    if (event.value === "en") setLanguage("EN");
    if (event.value === "tr") setLanguage("TR");
    i18n.changeLanguage(event.value);

    // const lng = event.value.toUpperCase();
    const lng = event.value.replace(/^\w/, (c) => c.toUpperCase());
    props.SelectedLanguage(lng);
  };

  const options = [
    { value: "en", label: "EN" },
    { value: "tr", label: "TR" },
  ];

  return (
    <Dropdown
      className='languageDropdown'
      value={language}
      options={options}
      onChange={changeLanguage}
    />
  );
};

const mapStateToProps = (state) => ({
  selectedLanguage: state.selectedLanguage,
});

export default connect(mapStateToProps, {
  SelectedLanguage,
})(withRouter(LanguageSelector));
