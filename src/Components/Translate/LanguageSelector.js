import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("TR");

  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    if (event.value === "en") setLanguage("EN");
    if (event.value === "tr") setLanguage("TR");
    if (event.value === "fa") setLanguage("FA");
    i18n.changeLanguage(event.value);
  };

  const options = [
    { value: "tr", label: "TR" },
    { value: "en", label: "EN" },
    { value: "fa", label: "FA" },
  ];

  return (
    <Dropdown
      value={language}
      className='languageDropdown'
      options={options}
      onChange={changeLanguage}
    />
  );
};

export default LanguageSelector;
