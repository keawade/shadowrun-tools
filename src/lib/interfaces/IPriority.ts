import { Race } from '../enums/Race';

export interface IPriority {
  priority: 'A' | 'B' | 'C' | 'D' | 'E';
  resonanceType: {
    [Resonance in ResonanceType]?: number;
  };
  metatype: Race[];
  adjustmentPoints: number;
  attributes: number;
  skills: number;
  resources: number;
}

export type ResonanceType =
  | 'fullMagician'
  | 'aspectedMagician'
  | 'mysticAdept'
  | 'adept'
  | 'technomancer'
  | 'mundane';
