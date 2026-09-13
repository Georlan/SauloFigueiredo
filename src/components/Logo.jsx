export default function Logo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 96 96"
      aria-label="Saulo Figueiredo"
      role="img"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 18h22c10 0 18 8 18 18v11H41c-16 0-29-13-29-29Z" fill="currentColor" />
      <path d="M84 18H62c-10 0-18 8-18 18v11h11c16 0 29-13 29-29Z" fill="currentColor" />
      <path d="M12 78h22c10 0 18-8 18-18V49H41c-16 0-29 13-29 29Z" fill="currentColor" />
      <path d="M84 78H62c-10 0-18-8-18-18V49h11c16 0 29 13 29 29Z" fill="currentColor" />
      <path
        d="M18 24c6 0 12 2 16 6 5 5 7 11 7 18M78 24c-6 0-12 2-16 6-5 5-7 11-7 18M18 72c6 0 12-2 16-6 5-5 7-11 7-18M78 72c-6 0-12-2-16-6-5-5-7-11-7-18"
        stroke="#050505"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  )
}
