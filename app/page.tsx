import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { CustomCursor } from "@/components/custom-cursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-cyan-500/30 selection:text-cyan-50 relative overflow-hidden">
      <CustomCursor />

      {/* Background ambient grid */}
      <div className="fixed inset-0 z-[-1] ambient-grid pointer-events-none opacity-50" />

      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </main>
  );
}
