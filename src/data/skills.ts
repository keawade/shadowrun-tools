import { Skill } from '../enums/Skill';
import { Attribute } from '../enums/Attribute';

type IBaseSkills = {
  [S in Skill]: {
    untrained: boolean;
    attribute: Attribute;
  };
};

export const skills: IBaseSkills = {
  [Skill.Astral]: {
    untrained: false,
    attribute: Attribute.Intuition,
  },
  [Skill.Athletics]: {
    untrained: true,
    attribute: Attribute.Agility,
  },
  [Skill.Biotech]: {
    untrained: false,
    attribute: Attribute.Logic,
  },
  [Skill.CloseCombat]: {
    untrained: true,
    attribute: Attribute.Agility,
  },
  [Skill.Con]: {
    untrained: true,
    attribute: Attribute.Charisma,
  },
  [Skill.Conjuring]: {
    untrained: false,
    attribute: Attribute.Magic,
  },
  [Skill.Cracking]: {
    untrained: false,
    attribute: Attribute.Logic,
  },
  [Skill.Electronics]: {
    untrained: true,
    attribute: Attribute.Logic,
  },
  [Skill.Enchanting]: {
    untrained: false,
    attribute: Attribute.Magic,
  },
  [Skill.Engineering]: {
    untrained: true,
    attribute: Attribute.Logic,
  },
  [Skill.ExoticWeapons]: {
    untrained: false,
    attribute: Attribute.Agility,
  },
  [Skill.Firearms]: {
    untrained: false,
    attribute: Attribute.Agility,
  },
  [Skill.Influence]: {
    untrained: true,
    attribute: Attribute.Charisma,
  },
  [Skill.Outdoors]: {
    untrained: true,
    attribute: Attribute.Intuition,
  },
  [Skill.Perception]: {
    untrained: true,
    attribute: Attribute.Intuition,
  },
  [Skill.Piloting]: {
    untrained: true,
    attribute: Attribute.Reaction,
  },
  [Skill.Sorcery]: {
    untrained: false,
    attribute: Attribute.Magic,
  },
  [Skill.Stealth]: {
    untrained: true,
    attribute: Attribute.Agility,
  },
  [Skill.Tasking]: {
    untrained: false,
    attribute: Attribute.Magic,
  },
};
