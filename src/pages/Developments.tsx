import FilterSidebar from '../components/FilterSidebar';
import Pagination from '../components/Pagination';
import Thumb from '../components/Thumb';
import propertyPhotos from '../assets/propertyPhotos';

const sections = [
  { title: 'City', options: ['Bengaluru', 'Mumbai', 'Delhi', 'Pune', 'Hyderabad', 'Chennai'] },
  { title: 'Type', options: ['Apartment', 'Villa', 'House', 'Studio', 'Penthouse'] },
  { title: 'Attorney Firm', options: ['Lex & Co. Legal Partners', 'Urban Law Associates', 'Prime Legal Group'] },
  { title: 'No. of Buildings', options: ['1-5', '6-10', '11-20', '20+'] },
  { title: 'Starting Price', options: ['Below Rs.50L', 'Rs.50L-Rs.1Cr', 'Rs.1Cr-Rs.2Cr', 'Rs.2Cr- Rs.5Cr', 'Above Rs.5Cr'] },
];

const cols = 'grid grid-cols-[3.2fr_0.8fr_1fr_1.6fr_1fr_1.2fr] items-center';

export default function Developments() {
  return (
    <div className="flex">
      <FilterSidebar searchPlaceholder="Search by Development Name" sections={sections} />
      <main className="flex-1 px-5 pt-5 min-w-[0px]">
        <h1 className="text-[25.2px] font-semibold mb-3">Developments</h1>
        <div className="flex items-center justify-between pb-3 border-b border-[#E6E8EC] mb-3">
          <button className="btn-gold">+ Create Development</button>
          <div className="flex items-center gap-2">
            <button className="bg-[#EEF0F3] rounded h-[39.2px] px-2 text-[12.6px] text-[#4B3F9E]">▦ ▾</button>
            <button className="bg-[#EEF0F3] rounded h-[39.2px] px-2 text-[12.6px]">Actions ▾</button>
          </div>
        </div>
        <div className={`${cols} bg-white rounded-lg px-3 py-3 text-[15.4px] font-semibold`}>
          <span>Name</span><span>Type</span><span>City</span>
          <span className="text-center">Attorney Firms Name</span>
          <span className="text-center">No. of Buildings</span><span>Starting Price</span>
        </div>
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className={`${cols} px-3 py-5 text-[14px] border-b border-[#E6E8EC] items-start`}>
            <div className="flex gap-3">
              <Thumb src={propertyPhotos[i]} alt="Sunrise Enclave property" />
              <div className="text-[14px] leading-[1.9]">
                <p className="text-[15.4px] font-semibold leading-normal">Sunrise Enclave</p>
                <p className="text-muted">Email: sales@sunriseenclave.com</p>
                <p className="text-muted">Website: <a href="#" className="text-gold-link underline">www.sunriseenclave.com</a></p>
              </div>
            </div>
            <span>Villa</span>
            <span>Bengaluru</span>
            <span className="text-center">Lex &amp; Co. Legal<br />Partners</span>
            <span className="text-center">6</span>
            <span>Rs.1.25 Cr</span>
          </div>
        ))}
        <Pagination />
      </main>
    </div>
  );
}
