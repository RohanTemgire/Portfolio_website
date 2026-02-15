
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal as TerminalIcon, Maximize2, Minus } from "lucide-react";
import { PROFILE } from "../data/profile";
import { SKILLS } from "../data/skills";

export function RetroTerminal({ isOpen, onClose }) {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([
        { type: "system", content: "WELCOME TO ROHAN_OS_V2.4" },
        { type: "system", content: "TYPE 'help' FOR A LIST OF COMMANDS." },
    ]);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [history, isOpen]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, { type: "user", content: cmd }];

        switch (trimmedCmd) {
            case "help":
                newHistory.push({
                    type: "system",
                    content: (
                        <div className="space-y-1">
                            <p>AVAILABLE COMMANDS:</p>
                            <p className="text-cyan-400">  about    - View bio data</p>
                            <p className="text-purple-400">  skills   - List technical capabilities</p>
                            <p className="text-green-400">  contact  - Display comms channels</p>
                            <p className="text-yellow-400">  clear    - Clear terminal</p>
                        </div>
                    ),
                });
                break;
            case "about":
                newHistory.push({ type: "system", content: PROFILE.bio });
                break;
            case "skills":
                newHistory.push({
                    type: "system",
                    content: "LOADED MODULES: " + SKILLS.slice(0, 8).join(", ") + "...",
                });
                break;
            case "contact":
                newHistory.push({
                    type: "system",
                    content: `EMAIL: ${PROFILE.email} | GITHUB: ${PROFILE.github}`,
                });
                break;
            case "clear":
                setHistory([]);
                return;
            case "sudo":
                newHistory.push({ type: "error", content: "ACCESS DENIED: ADMIN PRIVILEGES REQUIRED." });
                break;
            case "":
                break;
            default:
                newHistory.push({ type: "error", content: `COMMAND NOT FOUND: ${trimmedCmd}` });
        }

        setHistory(newHistory);
        setInput("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleCommand(input);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    className="fixed bottom-0 left-0 right-0 h-[40vh] bg-black/95 border-t-2 border-cyan-500 z-[100] shadow-[0_-10px_40px_rgba(6,182,212,0.3)] flex flex-col font-mono text-sm md:text-base"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-2 bg-cyan-900/20 border-b border-cyan-500/30">
                        <div className="flex items-center gap-2 text-cyan-400">
                            <TerminalIcon className="w-4 h-4" />
                            <span className="font-bold tracking-widest">TERMINAL_UPLINK</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="text-cyan-500 hover:text-white"><Minus className="w-4 h-4" /></button>
                            <button className="text-cyan-500 hover:text-white"><Maximize2 className="w-4 h-4" /></button>
                            <button onClick={onClose} className="text-red-500 hover:text-red-400"><X className="w-4 h-4" /></button>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="flex-1 p-4 overflow-y-auto font-mono scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent">
                        {history.map((line, i) => (
                            <div key={i} className="mb-2">
                                {line.type === "user" ? (
                                    <div className="flex gap-2">
                                        <span className="text-green-500">guest@rohan-os:~$</span>
                                        <span className="text-white">{line.content}</span>
                                    </div>
                                ) : line.type === "error" ? (
                                    <div className="text-red-500">{line.content}</div>
                                ) : (
                                    <div className="text-cyan-300/80 leading-relaxed whitespace-pre-wrap">{line.content}</div>
                                )}
                            </div>
                        ))}
                        <div ref={bottomRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-black border-t border-cyan-500/30 flex items-center gap-2">
                        <span className="text-green-500">guest@rohan-os:~$</span>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0"
                            autoFocus
                            placeholder="Type 'help'..."
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
