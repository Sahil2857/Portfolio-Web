import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/ui/site-header";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/site-data";

type CaseStudyPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-shell">
        <div className="hero-card p-8">
        <p className="text-muted-foreground text-sm">{project.category} Case Study</p>
        <h1 className="mt-1 text-4xl font-semibold">{project.title}</h1>
        <p className="text-muted-foreground mt-3 max-w-3xl">{project.summary}</p>
        </div>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="content-card">
            <h2 className="text-2xl font-medium">Problem</h2>
            <p className="text-muted-foreground mt-2">{project.problem}</p>
          </article>
          <article className="content-card">
            <h2 className="text-2xl font-medium">Solution</h2>
            <p className="text-muted-foreground mt-2">{project.solution}</p>
          </article>
        </section>

        <section className="mt-5 grid gap-5 md:grid-cols-2">
          <article className="content-card">
            <h2 className="text-2xl font-medium">Impact</h2>
            <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-1">
              {project.impact.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
          <article className="content-card">
            <h2 className="text-2xl font-medium">Stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border px-3 py-1 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </section>

        <div className="mt-10 flex gap-3">
          <Button asChild>
            <Link href="mailto:kadamsahil1920@gmail.com">Contact Me</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
