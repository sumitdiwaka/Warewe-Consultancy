import { useState } from 'react';

export default function Pagination({ pages = 3 }: { pages?: number }) {
  const [page, setPage] = useState(1);
  return (
    <div className="flex items-center justify-center gap-2 text-[18.2px] py-8">
      <button className="text-muted" onClick={() => setPage((p) => Math.max(1, p - 1))}>‹ Prev</button>
      <span className="text-muted">|</span>
      {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
        <span key={n} className="flex items-center gap-2">
          <button
            onClick={() => setPage(n)}
            className={`min-w-[30.8px] h-[30.8px] rounded-full text-[16.8px] ${n === page ? 'bg-gold-mid font-semibold' : ''}`}
          >
            {n}
          </button>
          <span className="text-muted">|</span>
        </span>
      ))}
      <button onClick={() => setPage((p) => Math.min(pages, p + 1))}>Next ›</button>
    </div>
  );
}
