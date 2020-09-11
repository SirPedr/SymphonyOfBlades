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
    url: "/about",
  },
  {
    text: "Continuar"
  },
];

const OptionsMenu = () => {
  return (
    <ul>
      {menuOptions.map((option, index) => {
        const { text, url, onClick } = option;

        return (
          <li className={styles.menuOption} key={index}>
            {url ? (
              <Link className={styles.menuOptionLink} to={url} onClick={onClick}>
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
