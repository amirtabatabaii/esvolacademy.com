import React from "react";
import { useTranslation } from "react-i18next";

const Esvol = () => {
  const { t } = useTranslation();

  return <>{t("MenuItem-Esvol")}</>;
};

export default Esvol;
