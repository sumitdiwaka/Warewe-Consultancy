import { ReactNode } from 'react';

export interface FilterSection { title: string; options: string[] }

interface Props { searchPlaceholder?: string; sections: FilterSection[]; children?: ReactNode }

export default function FilterSidebar({ searchPlaceholder, sections, children }: Props) {
  return (
    <aside className="w-[289px] shrink-0 bg-white min-h-[calc(100vh-65px)] px-3 pt-5 pb-6 flex flex-col">
      <h2 className="text-center text-[25.2px] font-semibold mb-3">Filters</h2>
      {searchPlaceholder && (
        <div className="flex items-center bg-[#EEF0F3] rounded-md h-[39.2px] px-2 mb-4">
          <input className="bg-transparent outline-none text-[12.6px] w-full" placeholder={searchPlaceholder} />
          <svg width="15.4" height="15.4" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.4"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
        </div>
      )}
      {sections.map((s) => (
        <div key={s.title} className="mb-3">
          <h3 className="text-[21px] font-medium mb-1.5">{s.title}</h3>
          <ul className="space-y-1.5">
            {s.options.map((o) => (
              <li key={o}>
                <label className="flex items-center gap-1.5 text-[14px] text-ink cursor-pointer">
                  <input type="checkbox" className="w-[16.8px] h-[16.8px]" />
                  {o}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {children}
      <div className="mt-auto pt-3 space-y-2">
        <button className="w-full bg-gold text-white text-[15.4px] font-medium rounded-full py-1.5">Apply Filters</button>
        <button className="w-full bg-white border border-gold text-ink text-[15.4px] rounded-full py-1.5">Reset Filters</button>
      </div>
    </aside>
  );
}
