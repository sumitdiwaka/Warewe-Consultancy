import { ReactNode } from 'react';
import FilterSidebar, { FilterSection } from './FilterSidebar';
import Pagination from './Pagination';

interface Props {
  title: string;
  sections: FilterSection[];
  searchPlaceholder?: string;
  sidebarExtra?: ReactNode;
  createLabel?: string;
  searchLabel?: string;
  headerRight?: ReactNode;
  children: ReactNode;
}

const Search = ({ placeholder }: { placeholder: string }) => (
  <div className="flex items-center bg-[#EEF0F3] rounded h-[39.2px] w-[210px] px-2">
    <input className="bg-transparent outline-none text-[11.2px] w-full" placeholder={placeholder} />
    <svg width="16.8" height="16.8" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.4"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
  </div>
);

export default function PageShell({ title, sections, searchPlaceholder, sidebarExtra, createLabel, searchLabel, headerRight, children }: Props) {
  return (
    <div className="flex">
      <FilterSidebar searchPlaceholder={searchPlaceholder} sections={sections}>{sidebarExtra}</FilterSidebar>
      <main className="flex-1 px-5 pt-5 min-w-[0px]">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-[25.2px] font-semibold">{title}</h1>
          {headerRight}
        </div>
        {createLabel && (
          <div className="flex items-center justify-between pb-3 border-b border-[#E6E8EC] mb-3">
            <button className="btn-gold">+ {createLabel}</button>
            <div className="flex items-center gap-3">
              {searchLabel && <Search placeholder={searchLabel} />}
              <button className="bg-[#EEF0F3] rounded h-[39.2px] px-2 text-[12.6px] text-[#4B3F9E]">▦ ▾</button>
              <button className="bg-[#EEF0F3] rounded h-[39.2px] px-2 text-[12.6px]">Actions ▾</button>
            </div>
          </div>
        )}
        {children}
        <Pagination />
      </main>
    </div>
  );
}
