import { ReactNode } from 'react';

interface Props {
  cols: string; // CSS grid-template-columns
  headers: string[];
  rows: ReactNode[][];
  rowPad?: string;
  align?: 'center' | 'start';
}

export default function DataTable({ cols, headers, rows, rowPad = 'py-4', align = 'center' }: Props) {
  const style = { gridTemplateColumns: cols };
  const items = align === 'center' ? 'items-center' : 'items-start';
  return (
    <div>
      <div style={style} className="grid items-center bg-white rounded-lg px-3 py-3 text-[15.4px] font-semibold">
        {headers.map((h) => <span key={h}>{h}</span>)}
      </div>
      {rows.map((r, i) => (
        <div key={i} style={style} className={`grid ${items} px-3 ${rowPad} text-[14px] border-b border-[#E6E8EC]`}>
          {r.map((c, j) => <div key={j}>{c}</div>)}
        </div>
      ))}
    </div>
  );
}
