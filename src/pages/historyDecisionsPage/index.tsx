import React from "react";
import MainArticle from "../../modules/mainArticle";

import style from "./index.scss";

const optionsListMock = [
  "Yeah this seem's like a good option",
  "This one too.",
  "You think what will follow is anotoher option",
  "But it's me, Dio!",
  "Ok now I'm just another option.",
];

const HistoryDecisionsPage = () => {
  return (
    <MainArticle title={"Capítulo 1"} className={style.gameScreen}>
      <section className={style.gameScreenScenarioDescription}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          pulvinar pulvinar rhoncus. Pellentesque at lacus at sapien facilisis
          convallis et a enim. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Mauris leo tortor, semper at dui non, volutpat rutrum
          leo. Ut luctus dui at tellus mattis, ac luctus ante laoreet. Mauris ex
          tellus, tristique non nunc sed, porttitor dictum dui. Nunc eget enim
          at tortor pharetra consequat.
        </p>
        <p>
          Nunc vel rutrum risus, nec lacinia tellus. Integer luctus sed lorem
          quis lacinia. Praesent non eleifend ante, ut dictum ante. Praesent vel
          condimentum tortor, ac faucibus felis. In laoreet egestas mauris, at
          rutrum ante scelerisque quis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer imperdiet erat ac leo vestibulum facilisis.
        </p>
        <p>
          Nunc vel rutrum risus, nec lacinia tellus. Integer luctus sed lorem
          quis lacinia. Praesent non eleifend ante, ut dictum ante. Praesent vel
          condimentum tortor, ac faucibus felis. In laoreet egestas mauris, at
          rutrum ante scelerisque quis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer imperdiet erat ac leo vestibulum facilisis.
        </p>
      </section>
      <picture className={style.gameScreenPicture}>IMAGEM IMAGEM</picture>
      <section className={style.gameScreenDecisions}>
        <ul className={style.gameScreenDecisionsList}>
          {optionsListMock.map((option) => (
            <li>{option}</li>
          ))}
        </ul>
      </section>
    </MainArticle>
  );
};

export default HistoryDecisionsPage;
