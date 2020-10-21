import React from "react";
import { Link } from "react-router-dom";

import commonStyles from "../../sass/common.scss";
import styles from "./index.scss";

export type PropsType = {
  url: string;
  linkState?: Object;
  isDisabled?: boolean;
  className?: string;
};

const ContinueButton = ({
  url,
  linkState,
  isDisabled,
  className,
}: PropsType) => {
  return isDisabled ? (
    <span className={`${styles.continueButton} ${styles.continueButtonDisabled}`}>Continuar</span>
  ) : (
    <Link
      to={linkState ? { pathname: url, state: linkState } : url}
      className={`${commonStyles.hoverableLink} ${styles.continueButton} ${
        className ? className : ""
      }`}
    >
      Continuar
    </Link>
  );
};

export default ContinueButton;
