"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh M.",
        role: "Small Business Owner",
        feedback: "Sahil automated our entire monthly report process. What used to take my team 2 days now runs in under 10 minutes. Completely worth it.",
        service: "Excel Automation",
        rating: 5,
    },
    {
        name: "Priya S.",
        role: "Freelance Consultant",
        feedback: "He built a Telegram bot for my client management in 3 days — exactly what I described, no revisions needed. Very professional and fast.",
        service: "Telegram Bot",
        rating: 5,
    },
    {
        name: "Akash T.",
        role: "Retail Store Manager",
        feedback: "The billing software he built replaced our paper system completely. No more calculation mistakes, and generating invoices takes seconds now.",
        service: "Desktop Application",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-32 relative bg-background overflow-hidden border-t border-white/5">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-accent/5 blur-[150px] -translate-y-1/2 pointer-events-none rounded-full" />

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
                            07 // FEEDBACK
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
                            Client Feedback
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="mt-4 text-muted-foreground text-lg max-w-md mx-auto leading-relaxed"
                    >
                        What clients say after working with me.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="h-full"
                        >
                            <div className="neon-glow group relative h-full">
                                <div className="relative glass-panel rounded-2xl p-8 h-full border border-primary/20 bg-background/40 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(56,189,248,0.15)] flex flex-col">
                                    {/* Quote icon */}
                                    <Quote className="w-8 h-8 text-primary/20 mb-6 shrink-0" />

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: t.rating }).map((_, s) => (
                                            <span key={s} className="text-primary text-sm">★</span>
                                        ))}
                                    </div>

                                    {/* Feedback text */}
                                    <p className="text-foreground/80 text-sm leading-relaxed flex-1 mb-6 italic">
                                        &ldquo;{t.feedback}&rdquo;
                                    </p>

                                    {/* Attribution */}
                                    <div className="pt-5 border-t border-primary/10">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-foreground font-semibold text-sm">{t.name}</p>
                                                <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
                                            </div>
                                            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-lg text-[10px] font-mono tracking-widest uppercase">
                                                {t.service}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
