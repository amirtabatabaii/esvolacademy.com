import React from "react";
import { useTranslation } from "react-i18next";
import { Image } from "react-bootstrap";

import TrEsvol from "../../../assets/img/tr-home.png";
import EnEsvol from "../../../assets/img/en-home.png";

const ImageLanguage = () => {
  const { t } = useTranslation();

  return (
    <>
      {t("language") === "tr" ? (
        <Image src={TrEsvol} alt='esvol' width='50%' />
      ) : (
        <Image src={EnEsvol} alt='esvol' width='50%' />
      )}
    </>
  );
};

export default ImageLanguage;
