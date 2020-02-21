import { IPriority } from '../interfaces/IPriority';
import { Race } from '../enums/Race';

export const priorities: [
  IPriority,
  IPriority,
  IPriority,
  IPriority,
  IPriority
] = [
  {
    priority: 'A',
    resonanceType: {
      fullMagician: 4,
      aspectedMagician: 5,
      mysticAdept: 4,
      adept: 4,
      technomancer: 4,
    },
    metatype: [Race.Dwarf, Race.Troll, Race.Ork],
    adjustmentPoints: 13,
    attributes: 24,
    skills: 32,
    resources: 450_000,
  },
  {
    priority: 'B',
    resonanceType: {
      fullMagician: 3,
      aspectedMagician: 4,
      mysticAdept: 3,
      adept: 3,
      technomancer: 3,
    },
    metatype: [Race.Dwarf, Race.Elf, Race.Troll, Race.Ork],
    adjustmentPoints: 11,
    attributes: 16,
    skills: 24,
    resources: 275_000,
  },
  {
    priority: 'C',
    resonanceType: {
      fullMagician: 2,
      aspectedMagician: 3,
      mysticAdept: 2,
      adept: 2,
      technomancer: 2,
    },
    metatype: [Race.Dwarf, Race.Elf, Race.Human, Race.Troll, Race.Ork],
    adjustmentPoints: 9,
    attributes: 12,
    skills: 20,
    resources: 150_000,
  },
  {
    priority: 'D',
    resonanceType: {
      fullMagician: 1,
      aspectedMagician: 2,
      mysticAdept: 1,
      adept: 1,
      technomancer: 1,
    },
    metatype: [Race.Dwarf, Race.Elf, Race.Human, Race.Troll, Race.Ork],
    adjustmentPoints: 4,
    attributes: 8,
    skills: 16,
    resources: 50_000,
  },
  {
    priority: 'E',
    resonanceType: {
      mundane: 0,
    },
    metatype: [Race.Dwarf, Race.Elf, Race.Human, Race.Troll, Race.Ork],
    adjustmentPoints: 1,
    attributes: 2,
    skills: 10,
    resources: 8_000,
  },
];
