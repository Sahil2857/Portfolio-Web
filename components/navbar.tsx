"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
    { name: "HOME", href: "#", index: "01" },
    { name: "WORK", href: "#projects", index: "02" },
    { name: "ABOUT", href: "#about", index: "03" },
    { name: "CONTACT", href: "#contact", index: "04" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4">
            <motion.header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={clsx(
                    "pointer-events-auto transition-all duration-500 rounded-full",
                    isScrolled ? "glass-panel py-3 px-6" : "bg-transparent py-4 px-2"
                )}
            >
                <div className="flex items-center gap-8 md:gap-14">
                    {/* Logo Box */}
                    <Link href="#" className="neon-glow group flex items-center justify-center shrink-0">
                        <div className="w-10 h-10 rounded-full bg-background border border-primary/30 flex items-center justify-center text-primary font-bold tracking-widest text-xs z-10">
                            SK
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="group relative px-2 py-1 flex items-center"
                            >
                                <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                    {link.name}
                                </span>
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground z-20 relative"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5 hover:text-primary transition-colors" />}
                    </button>
                </div>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 10 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="absolute top-full right-0 mt-4 min-w-[200px] glass-panel rounded-2xl overflow-hidden md:hidden shadow-2xl border border-primary/20"
                        >
                            <nav className="flex flex-col p-4 gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="flex items-center p-3 rounded-xl text-sm font-semibold tracking-widest uppercase text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="w-8 text-[10px] font-mono opacity-50">{link.index}</span>
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </div>
    );
}
