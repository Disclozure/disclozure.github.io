export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-16 md:mb-24">
      <p className="eyebrow mb-6">{eyebrow}</p>
      <h2 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.05]">
        {title}
      </h2>
      <div className="mt-8 w-24 h-px bg-gold" />
    </div>
  );
}