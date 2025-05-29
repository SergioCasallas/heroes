import { Separator } from '@radix-ui/react-context-menu';
import { Progress } from '@radix-ui/react-progress';
import { useState } from 'react';

import { Badge } from './ui/badge.tsx';
import { Card, CardContent, CardHeader } from './ui/card.tsx';
import { HeroDialog } from './Dialog.tsx';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import type { HeroItem } from '@/types/heroe.tsx';

interface CardHeroProps {
  heroes: HeroItem[];
}

const CardHero = ({ heroes }: CardHeroProps) => {
  const [selectedHero, setSelectedHero] = useState<HeroItem | null>(null);

  const getAlignmentColor = (alignment: string) => {
    switch (alignment) {
      case 'good':
        return 'bg-green-500';
      case 'bad':
        return 'bg-red-500';
      case 'neutral':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };
  return (
    <div className="mx-auto grid max-w-7xl items-start gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
      {heroes.map((hero) => (
        <Card
          key={hero.id}
          className="group overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02] bg-card/50 backdrop-blur"
          onClick={() => setSelectedHero(hero)}
        >
          <CardHeader className="p-0">
            <div className="relative">
              <Avatar className="h-[300px] w-full overflow-hidden transition-transform group-hover:scale-110">
                <AvatarImage
                  src={hero.images.md}
                  alt={hero.name}
                  className="h-full w-full object-cover"
                />
                <AvatarFallback className="text-white bg-muted-foreground">
                  {hero.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="absolute top-4 right-4">
                <Badge
                  className={`${getAlignmentColor(hero.biography.alignment)} text-white border-0`}
                >
                  {hero.biography.alignment.toUpperCase()}
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4">
                <Badge variant="secondary" className="bg-black/70 text-white border-0">
                  {hero.biography.publisher}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{hero.name}</h3>
              <p className="text-sm text-muted-foreground font-medium">{hero.biography.fullName}</p>
              <p className="text-xs text-muted-foreground">
                First appeared: {hero.biography.firstAppearance}
              </p>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Power Stats</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {Object.entries(hero.powerstats).map(([stat, value]) => (
                  <div key={stat} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="capitalize font-medium">{stat}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                    <Progress value={value} className="h-1.5" />
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Details</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Occupation:</span>
                  <span className="text-right">{hero.work.occupation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base:</span>
                  <span className="text-right">{hero.work.base}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Height:</span>
                  <span className="text-right">{hero.appearance.height[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Race:</span>
                  <span className="text-right">{hero.appearance.race || 'Unknown'}</span>
                </div>
              </div>
            </div>

            {hero.biography.aliases.length > 0 && (
              <>
                <Separator />
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Aliases</h4>
                  <div className="flex flex-wrap gap-1">
                    {hero.biography.aliases.slice(0, 3).map((alias) => (
                      <Badge key={alias} variant="outline" className="text-xs">
                        {alias}
                      </Badge>
                    ))}
                    {hero.biography.aliases.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{hero.biography.aliases.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      ))}
      <HeroDialog hero={selectedHero} onClose={() => setSelectedHero(null)} />
    </div>
  );
};

export default CardHero;
