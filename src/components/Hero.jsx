import { motion } from "framer-motion";
import { PROFILE } from "../data/profile";
import { HoloCard, StatBar, CyberButton, GlitchText } from "./GamificationElements";
import { Calculator, Terminal, Cpu } from "lucide-react";

export function Hero() {
    const stats = [
        { label: "PYTHON_MASTERY", value: 95, color: "bg-green-400", icon: Terminal },
        { label: "DATA_ARCH_INT", value: 90, color: "bg-cyan-400", icon: Calculator },
        { label: "GEN_AI", value: 85, color: "bg-purple-400", icon: Cpu },
        { label: "MACHINE_LEARNING", value: 88, color: "bg-blue-400", icon: Terminal },
    ];

    return (
        <section id="hero" className="min-h-[90vh] flex items-center justify-center p-4">
            <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">

                {/* Left: Character Card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <HoloCard title="CHARACTER_PROFILE" className="max-w-md mx-auto relative group">
                        {/* Scanner Effect */}
                        <div className="absolute inset-0 bg-cyan-500/10 z-10 animate-pulse pointer-events-none" />
                        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 z-20 shadow-[0_0_15px_rgba(6,182,212,0.8)] animate-[scanline_3s_linear_infinite]" />

                        <div className="p-4">
                            <div className="aspect-[4/5] overflow-hidden relative border border-cyan-500/30 bg-black">
                                <img
                                    src={PROFILE.avatar}
                                    alt="Character Avatar"
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                />

                                {/* Overlay Data */}
                                <div className="absolute bottom-2 left-2 text-[10px] text-cyan-400 font-mono">
                                    <p>ID: {PROFILE.name.replace(" ", "_").toUpperCase()}</p>
                                    <p>ROLE: {PROFILE.role.toUpperCase()}</p>
                                    <p>LOC: {PROFILE.location.toUpperCase()}</p>
                                </div>
                            </div>

                            <div className="mt-4 space-y-2">
                                <div className="flex justify-between text-xs text-gray-400 font-mono">
                                    <span>LVL: 03</span>
                                    <span>XP: 8,450 / 10,000</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-900 border border-gray-700">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "84%" }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                        className="h-full bg-yellow-400"
                                    />
                                </div>
                            </div>
                        </div>
                    </HoloCard>
                </motion.div>

                {/* Right: Stats & Intro */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <div className="mb-8">
                        <h2 className="text-cyan-500 font-mono text-sm tracking-[0.2em] mb-2 hologram">
                    // SYSTEM_INITIALIZED
                        </h2>
                        <GlitchText
                            text={PROFILE.role.toUpperCase()}
                            className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter"
                        />
                        <p className="text-gray-400 font-mono max-w-lg text-sm md:text-base leading-relaxed border-l-2 border-cyan-500/30 pl-4">
                            {PROFILE.bio}
                        </p>
                    </div>

                    <HoloCard title="ABILITY_STATS" className="p-6 mb-8 bg-black/50">
                        <div className="space-y-4">
                            {stats.map((stat, i) => (
                                <div key={stat.label} className="flex gap-4 items-center">
                                    <stat.icon className="w-4 h-4 text-cyan-500" /> {/* This needs fixing, stat.icon is undefined in the array above */}
                                    <StatBar label={stat.label} value={stat.value} color={stat.color} />
                                </div>
                            ))}
                        </div>
                    </HoloCard>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects">
                            <CyberButton>INITIALIZE_MISSION</CyberButton>
                        </a>
                        <a href={PROFILE.resumeLink} target="_blank" rel="noopener noreferrer">
                            <CyberButton variant="secondary">DOWNLOAD_logs</CyberButton>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
