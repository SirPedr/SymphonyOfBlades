import React, { useState } from "react";
import PlayerContext, { PlayerAttributesType } from ".";

type PropsType = {
  children: React.ReactNode;
};

const PlayerContextProvider = ({ children }: PropsType) => {
  const [playerAttributes, setPlayerAttributes] = useState<
    PlayerAttributesType
  >({
    strength: 3,
    dexterity: 2,
    intelligence: 5,
    charisma: 1,
  });

  return (
    <PlayerContext.Provider value={{ playerAttributes, setPlayerAttributes }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
