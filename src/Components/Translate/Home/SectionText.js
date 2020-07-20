import React from "react";
import { useTranslation } from "react-i18next";
import { Animated } from "react-animated-css";

const SectionText = (props) => {
  const { t } = useTranslation();

  return (
    <Animated animationIn='fadeIn' animationInDuration={1500}>
      {t(props.HomeSectionText)}
    </Animated>
  );
};

export default SectionText;
