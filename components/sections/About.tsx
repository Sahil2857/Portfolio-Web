"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Wrench, Zap } from "lucide-react";

const valueProps = [
    {
        icon: <Clock className="w-7 h-7" />,
        title: "Save Hours Every Week",
        desc: "I automate Excel reports, data entry, and file processing with Python. Tasks that take your team hours run in seconds — without errors.",
    },
    {
        icon: <Wrench className="w-7 h-7" />,
        title: "Tools Built Around Your Workflow",
        desc: "I build Desktop Apps and Telegram Bots that fit exactly how you work — no off-the-shelf software, no workarounds. Just a tool that does the job.",
    },
    {
        icon: <Zap className="w-7 h-7" />,
        title: "Fast Delivery, No Fluff",
        desc: "You get a working solution quickly. I keep communication clear, scope tight, and deliver results you can use on day one.",
    },
];

export function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section id="about" ref={containerRef} className="relative py-32 bg-background overflow-hidden">
            {/* Parallax Background Elements */}
            <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0 pointer-events-none opacity-30">
                <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
            </motion.div>

            <div className="mx-auto max-w-5xl px-6 relative z-10">
                <div className="text-center mb-20 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-[0.3em] shadow-[0_0_15px_rgba(56,189,248,0.1)]">
                            03 // ABOUT
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
                            What I Can Do For You
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        I help businesses and individuals eliminate manual work through smart Python tools — so you save time, reduce errors, and scale faster.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {valueProps.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: i * 0.15, type: "spring", stiffness: 60 }}
                        >
                            <div className="neon-glow group relative h-full">
                                <div className="relative glass-panel rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/50 hover:-translate-y-2">
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {item.desc}
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
