import React from "react";
import { useTranslation } from "react-i18next";
import { Animated } from "react-animated-css";

const CardText = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <Animated animationIn='fadeIn' animationInDuration={1500}>
        {t(props.text)}
      </Animated>
    </>
  );
};

export default CardText;
