export default function Thumb({ a = '#9CC3EC', b = '#3E7FD6', size = 86.8, src, alt = '' }: { a?: string; b?: string; size?: number; src?: string; alt?: string }) {
  if (src) {
    return <img src={src} alt={alt} width={size} height={size} className="rounded-lg shrink-0 object-cover" />;
  }

  const id = `g${a.slice(1)}${b.slice(1)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 62 62" className="rounded-lg shrink-0">
      <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient></defs>
      <rect width="62" height="62" fill={`url(#${id})`} />
      {[0, 1, 2, 3].map((r) => [0, 1, 2, 3].map((c) => (
        <rect key={`${r}${c}`} x={8 + c * 12} y={8 + r * 12} width="11.2" height="11.2" fill="#fff" opacity="0.35" />
      )))}
    </svg>
  );
}
