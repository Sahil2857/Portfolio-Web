import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-shell section-shell">
        <div className="hero-card glow-border p-8 md:p-10">
          <span className="accent-chip">Portfolio</span>
          <h1 className="section-title mt-4">Advanced Automation and Desktop Projects</h1>
          <p className="section-copy">
            A practical project collection focused on solving workflow bottlenecks, reducing manual
            effort, and improving operational reliability.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="content-card glow-border">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
                {project.category}
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-tight">{project.title}</h2>
              <p className="text-muted-foreground mt-2">{project.summary}</p>
              <Button asChild variant="outline" className="mt-5">
                <Link href={`/case-study/${project.slug}`}>View Case Study</Link>
              </Button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
