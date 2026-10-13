import PageShell from '../components/PageShell';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';

const sections = [
  { title: 'Deal Owner', options: ['Jessica Chen', 'Arjun Rao', 'Priya Nair', 'Sunil Mehta'] },
  { title: 'Status', options: ['Open', 'In Progress', 'Closed Won', 'Closed Lost', 'On Hold'] },
  { title: 'Developments', options: ['Sunrise Enclave', 'Palm Greens', 'Orion Tech Square', 'Orchid Heights', 'Lotus Crest'] },
  { title: 'Unit Name', options: ['A-101 (3 BHK)', 'B2-205 (2 BHK)', 'PH-01 (Penthouse)', 'T1-504 (Commercial)'] },
];

const data = [
  ['Sunrise Villa Sale', 'Jessica Chen', 'Sunrise Enclave', 'Unit A-101 (3 BHK)', 'Closed Won', '₹1.45Cr'],
  ['Lotus Crest B2 Booking', 'Arjun Rao', 'Lotus Crest', 'Unit B2-205 (2 BHK)', 'In Progress', '₹98L'],
  ['Orchid Heights Lease', 'Priya Nair', 'Orchid Heights', 'Unit A-307', 'Closed Lost', '₹1.95Cr'],
  ['Orion Tech Park Deal', 'Sunil Mehta', 'Orion Tech Square', 'Unit T1-504', 'Open', '₹2.20Cr'],
  ['Palm Greens Penthouse Sale', 'Jessica Chen', 'Palm Greens', 'Unit PH-01', 'Closed Lost', '₹2.00Cr'],
  ['Sunrise Enclave- Duplex', 'Arjun Rao', 'Sunrise Enclave', 'Unit D-208', 'Closed Won', '₹1.85Cr'],
  ['Lotus Crest A3 Sale', 'Priya Nair', 'Lotus Crest', 'Unit A3-109', 'Closed Won', '₹1.10Cr'],
  ['Orchid Heights Corner Flat', 'Sunil Mehta', 'Orchid Heights', 'Unit C-312', 'Closed Won', '₹1.25Cr'],
  ['Sunrise Villa Sale', 'Jessica Chen', 'Sunrise Enclave', 'Unit A-101 (3 BHK)', 'Closed Won', '₹1.45Cr'],
  ['Sunrise Villa Sale', 'Jessica Chen', 'Sunrise Enclave', 'Unit A-101 (3 BHK)', 'Closed Lost', '₹1.45Cr'],
];

const Slider = () => (
  <div className="mb-3">
    <h3 className="text-[21px] font-medium mb-3">Deal Value</h3>
    <div className="relative h-[2.8px] bg-[#C9CCD2] mx-1">
      <span className="absolute -left-1 -top-[5.6px] w-[14px] h-[14px] rounded-full bg-black" />
      <span className="absolute -right-1 -top-[5.6px] w-[14px] h-[14px] rounded-full bg-black" />
    </div>
    <div className="flex justify-between text-[9.8px] mt-2"><span>Min.<br /><b>₹50L</b></span><span className="text-right">Max.<br /><b>₹3Cr</b></span></div>
  </div>
);

export default function Deals() {
  return (
    <PageShell title="All Deals" sections={sections} sidebarExtra={<Slider />} createLabel="Create Deals" searchLabel="Search Deal">
      <DataTable
        cols="2.2fr 1.4fr 1.5fr 1.3fr 1.4fr 1fr"
        headers={['Deal Name', 'Deal Owner', 'Development', 'Unit', 'Status', 'Deal Value']}
        rowPad="py-[18.2px]"
        rows={data.map((d) => [
          <span className="text-[15.4px] font-semibold">{d[0]}</span>, d[1], d[2], d[3], <StatusBadge status={d[4]} />, d[5],
        ])}
      />
    </PageShell>
  );
}
