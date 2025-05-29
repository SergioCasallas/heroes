import { useState } from 'react';

// eslint-disable-next-line import/extensions
import CardHero from '@/components/CardHero';
// eslint-disable-next-line import/extensions
import { Button } from '@/components/ui/button';
import { QUERY_KEYS, useCustomQuery } from '@/query/index.ts';
import type { HeroPage } from '@/query/types.ts';
import { getAllForPage } from '@/services/heroes.ts';
import type { ApiError } from '@/types/error.ts';
// import type { HeroItem } from '@/types/heroe.tsx';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // const [pageData, setPageData] = useState<HeroPage>({
  //   length: 0,
  //   size: 10,
  //   page: 1,
  //   firstPage: 1,
  //   lastPage: 1,
  //   items: [],
  // });
  // const [loading, setLoading] = useState(false);

  const {
    data: heroPage,
    isLoading,
    // isError,
    // error,
  } = useCustomQuery<HeroPage, ApiError>(
    [QUERY_KEYS.HEROES, currentPage, pageSize],
    () => getAllForPage(currentPage, pageSize),
    {
      refetchOnWindowFocus: true,
    },
  );

  const totalPages = heroPage?.lastPage ?? 1;

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
        <CardHero heroes={heroPage?.items || []} />

        <div className="flex items-center justify-center space-x-2 mt-8">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1 || isLoading}
            className="cursor-pointer"
          >
            ← Back
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Button
              key={p}
              disabled={isLoading}
              variant={p === currentPage ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentPage(p)}
              className="w-10 h-10 cursor-pointer"
            >
              {p}
            </Button>
          ))}

          <Button
            className="cursor-pointer"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || isLoading}
          >
            Next →
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Home;
