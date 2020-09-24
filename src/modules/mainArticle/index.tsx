import React from "react";
import ContinueButton, {
  PropsType as ContinueButtonPropsType,
} from "../../components/continueButton";

import commonStyles from "../../sass/common.scss";
import styles from "./index.scss";

type PropsType = {
  title: string;
  children: React.ReactNode;
  imageUrl?: string;
  continueButton?: ContinueButtonPropsType;
  className?: string;
};

const MainArticle = ({
  title,
  children,
  imageUrl,
  continueButton: continueButtonProps,
  className
}: PropsType) => (
  <article className={`${styles.mainArticleContainer} ${className || ""}`}>
    <header>
      <h1 className={styles.mainArticleContainerTitle}>{title}</h1>
    </header>
    {children}
    {continueButtonProps && (
      <footer className={commonStyles.rightAlignedFooter}>
        <ContinueButton {...continueButtonProps} />
      </footer>
    )}
  </article>
);

export default MainArticle;
