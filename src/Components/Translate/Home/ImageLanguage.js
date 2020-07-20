import React from "react";
import { useTranslation } from "react-i18next";
import { Image } from "react-bootstrap";
import { Animated } from "react-animated-css";

import TrEsvol from "../../../assets/img/tr-home.png";
import EnEsvol from "../../../assets/img/en-home.png";

const ImageLanguage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Animated animationIn='fadeInDown' animationInDuration={1000}>
        {t("language") === "tr" ? (
          <Image src={TrEsvol} alt='esvol' width='50%' />
        ) : (
          <Image src={EnEsvol} alt='esvol' width='50%' />
        )}
      </Animated>
    </>
  );
};

export default ImageLanguage;
