import { Attribute } from "../enums/Attribute";

export interface IAttributes {
  [Attribute.Body]: number;
  [Attribute.Agility]: number;
  [Attribute.Reaction]: number;
  [Attribute.Strength]: number;
  [Attribute.Willpower]: number;
  [Attribute.Logic]: number;
  [Attribute.Intuition]: number;
  [Attribute.Charisma]: number;
  [Attribute.Edge]: number;
  [Attribute.Magic]: number;
}
