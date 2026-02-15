import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../data/certifications";
import { HoloCard } from "./GamificationElements";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
    return (
        <section id="certifications" className="py-20 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-purple-900/10 blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400 font-mono tracking-widest uppercase hologram">
                    &lt; LICENSES_&_PERMITS /&gt;
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CERTIFICATIONS.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <HoloCard className="h-full group hover:border-purple-400/50 transition-colors" title={`AUTH_KEY_0${i + 1}`}>
                                <div className="p-6 flex flex-col h-full items-center text-center">
                                    <div className="w-20 h-20 mb-6 bg-white/5 rounded-full p-4 border border-cyan-500/30 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-500 relative overflow-hidden">
                                        {/* Simple fallback icon if image fails or for style */}
                                        <Award className="w-full h-full text-cyan-400 group-hover:text-purple-400" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white font-mono mb-2 group-hover:text-purple-300 transition-colors">{cert.title}</h3>
                                    <p className="text-cyan-500/80 font-mono text-sm mb-1">{cert.issuer}</p>
                                    <p className="text-gray-500 text-xs font-mono mb-6">ISSUED: {cert.date}</p>

                                    <div className="mt-auto pt-4 border-t border-dashed border-gray-700/50 w-full flex justify-between items-center">
                                        <span className="text-[10px] text-gray-600 font-mono uppercase tracking-wider">ID: {cert.credentialId.slice(0, 8)}...</span>
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-cyan-500 hover:text-white flex items-center gap-1 text-xs font-mono"
                                        >
                                            VERIFY <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </HoloCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
