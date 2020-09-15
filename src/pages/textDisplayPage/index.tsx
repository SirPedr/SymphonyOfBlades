import React from "react";
import ContinueButton from "../../components/continueButton";

import commonStyles from "../../sass/common.scss";
import styles from "./index.scss";

type PropsType = {
  textsToDisplay: string | Array<string>;
  continueButtonLinkURL?: string;
};

const TextDisplayPage = ({
  textsToDisplay,
  continueButtonLinkURL,
}: PropsType) => {
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
      <footer className={commonStyles.rightAlignedFooter}>
        <ContinueButton url={continueButtonLinkURL || "/"} />
      </footer>
    </section>
  );
};

export default TextDisplayPage;
