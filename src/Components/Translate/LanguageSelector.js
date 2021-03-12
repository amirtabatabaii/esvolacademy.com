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
  const lang = props.selectedLanguage;
  let languages = "English";
  if (lang === "en") languages = "English";
  if (lang === "tr") languages = "Turkçe";
  if (lang === "bg") languages = "български";
  if (lang === "it") languages = "italiano";
  if (lang === "es") languages = "Español";
  if (lang === "gr") languages = "Ελληνικά";
  const [language, setLanguage] = useState(
    // props.selectedLanguage.toUpperCase()
    languages
  );

  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    if (event.value === "en") setLanguage("English");
    if (event.value === "tr") setLanguage("Turkçe");
    if (event.value === "bg") setLanguage("български");
    if (event.value === "it") setLanguage("italiano");
    if (event.value === "es") setLanguage("Español");
    if (event.value === "gr") setLanguage("Ελληνικά");
    i18n.changeLanguage(event.value);

    // const lng = event.value.toUpperCase();
    const lng = event.value.replace(/^\w/, (c) => c.toUpperCase());
    props.SelectedLanguage(lng);
  };

  const options = [
    { value: "en", label: "English" },
    { value: "tr", label: "Turkçe" },
    { value: "bg", label: "български" },
    { value: "it", label: "italiano" },
    { value: "es", label: "Español" },
    { value: "gr", label: "Ελληνικά" },
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
