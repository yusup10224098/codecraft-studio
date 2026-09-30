import logo from "../assets/logo.png";

/**
 * Official CodeCraft Studio logo.
 * The logo file itself is never resized non-proportionally, recolored, or cropped —
 * only the surrounding wrapper (padding / background chip) adapts to light or dark
 * navbar and footer backgrounds so the logo's white canvas stays legible.
 */
export default function Logo({ size = "md", className = "" }) {
  const sizeClasses = {
    sm: "h-10 sm:h-11",
    md: "h-12 sm:h-14",
    lg: "h-14 sm:h-16",
  };

  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-slate-900/5 ${className}`}
    >
      <img
        src={logo}
        alt="CodeCraft Studio"
        className={`w-auto object-contain ${sizeClasses[size]}`}
      />
    </span>
  );
}
