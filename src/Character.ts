import { Attribute } from "./enums/Attribute";
import { Skill } from "./enums/Skill";

export interface ICharacter {
  attributes: {
    [Attribute.Body]: number;
    [Attribute.Agility]: number;
    [Attribute.Reaction]: number;
    [Attribute.Strength]: number;
    [Attribute.Willpower]: number;
    [Attribute.Logic]: number;
    [Attribute.Intuition]: number;
    [Attribute.Charisma]: number;
    [Attribute.Edge]: number;
    [Attribute.Magic]: number;
  };
  skills: {
    [Skill.Astral]: number;
    [Skill.Athletics]: number;
    [Skill.Biotech]: number;
    [Skill.CloseCombat]: number;
    [Skill.Con]: number;
    [Skill.Conjuring]: number;
    [Skill.Cracking]: number;
    [Skill.Electronics]: number;
    [Skill.Enchanting]: number;
    [Skill.Engineering]: number;
    [Skill.ExoticWeapons]: number;
    [Skill.Firearms]: number;
    [Skill.Influence]: number;
    [Skill.Outdoors]: number;
    [Skill.Perception]: number;
    [Skill.Piloting]: number;
    [Skill.Sorcery]: number;
    [Skill.Stealth]: number;
    [Skill.Tasking]: number;
  };
  karma: number;
  nuyen: number;
}
