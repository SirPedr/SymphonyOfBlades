import { atom } from "recoil";
import { PlayerAttributesType } from "../types/player";

export const playerAttributesAtom = atom<PlayerAttributesType>({
  key: "player-attributes",
  default: { strength: 0, dexterity: 0, charisma: 0, intelligence: 0 },
});
