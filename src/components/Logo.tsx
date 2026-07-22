export default function Logo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const stroke = variant === "dark" ? "#14151d" : "#fbf8f3";

  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
        <line x1="6" y1="3" x2="6" y2="27" stroke={stroke} strokeWidth="2" />
        <line x1="15" y1="3" x2="15" y2="27" stroke={stroke} strokeWidth="2" />
        <line x1="6" y1="15" x2="15" y2="15" stroke="#dd8a3b" strokeWidth="2.5" />
        <line x1="21" y1="6" x2="21" y2="24" stroke={stroke} strokeWidth="2" />
        <line x1="27" y1="6" x2="27" y2="24" stroke={stroke} strokeWidth="2" />
        <line x1="21" y1="15" x2="27" y2="15" stroke={stroke} strokeWidth="2" />
      </svg>
      <span
        className="font-display leading-[0.95] tracking-[0.08em]"
        style={{ color: stroke }}
      >
        <span className="block text-[0.95rem]">TRIXIS</span>
        <span className="block text-[0.95rem] text-gold">HOMES</span>
      </span>
    </span>
  );
}
