import React from "react";

export type PlayerAttributesType = {
  strength: number;
  dexterity: number;
  charisma: number;
  intelligence: number;
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
