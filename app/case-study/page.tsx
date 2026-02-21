import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/site-data";

export default function CaseStudyIndexPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-shell">
        <div className="hero-card p-8">
        <h1 className="text-4xl font-semibold">Case Study Library</h1>
        <p className="text-muted-foreground mt-3 max-w-3xl">
          Open any project to view a dedicated case-study page with problem, solution, and impact.
        </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="content-card">
              <p className="text-muted-foreground text-sm">{project.category}</p>
              <h2 className="mt-1 text-2xl font-medium">{project.title}</h2>
              <p className="text-muted-foreground mt-2">{project.summary}</p>
              <Button asChild className="mt-4">
                <Link href={`/case-study/${project.slug}`}>Open</Link>
              </Button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
