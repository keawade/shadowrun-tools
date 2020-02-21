import { IAttributes } from 'lib/interfaces/IAttributes';
import { ISkills } from 'lib/interfaces/ISkills';

export interface ICharacter {
  attributes: IAttributes;
  skills: ISkills;
  karma: number;
  nuyen: number;
}
