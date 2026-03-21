"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Github, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await fetch("https://formsubmit.co/ajax/kadamsahil1920@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: "New Transmission from Portfolio",
                }),
            });
            setIsSuccess(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => {
                setIsSuccess(false);
            }, 5000);
        } catch (error) {
            console.error("Submission failed:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 relative bg-background overflow-hidden border-t border-white/5">
            {/* Ambient Background */}
            <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-accent/5 blur-[200px] -translate-y-1/2 pointer-events-none rounded-full" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

                    {/* Left Column: Form Setup */}
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-[0.3em] shadow-[0_0_15px_rgba(56,189,248,0.1)] mb-6">
                                07 // CONTACT
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-black tracking-tighter text-foreground mb-6 leading-none">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-primary/50">
                                    Let&apos;s Build
                                </span>
                                <br />
                                Something.
                            </h2>
                            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
                                Got a task that&apos;s eating your time? Tell me what you need — I&apos;ll send a plan and quote within 24 hours.
                            </p>
                        </motion.div>

                        <div className="relative glass-panel rounded-3xl p-8 border border-primary/20 bg-background/50 shadow-[0_0_40px_rgba(56,189,248,0.05)]">
                            {/* Inner Ambient Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none rounded-3xl" />

                            <AnimatePresence mode="wait">
                                {!isSuccess ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        onSubmit={handleSubmit}
                                        className="relative space-y-6"
                                    >
                                        <div className="space-y-2 group">
                                            <Input
                                                required
                                                placeholder="Your Name"
                                                className="bg-background/40 border border-border/50 rounded-xl px-4 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary text-foreground placeholder:text-muted-foreground/50 h-14 text-sm font-mono transition-all group-hover:border-primary/50 group-hover:bg-primary/5"
                                                name="name"
                                                value={formData.name}
                                                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                                            />
                                        </div>
                                        <div className="space-y-2 group">
                                            <Input
                                                required
                                                type="email"
                                                placeholder="Your Email"
                                                className="bg-background/40 border border-border/50 rounded-xl px-4 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary text-foreground placeholder:text-muted-foreground/50 h-14 text-sm font-mono transition-all group-hover:border-primary/50 group-hover:bg-primary/5"
                                                name="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                                            />
                                        </div>
                                        <div className="space-y-2 group">
                                            <Textarea
                                                required
                                                placeholder="Describe your project or task..."
                                                className="min-h-[150px] bg-background/40 border border-border/50 rounded-xl px-4 py-4 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary text-foreground placeholder:text-muted-foreground/50 text-sm font-mono resize-none transition-all group-hover:border-primary/50 group-hover:bg-primary/5"
                                                name="message"
                                                value={formData.message}
                                                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full relative group overflow-hidden bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-background hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] rounded-xl h-14 text-sm font-bold tracking-[0.2em] font-mono uppercase transition-all duration-300 mt-2"
                                        >
                                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-3 relative z-10">
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                                                    />
                                                    SENDING...
                                                </span>
                                            ) : (
                                                <span className="flex items-center justify-center gap-3 relative z-10">
                                                    SEND MESSAGE <ArrowRight className="w-4 h-4" />
                                                </span>
                                            )}
                                        </Button>
                                        <p className="text-center text-[11px] text-muted-foreground/50 font-mono tracking-wider mt-3">
                                            ✦ I usually reply within a few hours
                                        </p>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center text-center justify-center py-20"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                                        >
                                            <div className="relative">
                                                <div className="absolute inset-0 animate-ping opacity-20 rounded-full bg-accent" />
                                                <CheckCircle2 className="w-20 h-20 text-accent mb-8 relative z-10 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
                                            </div>
                                        </motion.div>
                                        <h3 className="text-3xl font-sans font-bold mb-4 text-foreground">Message Received!</h3>
                                        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed font-mono">
                                            Thanks for reaching out! I&apos;ll review your project and reply within 24 hours.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Column: Details Setup */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col lg:pl-16 justify-center mt-12 lg:mt-0"
                    >
                        {/* Status Indicator */}
                        <div className="neon-glow inline-flex items-center gap-4 mb-16 border border-primary/20 rounded-xl px-5 py-3 bg-primary/5 w-fit shadow-[0_0_15px_rgba(56,189,248,0.1)]">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary shadow-[0_0_8px_#38bdf8]"></span>
                            </span>
                            <span className="text-xs font-mono font-bold tracking-widest uppercase text-primary">Available for New Projects</span>
                        </div>

                        <div className="space-y-12">
                            <div className="group">
                                <div className="flex items-center gap-3 mb-3">
                                    <Mail className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
                                    <h4 className="text-xs font-mono font-semibold tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors">Email</h4>
                                </div>
                                <a href="mailto:kadamsahil1920@gmail.com" className="text-2xl md:text-3xl font-sans font-bold text-foreground hover:text-primary transition-colors w-fit block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary/50 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform">
                                    kadamsahil1920@gmail.com
                                </a>
                            </div>

                            <div className="group">
                                <div className="flex items-center gap-3 mb-3">
                                    <MapPin className="w-4 h-4 text-accent/70 group-hover:text-accent transition-colors" />
                                    <h4 className="text-xs font-mono font-semibold tracking-widest uppercase text-muted-foreground group-hover:text-accent transition-colors">Location</h4>
                                </div>
                                <p className="text-2xl md:text-3xl font-sans font-bold text-foreground">
                                    Mumbai, IND
                                </p>
                            </div>

                            <div className="pt-8 border-t border-primary/10">
                                <h4 className="text-xs font-mono font-semibold tracking-widest uppercase text-muted-foreground mb-6">Find Me On</h4>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/in/sahil-kadam-5267sd/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-background border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:-translate-y-1">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="https://github.com/Sahil2857" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-background border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:-translate-y-1">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.instagram.com/heyitz_sahil04/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-background border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:-translate-y-1">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
