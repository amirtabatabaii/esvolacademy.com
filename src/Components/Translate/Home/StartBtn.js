import React from "react";
import { useTranslation } from "react-i18next";

const StartBtn = () => {
  const { t } = useTranslation();

  return <>{t("Start-Button")}</>;
};

export default StartBtn;
