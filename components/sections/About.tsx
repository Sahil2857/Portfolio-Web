"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    const journey = [
        {
            year: "2022 - 2026",
            role: "Computer Engineering",
            company: "Mumbai University",
            desc: "Focusing on software engineering, system design, and advanced computing technologies."
        }
    ];

    return (
        <section id="about" ref={containerRef} className="relative py-32 bg-background overflow-hidden">
            {/* Parallax Background Elements */}
            <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0 pointer-events-none opacity-30">
                <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
            </motion.div>

            <div className="mx-auto max-w-5xl px-6 relative z-10">
                <div className="text-center mb-24 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-[0.3em] shadow-[0_0_15px_rgba(56,189,248,0.1)]">
                            03 // BACKGROUND
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-sans font-bold tracking-tighter"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40 pb-2">
                            My Journey
                        </span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Glowing Vertical Line */}
                    <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-accent/30 to-transparent transform md:-translate-x-1/2 shadow-[0_0_10px_rgba(56,189,248,0.3)]" />

                    <div className="space-y-16">
                        {journey.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.2, type: "spring", stiffness: 50 }}
                                className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Glowing Node */}
                                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary transform -translate-x-[0.3rem] md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(56,189,248,0.8)]" />

                                {/* Content Panel */}
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                                    <div className="neon-glow group relative">
                                        <div className="relative glass-panel rounded-2xl p-8 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2">
                                            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-lg text-xs font-mono tracking-widest mb-4">
                                                {item.year}
                                            </span>
                                            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                                {item.role}
                                            </h3>
                                            <h4 className="text-sm font-semibold text-muted-foreground tracking-widest mb-4 uppercase">
                                                {item.company}
                                            </h4>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
