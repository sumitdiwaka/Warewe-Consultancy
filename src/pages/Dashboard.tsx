import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Label,
} from 'recharts';
import Avatar from '../components/Avatar';
import Calendar from '../components/Calendar';
import propertyPhotos from '../assets/propertyPhotos';
import leadSourceChart from '../assets/lead-source-chart.svg';
import johnAvatar from '../assets/avatar-john.png';
import jessicaAvatar from '../assets/avatar-jessica.png';
import evanAvatar from '../assets/avatar-evan.png';
import jackAvatar from '../assets/avatar-jack.png';
import emilyAvatar from '../assets/avatar-emily.png';

const G = '#D4AF37', GM = '#EBDDA6', GL = '#F7F0D6';

const kpis = [
  { label: 'Active Listing', value: '23', delta: '-12%', up: false, icon: 'home' },
  { label: 'Active Leads', value: '120', delta: '+12%', up: true, icon: 'person' },
  { label: 'Total Closed', value: '42', delta: '+12%', up: true, icon: 'handshake' },
  { label: 'Total Revenue', value: 'Rs.22Cr.', delta: '+12%', up: true, icon: 'revenue' },
];

function KpiIcon({ name }: { name: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {name === 'home' && <path d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3L12 3z" />}
      {name === 'person' && <><circle cx="12" cy="7" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7H4z" /></>}
      {name === 'handshake' && <path d="M21.5 8.5 18 5l-3 1-3-1-3 1-3-1-3.5 3.5L4 14l3 3 1.5-1.5 2 2 1.5-1.5 1 1 2-2 1 1L18 15l3-3z" />}
      {name === 'revenue' && <><ellipse cx="9" cy="6" rx="5" ry="2.5" /><path d="M4 8.5v3c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-3c-1 1-2.9 1.5-5 1.5s-4-.5-5-1.5z" /><circle cx="16.5" cy="16.5" r="4.5" /></>}
    </svg>
  );
}
const stages = ['Interested', 'Site Visit Done', 'Unit Shortlisted', 'Contracts Signed', 'Offer Initiated', 'Offer Accepted'].map(
  (s, i) => ({
    stage: s,
    a: [3, 3.8, 3.5, 3.8, 3.2, 3.8][i], // Angel Plaza
    b: [5.6, 7.2, 6.6, 7.2, 6, 7.2][i], // + Angel Garden (cumulative)
    c: [7.9, 10, 9.3, 10, 8.4, 10][i], // + None (cumulative)
  })
);
const sales = [
  { owner: 'A', a: 5, b: 11.2, c: 17.8 }, // cumulative: Angel Plaza, + Angel Garden, + None
  { owner: 'B', a: 2.3, b: 8, c: 12.2 },
];

const listings = [
  { n: 'Maplewood House', image: propertyPhotos[0], t: 'House', u: '12', p: 'Rs.85L', l: ['A B', 'E F'], x: '+35', v: '125', s: '8/12 Occupied' },
  { n: 'Serenity Villa', image: propertyPhotos[1], t: 'Villa', u: '9300', p: 'Rs.2.8Cr', l: ['A B', 'E F'], x: '+40', v: '930', s: 'Available' },
  { n: 'Rosehill Cottage', image: propertyPhotos[2], t: 'House', u: '25', p: 'Rs.1.1Cr', l: ['A B', 'E F'], x: '+15', v: '355', s: 'Available' },
  { n: 'Skyline Edge', image: propertyPhotos[3], t: 'Apartment', u: '17', p: 'Rs.75L', l: ['A B', 'E F'], x: '+11', v: '425', s: 'Sold Out' },
];

const statusStyle: Record<string, string> = {
  '8/12 Occupied': 'bg-[#DDF5EA] text-[#16A34A]',
  Available: 'bg-[#DDF5EA] text-[#16A34A]',
  'Sold Out': 'bg-[#FDE2E4] text-[#E11D48]',
};

const contacts = [
  ['John Doe', 'New York'], ['Jessica Chen', 'California, LA'], ['Evan Chris', 'New York'],
  ['Jack B.', 'Ohio, Columbus'], ['Emily Paris', 'California, LA'],
];

const peoplePhotos: Record<string, string> = {
  'John Doe': johnAvatar,
  'Jessica Chen': jessicaAvatar,
  'Evan Chris': evanAvatar,
  'Jack B.': jackAvatar,
  'Emily Paris': emilyAvatar,
  'A B': johnAvatar,
  'C D': jessicaAvatar,
  'E F': evanAvatar,
  'G H': jackAvatar,
  'I J': emilyAvatar,
  'K L': johnAvatar,
  'M N': jessicaAvatar,
  'O P': evanAvatar,
};

const reminders = [
  ['Follow-Ups', '15 leads need to be followed up.'],
  ['Submit Final Offer- Villa Deal', 'Finalize and send offer documents.'],
  ['Review Contract with Legal', 'Ensure attorney reviews apartment deal contract today.'],
  ['Call Jessica Chen – Follow-up', 'Discuss her feedback after site visit to Angel Plaza.'],
];

const schedule: [string, string, string][] = [
  ['Visit Client- Angel Plaza', 'Sector 45, Gurugram, Haryana', '#1FD3B0'],
  ['Visit Client – Site Walkthrough', 'Whitefield Road, Bengaluru, Karnataka', '#1FD3B0'],
  ['Follow Up – Jessica Chen', 'jessica.chen@email.com', '#EE9CB5'],
  ['Follow Up – Roger Bouchard', 'roger.bouchard@clientmail.com', '#EE9CB5'],
  ['Submit Final Offer – Villa Deal', 'Finalize and send offer documents.', '#FFE81A'],
  ['Submit Internal Review – Apartment PricingFinal Offer – Villa Deal', 'Update CRM with latest market rates.', '#FFE81A'],
];

const Title = ({ children }: { children: string }) => <h3 className="text-[18.2px] font-medium mb-2">{children}</h3>;

function Legend({ items, className = 'mt-2' }: { items: [string, string][]; className?: string }) {
  return (
    <div className={`flex gap-[24px] text-[12px] text-[#555] ${className}`}>
      {items.map(([n, c]) => (
        <span key={n} className="flex items-center gap-[6px]"><i className="inline-block h-[16px] w-[16px] rounded-full" style={{ background: c }} />{n}</span>
      ))}
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="pl-4 pr-4 py-5 md:pl-[26px] md:pr-6 grid gap-x-[15px] gap-y-[10px] grid-cols-1 xl:grid-cols-[minmax(0,1fr)_290px] max-w-[1440px] mx-auto">
      <div className="grid grid-cols-2 grid-rows-[auto_auto_auto_auto_1fr] gap-x-[15px] gap-y-[10px]">
        {/* KPIs */}
        <div className="col-span-2 grid grid-cols-2 sm:grid-cols-[repeat(4,minmax(258px,1fr))] xl:grid-cols-4 gap-[15px] overflow-x-auto xl:overflow-visible scrollbar-none pb-[10px] -mb-[10px] pr-[6px] -mr-[6px]">
          {kpis.map((k) => (
            <div key={k.label} className="card h-[100px] px-[13px] pt-[10px]">
              <div className="flex items-center gap-[19px]">
                <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#F5F6F8] text-gold">
                  <KpiIcon name={k.icon} />
                </span>
                <p className="text-[16px] font-medium leading-[19px] text-[#2C2C2C]">{k.label}</p>
              </div>
              <div className="mt-[12px] flex items-center gap-[19px]">
                <span className="text-[26px] font-semibold leading-[30px] text-[#2C2C2C]">{k.value}</span>
                <span className={`inline-flex h-[19px] items-center whitespace-nowrap rounded-full px-[9px] text-[12px] ${k.up ? 'bg-[#D9F8EE] text-[#1BAF86]' : 'bg-[#FDE3E8] text-[#E11D48]'}`}>
                  {k.delta} {k.up ? '↗' : '↘'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="relative h-[334px] min-w-0 overflow-hidden rounded-[20px] bg-white shadow-[2px_4px_4px_rgba(0,0,0,0.1)]">
          <div className="absolute inset-y-0 left-1/2 w-full max-w-[535px] -translate-x-1/2">
            <h3 className="absolute left-[22px] top-[13px] w-[187px] whitespace-nowrap text-center text-[18px] font-medium leading-normal text-[#2C2C2C]">
              Deals by Lead Source
            </h3>
            <img
              src={leadSourceChart}
              alt=""
              className="absolute left-[22.45%] top-[20.06%] w-[54.27%] h-[68.86%]"
            />
            <p className="absolute left-[80%] top-[30.54%] -translate-x-1/2 text-center text-[10px] leading-[normal] text-[#666]">
              Inbound Call<br />9 (37.87%)
            </p>
            <p className="absolute left-[83.36%] top-[72.46%] -translate-x-1/2 text-center text-[10px] leading-[normal] text-[#666]">
              Reference<br />1 (30.6%)
            </p>
            <p className="absolute left-[18.22%] top-[39.82%] -translate-x-1/2 text-center text-[10px] leading-[normal] text-[#666]">
              Website<br />10 (24.83%)
            </p>
            <p className="absolute left-[15.98%] top-[71.86%] -translate-x-1/2 text-center text-[10px] leading-[normal] text-[#666]">
              Facebook<br />1 (6.78%)
            </p>
          </div>
        </div>

        <div className="card h-[334px] min-w-0 px-[20px] pt-[13px] pb-[14px] flex flex-col">
          <h3 className="text-[18px] font-medium leading-[22px] text-[#2C2C2C]">Deals by Stages by Development</h3>
          <div className="mt-[6px] flex min-h-0 flex-1">
            <span className="flex w-[20px] shrink-0 items-center justify-center text-[14px] text-[#555] [writing-mode:vertical-rl] rotate-180">Record Count</span>
            <div className="min-w-0 flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stages} barSize={30} barGap={-30} margin={{ top: 12, right: 50, left: 0, bottom: 0 }}>
                  <CartesianGrid vertical={false} stroke="#CFCFCF" />
                  <XAxis dataKey="stage" interval={0} angle={-40} textAnchor="end" height={68} tickLine={false} axisLine={{ stroke: '#CFCFCF' }} tick={{ fontSize: 10, fill: '#555' }} />
                  <YAxis domain={[0, 10]} ticks={[0, 2.5, 5, 7.5, 10]} width={28} tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#555' }} />
                  <Bar dataKey="c" fill={GL} radius={[6, 6, 0, 0]} isAnimationActive={false} />
                  <Bar dataKey="b" fill={GM} radius={[6, 6, 0, 0]} isAnimationActive={false} />
                  <Bar dataKey="a" fill={G} radius={[6, 6, 0, 0]} isAnimationActive={false} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <p className="mt-[4px] text-center text-[14px] leading-[17px] text-[#555]">Stage</p>
          <Legend className="mt-[14px]" items={[['Angel Plaza', G], ['Angel Garden', GM], ['None', GL]]} />
        </div>

        <div className="card h-[196px] min-w-0 px-[22px] pt-[13px] pb-[10px] flex flex-col">
          <h3 className="text-[18px] font-medium leading-[22px] text-[#2C2C2C]">Deals by Sales People by Development</h3>
          <div className="mt-[4px] flex min-h-0 flex-1">
            <span className="flex w-[18px] shrink-0 items-center justify-center text-[14px] text-[#555] [writing-mode:vertical-rl] rotate-180">Deal Owner</span>
            <div className="min-w-0 flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sales} layout="vertical" barSize={28} barGap={-28} margin={{ top: 6, right: 24, left: 8, bottom: 0 }}>
                  <CartesianGrid horizontal={false} stroke="#A8A8A8" />
                  <XAxis type="number" domain={[0, 20]} ticks={[0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20]} tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#555' }} />
                  <YAxis type="category" dataKey="owner" hide />
                  <Bar dataKey="c" fill={GL} radius={8} isAnimationActive={false} />
                  <Bar dataKey="b" fill={GM} radius={8} isAnimationActive={false} />
                  <Bar dataKey="a" fill={G} radius={8} isAnimationActive={false} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <p className="text-center text-[14px] leading-[17px] text-[#555]">Record Count</p>
          <Legend className="mt-[8px]" items={[['Angel Plaza', G], ['Angel Garden', GM], ['None', GL]]} />
        </div>

        <div className="relative row-span-2 h-[334px] min-w-0 rounded-[20px] bg-white text-[#2c2c2c] shadow-[2px_4px_4px_rgba(0,0,0,0.1)]">
          <h3 className="absolute left-[22px] top-[13px] text-[18px] font-medium leading-[22px]">
            Deals in Pipeline by Development
          </h3>
          <div className="absolute left-[22px] top-[58px] flex h-[33px] w-[calc(100%-44px)] items-center justify-between rounded-[5px] bg-[#f6f8fa] px-[10px] py-[8px] text-[14px] font-medium leading-[17px]">
            <span>Development Name</span>
            <span>Record Count</span>
          </div>
          <div className="absolute left-[32px] right-[36px] top-[105px] flex justify-between text-[14px] leading-[17px]">
            <span>None</span><span>14</span>
          </div>
          <div className="absolute left-[32px] right-[36px] top-[142px] flex justify-between text-[14px] leading-[17px]">
            <span>Angel Plaza</span><span>3</span>
          </div>
          <div className="absolute left-[32px] right-[36px] top-[179px] flex justify-between text-[14px] leading-[17px]">
            <span>Angel Garden</span><span>1</span>
          </div>
        </div>

        <div className="card h-[128px] px-[24px] pt-[14px]">
          <h3 className="text-[18px] font-medium leading-[22px] text-[#2C2C2C]">Total Deals Closed</h3>
          <div className="relative mt-[10px] h-[41px]">
            <div className="absolute inset-0 overflow-hidden rounded-[12px] bg-[#F4F4F4]">
              <div className="h-full rounded-[12px]" style={{ width: '42.6%', background: 'linear-gradient(90deg, #D4AF37 0%, #E3CC7A 55%, #EDE3C0 100%)' }} />
            </div>
            <span className="absolute top-[-3px] bottom-[-3px] border-l border-dashed border-[#D4AF37]" style={{ left: '42.6%' }} />
            <span className="absolute h-[4px] w-[4px] rounded-full bg-[#D4AF37]" style={{ left: 'calc(42.6% - 1.5px)', top: '-5px' }} />
            <span className="absolute h-[4px] w-[4px] rounded-full bg-[#D4AF37]" style={{ left: 'calc(42.6% - 1.5px)', bottom: '-5px' }} />
          </div>
          <div className="mt-[6px] flex items-baseline justify-between text-[#2C2C2C]">
            <span><b className="text-[22px] font-medium">42</b> <span className="text-[12px]">Closed Deals</span></span>
            <span><b className="text-[22px] font-medium">132</b> <span className="text-[12px]">On Progress</span></span>
          </div>
        </div>

        {/* Listing + contacts */}
        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-[1fr_258px] gap-[15px]">
          <div className="card min-w-0 px-[22px] pt-[13px] pb-[18px]">
            <h3 className="text-[18px] font-medium leading-[22px] text-[#2C2C2C] mb-[12px]">Active Listing</h3>
            <div className="overflow-x-auto scrollbar-none">
              <div className="min-w-[640px]">
                <div className="grid grid-cols-[minmax(130px,136fr)_minmax(84px,104fr)_minmax(50px,103fr)_minmax(70px,106fr)_minmax(110px,162fr)_minmax(50px,82fr)_minmax(112px,127fr)] h-[36px] items-center rounded-[6px] bg-[#F6F6F6] px-[10px] text-[14px] font-medium">
                  {['Property', 'Type', 'Units', 'Price', 'Active Leads', 'Views', 'Status'].map((h) => <span key={h} className="truncate">{h}</span>)}
                </div>
                {listings.map((r) => (
                  <div key={r.n} className="grid grid-cols-[minmax(130px,136fr)_minmax(84px,104fr)_minmax(50px,103fr)_minmax(70px,106fr)_minmax(110px,162fr)_minmax(50px,82fr)_minmax(112px,127fr)] h-[41px] items-center px-[10px] text-[14px]">
                    <span className="flex min-w-0 items-center gap-[6px]">
                      <img src={r.image} alt="" className="h-[32px] w-[32px] shrink-0 rounded-[6px] object-cover" />
                      <span className="min-w-0 text-[12px] leading-[15px]">{r.n}</span>
                    </span>
                    <span className="truncate">{r.t}</span><span>{r.u}</span><span className="whitespace-nowrap">{r.p}</span>
                    <span className="flex items-center">
                      <span className="flex -space-x-[8px]">{r.l.map((x) => <Avatar key={x} name={x} size={28} ring imageSrc={peoplePhotos[x]} />)}</span>
                      <span className="-ml-[8px] flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#D9D9D9] text-[10px] ring-2 ring-white">{r.x}</span>
                    </span>
                    <span>{r.v}</span>
                    <span><i className={`not-italic inline-flex h-[21px] items-center whitespace-nowrap rounded-full px-[10px] text-[12px] ${statusStyle[r.s]}`}>{r.s}</i></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="card min-h-[279px] px-[20px] pt-[16px]">
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] font-medium leading-[22px] text-[#2C2C2C]">Leads Contacts</h3>
              <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#F5F6F8] text-[12px]">↗</span>
            </div>
            <ul className="mt-[10px]">
              {contacts.map(([n, c]) => (
                <li key={n} className="flex h-[46px] items-center gap-[10px]">
                  <Avatar name={n} size={34} imageSrc={peoplePhotos[n]} />
                  <div className="flex-1 leading-tight"><p className="text-[14px] text-[#2C2C2C]">{n}</p><p className="text-[11px] text-[#666]">{c}</p></div>
                  <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#F5F6F8]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#111" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" /></svg>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="flex flex-col gap-[10px]">
        <div className="card px-[15px] pt-[13px] pb-[14px]">
          <h3 className="mb-[14px] text-[18px] font-medium leading-[22px] text-[#2C2C2C]">Reminder</h3>
          {reminders.map(([t, d], i) => (
            <div key={t} className={`rounded-[12px] px-[10px] py-[10px] ${i === 0 ? 'bg-[#F6F3E6]' : ''} ${i ? 'mt-[8px]' : ''}`}>
              <p className="text-[14px] font-medium leading-[17px] text-[#2C2C2C]">{t}</p>
              <p className="mt-[2px] text-[12px] leading-[15px] text-[#6B6B6B]">{d}</p>
              {i === 0 && (
                <div className="mt-[10px] flex items-center">
                  <span className="flex -space-x-[7px]">{['A B', 'C D', 'E F', 'G H'].map((x) => <Avatar key={x} name={x} size={22} ring imageSrc={peoplePhotos[x]} />)}</span>
                  <span className="-ml-[7px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#D9D9D9] text-[9px] ring-2 ring-white">+11</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="card flex flex-1 flex-col px-[16px] pt-[14px] pb-[16px]">
          <Calendar />
          <hr className="-mx-[16px] mt-[12px] border-0 border-t border-[#A6A6A6]" />
          <h3 className="mb-[14px] mt-[16px] text-[18px] font-normal leading-[22px] text-[#2C2C2C]">My Schedule</h3>
          <div className="-mx-[4.6px]">
            {schedule.map(([t, d, c]) => (
              <div key={t} className="mb-[12px] rounded-l-[10px] border-l-[2px] py-[9px] pl-[10px] pr-[4px]" style={{ borderLeftColor: c }}>
                <p className="text-[14px] leading-[17px] text-[#2C2C2C]">{t}</p>
                <p className="mt-[1px] text-[12px] leading-[15px] text-[#666]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
