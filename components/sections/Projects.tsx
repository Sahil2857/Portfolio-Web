"use client";

import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Github, ArrowUpRight, X, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";

const projects = [
    {
        title: "EngineeringNotes Telegram Bot",
        category: "Telegram Bot",
        desc: "A fully functional Telegram bot built to provide engineering students with easy access to study materials, PDFs, notes, and previous year questions. Features an interactive nested menu system for navigating subjects across semesters.",
        tech: ["Python", "python-telegram-bot", "Automation"],
        github: "https://github.com/Sahil2857/EngineeringNotesBot",
        live: "https://t.me/Engineering_Notes_Bot",
        image: "/projects/engineering-bot.png"
    },
    {
        title: "PDF Forge",
        category: "Web Application",
        desc: "A comprehensive PDF management platform built with Next.js and FastAPI. Features high-performance merging, splitting, compression, and advanced PDF processing with an intuitive, modern interface.",
        tech: ["Next.js", "FastAPI", "Python", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/Sahil2857/PDFForge",
        live: "https://pdf-forge-xi.vercel.app/",
        image: "/projects/pdf-forge.png"
    },
    {
        title: "Automation Intelligence Platform",
        category: "Web Application",
        desc: "A professional web-based platform emulating a premium SaaS tool. Helps businesses automate data processing, data cleaning, ad-hoc analysis, and PDF reporting with immersive dynamic analytics.",
        tech: ["Next.js", "FastAPI", "Pandas", "Tailwind CSS"],
        github: "https://github.com/Sahil2857/Automation-Intelligence-Platform",
        live: "https://automated-business-intelligence-das.vercel.app/",
        demoUrl: undefined,
        image: "/projects/automation_intelligence.png"
    },
    {
        title: "RetailDesk Pro",
        category: "Desktop Software",
        desc: "Commercial-style inventory and billing desktop software featuring a billing cart, tax calculations, and Excel export.",
        tech: ["Tkinter", "SQLite", "Pandas"],
        github: "https://github.com/Sahil2857",
        live: "#",
        demoUrl: "/projects/retail-desk-demo.mp4",
        image: "/projects/retail-deskpro.png"
    },
    {
        title: "Data Automation & Dashboarding Scripts",
        category: "Automation Tools",
        desc: "A comprehensive collection of Python automation scripts tailored for automated data extraction, processing, and visual dashboard generation.",
        tech: ["Python", "Pandas", "Automation"],
        github: "https://github.com/Sahil2857",
        live: "#",
        demoUrl: undefined,
        image: "/projects/Automation Scripts.jpg"
    },
    {
        title: "Payroll Plus",
        category: "Desktop Software",
        desc: "A modular desktop application for managing employee payrolls, automated processing, and generating professional PDF payslips.",
        tech: ["CustomTkinter", "SQLite", "Python"],
        github: "https://github.com/Sahil2857",
        live: "#",
        image: "/projects/Payroll Plus.jpg"
    }
];

function ProjectCard({ project, index, onImageClick, onDemoClick }: { project: typeof projects[0]; index: number; onImageClick: (img: string) => void; onDemoClick: (url: string) => void; }) {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;
        const { left, top } = ref.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="h-full"
        >
            <div
                ref={ref}
                onMouseMove={handleMouseMove}
                className="group relative h-full flex flex-col rounded-3xl glass-panel bg-background/40 border border-primary/20 overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(56,189,248,0.15)]"
            >
                {/* Mouse-tracking hover spotlight */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useTransform(
                            [mouseX, mouseY],
                            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(56,189,248,0.1), transparent 40%)`
                        )
                    }}
                />

                {/* Card Image Setup */}
                <div
                    className={`relative w-full aspect-[4/3] sm:aspect-video md:aspect-[4/3] overflow-hidden bg-secondary/30 ${project.image ? 'cursor-pointer' : ''}`}
                    onClick={() => project.image && onImageClick(project.image)}
                >
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:scale-105 transition-transform duration-1000 bg-gradient-to-br from-primary/10 to-transparent">
                            <span className="font-sans text-8xl font-black tracking-tighter mix-blend-overlay">0{index + 1}</span>
                        </div>
                    )}
                    {/* Inner glowing overlay for images */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                </div>

                {/* Card Content Setup */}
                <div className="flex flex-col flex-1 p-6 relative z-10 -mt-12 md:-mt-16">
                    <span className="inline-block px-3 py-1 bg-background/80 backdrop-blur-md border border-primary/20 text-primary rounded-lg text-[10px] font-mono tracking-widest uppercase self-start mb-4 shadow-[0_0_10px_rgba(56,189,248,0.1)]">
                        {project.category}
                    </span>
                    <h3 className="text-2xl font-bold font-sans tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                        {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                            <span key={t} className="px-2 py-1 text-[10px] font-mono tracking-widest text-muted-foreground bg-primary/5 rounded border border-primary/10 transition-colors group-hover:border-primary/20">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t border-primary/10">
                        {project.github !== "#" ? (
                            <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-4 h-4" /> Code
                            </Link>
                        ) : (
                            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/30 cursor-not-allowed">
                                <Github className="w-4 h-4" /> N/A
                            </span>
                        )}
                        {project.live !== "#" ? (
                            <Link href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors group/link">
                                Live Preview <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </Link>
                        ) : project.demoUrl ? (
                            <button onClick={() => onDemoClick(project.demoUrl as string)} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors group/btn">
                                Live Demo <Play className="w-4 h-4 fill-primary/20 group-hover/btn:scale-110 transition-transform" />
                            </button>
                        ) : (
                            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/30 cursor-not-allowed">
                                Demo N/A
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function Projects() {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
    const [selectedDemo, setSelectedDemo] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (selectedImage || selectedDemo) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedImage]);

    return (
        <section id="projects" className="py-32 relative bg-background overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/5 blur-[150px] -translate-y-1/2 pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-[0.3em] shadow-[0_0_15px_rgba(56,189,248,0.1)] mb-6">
                            05 // SHOWCASE
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter text-foreground mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40">
                                Selected Works
                            </span>
                        </h2>
                        <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
                            A showcase of desktop applications, rigorous automation scripts, and scalable systems designed for maximum efficiency.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link href="#" className="neon-glow group inline-flex items-center gap-2">
                            <span className="flex items-center justify-center gap-2 bg-background border border-primary/30 px-6 py-3 rounded-xl text-xs font-bold tracking-widest uppercase text-primary transition-all group-hover:bg-primary/10">
                                View Archive <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </span>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} onImageClick={setSelectedImage} onDemoClick={setSelectedDemo} />
                    ))}
                </div>
            </div>

            {/* Futuristic Image Preview Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 md:p-12 cursor-pointer"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-6xl w-full aspect-[4/3] md:aspect-video bg-background/50 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(56,189,248,0.2)] border border-primary/30 cursor-auto"
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-6 right-6 z-20 p-3 bg-background/50 hover:bg-primary/20 hover:text-primary backdrop-blur-xl rounded-full text-foreground transition-all border border-primary/30"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="absolute inset-0 bg-primary/5 mix-blend-screen pointer-events-none z-10" />
                            <Image
                                src={selectedImage}
                                alt="Project Preview"
                                fill
                                className="object-contain p-2"
                                sizes="(max-width: 1200px) 100vw, 1200px"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Demo Modal with macOS style window */}
            <AnimatePresence>
                {selectedDemo && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        onClick={() => setSelectedDemo(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 md:p-12 cursor-pointer"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full bg-background rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-primary/20 flex flex-col cursor-auto"
                        >
                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-secondary/80 border-b border-primary/10 backdrop-blur-md">
                                <div className="flex gap-2">
                                    <button onClick={() => setSelectedDemo(null)} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors shadow-[0_0_10px_rgba(239,68,68,0.4)]" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.4)]" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
                                </div>
                                <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 select-none">
                                    LIVE DEMO
                                </div>
                                <div className="w-12" /> {/* Spacer for centering */}
                            </div>

                            {/* Video Container */}
                            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                                <video
                                    src={selectedDemo}
                                    autoPlay
                                    loop
                                    muted
                                    controls
                                    className="w-full h-full object-contain"
                                    onError={(e) => console.error("Video error:", e)}
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
