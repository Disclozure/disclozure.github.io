import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Tools } from "@/components/portfolio/Tools";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bilal Mahmud — Cybersecurity Analyst" },
      {
        name: "description",
        content:
          "Aspiring SOC Analyst specialising in threat detection, incident response, and SIEM/EDR investigation across enterprise Windows and Azure environments.",
      },
      { property: "og:title", content: "Bilal Mahmud — Cybersecurity Analyst" },
      {
        property: "og:description",
        content:
          "Aspiring SOC Analyst specialising in threat detection, incident response, and SIEM/EDR investigation.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Tools />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}
