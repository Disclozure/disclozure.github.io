import { useEffect, useState } from "react";
import {
  Shield, Terminal, Lock, Bug, Cpu, Globe, Mail, Github, Linkedin,
  ExternalLink, ChevronRight, KeyRound, Radar, FileCode2, Zap,
} from "lucide-react";

const skills = [
  { icon: Bug, label: "Vulnerability Research", items: ["Fuzzing", "Reverse Engineering", "Exploit Dev"] },
  { icon: Shield, label: "Offensive Security", items: ["Red Teaming", "Web / API Pentest", "Active Directory"] },
  { icon: Lock, label: "Applied Crypto", items: ["TLS / PKI", "Protocol Analysis", "Key Management"] },
  { icon: Cpu, label: "Low-Level", items: ["x86_64 / ARM64", "Linux Kernel", "Firmware"] },
  { icon: Globe, label: "Cloud & Infra", items: ["AWS / GCP", "Kubernetes", "Zero Trust"] },
  { icon: Radar, label: "Detection Eng.", items: ["Sigma / YARA", "EDR Bypass", "SOC Tooling"] },
];

const projects = [
  { name: "kernelfuzz", tag: "research", desc: "Coverage-guided syscall fuzzer that surfaced 4 use-after-free bugs in the Linux 6.x networking stack.", stack: ["Rust", "eBPF", "AFL++"], href: "#" },
  { name: "redpath", tag: "tooling", desc: "Attack-path graphing across cloud + AD that turns BloodHound output into prioritized fix lists.", stack: ["Go", "Neo4j", "OPA"], href: "#" },
  { name: "tls-oracle", tag: "research", desc: "Practical padding-oracle scanner for misconfigured TLS 1.2 endpoints — checked against 50k hosts.", stack: ["Python", "Scapy"], href: "#" },
  { name: "phishforge", tag: "red team", desc: "Self-hosted phishing simulation framework with realistic OAuth consent flows for awareness programs.", stack: ["TypeScript", "Cloudflare"], href: "#" },
];

const cves = [
  { id: "CVE-2024-31337", vendor: "Acme Router OS", score: "9.8", title: "Pre-auth RCE via crafted SNMP packet" },
  { id: "CVE-2024-22841", vendor: "OpenForum 3.x", score: "8.1", title: "Stored XSS to admin takeover in markdown renderer" },
  { id: "CVE-2023-49902", vendor: "libcrypto-mini", score: "7.5", title: "Timing leak in ECDSA nonce generation" },
  { id: "CVE-2023-38201", vendor: "k8s-helper", score: "8.6", title: "Privilege escalation via mutating webhook race" },
];

const certs = ["OSCP", "OSWE", "CRTO", "GXPN", "AWS Sec. Specialty"];

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Disclosures />
      <Certs />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm">
          <Shield className="h-4 w-4 text-primary" />
          <span className="text-foreground">disclozure</span>
          <span className="text-muted-foreground">~/$</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-mono text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-smooth">./about</a>
          <a href="#skills" className="hover:text-primary transition-smooth">./skills</a>
          <a href="#projects" className="hover:text-primary transition-smooth">./projects</a>
          <a href="#cves" className="hover:text-primary transition-smooth">./cves</a>
          <a href="#contact" className="hover:text-primary transition-smooth">./contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-1.5 rounded-md border border-primary/50 bg-primary/10 px-3 py-1.5 text-xs font-mono text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
          <KeyRound className="h-3.5 w-3.5" /> pgp key
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const lines = [
    "$ whoami",
    "disclozure — security researcher",
    "$ cat /etc/focus",
    "offensive_security, vuln_research, applied_crypto",
    "$ uptime",
    "8y in the trenches • 0 cleared CVEs ignored",
  ];
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setShown((s) => (s < lines.length ? s + 1 : s)), 350);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-mono text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              status: available for engagements
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight">
              Breaking systems,
              <br />
              <span className="glitch text-neon" data-text="responsibly.">responsibly.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              I find vulnerabilities before adversaries do — through deep code review,
              fuzzing, and adversary emulation. Then I help teams ship fixes that actually hold.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-mono text-primary-foreground shadow-neon hover:opacity-90 transition-smooth">
                <Zap className="h-4 w-4" /> view work
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-5 py-2.5 text-sm font-mono text-foreground hover:border-primary hover:text-primary transition-smooth">
                <Mail className="h-4 w-4" /> initiate handshake
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-lg border border-border bg-terminal shadow-card overflow-hidden scanlines">
              <div className="flex items-center gap-2 border-b border-border px-3 py-2 bg-card/50">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">~/disclozure — zsh</span>
              </div>
              <pre className="p-5 font-mono text-sm leading-relaxed text-terminal-foreground whitespace-pre-wrap">
{lines.slice(0, shown).map((l, i) => (
  <div key={i} className={i === shown - 1 ? "blink" : ""}>
    {l.startsWith("$") ? <span className="text-primary">{l}</span> : l}
  </div>
))}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <div className="font-mono text-xs text-primary mb-2">// {eyebrow}</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="0x01" title="About">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
          <p>I'm an independent security researcher focused on the messy seam between code, protocols, and people. My work spans pre-auth bug hunting in C/C++ stacks, red-team operations against Fortune 500 environments, and cryptographic protocol review.</p>
          <p>I publish CVEs, build open-source tooling, and occasionally write up CTF chains. When I'm not breaking things, I help blue teams design detections that survive contact with real adversaries.</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6 shadow-card">
          <div className="font-mono text-xs text-muted-foreground mb-3">stats.txt</div>
          <ul className="space-y-3 font-mono text-sm">
            <li className="flex justify-between"><span className="text-muted-foreground">cves_published</span><span className="text-primary">12</span></li>
            <li className="flex justify-between"><span className="text-muted-foreground">years_experience</span><span className="text-primary">8</span></li>
            <li className="flex justify-between"><span className="text-muted-foreground">bounties_paid</span><span className="text-primary">$240k+</span></li>
            <li className="flex justify-between"><span className="text-muted-foreground">talks_given</span><span className="text-primary">14</span></li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="0x02" title="Capabilities">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map(({ icon: Icon, label, items }) => (
          <div key={label} className="group rounded-lg border border-border bg-card/60 p-6 shadow-card hover:border-primary/60 hover:-translate-y-0.5 transition-smooth">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-md bg-primary/10 p-2 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="font-mono text-sm text-foreground">{label}</h3>
            </div>
            <ul className="space-y-1.5 font-mono text-xs text-muted-foreground">
              {items.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <ChevronRight className="h-3 w-3 text-primary" /> {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="0x03" title="Selected Work">
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <a key={p.name} href={p.href} className="group relative rounded-lg border border-border bg-card/60 p-6 shadow-card hover:border-primary/60 transition-smooth">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FileCode2 className="h-4 w-4 text-primary" />
                  <h3 className="font-mono text-lg text-foreground">{p.name}</h3>
                  <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider font-mono text-muted-foreground">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
            </div>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="font-mono text-[10px] rounded bg-secondary px-2 py-1 text-secondary-foreground">{s}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Disclosures() {
  return (
    <Section id="cves" eyebrow="0x04" title="Disclosures">
      <div className="overflow-hidden rounded-lg border border-border bg-card/60 shadow-card">
        <table className="w-full font-mono text-sm">
          <thead className="bg-secondary/40 text-muted-foreground">
            <tr className="text-left">
              <th className="px-4 py-3 font-normal text-xs uppercase tracking-wider">CVE</th>
              <th className="px-4 py-3 font-normal text-xs uppercase tracking-wider">Vendor</th>
              <th className="px-4 py-3 font-normal text-xs uppercase tracking-wider">CVSS</th>
              <th className="px-4 py-3 font-normal text-xs uppercase tracking-wider">Title</th>
            </tr>
          </thead>
          <tbody>
            {cves.map((c) => (
              <tr key={c.id} className="border-t border-border hover:bg-secondary/30 transition-smooth">
                <td className="px-4 py-4 text-primary">{c.id}</td>
                <td className="px-4 py-4 text-foreground">{c.vendor}</td>
                <td className="px-4 py-4">
                  <span className={`rounded px-2 py-0.5 text-xs ${parseFloat(c.score) >= 9 ? "bg-destructive/20 text-destructive" : "bg-warning/20 text-warning"}`}>
                    {c.score}
                  </span>
                </td>
                <td className="px-4 py-4 text-muted-foreground">{c.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function Certs() {
  return (
    <Section id="certs" eyebrow="0x05" title="Credentials">
      <div className="flex flex-wrap gap-3">
        {certs.map((c) => (
          <div key={c} className="flex items-center gap-2 rounded-md border border-border bg-card/60 px-4 py-3 font-mono text-sm shadow-card hover:border-primary/60 transition-smooth">
            <Terminal className="h-4 w-4 text-primary" />
            {c}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="0x06" title="Establish Contact">
      <div className="rounded-lg border border-primary/40 bg-card/60 p-8 md:p-12 shadow-neon">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Have a system that needs breaking — <span className="text-neon">ethically</span>?
            </h3>
            <p className="mt-3 text-muted-foreground">Engagements, advisory, or a quick question about a finding. Encrypted channels preferred.</p>
          </div>
          <div className="md:col-span-2 space-y-3 font-mono text-sm">
            <a href="mailto:hello@disclozure.dev" className="flex items-center gap-3 rounded-md border border-border bg-background/60 px-4 py-3 hover:border-primary hover:text-primary transition-smooth">
              <Mail className="h-4 w-4 text-primary" /> hello@disclozure.dev
            </a>
            <a href="https://github.com/disclozure" className="flex items-center gap-3 rounded-md border border-border bg-background/60 px-4 py-3 hover:border-primary hover:text-primary transition-smooth">
              <Github className="h-4 w-4 text-primary" /> github.com/disclozure
            </a>
            <a href="#" className="flex items-center gap-3 rounded-md border border-border bg-background/60 px-4 py-3 hover:border-primary hover:text-primary transition-smooth">
              <Linkedin className="h-4 w-4 text-primary" /> linkedin/in/disclozure
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} disclozure — all bugs reserved.</div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          system nominal • last commit just now
        </div>
      </div>
    </footer>
  );
}
