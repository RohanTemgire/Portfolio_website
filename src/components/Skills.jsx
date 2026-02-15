import { motion } from "framer-motion";
import { SKILLS } from "../data/skills";
import { HoloCard } from "./GamificationElements";

export function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400 font-mono tracking-widest uppercase hologram">
                    &lt; SKILL_TREE /&gt;
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {SKILLS.map((skill, i) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            <div className="relative group cursor-pointer">
                                {/* Hexagon Shape (CSS Clip-path would be ideal, using simple box for now with cyber styling) */}
                                <div className="w-32 h-32 bg-black/80 border border-cyan-500/30 flex flex-col items-center justify-center p-2 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all clip-path-hex">
                                    <div className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300">
                                        {skill.charAt(0)}
                                    </div>
                                    <div className="text-[10px] text-center font-mono text-cyan-500 uppercase">
                                        {skill}
                                    </div>

                                    {/* Level Dots */}
                                    <div className="flex gap-0.5 mt-2">
                                        {[1, 2, 3].map(d => <div key={d} className="w-1 h-1 bg-cyan-400 rounded-full" />)}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
