import React, { useState } from "react";

import {
  AttributesSlugs,
  PlayerAttributesType,
} from "../../context/playerContext";

import style from "./index.scss";

const attributesFormSlugs: Array<{
  slug: AttributesSlugs;
  labelText: string;
}> = [
  {
    slug: AttributesSlugs.STRENGTH,
    labelText: "Força",
  },
  {
    slug: AttributesSlugs.DEXTERITY,
    labelText: "Agilidade",
  },
  {
    slug: AttributesSlugs.INTELLIGENCE,
    labelText: "Inteligência",
  },
  {
    slug: AttributesSlugs.CHARISMA,
    labelText: "Carisma",
  },
];

type PropsType = {
  remainingPoints: number;
  setRemainingPoints: (newRemainingPoints: number) => void;
};

const AttributesForm = ({ remainingPoints, setRemainingPoints }: PropsType) => {
  const [chosenAttributes, setChosenAttributes] = useState<
    PlayerAttributesType
  >({
    strength: 0,
    dexterity: 0,
    intelligence: 0,
    charisma: 0,
  });

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const affectedInput = event.currentTarget;
    const inputName = affectedInput.name as AttributesSlugs;
    const newAttributeValue = parseInt(affectedInput.value);
    const oldAttributeValue = chosenAttributes[inputName];

    let newAttributePoints = remainingPoints;

    if (newAttributeValue > oldAttributeValue && !remainingPoints) return;

    if (newAttributeValue > oldAttributeValue) {
      newAttributePoints -= 1;
    } else if (oldAttributeValue > newAttributeValue) {
      newAttributePoints += 1;
    }

    setRemainingPoints(newAttributePoints >= 0 ? newAttributePoints : 0);

    setChosenAttributes({
      ...chosenAttributes,
      [inputName]: newAttributeValue,
    });
  };

  const minimumAttributeValue = 0;
  const maximumAttributeValue = 5;

  return (
    <form className={style.attributeForm}>
      <fieldset className={style.attributeFormFieldset}>
        {attributesFormSlugs.map((attribute) => {
          const { slug, labelText } = attribute;
          const inputId = `attributeInput-${slug}`;

          return (
            <span
              key={`input-${slug}-wrapper`}
              className={`${style.attributeFormInputWrapper}`}
            >
              <label
                htmlFor={inputId}
                className={`${style.attributeFormLabel}`}
              >
                {labelText}:
              </label>
              <input
                type={"number"}
                min={minimumAttributeValue}
                max={maximumAttributeValue}
                name={slug}
                id={inputId}
                className={style.attributeFormInput}
                value={chosenAttributes[slug]}
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
