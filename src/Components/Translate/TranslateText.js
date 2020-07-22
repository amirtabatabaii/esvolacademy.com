import React from "react";
import { useTranslation } from "react-i18next";

const TranslateText = (props) => {
  const { t } = useTranslation();

  return <>{t(props.txt)}</>;
};

export default TranslateText;
