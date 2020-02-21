import { IAttributes } from './IAttributes';
import { ISkills } from './ISkills';

export interface ICharacter {
  attributes: IAttributes;
  skills: ISkills;
  karma: number;
  nuyen: number;
}
