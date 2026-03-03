import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-shell section-shell">
        <div className="hero-card glow-border p-8 md:p-10">
          <span className="accent-chip">Services</span>
          <h1 className="section-title mt-4">Automation Services for High-Volume Operations</h1>
          <p className="section-copy">
            Practical implementation services designed for recurring reports, repetitive office
            tasks, and internal utility workflows where consistency and speed matter.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="content-card glow-border">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">{service.badge}</p>
              <h2 className="mt-2 text-2xl font-medium tracking-tight">{service.title}</h2>
              <ul className="list-check mt-4">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="mailto:kadamsahil1920@gmail.com">Contact Me</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
