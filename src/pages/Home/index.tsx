import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

// eslint-disable-next-line import/extensions
import CardHero from '@/components/CardHero';
// eslint-disable-next-line import/extensions
import { Button } from '@/components/ui/button';
import type { HeroItem } from '@/types/heroe.tsx';

interface HeroPage {
  length: number;
  size: number;
  page: number;
  firstPage: number;
  lastPage: number;
  items: HeroItem[];
}

const Home = () => {
  const [pageData, setPageData] = useState<HeroPage>({
    length: 0,
    size: 10,
    page: 1,
    firstPage: 1,
    lastPage: 1,
    items: [],
  });
  const [loading, setLoading] = useState(false);

  const fetchPage = async (page: number, size = 10) => {
    setLoading(true);
    const res = await fetch(
      `https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes?size=${size}&page=${page}`,
    );
    const data: HeroPage = await res.json();
    setPageData(data);
    setLoading(false);
  };

  // carga inicial
  useEffect(() => {
    fetchPage(1);
  }, []);

  const { page, lastPage, items } = pageData;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Heroes</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Heroes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The talented individuals who make our mission possible. Each bringing unique expertise
              and passion to drive innovation.
            </p>
          </div>
        </div>
        <CardHero heroes={items} />

        <div className="flex items-center justify-center space-x-2 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => fetchPage(page - 1)}
            disabled={page === 1 || loading}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>

          {Array.from({ length: lastPage }, (_, i) => i + 1).map((p) => (
            <Button
              key={p}
              disabled={loading}
              variant={p === page ? 'default' : 'outline'}
              size="sm"
              onClick={() => fetchPage(p)}
              className="w-10 h-10"
            >
              {p}
            </Button>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={() => fetchPage(page + 1)}
            disabled={page === lastPage || loading}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Home;
