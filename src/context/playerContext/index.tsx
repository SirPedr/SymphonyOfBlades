import React from "react";

export enum AttributesSlugs { 
  STRENGTH = "strength",
  DEXTERITY = "dexterity",
  CHARISMA = "charisma",
  INTELLIGENCE = "intelligence"
};

export type PlayerAttributesType = {
  [AttributesSlugs.STRENGTH]: number;
  [AttributesSlugs.DEXTERITY]: number;
  [AttributesSlugs.INTELLIGENCE]: number;
  [AttributesSlugs.CHARISMA]: number;
};

type PlayerContextType = {
  playerAttributes: PlayerAttributesType;
  setPlayerAttributes: (attributes: PlayerAttributesType) => void;
};

const PlayerContext = React.createContext<PlayerContextType>({
  playerAttributes: {
    strength: 0,
    dexterity: 0,
    charisma: 0,
    intelligence: 0,
  },
  setPlayerAttributes: (a) => {}
});

export const usePlayerContext = () => React.useContext(PlayerContext);
export default PlayerContext;
