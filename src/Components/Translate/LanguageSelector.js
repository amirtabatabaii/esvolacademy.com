import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("TR");

  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    if (event.value === "en") setLanguage("EN");
    if (event.value === "tr") setLanguage("TR");
    i18n.changeLanguage(event.value);
  };

  const options = [
    { value: "tr", label: "TR" },
    { value: "en", label: "EN" },
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

export default LanguageSelector;
