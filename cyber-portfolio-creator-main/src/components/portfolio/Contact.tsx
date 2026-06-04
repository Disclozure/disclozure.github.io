export function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-16 lg:px-24 py-28 md:py-40 max-w-[1400px] mx-auto"
    >
      <p className="eyebrow mb-6">Contact</p>
      <h2 className="font-display text-5xl md:text-7xl max-w-4xl leading-[1.05]">
        Let's work <span className="text-gold italic">together.</span>
      </h2>
      <p className="mt-8 max-w-xl text-lg text-muted-foreground">
        Open to SOC Analyst, Cyber Defence, and Incident Response roles. Based in
        South West London — available across the UK & remote.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-8 border-t border-border pt-12">
        <a
          href="mailto:bilal_mahmud@outlook.com"
          className="group block"
        >
          <div className="eyebrow !text-muted-foreground mb-3">Email</div>
          <div className="font-display text-2xl group-hover:text-gold transition-colors">
            bilal_mahmud@outlook.com
          </div>
        </a>
        <a href="tel:07454939311" className="group block">
          <div className="eyebrow !text-muted-foreground mb-3">Phone</div>
          <div className="font-display text-2xl group-hover:text-gold transition-colors">
            074 5493 9311
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/bilal-mahmud-5463341a4"
          target="_blank"
          rel="noreferrer"
          className="group block"
        >
          <div className="eyebrow !text-muted-foreground mb-3">LinkedIn</div>
          <div className="font-display text-2xl group-hover:text-gold transition-colors">
            /in/bilal-mahmud →
          </div>
        </a>
      </div>

      <footer className="mt-32 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Bilal Mahmud · Cybersecurity Analyst</span>
        <span className="eyebrow">South West London, UK</span>
      </footer>
    </section>
  );
}