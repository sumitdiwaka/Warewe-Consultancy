import PageShell from '../components/PageShell';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import Thumb from '../components/Thumb';
import propertyPhotos from '../assets/propertyPhotos';

const sections = [
  { title: 'Development', options: ['Sunrise Enclave', 'Green Heights', 'Ocean Pearl', 'Eden Greens'] },
  { title: 'Building', options: ['Aster Tower', 'Orchid Heights', 'Lotus Crest'] },
  { title: 'Status', options: ['Active', 'Sold', 'Booked', 'Under Construction', 'Ready to Move'] },
  { title: 'Unit Type', options: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', 'Penthouse', 'Studio'] },
  { title: 'Area Range (sqft)', options: ['0-1000', '1001-1500', '1501-2000', '2001-2500', '2500+'] },
  { title: 'Price Range', options: ['< ₹50L', '₹50L – ₹1Cr', '₹1Cr – ₹2Cr', '₹2Cr – ₹3Cr', '₹3Cr+'] },
  { title: 'Facing', options: ['East', 'West', 'North', 'South'] },
];

const data = [
  ['Unit A- 101 (3 BHK)', 'Aster Tower', 'Sunrise Enclave', 'Flat', 'Active', '₹1.45 Cr'],
  ['Unit A- 205 (2 BHK)', 'Aster Tower', 'Sunrise Enclave', 'Flat', 'Sold', '₹98L'],
  ['Unit B- 307 (4 BHK)', 'Aster Tower', 'Sunrise Enclave', 'Duplex', 'Active', '₹1.95 Cr'],
  ['Unit B- 104 (2 BHK)', 'Lotus Crest', 'Sunrise Enclave', 'Flat', 'Active', '₹1.10Cr'],
  ['Unit C- 402 (3 BHK)', 'Orchid Heights', 'Eden Greens', 'Flat', 'Booked', '₹1.35Cr'],
  ['Unit C- 202 (1 BHK)', 'Orchid Heights', 'Eden Greens', 'Studio', 'Sold', '₹45L'],
];
export default function Units() {
  return (
    <PageShell title="All Units" sections={sections} createLabel="Create Units" searchLabel="Search Unit">
      <DataTable
        cols="2.4fr 1.3fr 1.4fr 1fr 1.2fr 1fr"
        headers={['Unit Name', 'Building', 'Development', 'Type', 'Status', 'Price']}
        align="start"
        rowPad="py-4"
        rows={data.map((d, i) => [
          <div className="flex items-center gap-5">
            <Thumb size={70} src={propertyPhotos[i % propertyPhotos.length]} alt={`Photo of ${d[0]}`} />
            <p className="text-[15.4px] font-semibold w-[126px]">{d[0]}</p>
          </div>,
          d[1], d[2], d[3], <StatusBadge status={d[4]} />, d[5],
        ])}
      />
    </PageShell>
  );
}
