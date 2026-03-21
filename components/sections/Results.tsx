"use client";

import { motion } from "framer-motion";

const impacts = [
    {
        stat: "8–12",
        unit: "Hrs/Week",
        label: "Saved on average per client",
        sub: "Repetitive data entry, report generation, and file processing — fully automated.",
        color: "primary",
    },
    {
        stat: "50,000+",
        unit: "Rows",
        label: "Processed per script run",
        sub: "A data cleaning script I built handles 50k+ rows in under 2 minutes — no manual work.",
        color: "accent",
    },
    {
        stat: "70%",
        unit: "Less Time",
        label: "Spent on monthly reporting",
        sub: "Clients using my Excel automation scripts generate full reports in minutes, not hours.",
        color: "primary",
    },
    {
        stat: "Zero",
        unit: "Manual Errors",
        label: "In billing & payroll after automation",
        sub: "Formula mistakes and copy-paste errors eliminated completely with structured Python scripts.",
        color: "accent",
    },
    {
        stat: "3x",
        unit: "Faster",
        label: "PDF workflows replaced",
        sub: "Merging, splitting, and compressing PDFs across multiple tools replaced with a single-click solution.",
        color: "primary",
    },
    {
        stat: "24/7",
        unit: "Active",
        label: "Telegram bot handling 100+ daily requests",
        sub: "Students access study materials instantly via bot — no admin effort needed from the owner.",
        color: "accent",
    },
];

export function Results() {
    return (
        <section id="results" className="py-32 relative bg-background overflow-hidden border-t border-white/5">
            {/* Ambient Background */}
            <div className="absolute top-1/2 right-0 w-[700px] h-[700px] bg-primary/5 blur-[180px] -translate-y-1/2 pointer-events-none rounded-full" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-[0.3em] shadow-[0_0_15px_rgba(56,189,248,0.1)]">
                            06 // IMPACT
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40">
                            Results & Impact
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        Specific numbers from real projects — not estimates.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {impacts.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <div className="neon-glow group relative h-full">
                                <div className="relative glass-panel rounded-2xl p-8 h-full border border-primary/20 bg-background/40 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(56,189,248,0.15)]">
                                    <div className="mb-3">
                                        <span className={`text-5xl font-black font-sans tracking-tighter ${item.color === "primary" ? "bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60" : "bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/60"}`}>
                                            {item.stat}
                                        </span>
                                        <span className={`ml-2 text-lg font-bold ${item.color === "primary" ? "text-primary/70" : "text-accent/70"}`}>
                                            {item.unit}
                                        </span>
                                    </div>
                                    <p className="text-foreground/80 text-sm font-semibold mb-2">
                                        {item.label}
                                    </p>
                                    <p className="text-muted-foreground text-xs leading-relaxed">
                                        {item.sub}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
