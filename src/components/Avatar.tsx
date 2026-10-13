const palette = ['#B08968', '#7F5539', '#6B705C', '#A5A58D', '#5E6472', '#9C6644'];

export default function Avatar({ name, size = 39.2, ring = false, imageSrc }: { name: string; size?: number; ring?: boolean; imageSrc?: string }) {
  const i = name.charCodeAt(0) % palette.length;
  const initials = name.split(' ').map((p) => p[0]).slice(0, 2).join('');
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full text-white font-semibold shrink-0 ${imageSrc ? 'overflow-hidden' : ''} ${ring ? 'ring-2 ring-white' : ''}`}
      style={{ width: size, height: size, background: imageSrc ? 'transparent' : palette[i], fontSize: size * 0.36 }}
    >
      {imageSrc ? <img src={imageSrc} alt="" className="h-full w-full rounded-full object-cover" /> : initials}
    </span>
  );
}
