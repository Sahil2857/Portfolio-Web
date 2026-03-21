"use client";

import { motion } from "framer-motion";
import { FileSpreadsheet, Filter, MessageSquare, Monitor, Globe } from "lucide-react";

const services = [
    {
        icon: <FileSpreadsheet className="w-8 h-8" />,
        title: "Excel & Data Automation",
        desc: "Repetitive spreadsheet work — auto-reports, formula errors, slow exports — eliminated. Scripts run in seconds and remove the need for manual effort entirely.",
        tag: "Most Popular",
    },
    {
        icon: <Filter className="w-8 h-8" />,
        title: "Data Cleaning & Processing",
        desc: "Messy data cleaned, structured, and export-ready — automatically. Whether it's 500 rows or 50,000, I build scripts that handle it without you lifting a finger.",
        tag: null,
    },
    {
        icon: <MessageSquare className="w-8 h-8" />,
        title: "Telegram Bots",
        desc: "A bot that takes orders, sends notifications, delivers files, or handles customer messages — running 24/7 without you. Built to your exact use case.",
        tag: null,
    },
    {
        icon: <Monitor className="w-8 h-8" />,
        title: "Desktop Applications",
        desc: "Windows software built for your specific workflow — billing, inventory, payroll, or custom tools. Replaces spreadsheets with a proper system that saves daily time.",
        tag: null,
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Web Scraping",
        desc: "Product prices, leads, listings, or any public data — collected automatically and delivered as a clean, ready-to-use report. No manual browsing required.",
        tag: null,
    },
];

export function Services() {
    return (
        <section id="services" className="py-32 relative bg-background overflow-hidden border-t border-white/5">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-0 w-full h-[600px] bg-accent/5 blur-[150px] -translate-y-1/2 pointer-events-none" />

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
                            04 // SERVICES
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
                            Services I Offer
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        Pick a service, describe your task, and I&apos;ll deliver a working solution — fast.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="h-full"
                        >
                            <div className="neon-glow group relative h-full">
                                <div className="relative glass-panel rounded-2xl p-8 h-full border border-primary/20 bg-background/40 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(56,189,248,0.15)]">
                                    {service.tag && (
                                        <span className="absolute top-6 right-6 inline-block px-3 py-1 bg-primary/10 border border-primary/30 text-primary rounded-lg text-[10px] font-mono tracking-widest uppercase">
                                            {service.tag}
                                        </span>
                                    )}
                                    <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold font-sans text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {service.desc}
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
