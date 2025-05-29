import { Avatar } from '@radix-ui/react-avatar';
import React from 'react';

import { AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.tsx';
import { Progress } from '@/components/ui/progress.tsx';

export interface Hero {
  id: string;
  name: string;
  images: { lg?: string };
  biography: {
    alignment: string;
    fullName: string;
    firstAppearance: string;
    placeOfBirth: string;
    publisher: string;
    alterEgos: string;
    aliases: string[];
  };
  appearance: {
    gender: string;
    race?: string;
    height: [string, string];
    weight: [string, string];
    eyeColor: string;
    hairColor: string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
  powerstats: Record<string, number>;
}

interface HeroDialogProps {
  hero: Hero | null;
  onClose: () => void;
}

export const HeroDialog: React.FC<HeroDialogProps> = ({ hero, onClose }) => {
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
    <Dialog open={!!hero} onOpenChange={onClose}>
      <DialogContent
        className="
        bg-white p-10 max-w-4xl max-h-[90vh] overflow-y-auto
          scrollbar-thin 
          scrollbar-track-transparent 
          scrollbar-thumb-gray-400 
          hover:scrollbar-thumb-gray-500
      "
      >
        {hero && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{hero.name}</DialogTitle>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-6">
              {/* IZQUIERDA: Imagen y Badges */}
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Avatar className="h-[300px] w-full overflow-hidden transition-transform group-hover:scale-110">
                    <AvatarImage
                      src={hero.images.lg}
                      alt={hero.name}
                      className="h-full w-full object-cover"
                    />
                    <AvatarFallback className="text-white bg-muted-foreground">
                      {hero.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex gap-2">
                  <Badge
                    className={`${getAlignmentColor(hero.biography.alignment)} text-white border-0`}
                  >
                    {hero.biography.alignment.toUpperCase()}
                  </Badge>
                  <Badge variant="secondary">{hero.biography.publisher}</Badge>
                </div>
              </div>

              {/* DERECHA: Detalles */}
              <div className="space-y-6">
                {/* Biography */}
                <Section title="Biography">
                  <Field label="Full Name" value={hero.biography.fullName} />
                  <Field label="First Appearance" value={hero.biography.firstAppearance} />
                  <Field label="Place of Birth" value={hero.biography.placeOfBirth} />
                  <Field label="Publisher" value={hero.biography.publisher} />
                  {hero.biography.alterEgos !== 'No alter egos found' && (
                    <Field label="Alter Egos" value={hero.biography.alterEgos} />
                  )}
                </Section>

                {/* Aliases */}
                <Section title="Aliases">
                  <div className="flex flex-wrap gap-2">
                    {hero.biography.aliases.map((alias) => (
                      <Badge key={alias} variant="outline">
                        {alias}
                      </Badge>
                    ))}
                  </div>
                </Section>

                {/* Physical Appearance */}
                <Section title="Physical Appearance">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <Field label="Gender" value={hero.appearance.gender} />
                    <Field label="Race" value={hero.appearance.race || 'Unknown'} />
                    <Field label="Height" value={hero.appearance.height.join(' / ')} />
                    <Field label="Weight" value={hero.appearance.weight.join(' / ')} />
                    <Field label="Eye Color" value={hero.appearance.eyeColor} />
                    <Field label="Hair Color" value={hero.appearance.hairColor} />
                  </div>
                </Section>

                {/* Work & Base */}
                <Section title="Work & Base">
                  <Field label="Occupation" value={hero.work.occupation} />
                  <Field label="Base" value={hero.work.base} />
                </Section>

                {/* Connections */}
                <Section title="Connections">
                  <Field label="Group Affiliation" value={hero.connections.groupAffiliation} />
                  <Field label="Relatives" value={hero.connections.relatives} />
                </Section>
              </div>
            </div>

            {/* Power Statistics */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Power Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(hero.powerstats).map(([stat, value]) => (
                  <div key={stat} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="capitalize font-medium">{stat}</span>
                      <span className="text-muted-foreground">{value}/100</span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

// Componente auxiliar para secciones
interface SectionProps {
  title: string;
  children: React.ReactNode;
}
const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="space-y-3">
    <h3 className="text-lg font-semibold">{title}</h3>
    <div className="space-y-2 text-sm">{children}</div>
  </div>
);

// Componente auxiliar para un campo label + valor
interface FieldProps {
  label: string;
  value: React.ReactNode;
}
const Field: React.FC<FieldProps> = ({ label, value }) => (
  <div>
    <span className="font-semibold">{label}:</span> {value}
  </div>
);
