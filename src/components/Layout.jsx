import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Users, Code, Cpu, Activity, Wifi, Command, Award } from "lucide-react";
import { CyberButton, GlitchText } from "./GamificationElements";
import { PROFILE } from "../data/profile";
import { RetroTerminal } from "./RetroTerminal";

export function Layout({ children }) {
    const [activeTab, setActiveTab] = useState("hero");
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(timer);
    }, []);

    const navItems = [
        { id: "hero", icon: Users, label: "CHAR_STATS" },
        { id: "about", icon: Terminal, label: "BIO_DATA" },
        { id: "experience", icon: Activity, label: "QUEST_LOG" },
        { id: "projects", icon: Code, label: "MISSION_FILES" },
        { id: "certifications", icon: Award, label: "LICENSES" },
        { id: "skills", icon: Cpu, label: "SKILL_TREE" },
        { id: "contact", icon: Wifi, label: "COMMS_UPLINK" },
    ];

    const handleNav = (id) => {
        setActiveTab(id);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-black text-cyan-400 font-mono selection:bg-cyan-500/30 overflow-x-hidden">
            {/* Visual Effects */}
            <div className="scanline" />
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />

            {/* Top Status Bar */}
            <div className="fixed top-0 left-0 right-0 h-10 bg-black/90 border-b border-cyan-500/30 z-50 flex items-center justify-between px-4 text-xs tracking-widest uppercase">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2 text-green-400">
                        <Wifi className="w-3 h-3 animate-pulse" /> SYSTEM_ONLINE
                    </span>
                    <span className="text-gray-500 hidden sm:inline">v2.4.0-build-stable</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="hidden sm:inline">{PROFILE.location.toUpperCase()}</span>
                    <span className="text-white">{time}</span>
                    <button
                        onClick={() => setIsTerminalOpen(!isTerminalOpen)}
                        className={`p-1 hover:bg-cyan-500/20 rounded transition-colors ${isTerminalOpen ? "text-cyan-400 bg-cyan-500/10" : "text-gray-500"}`}
                        title="Toggle Terminal"
                    >
                        <Command className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="flex pt-10">
                {/* Side Navigation (Desktop) */}
                <nav className="fixed left-0 top-10 bottom-0 w-64 bg-black/80 border-r border-cyan-500/30 hidden md:flex flex-col p-4 z-40 backdrop-blur-sm">
                    <div className="mb-8 p-4 border border-cyan-500/20 text-center relative group cursor-default">
                        <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-cyan-500" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-cyan-500" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-cyan-500" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-cyan-500" />
                        <GlitchText text="PLAYER_ONE" className="text-xl font-bold text-white mb-1" />
                        <div className="text-xs text-cyan-500/70">CLASS: DATA_ENGINEER</div>
                    </div>

                    <div className="space-y-2 flex-grow">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNav(item.id)}
                                className={`w-full text-left px-4 py-3 flex items-center gap-3 border transition-all ${activeTab === item.id
                                    ? "bg-cyan-500/10 border-cyan-500 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                                    : "border-transparent text-gray-500 hover:text-cyan-400 hover:bg-cyan-500/5 hover:border-cyan-500/30"
                                    }`}
                            >
                                <item.icon className="w-4 h-4" />
                                <span className="text-sm">{item.label}</span>
                                {activeTab === item.id && <motion.div layoutId="nav-indicator" className="ml-auto w-1.5 h-1.5 bg-cyan-400 rounded-full" />}
                            </button>
                        ))}
                    </div>

                    <div className="text-[10px] text-gray-600 text-center">
                        SYS_ID: {PROFILE.github.split("/").pop()}
                    </div>
                </nav>

                {/* Mobile Navigation (Bottom) */}
                <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/90 border-t border-cyan-500/30 z-50 flex justify-around p-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNav(item.id)}
                            className={`p-2 rounded-lg ${activeTab === item.id ? "text-cyan-400 bg-cyan-500/10" : "text-gray-500"}`}
                        >
                            <item.icon className="w-5 h-5" />
                        </button>
                    ))}
                </nav>

                {/* Main Content Area */}
                <main className="flex-1 md:ml-64 p-4 md:p-8 min-h-screen relative overflow-hidden">
                    {/* Decorative Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(30,30,30,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,30,30,0.5)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none -z-10" />

                    {children}
                </main>
            </div>

            <RetroTerminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
        </div>
    );
}
