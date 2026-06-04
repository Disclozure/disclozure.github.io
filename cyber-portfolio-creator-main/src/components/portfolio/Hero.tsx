import heroImg from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen grid md:grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col justify-center px-6 md:px-16 lg:px-24 py-32 md:py-0 order-2 md:order-1">
        <p className="eyebrow mb-6">Cybersecurity Analyst · SOC Analyst</p>
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
          <span className="text-foreground">Bilal</span>
          <br />
          <span className="text-gold italic">Mahmud</span>
        </h1>
        <p className="mt-8 max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
          Aspiring SOC Analyst defending enterprises against evolving threats — triaging
          alerts, hunting adversaries through logs, and turning telemetry into decisive
          incident response.
        </p>
        <div className="mt-10 flex items-center gap-6">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-gold text-gold eyebrow hover:bg-gold hover:!text-primary-foreground transition-colors"
          >
            Get in touch
          </a>
          <a href="#about" className="eyebrow !text-muted-foreground hover:!text-gold transition-colors">
            Scroll ↓
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="relative h-[60vh] md:h-screen order-1 md:order-2 overflow-hidden">
        <img
          src={heroImg}
          alt="Cybersecurity analyst silhouette with code reflection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent md:from-background md:via-transparent md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
    </section>
  );
}