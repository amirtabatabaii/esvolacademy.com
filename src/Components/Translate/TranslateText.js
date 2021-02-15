import React from "react";
import { useTranslation } from "react-i18next";

const TranslateText = (props) => {
  const { t } = useTranslation();

  // return <>{t(props.txt)}</>;
  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: t(props.txt) }} />
    </>
  );
};

export default TranslateText;
