"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
    const [mounted, setMounted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const springConfigSlow = { damping: 40, stiffness: 150 };

    const cursorX = useSpring(-100, springConfig);
    const cursorY = useSpring(-100, springConfig);
    const glowX = useSpring(-100, springConfigSlow);
    const glowY = useSpring(-100, springConfigSlow);

    useEffect(() => {
        setMounted(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
            glowX.set(e.clientX - 150);
            glowY.set(e.clientY - 150);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a') || target.closest('button') || target.classList.contains('group')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, glowX, glowY]);

    if (!mounted) return null;

    return (
        <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-5 h-5 rounded-full border border-primary/50 mix-blend-screen flex items-center justify-center backdrop-blur-sm bg-background/20"
                style={{ x: cursorX, y: cursorY }}
                animate={{
                    scale: isHovered ? 2 : 1,
                    borderColor: isHovered ? "rgba(56, 189, 248, 1)" : "rgba(56, 189, 248, 0.5)"
                }}
            >
                <motion.div
                    className="w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_#38bdf8]"
                    animate={{ scale: isHovered ? 0 : 1 }}
                />
            </motion.div>

            {/* Ambient Glow */}
            <motion.div
                className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full mix-blend-screen opacity-40 blur-[80px] bg-gradient-to-tr from-primary/30 to-accent/30"
                style={{ x: glowX, y: glowY }}
                animate={{
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0.6 : 0.4
                }}
            />
        </div>
    );
}
