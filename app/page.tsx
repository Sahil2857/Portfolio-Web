import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
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
      <Services />
      <Skills />
      <Projects />
      <Results />
      <Testimonials />
      <Contact />

      <Footer />
    </main>
  );
}
