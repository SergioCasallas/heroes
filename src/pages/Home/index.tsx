// eslint-disable-next-line import/extensions
import CardHero from '@/components/CardHero';
import type { HeroItem } from '@/types/heroe.tsx';

const heroes: HeroItem[] = [
  {
    id: 1,
    name: 'Captain Example',
    slug: 'captain-example',
    biography: {
      firstAppearance: 'Example Comics #1 (January 2020)',
      placeOfBirth: 'Example City',
      aliases: ['The Demo Defender', 'Sample Soldier'],
      fullName: 'Exemplar E. Sample',
      publisher: 'Example Publishing',
      alterEgos: 'No alter egos',
      alignment: 'good',
    },
    appearance: {
      weight: ['85 kg', '187 lbs'],
      height: ['1.85 m', '6\'1"'],
      eyeColor: 'Blue',
      hairColor: 'Black',
      gender: 'Male',
      race: null,
    },
    work: {
      occupation: 'Adventurer',
      base: 'Example Tower, Example City',
    },
    connections: {
      groupAffiliation: 'Example League of Heroes',
      relatives: 'None',
    },
    images: {
      xs: 'https://fastly.picsum.photos/id/288/200/300.jpg?hmac=45WLionXnoogi0-njKuSNnVY5hnswMhf-CrxwzKTcrc',
      sm: 'https://fastly.picsum.photos/id/288/200/300.jpg?hmac=45WLionXnoogi0-njKuSNnVY5hnswMhf-CrxwzKTcrc',
      md: 'https://fastly.picsum.photos/id/288/200/300.jpg?hmac=45WLionXnoogi0-njKuSNnVY5hnswMhf-CrxwzKTcrc',
      lg: 'https://fastly.picsum.photos/id/288/200/300.jpg?hmac=45WLionXnoogi0-njKuSNnVY5hnswMhf-CrxwzKTcrc',
    },
    powerstats: {
      intelligence: 85,
      strength: 75,
      speed: 65,
      durability: 80,
      power: 90,
      combat: 70,
    },
  },
  {
    id: 2,
    name: 'Midnight Shadow',
    slug: 'midnight-shadow',
    biography: {
      firstAppearance: 'Nightfall #12 (October 2018)',
      placeOfBirth: 'Darkwood Forest',
      aliases: ['The Silent Watcher'],
      fullName: 'Selene Noctis',
      publisher: 'Moonlight Press',
      alterEgos: 'No alter egos',
      alignment: 'neutral',
    },
    appearance: {
      weight: ['60 kg', '132 lbs'],
      height: ['1.70 m', '5\'7"'],
      eyeColor: 'Grey',
      hairColor: 'White',
      gender: 'Female',
      race: 'Elf',
    },
    work: {
      occupation: 'Guardian of the Forest',
      base: 'Shadow Grove',
    },
    connections: {
      groupAffiliation: 'Forest Alliance',
      relatives: 'Brother: Dusk Ranger',
    },
    images: {
      xs: 'https://example.com/images/midnight-shadow-xs.jpg',
      sm: 'https://example.com/images/midnight-shadow-sm.jpg',
      md: 'https://example.com/images/midnight-shadow-md.jpg',
      lg: 'https://example.com/images/midnight-shadow-lg.jpg',
    },
    powerstats: {
      intelligence: 90,
      strength: 50,
      speed: 80,
      durability: 60,
      power: 85,
      combat: 75,
    },
  },
  {
    id: 3,
    name: 'Thunderbolt',
    slug: 'thunderbolt',
    biography: {
      firstAppearance: 'Stormwatch #5 (March 2015)',
      placeOfBirth: 'Electra City',
      aliases: ['Bolt'],
      fullName: 'Thomas Volt',
      publisher: 'Spark Comics',
      alterEgos: 'Volt Man',
      alignment: 'good',
    },
    appearance: {
      weight: ['78 kg', '172 lbs'],
      height: ['1.82 m', '6\'0"'],
      eyeColor: 'Green',
      hairColor: 'Blonde',
      gender: 'Male',
      race: null,
    },
    work: {
      occupation: 'Superhero',
      base: 'Electra Tower',
    },
    connections: {
      groupAffiliation: 'Heroes United',
      relatives: 'Sister: Sparkette',
    },
    images: {
      xs: 'https://example.com/images/thunderbolt-xs.jpg',
      sm: 'https://example.com/images/thunderbolt-sm.jpg',
      md: 'https://example.com/images/thunderbolt-md.jpg',
      lg: 'https://example.com/images/thunderbolt-lg.jpg',
    },
    powerstats: {
      intelligence: 70,
      strength: 80,
      speed: 95,
      durability: 75,
      power: 88,
      combat: 65,
    },
  },
  {
    id: 4,
    name: 'Iron Sentinel',
    slug: 'iron-sentinel',
    biography: {
      firstAppearance: 'Metal Warriors #1 (June 2010)',
      placeOfBirth: 'Steel City',
      aliases: ['The Armored Guardian'],
      fullName: 'Aegis Prime',
      publisher: 'Forge Comics',
      alterEgos: 'Aegis Mark I',
      alignment: 'good',
    },
    appearance: {
      weight: ['300 kg', '660 lbs'],
      height: ['2.10 m', '6\'10"'],
      eyeColor: 'Red (optical sensors)',
      hairColor: 'None',
      gender: 'Robot',
      race: null,
    },
    work: {
      occupation: 'Defense Unit',
      base: 'Forge Citadel',
    },
    connections: {
      groupAffiliation: 'Metal Legion',
      relatives: 'None',
    },
    images: {
      xs: 'https://example.com/images/iron-sentinel-xs.jpg',
      sm: 'https://example.com/images/iron-sentinel-sm.jpg',
      md: 'https://example.com/images/iron-sentinel-md.jpg',
      lg: 'https://example.com/images/iron-sentinel-lg.jpg',
    },
    powerstats: {
      intelligence: 60,
      strength: 95,
      speed: 40,
      durability: 100,
      power: 70,
      combat: 85,
    },
  },
  {
    id: 5,
    name: 'Mistress Mirage',
    slug: 'mistress-mirage',
    biography: {
      firstAppearance: 'Illusionists #3 (September 2012)',
      placeOfBirth: 'Mirage Island',
      aliases: ['Queen of Illusions', 'The Mist'],
      fullName: 'Miranda Veil',
      publisher: 'Dreamscape Comics',
      alterEgos: 'No alter egos',
      alignment: 'neutral',
    },
    appearance: {
      weight: ['58 kg', '128 lbs'],
      height: ['1.68 m', '5\'6"'],
      eyeColor: 'Violet',
      hairColor: 'Silver',
      gender: 'Female',
      race: null,
    },
    work: {
      occupation: 'Illusionist',
      base: 'Mirage Manor',
    },
    connections: {
      groupAffiliation: 'Circle of Illusion',
      relatives: 'Brother: Phantom Dancer',
    },
    images: {
      xs: 'https://example.com/images/mistress-mirage-xs.jpg',
      sm: 'https://example.com/images/mistress-mirage-sm.jpg',
      md: 'https://example.com/images/mistress-mirage-md.jpg',
      lg: 'https://example.com/images/mistress-mirage-lg.jpg',
    },
    powerstats: {
      intelligence: 95,
      strength: 40,
      speed: 70,
      durability: 55,
      power: 92,
      combat: 60,
    },
  },
];

const Home = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Team</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Heroes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The talented individuals who make our mission possible. Each bringing unique expertise
              and passion to drive innovation.
            </p>
          </div>
        </div>
        <CardHero heroes={heroes} />
      </div>
    </section>
  );
};
export default Home;
