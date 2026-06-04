import { SectionHeading } from "./SectionHeading";

const icon = (slug: string, color?: string) =>
  `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ""}`;

type Tool = { name: string; logo: string };

const row1: Tool[] = [
  { name: "QRadar", logo: icon("ibm") },
  { name: "Splunk", logo: icon("splunk") },
  { name: "AWS", logo: icon("amazonwebservices", "232F3E") },
  { name: "Azure", logo: icon("microsoftazure") },
  { name: "Elastic", logo: icon("elastic") },
  { name: "Wireshark", logo: icon("wireshark") },
  { name: "Terraform", logo: icon("terraform") },
  { name: "Python", logo: icon("python") },
  { name: "PowerShell", logo: icon("powershell") },
  { name: "VMware", logo: icon("vmware") },
  { name: "Zscaler", logo: icon("zscaler") },
  { name: "Cisco", logo: icon("cisco") },
];

const row2: Tool[] = [
  { name: "Linux", logo: icon("linux", "000000") },
  { name: "Palo Alto", logo: icon("paloaltosoftware") },
  { name: "CrowdStrike", logo: icon("crowdstrike") },
  { name: "Rapid7", logo: icon("rapid7") },
  { name: "Nessus", logo: icon("tenable") },
  { name: "Defender", logo: icon("microsoft") },
  { name: "Qualys", logo: icon("qualys") },
  { name: "ServiceNow", logo: icon("servicenow") },
  { name: "Kali Linux", logo: icon("kalilinux") },
  { name: "Metasploit", logo: icon("metasploit") },
  { name: "Burp Suite", logo: icon("burpsuite") },
  { name: "Nmap", logo: icon("nmap") },
];

function Marquee({ items, reverse = false }: { items: Tool[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="group relative overflow-hidden">
      <div
        className="flex w-max gap-4 py-2"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} 60s linear infinite`,
        }}
      >
        {loop.map((tool, i) => (
          <div
            key={`${tool.name}-${i}`}
            className="shrink-0 w-36 h-28 border border-border bg-card flex flex-col items-center justify-center gap-3 hover:border-gold transition-colors"
          >
            <img
              src={tool.logo}
              alt={tool.name}
              loading="lazy"
              className="h-8 w-auto max-w-[80%] object-contain"
            />
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Tools() {
  return (
    <section id="tools" className="py-28 md:py-40">
      <div className="px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Tools I use"
          title="Technologies I work with every day."
        />
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

      <div className="relative space-y-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
        <Marquee items={row1} />
        <Marquee items={row2} reverse />
      </div>
    </section>
  );
}
