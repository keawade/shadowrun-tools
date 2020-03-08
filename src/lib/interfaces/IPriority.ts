import { Race } from '../enums/Race';

export interface IPriority {
  priority: 'A' | 'B' | 'C' | 'D' | 'E';
  magic: IMagic;
  metatype: Race[];
  adjustmentPoints: number;
  attributes: number;
  skills: number;
  resources: number;
}

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
