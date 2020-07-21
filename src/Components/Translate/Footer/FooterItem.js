import React from "react";
import { useTranslation } from "react-i18next";

const FooterItem = (props) => {
  const { t } = useTranslation();

  return <>{t(props.FooterItemText)}</>;
};

export default FooterItem;
