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
    <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-semibold">
          Sahil Kadam
        </Link>
        <nav className="hidden gap-1 md:flex">
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
