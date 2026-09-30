import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal>
      <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
        {eyebrow && <span className="badge-eyebrow">{eyebrow}</span>}
        <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl dark:text-white">
          {title}
        </h2>
        {description && (
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
