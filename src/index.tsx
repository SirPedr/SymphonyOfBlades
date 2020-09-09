import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.scss";

type PropsType = {
  name: string;
};

const App = ({ name }: PropsType) => (
  <h1>
    Um salve pro <span className={styles.title}>{name}</span>
  </h1>
);

ReactDOM.render(<App name="Pedro" />, document.getElementById("root"));
