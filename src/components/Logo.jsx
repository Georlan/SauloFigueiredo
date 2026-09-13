export default function Logo({ className = '', alt = '' }) {
  return (
    <img
      src="/brand/sf-mark.png"
      width="500"
      height="500"
      alt={alt}
      className={className}
      draggable="false"
    />
  )
}
