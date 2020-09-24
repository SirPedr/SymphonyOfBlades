import React, { useState } from "react";
import AttributesForm from "../../components/attributesForm";

import MainArticle from "../../modules/mainArticle";

import style from "./index.scss";

const CharacterCustomizationPage = () => {
  const [remainingAttributePoints, setRemainingAttributePoints] = useState<
    number
  >(3);

  return (
    <MainArticle
      title={"Customização de Personagem"}
      continueButton={{
        url: "/",
      }}
      className={style.characterCustomizationContainer}
    >
      <h2 className={style.remainingPointsText}>
        Pontos restantes: {remainingAttributePoints}
      </h2>
      <section className={style.characterCustomizationContainerContent}>
        <AttributesForm
          remainingPoints={remainingAttributePoints}
          setRemainingPoints={setRemainingAttributePoints}
        />
        <aside className={style.contentContainerInfo}>
          Aenean feugiat purus dictum dolor auctor ornare quis eu massa. Fusce
          sit amet consectetur tellus, ut consectetur felis. Sed accumsan nisl
          vel mauris mollis luctus. Integer euismod massa non pretium tempor.
        </aside>
      </section>
    </MainArticle>
  );
};

export default CharacterCustomizationPage;
