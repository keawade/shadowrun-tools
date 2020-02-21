import { IAttributes } from '../interfaces/IAttributes';
import { ISkills } from '../interfaces/ISkills';

export interface ICharacter {
  attributes: IAttributes;
  skills: ISkills;
  karma: number;
  nuyen: number;
}
