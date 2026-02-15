import { motion } from "framer-motion";
import { PROFILE } from "../data/profile";
import { EXPERIENCE } from "../data/experience";
import { PROJECTS } from "../data/projects";

export function About() {
    const yearsExp = 3; // Approximate from 2022 internship to 2025 (present)
    const totalProjects = PROJECTS.length + 12; // Placeholder logic based on resume's "20+"

    return (
        <section id="about" className="py-20 relative">
            {/* Decorative Background for About */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-cyan-900/10 blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400 font-mono tracking-widest uppercase hologram">
                    &lt; BIO_DATA /&gt;
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-gray-300 space-y-6 leading-relaxed text-lg font-sans border-l-2 border-cyan-500/30 pl-6 bg-white/5 p-6 rounded-r-xl backdrop-blur-sm">
                        <p>
                            Transitioning from Software and Mobile Development to Cloud Engineering, I have spent the last year architecting scalable data ecosystems at LTIMindtree. I build robust ETL pipelines using Azure and Databricks, ensuring high-quality data availability for enterprise analytics.
                        </p>
                        <p>
                            Now, I have pivoted my focus entirely to <strong>Generative AI</strong>. I am building autonomous agents, RAG chatbots, and multi-modal systems, proving that I can not only engineer the data but also the intelligence that drives it. I am keen to apply this full-stack AI expertise to build the next generation of intelligent applications.
                        </p>
                    </div>

                    <div className="mt-8 flex gap-4 justify-center">
                        <div className="p-6 bg-black border border-cyan-500/30 text-center flex-1 max-w-xs hover:bg-cyan-500/10 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                            <h3 className="text-4xl font-bold text-cyan-400 font-mono">~{yearsExp}</h3>
                            <p className="text-xs text-gray-500 mt-2 font-mono uppercase tracking-wider">Years Exp</p>
                        </div>
                        <div className="p-6 bg-black border border-purple-500/30 text-center flex-1 max-w-xs hover:bg-purple-500/10 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-purple-500/50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                            <h3 className="text-4xl font-bold text-purple-400 font-mono">{totalProjects}+</h3>
                            <p className="text-xs text-gray-500 mt-2 font-mono uppercase tracking-wider">Missions Complete</p>
                        </div>
                    </div>
                </motion.div>
            </div >
        </section >
    );
}
