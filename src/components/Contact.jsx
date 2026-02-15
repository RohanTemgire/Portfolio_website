import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { PROFILE } from "../data/profile";
import { HoloCard, CyberButton } from "./GamificationElements";

export function Contact() {
    return (
        <section id="contact" className="py-20 min-h-[50vh] flex items-center justify-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto px-4 text-center z-10 w-full">
                <HoloCard title="COMMS_UPLINK">
                    <div className="p-8">
                        <h2 className="text-3xl font-bold mb-6 font-mono text-white">
                            ESTABLISH <span className="text-cyan-400">CONNECTION</span>
                        </h2>
                        <p className="text-gray-400 mb-8 font-mono text-sm leading-relaxed">
                            TARGET: {PROFILE.subRole.split("|")[0].trim().toUpperCase()} OPPORTUNITIES<br />
                            STATUS: <span className="text-green-400 animate-pulse">OPEN_FOR_WORK</span>
                        </p>

                        <div className="flex justify-center mb-8">
                            <a href={`mailto:${PROFILE.email}`}>
                                <CyberButton>
                                    <Mail className="w-4 h-4" /> SEND_TRANSMISSION
                                </CyberButton>
                            </a>
                        </div>

                        <div className="flex justify-center gap-6 border-t border-cyan-500/20 pt-8">
                            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors">
                                <div className="p-3 bg-black border border-cyan-500/30 rounded group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.4)] transition-all">
                                    <Github className="w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-mono uppercase tracking-widest">GitHub</span>
                            </a>
                            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors">
                                <div className="p-3 bg-black border border-cyan-500/30 rounded group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.4)] transition-all">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-mono uppercase tracking-widest">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </HoloCard>
            </div>
        </section>
    );
}
