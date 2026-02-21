import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-shell">
        <div className="hero-card p-8">
        <h1 className="text-4xl font-semibold">Projects</h1>
        <p className="text-muted-foreground mt-3 max-w-3xl">
          A portfolio of automation and desktop projects built to solve real workflow problems.
        </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="content-card">
              <p className="text-muted-foreground text-sm">{project.category}</p>
              <h2 className="mt-1 text-2xl font-medium">{project.title}</h2>
              <p className="text-muted-foreground mt-2">{project.summary}</p>
              <Button asChild variant="outline" className="mt-4">
                <Link href={`/case-study/${project.slug}`}>View Case Study</Link>
              </Button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
