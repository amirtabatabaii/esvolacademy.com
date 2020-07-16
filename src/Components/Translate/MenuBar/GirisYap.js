import React from "react";
import { useTranslation } from "react-i18next";

const GirisYap = () => {
  const { t } = useTranslation();

  return <>{t("MenuItem-GirisYap")}</>;
};

export default GirisYap;
