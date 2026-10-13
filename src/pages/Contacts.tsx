import FilterSidebar from '../components/FilterSidebar';
import Pagination from '../components/Pagination';
import StatusBadge, { Status } from '../components/StatusBadge';

const sections = [
  { title: 'Status', options: ['Active', 'In Progress', 'Converted', 'Cold', 'Not Interested'] },
  { title: 'Role', options: ['Buyer', 'Seller', 'Investor', 'Broker'] },
  { title: 'Assigned To', options: ['Jessica', 'Mohit', 'Arjun', 'Emily'] },
  { title: 'City', options: ['Bengaluru', 'Pune', 'Mumbai', 'Hyderabad', 'Delhi'] },
  { title: 'Lead Source', options: ['Website Form', 'Referral', 'Facebook Ads', 'Walk-In', 'Email Campaign'] },
];

const rows: { name: string; role: string; status: Status }[] = [
  { name: 'John Doe', role: 'Broker', status: 'Active' },
  { name: 'Ananya Verma', role: 'Buyer', status: 'In Progress' },
  { name: 'Ravi Kapoor', role: 'Developer', status: 'Cold' },
  { name: 'Emily Mehra', role: 'Buyer', status: 'Converted' },
  { name: 'John Doe', role: 'Seller', status: 'Not Interested' },
  { name: 'Ananya Verma', role: 'Buyer', status: 'Active' },
  { name: 'Ravi Kapoor', role: 'Investor', status: 'Active' },
  { name: 'Emily Mehra', role: 'Broker', status: 'Active' },
];

const cols = 'grid grid-cols-[1.6fr_1fr_1fr_1.2fr_1fr_1.1fr_1fr] items-center';

export default function Contacts() {
  return (
    <div className="flex">
      <FilterSidebar searchPlaceholder="Search by Contact Name" sections={sections} />
      <main className="flex-1 px-5 pt-5 min-w-[0px]">
        <h1 className="text-[25.2px] font-semibold mb-3">All Contacts</h1>
        <div className="flex items-center justify-between pb-3 border-b border-[#E6E8EC] mb-3">
          <button className="btn-gold">+ Create Contact</button>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-[#EEF0F3] rounded h-[39.2px] w-[210px] px-2">
              <input className="bg-transparent outline-none text-[11.2px] w-full" placeholder="Search Contact" />
              <svg width="16.8" height="16.8" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.4"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
            </div>
            <button className="bg-[#EEF0F3] rounded h-[39.2px] px-2 text-[12.6px] text-[#4B3F9E]">▦ ▾</button>
            <button className="bg-[#EEF0F3] rounded h-[39.2px] px-2 text-[12.6px]">Actions ▾</button>
          </div>
        </div>
        <div className={`${cols} bg-white rounded-lg px-3 py-3 text-[15.4px] font-semibold`}>
          <span>Contact Name</span><span>Company</span><span>Role</span><span>Phone No.</span><span>Deal Stage</span><span>Status</span><span>Assigned to</span>
        </div>
        {rows.map((r, i) => (
          <div key={i} className={`${cols} px-3 py-4 text-[14px] border-b border-[#E6E8EC]`}>
            <div>
              <p className="text-[15.4px] font-semibold">{r.name}</p>
              <p className="text-muted mt-0.5">Email: john@urbanrealty.com</p>
            </div>
            <span>Urban Realty</span>
            <span>{r.role}</span>
            <span>+91 9411521487</span>
            <span>Negotiation</span>
            <span><StatusBadge status={r.status} /></span>
            <span>Jessica Chen</span>
          </div>
        ))}
        <Pagination />
      </main>
    </div>
  );
}
