import React from "react";
import { useTranslation } from "react-i18next";

const MenuItem = (props) => {
  const { t } = useTranslation();

  return <>{t(props.MenuItemText)}</>;
};

export default MenuItem;
