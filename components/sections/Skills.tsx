"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Terminal, Table, FileSpreadsheet, Globe, Database, Monitor, FileCode2, Filter, Network, Cog } from "lucide-react";
import React, { useRef } from "react";

const toolkit = [
    { name: "Python Automation", icon: <Terminal className="w-8 h-8" /> },
    { name: "Pandas Data", icon: <Table className="w-8 h-8" /> },
    { name: "Excel (OpenPyXL)", icon: <FileSpreadsheet className="w-8 h-8" /> },
    { name: "Web Scraping", icon: <Globe className="w-8 h-8" /> },
    { name: "SQLite", icon: <Database className="w-8 h-8" /> },
    { name: "Desktop Apps", icon: <Monitor className="w-8 h-8" /> },
    { name: "File Processing", icon: <FileCode2 className="w-8 h-8" /> },
    { name: "Data Cleaning", icon: <Filter className="w-8 h-8" /> },
    { name: "Multi-Scrapers", icon: <Network className="w-8 h-8" /> },
    { name: "Auto Systems", icon: <Cog className="w-8 h-8" /> },
];

function TiltCard({ tool, index }: { tool: typeof toolkit[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative w-full h-32 md:h-40 rounded-2xl glass-panel border border-primary/20 bg-background/50 hover:bg-background/80 transition-colors cursor-pointer perspective-1000 flex flex-col items-center justify-center gap-3 overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ transform: "translateZ(-10px)" }}
            />

            <motion.div
                className="text-muted-foreground group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_15px_rgba(56,189,248,0)] group-hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                style={{ transform: "translateZ(30px)" }}
            >
                {tool.icon}
            </motion.div>

            <motion.span
                className="text-xs font-mono font-semibold tracking-wider text-muted-foreground group-hover:text-foreground text-center px-2"
                style={{ transform: "translateZ(20px)" }}
            >
                {tool.name}
            </motion.span>
        </motion.div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="py-32 relative bg-background overflow-hidden border-t border-white/5">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
                <div className="ambient-grid absolute inset-0 opacity-30 mix-blend-screen" />
            </div>

            <div className="mx-auto max-w-6xl px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center md:items-start justify-between">
                    {/* Header */}
                    <div className="md:w-1/3 text-center md:text-left sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-[0.3em] shadow-[0_0_15px_rgba(56,189,248,0.1)] mb-6">
                                05 // CAPABILITIES
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter text-foreground mb-6">
                                <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40">
                                    Toolkit & Stack
                                </span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-sm mx-auto md:mx-0">
                                The tools I use to solve real business problems — fast and reliably.
                            </p>

                            <div className="mt-10 p-6 glass-panel rounded-xl border border-primary/10 bg-primary/[0.02]">
                                <h3 className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">System Metrics</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-xs mb-1 font-mono">
                                            <span className="text-foreground">Python Automation</span>
                                            <span className="text-primary">95%</span>
                                        </div>
                                        <div className="w-full bg-background/50 h-1.5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "95%" }}
                                                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                                className="bg-primary h-full shadow-[0_0_10px_#38bdf8]"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs mb-1 font-mono">
                                            <span className="text-foreground">Data Processing</span>
                                            <span className="text-accent">88%</span>
                                        </div>
                                        <div className="w-full bg-background/50 h-1.5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "88%" }}
                                                transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                                                className="bg-accent h-full shadow-[0_0_10px_#d946ef]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Interactive 3D Grid */}
                    <div className="md:w-2/3">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {toolkit.map((tool, index) => (
                                <TiltCard key={tool.name} tool={tool} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
