import { useState } from 'react';

import CardHero from '@/components/CardHero';
import { Button } from '@/components/ui/button';
import { QUERY_KEYS, useCustomQuery } from '@/query/index';
import { getAllForPage } from '@/services/heroes';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const { data: heroPage, isLoading } = useCustomQuery([QUERY_KEYS.HEROES, currentPage], () =>
    getAllForPage(currentPage, pageSize),
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
