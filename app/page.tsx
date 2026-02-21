import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Hero from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/site-data";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section className="page-shell pt-10">
        <div className="hero-card p-8">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="text-muted-foreground mt-4">
          I&apos;m Sahil Kadam, a Computer Engineer (21) specializing in automation systems, data
          dashboards, and workflow optimization.
        </p>
        <p className="text-muted-foreground mt-3">
          I build practical technology that reduces manual effort and helps teams make better
          business decisions.
        </p>
        </div>
      </section>

      <section className="page-shell pt-0">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
          <Button asChild variant="outline">
            <Link href="/projects">See All</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <article key={project.slug} className="content-card">
              <p className="text-muted-foreground text-sm">{project.category}</p>
              <h3 className="mt-1 text-xl font-medium">{project.title}</h3>
              <p className="text-muted-foreground mt-2">{project.summary}</p>
              <Button asChild variant="ghost" className="mt-3 px-0">
                <Link href={`/case-study/${project.slug}`}>
                  View Case Study <ChevronRight className="ml-1 size-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
