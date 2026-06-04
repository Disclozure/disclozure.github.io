import { SectionHeading } from "./SectionHeading";

const roles = [
  {
    date: "Sep 2025 – Dec 2025",
    title: "Cyber Security Practitioner",
    org: "CAPSLOCK · Remote",
    bullets: [
      "Completed CIISec/CREST-accredited SOC bootcamp covering incident response, GRC, forensics, and offensive security.",
      "Built and tuned SIEM detections in Microsoft Sentinel and Splunk; investigated alerts via KQL/SPL and mapped findings to MITRE ATT&CK.",
      "Led incident handling end-to-end: triage, containment, evidence collection, MTTD/MTTR improvement.",
      "Practiced vulnerability assessment, remediation, and ISO 27001 / SOC 2 alignment.",
    ],
  },
  {
    date: "Sep 2021 – Sep 2025",
    title: "IT Technician",
    org: "Harris Federation · London",
    bullets: [
      "Monitored and triaged SIEM/EDR alerts, correlating Windows / O365 / Azure data; managed tickets in ITSM Halo with MITRE ATT&CK playbooks.",
      "Drove SLA-based incident handling: classified severity, contained endpoints via isolation/quarantine, coordinated with L3 and engineering.",
      "Performed root-cause analysis on recurring incidents and produced corrective actions and workarounds.",
      "Tuned detection rules to reduce false positives and improve overall SOC signal quality.",
    ],
  },
  {
    date: "Nov 2017 – Aug 2020",
    title: "Customer Advisor",
    org: "Argos · London",
    bullets: [
      "Front-line support across phone and in-person channels; resolved escalations within SLA targets.",
      "Reconciled shortages and discrepancies with suppliers, producing audit-ready documentation.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-16 lg:px-24 py-28 md:py-40 max-w-[1400px] mx-auto">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked & what I've built."
      />
      <div className="space-y-16">
        {roles.map((r) => (
          <article
            key={r.title}
            className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-16 border-t border-border pt-10"
          >
            <div className="eyebrow !text-gold whitespace-nowrap">{r.date}</div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl">{r.title}</h3>
              <p className="text-muted-foreground mt-1 italic">{r.org}</p>
              <ul className="mt-6 space-y-3 text-muted-foreground leading-relaxed">
                {r.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-gold mt-2 h-px w-4 bg-gold flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}