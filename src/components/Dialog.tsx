import { Avatar } from '@radix-ui/react-avatar';
import React from 'react';

import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { QUERY_KEYS } from '@/query/constants';
import { useCustomQuery } from '@/query/index';
import { getOne } from '@/services/heroes';
import type { ApiError } from '@/types/error';
import type { HeroItem } from '@/types/heroe';

export interface HeroDialogProps {
  hero: HeroItem | null;
  onClose: () => void;
}

export const HeroDialog: React.FC<HeroDialogProps> = ({ hero, onClose }) => {
  const idToFetch = hero?.id;

  const isIdValid = typeof idToFetch === 'number' && !isNaN(idToFetch);

  const { data: heroDialog } = useCustomQuery<HeroItem, ApiError, HeroItem, [string, number]>(
    [QUERY_KEYS.HERO, idToFetch || 0],
    () => getOne(idToFetch || 0),
    {
      enabled: isIdValid,
      queryKey: [QUERY_KEYS.HERO, idToFetch || 0],
    },
  );

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
    <Dialog open={!!heroDialog} onOpenChange={onClose}>
      <DialogContent
        className="
        bg-white p-10 max-w-4xl max-h-[90vh] overflow-y-auto
          scrollbar-thin 
          scrollbar-track-transparent 
          scrollbar-thumb-gray-400 
          hover:scrollbar-thumb-gray-500
      "
      >
        {heroDialog && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{heroDialog?.name}</DialogTitle>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Avatar className="h-[300px] w-full overflow-hidden transition-transform group-hover:scale-110">
                    <AvatarImage
                      src={heroDialog?.images?.lg}
                      alt={heroDialog?.name || 'Hero'}
                      className="h-full w-full object-cover"
                    />
                    <AvatarFallback className="text-white bg-muted-foreground">
                      {heroDialog?.name?.charAt(0) || 'H'}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex gap-2">
                  <Badge
                    className={`${getAlignmentColor(heroDialog?.biography?.alignment)} text-white border-0`}
                  >
                    {heroDialog?.biography?.alignment?.toUpperCase()}
                  </Badge>
                  <Badge variant="secondary">{heroDialog?.biography?.publisher}</Badge>
                </div>
              </div>

              {/* DERECHA: Detalles */}
              <div className="space-y-6">
                {/* Biography */}
                <Section title="Biography">
                  <Field label="Full Name" value={heroDialog?.biography.fullName} />
                  <Field label="First Appearance" value={heroDialog?.biography.firstAppearance} />
                  <Field label="Place of Birth" value={heroDialog?.biography.placeOfBirth} />
                  <Field label="Publisher" value={heroDialog?.biography.publisher} />
                  {heroDialog?.biography.alterEgos !== 'No alter egos found' && (
                    <Field label="Alter Egos" value={heroDialog?.biography.alterEgos} />
                  )}
                </Section>

                {/* Aliases */}
                <Section title="Aliases">
                  <div className="flex flex-wrap gap-2">
                    {heroDialog?.biography.aliases.map((alias) => (
                      <Badge key={alias} variant="outline">
                        {alias}
                      </Badge>
                    ))}
                  </div>
                </Section>

                {/* Physical Appearance */}
                <Section title="Physical Appearance">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <Field label="Gender" value={heroDialog?.appearance.gender} />
                    <Field label="Race" value={heroDialog?.appearance.race || 'Unknown'} />
                    <Field label="Height" value={heroDialog?.appearance.height.join(' / ')} />
                    <Field label="Weight" value={heroDialog?.appearance.weight.join(' / ')} />
                    <Field label="Eye Color" value={heroDialog?.appearance.eyeColor} />
                    <Field label="Hair Color" value={heroDialog?.appearance.hairColor} />
                  </div>
                </Section>

                {/* Work & Base */}
                <Section title="Work & Base">
                  <Field label="Occupation" value={heroDialog?.work.occupation} />
                  <Field label="Base" value={heroDialog?.work.base} />
                </Section>

                {/* Connections */}
                <Section title="Connections">
                  <Field
                    label="Group Affiliation"
                    value={heroDialog?.connections.groupAffiliation}
                  />
                  <Field label="Relatives" value={heroDialog?.connections.relatives} />
                </Section>
              </div>
            </div>

            {/* Power Statistics */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Power Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(heroDialog?.powerstats).map(([stat, value]) => (
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
