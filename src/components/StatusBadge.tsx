export type Status = string;

const green = 'bg-[#ECFDF3] border-[#4ADE80]';
const yellow = 'bg-[#FFF6CC] border-[#F5E08A]';
const grey = 'bg-[#F2F2F2] border-[#9CA3AF]';
const blue = 'bg-[#E0F2FE] border-[#38BDF8]';
const red = 'bg-[#FEE2E2] border-[#F87171]';

const styles: Record<string, string> = {
  Active: green, 'Closed Won': green,
  'In Progress': yellow, Booked: yellow,
  Cold: grey,
  Converted: blue, Sold: blue, Open: blue,
  'Not Interested': red, Inactive: red, 'Closed Lost': red,
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-block border rounded px-2.5 py-[4.2px] text-[14px] text-ink ${styles[status] ?? grey}`}>{status}</span>
  );
}
