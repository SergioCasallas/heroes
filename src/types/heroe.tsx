interface Biography {
  firstAppearance: string;
  placeOfBirth: string;
  aliases: string[];
  fullName: string;
  publisher: string;
  alterEgos: string;
  alignment: 'good' | 'bad' | 'neutral';
}

interface Work {
  occupation: string;
  base: string;
}

interface Images {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

interface Appearance {
  weight: [string, string];
  height: [string, string];
  eyeColor: string;
  hairColor: string;
  gender: string;
  race: string | null;
}

interface Connections {
  groupAffiliation: string;
  relatives: string;
}

interface Powerstats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export interface HeroItem {
  id: number;
  name: string;
  slug: string;
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
  images: Images;
  powerstats: Powerstats;
}
