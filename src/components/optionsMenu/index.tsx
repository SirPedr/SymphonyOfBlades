import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.scss";

type OptionType = {
  text: string;
  url?: string;
  onClick?: () => void;
};

const menuOptions: Array<OptionType> = [
  {
    text: "Jogar",
    url: "introduction",
  },
  {
    text: "Continuar"
  }
];

const OptionsMenu = () => {
  return (
    <ul className={styles.optionsContainer}>
      {menuOptions.map((option, index) => {
        const { text, url, onClick } = option;

        return (
          <li className={styles.optionsContainerOption} key={index}>
            {url ? (
              <Link className={styles.optionsContainerOptionLink} to={url} onClick={onClick}>
                {text}
              </Link>
            ) : (
              <p onClick={onClick}> {text} </p>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default OptionsMenu;
