import { Race } from '../enums/Race';

export interface IPriority {
  priority: 'A' | 'B' | 'C' | 'D' | 'E';
  resonanceType: {
    fullMagician?: number;
    aspectedMagician?: number;
    mysticAdept?: number;
    adept?: number;
    technomancer?: number;
    mundane?: number;
  };
  metatype: Race[];
  adjustmentPoints: number;
  attributes: number;
  skills: number;
  resources: number;
}
