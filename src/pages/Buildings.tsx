import PageShell from '../components/PageShell';
import DataTable from '../components/DataTable';
import Thumb from '../components/Thumb';
import propertyPhotos from '../assets/propertyPhotos';

const sections = [
  { title: 'Development', options: ['Sunrise Enclave', 'Garden Heights', 'Lakeview Estate', 'Harmony Valley', 'Ocean View Residency'] },
  { title: 'Status', options: ['Available', 'Sold Out', 'Ready to Move', 'Under Construction', 'On Hold'] },
  { title: 'City', options: ['Bengaluru', 'Hyderabad', 'Pune', 'Mumbai'] },
  { title: 'No. of Units', options: ['0-10', '11-20', '21-30', '31+'] },
];

const data = [
  ['Aster Tower', 'sunriseenclave', 'Sunrise Enclave', 'Bengaluru', 'Available', 20, 15, '#A9C7E8', '#2F5D8C'],
  ['Orchid Heights', 'sunriseenclave', 'Sunrise Enclave', 'Bengaluru', 'Selling Fast', 25, 10, '#5CC6C6', '#0F6E7A'],
  ['Maple Residency', 'sunriseenclave', 'Sunrise Enclave', 'Bengaluru', 'Ready to Move', 30, 30, '#E3B89A', '#8A5A3C'],
  ['Palm Grove Towers', 'greenvalleyestates', 'Green Valley Estates', 'Mumbai', 'Few Units Left', 28, 20, '#8FB8E8', '#B04A3A'],
  ['Ocean View Residences', 'greenvalleyestates', 'Green Valley Estates', 'Mumbai', 'Available', 30, 24, '#D9D4CC', '#6B6358'],
] as const;

export default function Buildings() {
  return (
    <PageShell title="Buildings" sections={sections} searchPlaceholder="Search by Building Name" createLabel="Create Buildings">
      <DataTable
        cols="3fr 1.6fr 1fr 1.2fr .7fr .7fr"
        headers={['Building Name', 'Development Name', 'City', 'Status', 'Units', 'Sold']}
        align="start"
        rowPad="py-4"
        rows={data.map((d, i) => [
          <div className="flex items-center gap-3">
            <Thumb src={propertyPhotos[i]} alt={`Photo of ${d[0]}`} />
            <div className="leading-[1.9]"><p className="text-[15.4px] font-semibold">{d[0]}</p><p className="text-muted">Email: sales@{d[1]}.com</p></div>
          </div>,
          d[2], d[3], d[4], d[5], d[6],
        ])}
      />
    </PageShell>
  );
}
