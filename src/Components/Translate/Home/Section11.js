import React from "react";
import { useTranslation } from "react-i18next";
import { Animated } from "react-animated-css";

const Section11 = () => {
  const { t } = useTranslation();

  return (
    <>
      <Animated animationIn='fadeIn' animationInDuration={1500}>
        {t("Home-Section1-1")}
      </Animated>
    </>
  );
};

export default Section11;
