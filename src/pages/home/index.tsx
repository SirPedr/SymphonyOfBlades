import React from "react";
import OptionsMenu from "../../components/optionsMenu";

import styles from "./index.scss";

const HomePage = () => (
  <React.Fragment>
    <h1 className={styles.title}>Symphony of Blades</h1>
    <OptionsMenu />
  </React.Fragment>
);

export default HomePage;
