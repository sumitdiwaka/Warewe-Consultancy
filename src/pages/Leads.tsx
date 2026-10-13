import PageShell from '../components/PageShell';
import Avatar from '../components/Avatar';
import profileAvatar from '../assets/avatar-profile.png';

const sections = [
  { title: 'Lead Source', options: ['Website Referral from Client', 'Social Media', 'Walk-in', 'Cold Call', 'Campaign', 'Event'] },
  { title: 'Lead Status', options: ['Active', 'In Progress', 'Converted', 'Cold', 'Not Interested'] },
  { title: 'Lead Category', options: ['Corporate', 'Individual', 'Investor', 'Agent', 'Other'] },
  { title: 'Lead Owner', options: ['Jessica Chen', 'Evan Chris', 'Jack B.', 'Emily Paris'] },
];

const fields = [['Lead Source:', 'Referral from Client'], ['Lead Status:', 'Interested'], ['Lead Category:', 'Corporate'], ['Lead Owner:', 'Jessica Chen']];

export default function Leads() {
  return (
    <PageShell title="Leads" sections={sections} searchPlaceholder="Search by Lead Name" createLabel="Create Lead" searchLabel="Search Lead">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="flex items-center gap-4 py-4 border-b border-[#E6E8EC] px-1">
          <Avatar name="John Doe" size={82} imageSrc={profileAvatar} />
          <div className="flex-1">
            <p className="text-[15.4px] font-semibold">John Doe</p>
            <p className="text-[14px] text-[#444] mt-0.5">Email: john@urbanrealty.com</p>
            <div className="flex mt-2 text-[12.6px]">
              {fields.map(([k, v], j) => (
                <div key={k} className={`pr-5 ${j ? 'pl-2 border-l border-[#BDBFC4]' : ''}`}>
                  <p className="text-muted">{k}</p><p className="text-[#555]">{v}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="w-[36.4px] h-[36.4px] rounded-full bg-[#222] text-white text-[16.8px] mr-6" aria-label="Remove lead">×</button>
        </div>
      ))}
    </PageShell>
  );
}
