import { Attribute } from '../enums/Attribute';

export type IAttributes = {
  [A in Attribute]: number;
};
