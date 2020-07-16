import React from "react";
import { useTranslation } from "react-i18next";

const Hakkimizda = () => {
  const { t } = useTranslation();

  return <>{t("MenuItem-Hakkimizda")}</>;
};

export default Hakkimizda;
