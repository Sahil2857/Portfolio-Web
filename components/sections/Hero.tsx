"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// 3D Automation Core Component
function AutomationCore() {
    const meshRef = useRef<THREE.Mesh>(null);
    const wireframeRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
        if (wireframeRef.current) {
            wireframeRef.current.rotation.x = state.clock.elapsedTime * -0.1;
            wireframeRef.current.rotation.y = state.clock.elapsedTime * -0.2;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={wireframeRef} scale={1.8}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#38bdf8"
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </mesh>
            <mesh ref={meshRef} scale={1.2}>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial
                    color="#09090b"
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    metalness={0.9}
                    roughness={0.1}
                    distort={0.4}
                    speed={2}
                />
            </mesh>

            <pointLight position={[10, 10, 10]} intensity={1.5} color="#38bdf8" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#d946ef" />
            <ambientLight intensity={0.2} />
        </Float>
    );
}

export function Hero() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 bg-background">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-60">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <AutomationCore />
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

            <motion.div
                style={{ y, opacity }}
                className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10"
            >

                {/* Left Side: Typography & Content */}
                <div className="flex flex-col items-start text-left lg:pt-8 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#38bdf8]" />
                        Available for Work
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl sm:text-7xl lg:text-8xl font-sans font-bold leading-[1.1] tracking-tighter mb-6"
                    >
                        <span className="text-foreground block">Hi, I&apos;m Sahil</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent block tracking-tight pb-2">Kadam.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg sm:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed font-sans font-medium"
                    >
                        I build <span className="text-foreground text-glow font-bold">Automation Scripts</span>, <span className="text-foreground text-glow font-bold">Desktop Apps</span>, and <span className="text-foreground text-glow font-bold">Telegram Bots</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-4 w-full sm:w-auto"
                    >
                        <Link href="#projects" className="flex-1 sm:flex-none">
                            <button className="neon-glow group relative w-full sm:w-auto">
                                <span className="relative z-10 flex items-center justify-center gap-2 px-8 py-4 bg-background border border-primary/50 text-foreground font-semibold tracking-widest uppercase text-xs rounded-lg transition-all group-hover:bg-primary/10 group-hover:border-primary">
                                    View Projects
                                </span>
                            </button>
                        </Link>
                        <Link href="#contact" className="flex-1 sm:flex-none">
                            <button className="relative w-full sm:w-auto px-8 py-4 bg-secondary/50 border border-border text-foreground font-semibold tracking-widest uppercase text-xs rounded-lg transition-all hover:bg-secondary hover:border-foreground/30">
                                Contact Me
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Side: Portrait Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center lg:items-end order-1 lg:order-2 perspective-1000"
                >
                    <div className="relative w-72 h-[28rem] sm:w-[24rem] sm:h-[32rem] glass-panel rounded-2xl p-2 group hover:shadow-[0_0_40px_rgba(56,189,248,0.2)] transition-shadow duration-500">
                        <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5 bg-secondary/50">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
                            <Image
                                src="/My Pic.jpeg"
                                alt="Sahil Kadam Portrait"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] contrast-125 brightness-110"
                                sizes="(max-width: 640px) 18rem, 24rem"
                                priority
                            />
                        </div>

                        {/* Floating Tech Labels */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-6 top-1/4 glass-panel px-4 py-2 rounded-lg border border-primary/30 shadow-[0_0_15px_rgba(56,189,248,0.2)] z-20"
                        >
                            <span className="text-[10px] font-mono text-primary uppercase tracking-wider font-bold">Python</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-6 bottom-1/4 glass-panel px-4 py-2 rounded-lg border border-accent/30 shadow-[0_0_15px_rgba(217,70,239,0.2)] z-20"
                        >
                            <span className="text-[10px] font-mono text-accent uppercase tracking-wider font-bold">Automation</span>
                        </motion.div>
                    </div>

                    {/* Caption row under the photo */}
                    <div className="flex items-center justify-between w-full sm:w-[24rem] mt-6 px-2">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-mono">Based in Maharashtra, IN</span>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_5px_#38bdf8]"></span>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-primary font-mono">System: Online</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
