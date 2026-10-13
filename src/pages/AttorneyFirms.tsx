import PageShell from '../components/PageShell';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';

const sections = [
  { title: 'City', options: ['Bengaluru', 'Mumbai', 'Delhi', 'Pune', 'Hyderabad', 'Chennai', 'Ahmedabad'] },
  { title: 'Status', options: ['Active', 'Inactive'] },
  { title: 'Assigned Developments', options: ['Sunrise Enclave', 'Green Meadows', 'Orchid Grove', 'Vista Heights', 'Other'] },
  { title: 'Type of Service', options: ['Property Registration', 'Legal Verification', 'Title Due Diligence', 'Agreement Drafting', 'RERA Consultation'] },
  { title: 'No. of Clients Handled', options: ['0-5', '6-10', '11-20', '21+'] },
];

const data = [
  ['Lex & Co. Legal Partners', 'contact@lexcolegal.com', '+91 99888 11223', 'Bengaluru', 'Active'],
  ['Juris Edge Associates', 'info@jurisedge.in', '+91 93412 44456', 'Mumbai', 'Active'],
  ['Civic Law Chambers', 'support@civiclawchambers.com', '+91 93412 44456', 'Delhi', 'Inactive'],
  ['Trust Legal Advisory', 'contact@trustlegaladvisory.com', '+91 93412 44456', 'Pune', 'Active'],
  ['Prime Advocates LLP', 'hello@primeadvocates.in', '+91 93412 44456', 'Hyderabad', 'Inactive'],
  ['Metro Law Group', 'office@metrolawgroup.com', '+91 93412 44456', 'Chennai', 'Active'],
  ['Estate Law Solutions', 'estate@lawsolutions.in', '+91 93412 44456', 'Ahmedabad', 'Active'],
  ['Lex & Co. Legal Partners', 'contact@lexcolegal.com', '+91 99888 11223', 'Bengaluru', 'Active'],
  ['Juris Edge Associates', 'info@jurisedge.in', '+91 93412 44456', 'Mumbai', 'Active'],
  ['Prime Advocates LLP', 'hello@primeadvocates.in', '+91 93412 44456', 'Hyderabad', 'Inactive'],
];

export default function AttorneyFirms() {
  return (
    <PageShell title="Attorney Firm" sections={sections} createLabel="Create Attorney Firm" searchLabel="Search Attorney Firm">
      <DataTable
        cols="2.2fr 2.2fr 1.5fr 1.2fr 1fr"
        headers={['Firm Name', 'Email', 'Phone No.', 'City', 'Status']}
        rowPad="py-[23.8px]"
        rows={data.map((d) => [<span className="text-[15.4px] font-semibold">{d[0]}</span>, d[1], d[2], d[3], <StatusBadge status={d[4]} />])}
      />
    </PageShell>
  );
}
