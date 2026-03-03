import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-foreground text-background border-t border-background/10">
            <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="font-serif italic text-background/80 tracking-wide">
                            © {new Date().getFullYear()} Sahil Kadam.
                        </span>
                    </div>

                    <div className="flex items-center gap-8 font-sans font-semibold tracking-widest uppercase text-xs text-background/80">
                        <Link href="#" className="hover:text-background transition-colors flex items-center gap-1 group">
                            Privacy <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                        <Link href="#" className="hover:text-background transition-colors flex items-center gap-1 group">
                            Terms <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
