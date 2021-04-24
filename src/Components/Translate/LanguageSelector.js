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
  let fulLng = "";

  if (lang === "En") fulLng = "English";
  if (lang === "Tr") fulLng = "Turkçe";
  if (lang === "Bg") fulLng = "български";
  if (lang === "It") fulLng = "italiano";
  if (lang === "Es") fulLng = "Español";
  if (lang === "Gr") fulLng = "Ελληνικά";
  if (lang === "en") fulLng = "English";
  if (lang === "tr") fulLng = "Turkçe";
  if (lang === "bg") fulLng = "български";
  if (lang === "it") fulLng = "italiano";
  if (lang === "es") fulLng = "Español";
  if (lang === "gr") fulLng = "Ελληνικά";

  if (lang === "") fulLng = "English";

  const [language, setLanguage] = useState(fulLng);

  const { i18n } = useTranslation();

  const changeLanguages = (event) => {
    if (event.value === "en") setLanguage("English");
    if (event.value === "tr") setLanguage("Turkçe");
    if (event.value === "bg") setLanguage("български");
    if (event.value === "it") setLanguage("italiano");
    if (event.value === "es") setLanguage("Español");
    if (event.value === "gr") setLanguage("Ελληνικά");
    i18n.changeLanguage(event.value);

    ////// const lng = event.value.toUpperCase();
    const lng = event.value.replace(/^\w/, (c) => c.toUpperCase());
    props.SelectedLanguage(lng);

    localStorage.setItem("lng", "");
    localStorage.setItem("lng", event.value);
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
      value={
        language
        // language === "Turkçe"
        //   ? "Turkçe"
        //   : language === "български"
        //   ? "български"
        //   : language === "italiano"
        //   ? "italiano"
        //   : language === "Español"
        //   ? "Español"
        //   : language === "Ελληνικά"
        //   ? "Ελληνικά"
        //   : "English"
      }
      options={options}
      onChange={changeLanguages}
    />
  );
};

const mapStateToProps = (state) => ({
  selectedLanguage: state.selectedLanguage,
});

export default connect(mapStateToProps, {
  SelectedLanguage,
})(withRouter(LanguageSelector));
