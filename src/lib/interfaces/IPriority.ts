import { Race } from '../enums/Race';

export interface IPriority {
  priority: 'A' | 'B' | 'C' | 'D' | 'E';
  magic: IMagic;
  metatype: PriorityMetatype;
  adjustmentPoints: PriorityMetatypeAdjustmentPoints;
  attributes: number;
  skills: number;
  resources: number;
}

export type PriorityMetatype = Race[];
export type PriorityMetatypeAdjustmentPoints = number;

export type IMagic = {
  [M in MagicTypes]?: number;
};

export type MagicTypes =
  | 'fullMagician'
  | 'aspectedMagician'
  | 'mysticAdept'
  | 'adept'
  | 'technomancer'
  | 'mundane';
