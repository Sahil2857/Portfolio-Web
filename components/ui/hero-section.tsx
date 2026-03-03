import Link from "next/link";
import { ArrowRight, ChartNoAxesCombined, DatabaseZap, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  { value: "40+", label: "Automation workflows delivered" },
  { value: "80%", label: "Manual effort eliminated in key reports" },
  { value: "24h", label: "Typical turnaround for workflow upgrades" }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="ambient-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="page-shell section-shell relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="accent-chip">Automation Portfolio</span>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Advanced systems that turn messy operations into fast digital workflows.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            I build production-ready automation for reporting, operations, and internal tools with
            Python, data engineering, and UX-focused desktop products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/projects">
                Explore Projects
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <DatabaseZap className="size-4 text-cyan-200" />
              ETL + Data Cleanup
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ChartNoAxesCombined className="size-4 text-cyan-200" />
              Dashboard Pipelines
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Gauge className="size-4 text-cyan-200" />
              Process Optimization
            </div>
          </div>
        </div>

        <div className="surface glow-border rounded-3xl p-4 md:p-6">
          <div className="grid gap-4">
            {metrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <p className="metric-value">{metric.value}</p>
                <p className="metric-label">{metric.label}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-cyan-200/20 bg-slate-950/60 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Current Focus</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Building high-reliability automation layers for reporting-heavy teams that need
              faster, cleaner decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
