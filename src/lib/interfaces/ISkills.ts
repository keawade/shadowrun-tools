import { Skill } from '../enums/Skill';

export type ISkills = {
  [S in Skill]: number;
};
