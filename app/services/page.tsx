import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-shell">
        <div className="hero-card p-8">
        <h1 className="text-4xl font-semibold">Services</h1>
        <p className="text-muted-foreground mt-3 max-w-3xl">
          Practical automation services focused on reducing manual work and improving business
          productivity.
        </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="content-card">
              <p className="text-muted-foreground text-sm">{service.badge}</p>
              <h2 className="mt-1 text-2xl font-medium">{service.title}</h2>
              <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-1">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex gap-3">
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
