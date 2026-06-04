import { SectionHeading } from "./SectionHeading";

const stats = [
  { k: "4+", v: "Years IT Experience" },
  { k: "3", v: "Certifications" },
  { k: "20+", v: "Incidents Triaged" },
  { k: "MITRE", v: "ATT&CK Aligned" },
];

export function About() {
  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 py-28 md:py-40 max-w-[1400px] mx-auto">
      <SectionHeading
        eyebrow="About"
        title="Security-first thinking, intelligence-driven defence."
      />
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            An aspiring SOC Analyst with four years supporting enterprise Windows and
            macOS environments, now specialising in threat detection and incident
            response. I triage alerts, analyse logs, and escalate using SIEM and EDR
            workflows mapped to MITRE ATT&amp;CK — with strong SLA-driven ticketing
            discipline.
          </p>
          <p>
            Comfortable with{" "}
            <span className="text-foreground">Microsoft Defender for Endpoint</span>,
            Event Viewer, O365 / Azure sign-in logs, Wireshark, and KQL / SPL basics.
            I isolate endpoints, collect evidence, and write clear incident reports —
            bringing a service-desk mindset to reduce false positives and improve
            MTTD / MTTR across the SOC.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((s) => (
            <div key={s.v} className="border-t border-border pt-6">
              <div className="font-display text-5xl text-gold">{s.k}</div>
              <div className="eyebrow mt-3 !text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}