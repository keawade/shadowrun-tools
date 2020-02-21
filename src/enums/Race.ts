import { Attribute } from "./Attribute";
import { IAttributes } from "../interfaces/IAttributes";
import { Vision } from "./Vision";

export enum Race {
  Dwarf = "dwarf",
  Elf = "elf",
  Human = "human",
  Ork = "ork",
  Troll = "troll",
}

type IBaseRace = {
  [R in Race]: {
    attributes: IAttributes;
    vision: Vision[];
    qualities: string[];
  };
};

export const baseRace: IBaseRace = {
  [Race.Human]: {
    attributes: {
      [Attribute.Body]: 6,
      [Attribute.Agility]: 6,
      [Attribute.Reaction]: 6,
      [Attribute.Strength]: 6,
      [Attribute.Willpower]: 6,
      [Attribute.Logic]: 6,
      [Attribute.Intuition]: 6,
      [Attribute.Charisma]: 6,
      [Attribute.Edge]: 7,
      [Attribute.Magic]: 6,
    },
    vision: [],
    qualities: [],
  },
  [Race.Dwarf]: {
    attributes: {
      [Attribute.Body]: 7,
      [Attribute.Agility]: 6,
      [Attribute.Reaction]: 5,
      [Attribute.Strength]: 8,
      [Attribute.Willpower]: 7,
      [Attribute.Logic]: 6,
      [Attribute.Intuition]: 6,
      [Attribute.Charisma]: 6,
      [Attribute.Edge]: 6,
      [Attribute.Magic]: 6,
    },
    vision: [Vision.Thermographic],
    qualities: [],
  },
  [Race.Elf]: {
    attributes: {
      [Attribute.Body]: 6,
      [Attribute.Agility]: 7,
      [Attribute.Reaction]: 6,
      [Attribute.Strength]: 6,
      [Attribute.Willpower]: 6,
      [Attribute.Logic]: 6,
      [Attribute.Intuition]: 6,
      [Attribute.Charisma]: 8,
      [Attribute.Edge]: 6,
      [Attribute.Magic]: 6,
    },
    vision: [Vision.LowLight],
    qualities: [],
  },
  [Race.Ork]: {
    attributes: {
      [Attribute.Body]: 8,
      [Attribute.Agility]: 6,
      [Attribute.Reaction]: 6,
      [Attribute.Strength]: 8,
      [Attribute.Willpower]: 6,
      [Attribute.Logic]: 6,
      [Attribute.Intuition]: 6,
      [Attribute.Charisma]: 5,
      [Attribute.Edge]: 6,
      [Attribute.Magic]: 6,
    },
    vision: [Vision.LowLight],
    qualities: [],
  },
  [Race.Troll]: {
    attributes: {
      [Attribute.Body]: 9,
      [Attribute.Agility]: 5,
      [Attribute.Reaction]: 6,
      [Attribute.Strength]: 9,
      [Attribute.Willpower]: 6,
      [Attribute.Logic]: 6,
      [Attribute.Intuition]: 6,
      [Attribute.Charisma]: 5,
      [Attribute.Edge]: 6,
      [Attribute.Magic]: 6,
    },
    vision: [Vision.Thermographic],
    qualities: [],
  },
};
