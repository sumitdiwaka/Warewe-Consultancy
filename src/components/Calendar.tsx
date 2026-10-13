const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const startOffset = 2; // July 2025 starts on a Tuesday
const total = 31;
const underline: Record<number, string> = { 10: '#1FD3B0', 11: '#F5D000', 14: '#F17AA0' };

export default function Calendar() {
  const cells: (number | null)[] = [
    ...Array<null>(startOffset).fill(null),
    ...Array.from({ length: total }, (_, i) => i + 1),
  ];
  while (cells.length % 7) cells.push(null);
  const weeks = Array.from({ length: cells.length / 7 }, (_, w) => cells.slice(w * 7, w * 7 + 7));

  return (
    <div>
      <div className="flex h-[40px] items-center justify-between">
        <h3 className="text-[28px] font-normal leading-[34px] text-[#2C2C2C]">July 2025</h3>
        <div className="flex gap-[40px] pr-[6px] text-[24px] font-bold leading-none text-black">
          <button aria-label="Previous month">‹</button>
          <button aria-label="Next month">›</button>
        </div>
      </div>
      <div className="-mx-[16px] mt-[34px] px-[5.6px]">
        <div className="flex h-[16px] justify-between text-[13px] text-[#2C2C2C]">
          {days.map((d, i) => <span key={i} className="flex w-[24px] justify-center">{d}</span>)}
        </div>
        <div className="mt-[6px]">
          {weeks.map((w, wi) => (
            <div key={wi} className="flex h-[27.4px] items-center justify-between">
              {w.map((d, i) => (
                <span key={i} className="flex w-[24px] justify-center">
                  {d && (
                    <span className={`relative inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-[4px] px-[2px] text-[13px] text-[#2C2C2C] ${d === 8 ? 'bg-gold' : ''}`}>
                      {d}
                      {underline[d] && (
                        <i className="absolute -bottom-[4px] left-1/2 h-[2px] w-[14px] -translate-x-1/2 rounded-full" style={{ background: underline[d] }} />
                      )}
                    </span>
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}