import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, FolderOpen } from "lucide-react";
import { useState } from "react";
import { PROJECTS } from "../data/projects";
import { HoloCard } from "./GamificationElements";

const categories = ["All", "Data Engineering", "GenAI", "ML", "Web3"];

export function Projects() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = PROJECTS.filter(
        (project) => filter === "All" || project.category === filter
    );

    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-10 text-center text-cyan-400 font-mono tracking-widest uppercase hologram">
                    &lt; MISSION_FILES /&gt;
                </h2>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider clip-path-slant transition-all border ${filter === cat
                                ? "bg-cyan-500 text-black border-cyan-500 font-bold"
                                : "bg-black/50 text-cyan-500 border-cyan-500/30 hover:bg-cyan-500/10"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.title}
                            >
                                <HoloCard className="h-full hover:border-cyan-400 transition-colors group" title={`FILE_0${i + 1}`}>
                                    {/* Image Placeholder */}
                                    <div className="h-40 bg-black/50 relative overflow-hidden border-b border-cyan-500/20 group-hover:border-cyan-400/50 transition-colors">
                                        {project.image ? (
                                            <>
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                                                />
                                                <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay group-hover:bg-transparent transition-colors" />
                                            </>
                                        ) : (
                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-cyan-500/30 font-mono text-xs">
                                                <FolderOpen className="w-12 h-12 mb-2 opacity-50" />
                                                [ENCRYPTED_DATA_VISUAL]
                                            </div>
                                        )}
                                        {/* Scanline overlay */}
                                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(6,182,212,0.1)_50%)] bg-[size:4px_4px] pointer-events-none z-10" />
                                    </div>

                                    <div className="p-6 flex flex-col h-[calc(100%-160px)]">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="px-2 py-1 text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                                                {project.category?.toUpperCase() || "PROJECT"}
                                            </span>
                                            <div className="flex gap-2">
                                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-white transition-colors" title="View Code">
                                                    <Github className="w-5 h-5" />
                                                </a>
                                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-white transition-colors" title="View Live">
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors font-mono tracking-tighter">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-6 flex-grow font-sans leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tech.map((t) => (
                                                <span key={t} className="px-1.5 py-0.5 text-[10px] font-mono bg-cyan-900/20 text-cyan-300 border border-cyan-500/20">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </HoloCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
