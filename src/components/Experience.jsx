import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/experience";
import { HoloCard, CyberButton } from "./GamificationElements";
import { CheckCircle2, CircleDashed } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400 font-mono tracking-widest uppercase hologram">
                    &lt; QUEST_LOG /&gt;
                </h2>

                <div className="space-y-8 relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-cyan-500/20" />

                    {EXPERIENCE.map((exp, i) => {
                        const isCurrent = i === 0;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-16"
                            >
                                {/* Status Icon */}
                                <div className={`absolute left-0 top-0 p-1 rounded-full border-2 bg-black z-10 ${isCurrent ? "border-green-400 text-green-400 animate-pulse" : "border-cyan-500/50 text-cyan-500/50"}`}>
                                    {isCurrent ? <CircleDashed className="w-8 h-8" /> : <CheckCircle2 className="w-8 h-8" />}
                                </div>

                                <HoloCard className={`p-6 ${isCurrent ? "border-green-400/50 bg-green-900/10" : "opacity-80 hover:opacity-100 transition-opacity"}`} title={isCurrent ? "ACTIVE_MISSION" : "MISSION_COMPLETE"}>
                                    <div className="flex flex-col md:flex-row justify-between mb-4 border-b border-cyan-500/20 pb-4">
                                        <div>
                                            <h3 className={`text-xl font-bold font-mono ${isCurrent ? "text-green-400" : "text-white"}`}>
                                                {exp.role}
                                            </h3>
                                            <p className="text-cyan-500 text-sm tracking-wider">{exp.company}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs font-mono text-gray-500">{exp.period}</div>
                                            <div className="inline-block px-2 py-0.5 mt-1 bg-cyan-500/10 text-cyan-400 text-[10px] border border-cyan-500/30 rounded">
                                                XP +{(EXPERIENCE.length - i) * 1000}
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 text-gray-400 text-sm font-mono">
                                        {exp.description.map((desc, idx) => (
                                            <li key={idx} className="flex gap-2">
                                                <span className="text-cyan-500/50">&gt;</span> {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </HoloCard>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
