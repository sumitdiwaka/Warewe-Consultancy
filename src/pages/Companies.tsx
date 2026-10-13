import PageShell from '../components/PageShell';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import Avatar from '../components/Avatar';

const sections = [
  { title: 'Company Type', options: ['Developer', 'Contractor', 'Brokerage Firm', 'Consultant', 'Legal Partner', 'Marketing Agency'] },
  { title: 'City', options: ['Bengaluru', 'Mumbai', 'Delhi', 'Pune', 'Hyderabad', 'Chennai', 'Ahmedabad'] },
  { title: 'Owner Name', options: ['Mohit Verma', 'Arjun Malhotra', 'Mohit Mehra', 'Shruti Reddy', 'Neha Desai'] },
  { title: 'Number of Projects', options: ['0-5', '6-10', '11-20', '21+'] },
];

const data = [
  ['Urban Build Group', 'Developer', 12, 'Bengaluru', 'Active', 'Mohit Verma'],
  ['SkyHigh Realtors', 'Brokerage Firm', 7, 'Mumbai', 'Active', 'Ravi Patel'],
  ['Blue Line Constructions', 'Contractor', 5, 'Pune', 'In Progress', 'Mohit Mehra'],
  ['Vision Infra Pvt Ltd', 'Developer', 9, 'Hyderabad', 'Active', 'Shruti Reddy'],
  ['Nest Edge Associates', 'Consultant', 3, 'Delhi', 'Inactive', 'Kunal Verma'],
  ['Prime Realty Solutions', 'Brokerage Firm', 6, 'Chennai', 'Active', 'Arjun Malhotra'],
  ['West Side Developers', 'Developer', 10, 'Ahmedabad', 'Active', 'Neha Desai'],
  ['SkyHigh Realtors', 'Brokerage Firm', 7, 'Bengaluru', 'Active', 'Mohit Verma'],
  ['SkyHigh Realtors', 'Brokerage Firm', 7, 'Bengaluru', 'Active', 'Mohit Verma'],
];

export default function Companies() {
  return (
    <PageShell title="All Companies" sections={sections} createLabel="Create Company" searchLabel="Search Company">
      <DataTable
        cols="2.3fr 1.4fr 1.3fr 1.2fr 1.3fr 1.4fr"
        headers={['Company Name', 'Type', 'No. of Projects', 'City', 'Status', 'Owner Name']}
        rowPad="py-[23.8px]"
        rows={data.map((d) => [
          <div className="flex items-center gap-2"><Avatar name={String(d[0])} size={36.4} /><span className="text-[15.4px] font-semibold">{d[0]}</span></div>,
          d[1], d[2], d[3], <StatusBadge status={d[4] as string} />, d[5],
        ])}
      />
    </PageShell>
  );
}
