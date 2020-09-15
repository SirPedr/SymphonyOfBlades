import React from "react";
import { Link } from "react-router-dom";

import commonStyles from "../../sass/common.scss";
import styles from "./index.scss";

export type PropsType = {
  url: string;
  linkState?: Object;
  className?: string;
};

const ContinueButton = ({ url, linkState, className }: PropsType) => (
  <Link
    to={linkState ? { pathname: url, state: linkState } : url}
    className={`${commonStyles.hoverableLink} ${styles.continueButton} ${
      className ? className : ""
    }`}
  >
    Continuar
  </Link>
);

export default ContinueButton;
