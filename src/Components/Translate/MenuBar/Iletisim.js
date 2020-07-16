import React from "react";
import { useTranslation } from "react-i18next";

const Iletisim = () => {
  const { t } = useTranslation();

  return <>{t("MenuItem-Iletisim")}</>;
};

export default Iletisim;
