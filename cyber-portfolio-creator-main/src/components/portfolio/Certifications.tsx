import { SectionHeading } from "./SectionHeading";

const certs = [
  { title: "Ce-CSP", org: "CapsLock Certified Cyber Security Practitioner", year: "2025" },
  { title: "ICT L3", org: "Information Communications Technician", year: "2024" },
  { title: "Google IT", org: "Technical Support Fundamentals", year: "2021" },
  { title: "MITRE ATT&CK", org: "Workflow & Playbook Fluency", year: "Ongoing" },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="px-6 md:px-16 lg:px-24 py-28 md:py-40 max-w-[1400px] mx-auto"
    >
      <SectionHeading
        eyebrow="Certifications"
        title="Validated expertise & credentials."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((c) => (
          <div
            key={c.title}
            className="border border-border p-8 hover:border-gold transition-colors group"
          >
            <div className="eyebrow !text-muted-foreground mb-6">{c.year}</div>
            <h3 className="font-display text-3xl text-gold mb-3 group-hover:translate-x-1 transition-transform">
              {c.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.org}</p>
          </div>
        ))}
      </div>
    </section>
  );
}