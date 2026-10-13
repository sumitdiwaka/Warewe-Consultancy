import { useState } from 'react';
import PageShell from '../components/PageShell';
import DataTable from '../components/DataTable';

const categories = ['Deals Reports', 'Leads Reports', 'Units Reports', 'Contacts Reports', 'Hyderabad', 'Development Reports', 'Buildings Reports', 'Finance Reports', 'Attorney Firms Reports', 'Companies Reports', 'Activities Reports', 'Broker/Sales Agent Reports', 'Schedule Reports', 'Company Reports', 'Email Reports', 'Meeting Reports', 'Visit Reports'];

const data = [
  ['Lead by Source', 'Breaks down leads by source (e.g., Referral, Website, Walk-in).', ''],
  ['Lead Conversion Report', 'Tracks how many leads have been successfully converted into deals.', 'Leads Reports'],
  ['Leads by Status', 'Report showing all leads grouped by their current status.', 'Leads Reports'],
  ['Deal Status Summary', 'Overview of total deals categorized by current status.', 'Deals Reports'],
  ['Deals by Owner', 'Shows deals grouped by assigned sales agents or brokers.', 'Deals Reports'],
  ['Deals Closing This Month', 'List of deals expected to close in the current month.', 'Deals Reports'],
  ['Deal Value Trend (Monthly)', 'Monthly summary of total deal value.', 'Deals Reports'],
  ['Unit Sales Report', 'Units sold within selected timeframes, grouped by type or location.', 'Units Reports'],
  ['Unit Status Summary', 'Summary of unit statuses across all developments.', 'Units Reports'],
  ['Vacant Units Report', 'List of units that are currently unassigned or unsold.', 'Units Reports'],
  ['Assigned Matters by Firm', 'Number and types of legal cases handled by each attorney firm.', 'Attorney Firms Reports'],
  ['Company Deal Report', 'Shows companies associated with the most deals.', 'Company Reports'],
];

function Star() {
  const [on, setOn] = useState(false);
  return <button onClick={() => setOn(!on)} className={`text-[21px] ${on ? 'text-gold' : 'text-[#B5B8BE]'}`} aria-label="Favourite">★</button>;
}

export default function Reports() {
  return (
    <PageShell title="All Reports" sections={[{ title: 'Report Category', options: categories }]} createLabel="Create Reports" searchLabel="Search Report">
      <DataTable
        cols="2.2fr 4.2fr 1.8fr 1.1fr"
        headers={['Report Name', 'Description', 'Category', 'Last Run Date']}
        rowPad="py-[18.2px]"
        rows={data.map((d) => [
          <span className="flex items-center gap-3"><Star /><span className="text-[14px] font-semibold">{d[0]}</span></span>,
          d[1], d[2], '12 Jul 2025',
        ])}
      />
    </PageShell>
  );
}
