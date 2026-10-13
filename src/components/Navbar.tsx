import { NavLink } from 'react-router-dom';
import profileAvatar from '../assets/avatar-profile.png';

const links: { label: string; to?: string }[] = [
  { label: 'Home', to: '/' },
  { label: 'Developments', to: '/developments' },
  { label: 'Buildings', to: '/buildings' },
  { label: 'Units', to: '/units' },
  { label: 'Leads', to: '/leads' },
  { label: 'Companies', to: '/companies' },
  { label: 'Contacts', to: '/contacts' },
  { label: 'Deals', to: '/deals' },
  { label: 'Activities', to: '/activities' },
  { label: 'Attorney Firms', to: '/attorney-firms' },
  { label: 'Reports', to: '/reports' },
];

const base = 'px-2 py-2 rounded-md text-[14px] font-medium whitespace-nowrap';

export default function Navbar() {
  return (
    <header className="bg-white h-[65px] flex items-center px-[26px] gap-3 shadow-[0_1px_4px_rgba(0,0,0,0.08)] sticky top-0 z-20">
      <div className="flex items-center gap-1.5 mr-2">
        <svg width="26.6" height="30.8" viewBox="0 0 24 22" fill="none" stroke="#D4AF37" strokeWidth="1.6">
          <path d="M2 21V8l5-3v16M7 21V3l6 3v15M13 21V9l5 2v10M2 21h20" />
        </svg>
        <span className="font-bold text-[18px] tracking-tight">REALTOR360</span>
      </div>
      <nav className="flex items-center gap-0.5 overflow-x-auto flex-1 min-w-0 scrollbar-none">
        {links.map((l) =>
          l.to ? (
            <NavLink
              key={l.label}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `${base} ${isActive ? 'bg-gold text-white' : 'text-ink hover:bg-gold-light'}`
              }
            >
              {l.label}
            </NavLink>
          ) : (
            <span key={l.label} className={`${base} text-ink cursor-default`}>
              {l.label}
            </span>
          )
        )}
        <span className={`${base} text-ink`}>···</span>
      </nav>
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center bg-[#F6F8FA] rounded-lg h-[42px] w-[152px] px-[10px] text-[12px] text-muted justify-between">
          <input className="bg-transparent outline-none w-full" placeholder="Search..." />
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
        </div>
        <div className="flex items-center gap-1">
          <img src={profileAvatar} alt="" className="w-[35px] h-[35px] rounded-full object-cover" />
          <span className="text-[10px]">▼</span>
        </div>
      </div>
    </header>
  );
}
