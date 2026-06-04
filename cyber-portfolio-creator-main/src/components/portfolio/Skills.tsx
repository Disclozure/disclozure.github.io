import { SectionHeading } from "./SectionHeading";

const categories = [
  {
    icon: "◆",
    title: "SIEM & Detection",
    items: ["Microsoft Sentinel", "Splunk", "KQL", "SPL", "Log Correlation"],
  },
  {
    icon: "▲",
    title: "EDR & Endpoint",
    items: [
      "Microsoft Defender for Endpoint",
      "Host Isolation",
      "Event Viewer",
      "Endpoint Forensics",
    ],
  },
  {
    icon: "●",
    title: "Cloud & Identity",
    items: ["Azure Security", "Entra ID Sign-in Logs", "O365", "Conditional Access"],
  },
  {
    icon: "✦",
    title: "Network Analysis",
    items: ["Wireshark", "IDS / IPS basics", "Firewall Log Review", "TCP/IP"],
  },
  {
    icon: "⬢",
    title: "Frameworks",
    items: ["MITRE ATT&CK", "NIST CSF", "ISO 27001", "SOC 2"],
  },
  {
    icon: "◇",
    title: "Operations",
    items: [
      "Incident Response",
      "SLA-driven Ticketing (Halo)",
      "Root Cause Analysis",
      "Playbook Authoring",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 lg:px-24 py-28 md:py-40 max-w-[1400px] mx-auto">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Tools & technologies I work with."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {categories.map((c) => (
          <div
            key={c.title}
            className="bg-background p-8 group hover:bg-card transition-colors"
          >
            <div className="text-gold text-2xl mb-6">{c.icon}</div>
            <h3 className="font-display text-2xl mb-4">{c.title}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}