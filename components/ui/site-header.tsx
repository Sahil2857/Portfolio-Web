import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Case Study", href: "/case-study" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="group">
          <span className="text-sm uppercase tracking-[0.24em] text-cyan-200/70 transition group-hover:text-cyan-100">
            Sahil Kadam
          </span>
          <p className="text-xs text-muted-foreground">Automation Engineer</p>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((item) => (
            <Button key={item.name} asChild variant="ghost" size="sm">
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
