type PanoptixLogoProps = {
  className?: string;
  size?: number;
  /** Full gradient tile (favicon-style) or white mark only for colored backgrounds */
  variant?: "icon" | "mark";
};

export function PanoptixLogo({
  className = "",
  size = 32,
  variant = "icon",
}: PanoptixLogoProps) {
  const id = variant === "icon" ? "px-grad" : "px-grad-mark";

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}
        className={className}
        aria-hidden
      >
        <path
          d="M8 6v12M8 6h4.5a3.5 3.5 0 0 1 0 7H8"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 8.5a6 6 0 0 1 0 7"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M16 7a8.5 8.5 0 0 1 0 10"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.35"
        />
        <circle cx="13.5" cy="9.5" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={id} x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DC2626" />
          <stop offset="1" stopColor="#0A0A0A" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill={`url(#${id})`} />
      <path
        d="M10 9v14M10 9h5.5a4.5 4.5 0 0 1 0 9H10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 11a7 7 0 0 1 0 10"
        stroke="white"
        strokeWidth="1.35"
        strokeLinecap="round"
        opacity="0.65"
      />
      <path
        d="M19 9.5a9.5 9.5 0 0 1 0 13"
        stroke="#FCA5A5"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.9"
      />
      <circle cx="16" cy="11.5" r="1.35" fill="#FCA5A5" />
    </svg>
  );
}
