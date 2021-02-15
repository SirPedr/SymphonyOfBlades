import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import { playerAttributesAtom } from "../../recoil/atoms";
import { AttributesSlugs } from "../../types/player";

import style from "./index.scss";

const attributesFormLabels: { [index in AttributesSlugs]: string } = {
  [AttributesSlugs.STRENGTH]: "Força",
  [AttributesSlugs.DEXTERITY]: "Destreza",
  [AttributesSlugs.INTELLIGENCE]: "Inteligência",
  [AttributesSlugs.CHARISMA]: "Carisma",
};

type PropsType = {
  remainingPoints: number;
  setRemainingPoints: (newRemainingPoints: number) => void;
};

const AttributesForm = ({ remainingPoints, setRemainingPoints }: PropsType) => {
  const [playerAttributes, setPlayerAttributes] = useRecoilState(
    playerAttributesAtom
  );

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const affectedInput = event.currentTarget;
    const inputName = affectedInput.name as AttributesSlugs;
    const newAttributeValue = parseInt(affectedInput.value);
    const oldAttributeValue = playerAttributes[inputName];

    let newAttributePoints = remainingPoints;

    if (newAttributeValue > oldAttributeValue && !remainingPoints) return;

    if (newAttributeValue > oldAttributeValue) {
      newAttributePoints -= 1;
    } else if (oldAttributeValue > newAttributeValue) {
      newAttributePoints += 1;
    }

    setRemainingPoints(newAttributePoints >= 0 ? newAttributePoints : 0);

    setPlayerAttributes({
      ...playerAttributes,
      [inputName]: newAttributeValue,
    });
  };

  useEffect(() => console.log(playerAttributes), [playerAttributes]);

  const minimumAttributeValue = 0;
  const maximumAttributeValue = 5;

  return (
    <form className={style.attributeForm}>
      <fieldset className={style.attributeFormFieldset}>
        {Object.values(AttributesSlugs).map((attributeSlug) => {
          const inputLabelText = attributesFormLabels[attributeSlug];
          const inputId = `attributeInput-${attributeSlug}`;

          return (
            <span
              key={`input-${attributeSlug}-wrapper`}
              className={`${style.attributeFormInputWrapper}`}
            >
              <label
                htmlFor={inputId}
                className={`${style.attributeFormLabel}`}
              >
                {inputLabelText}:
              </label>
              <input
                type={"number"}
                min={minimumAttributeValue}
                max={maximumAttributeValue}
                name={attributeSlug}
                id={inputId}
                className={style.attributeFormInput}
                value={playerAttributes[attributeSlug]}
                onChange={onChange}
              />
            </span>
          );
        })}
      </fieldset>
    </form>
  );
};

export default AttributesForm;
