import React from "react";
import { Link } from "react-router-dom";

import styles from "./index.scss";

type PropsType = {
  textsToDisplay: string | Array<string>;
  continueButtonLinkURL?: string;
};

const TextDisplayPage = ({ textsToDisplay, continueButtonLinkURL }: PropsType) => {
  return (
    <section className={styles.displayTextContainer}>
      {Array.isArray(textsToDisplay) ? (
        textsToDisplay.map((text, index) => (
          <p className={styles.displayTextContainerContent} key={index}>
            {text}
          </p>
        ))
      ) : (
        <p className={styles.displayTextContainerContent}>{textsToDisplay}</p>
      )}
      <Link to={continueButtonLinkURL || "/"} className={styles.displayTextContainerContinueButton}>
        Continuar
      </Link>
    </section>
  );
};

export default TextDisplayPage;
