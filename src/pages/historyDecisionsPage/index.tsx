import React, { useState } from "react";
import MainArticle from "../../modules/mainArticle";

import style from "./index.scss";

type DialogueOptionType = {
  text: string;
  nextScenarioKey: string;
};

type ScenarioType = {
  descriptions: Array<string>;
  imageSrc?: string;
  dialogueOptions: Array<DialogueOptionType>;
};

const HistoryDecisionsPage = () => {
  const [scenario, setScenario] = useState<ScenarioType>();

  const handleDialogueOptionClick = (nextScenarioKey: string) => {
    const nextScenario = scenarios[nextScenarioKey];

    nextScenario && setScenario(nextScenario);
  };

  return (
    <MainArticle title={"Capítulo 1"} className={style.gameScreen}>
      <section className={style.gameScreenScenarioDescription}>
        {scenario.descriptions.map((description) => (
          <p>{description}</p>
        ))}
      </section>
      <picture className={style.gameScreenPicture}>IMAGEM IMAGEM</picture>
      <section className={style.gameScreenDecisions}>
        <ul className={style.gameScreenDecisionsList}>
          {scenario.dialogueOptions.map((option) => (
            <li
              onClick={() => handleDialogueOptionClick(option.nextScenarioKey)}
            >
              {option.text}
            </li>
          ))}
        </ul>
      </section>
    </MainArticle>
  );
};

export default HistoryDecisionsPage;
