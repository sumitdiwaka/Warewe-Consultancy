import { useState } from 'react';
import PageShell from '../components/PageShell';
import StatusBadge from '../components/StatusBadge';

const sections = [
  { title: 'Activity Type', options: ['Task', 'Meeting', 'Call'] },
  { title: 'Status', options: ['Active', 'Completed', 'In Progress', 'Missed', 'Not Interested'] },
  { title: 'Linked With', options: ['Deal', 'Contact', 'Lead', 'Company', 'Development'] },
  { title: 'Priority', options: ['High', 'Medium', 'Low'] },
  { title: 'Owner Name', options: ['Mohit Verma', 'Arjun Malhotra', 'Mohit Mehra', 'Shruti Reddy', 'Neha Desai'] },
];

const cards = [
  ['Follow-up with John', '12/07/2025', 'Active', 'High'], ['Follow-up with John', '10/07/2025', 'Not Interested', 'Low'],
  ['Initiate Contract with John', '12/07/2025', 'Active', 'High'], ['Follow-up with John', '12/07/2025', 'In Progress', 'Medium'],
  ['Follow-up with John', '12/07/2025', 'In Progress', 'High'], ['Follow-up with John', '12/07/2025', 'Active', 'High'],
  ['Follow-up with John', '12/07/2025', 'In Progress', 'High'], ['Follow-up with John', '12/07/2025', 'In Progress', 'Medium'],
  ['Follow-up with John', '12/07/2025', 'In Progress', 'Medium'], ['Initiate Contract with John', '12/07/2025', 'In Progress', 'Medium'],
  ['Follow-up with John', '12/07/2025', 'In Progress', 'Medium'], ['Follow-up with John', '12/07/2025', 'In Progress', 'Medium'],
];

const tabs = ['Customers', 'Open Deals', 'Leads/Contacts', 'Others'];

const addBtn = 'bg-[#F0F1F4] text-[12.6px] text-[#555] rounded px-3 py-1';

export default function Activities() {
  const [tab, setTab] = useState(0);
  return (
    <PageShell
      title="Activities"
      sections={sections}
      headerRight={<div className="flex gap-2"><button className={addBtn}>+ Add Task</button><button className={addBtn}>+ Add Call</button><button className={addBtn}>+ Add Meeting</button></div>}
    >
      <div className="grid grid-cols-4 bg-white rounded-lg p-0.5 mb-5 mt-5 text-[15.4px] font-semibold text-center">
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setTab(i)} className={`py-2 rounded-md ${i === tab ? 'bg-[#DADADA]' : ''}`}>{t}</button>
        ))}
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {cards.map(([t, date, status, pr], i) => (
          <div key={i} className="bg-white rounded-lg border border-[#D6D8DD] p-3">
            <div className="flex justify-between items-start">
              <div className="flex gap-1.5 items-start">
                <span className="w-[19.6px] h-[19.6px] border border-ink rounded-[4.2px] text-[11.2px] flex items-center justify-center mt-0.5">✓</span>
                <p className="text-[14px] font-medium w-[140px] leading-tight">{t}</p>
              </div>
              <span className={`text-[9.8px] ${status === 'Not Interested' ? 'text-red-500' : 'text-muted'}`}>{date}</span>
            </div>
            <dl className="mt-2 text-[11.2px] space-y-1.5">
              {[['Assigned To:', 'Mohit Verma'], ['Deal:', 'Sunrise Villa Sale'], ['Deal Value:', '₹1.45 Cr']].map(([k, v]) => (
                <div key={k} className="flex gap-3"><dt className="text-muted font-medium w-[72.8px]">{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
            <div className="flex justify-between items-center mt-2 text-[11.2px]">
              <span className="flex items-center gap-2"><span className="text-muted font-medium">Status:</span><StatusBadge status={status} /></span>
              <span className="text-muted text-[9.8px]">{pr}</span>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
