import React from "react";
import { useTranslation } from "react-i18next";

const CardText = (props) => {
  const { t } = useTranslation();

  return <>{t(props.txt)}</>;
};

export default CardText;
