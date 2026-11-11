// Small icon set. One stroke width (1.5) and one grid (16px) throughout.
const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
};

export function ArrowUpRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
    </svg>
  );
}

export function ArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function Download(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 2.5v8M4.5 7.5L8 11l3.5-3.5M3 13.5h10" />
    </svg>
  );
}

export function Contrast(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="8" r="5.5" />
      <path d="M8 2.5v11a5.5 5.5 0 0 0 0-11z" fill="currentColor" />
    </svg>
  );
}
