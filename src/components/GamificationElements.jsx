
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging classes
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// 1. Holographic Border Container
export function HoloCard({ children, className, title }) {
    return (
        <div className={cn("relative group bg-black/80 border border-cyan-500/30 p-1", className)}>
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-cyan-400" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-cyan-400" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-cyan-400" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-cyan-400" />

            {/* Title Tab */}
            {title && (
                <div className="absolute -top-4 left-4 bg-black border border-cyan-500/30 px-3 py-0.5 text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    {title}
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 h-full">{children}</div>

            {/* Grid Background Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
        </div>
    );
}

// 2. Cyber Button
export function CyberButton({ children, onClick, className, variant = "primary" }) {
    const isPrimary = variant === "primary";

    return (
        <button
            onClick={onClick}
            className={cn(
                "relative text-sm font-mono uppercase tracking-widest px-8 py-3 transition-all group overflow-hidden",
                "before:absolute before:inset-0 before:skew-x-12 before:transition-transform before:duration-300 active:scale-95",
                isPrimary
                    ? "text-black font-bold hover:text-white"
                    : "text-cyan-400 hover:text-black",
                className
            )}
        >
            {/* Background Shape */}
            <div className={cn(
                "absolute inset-0 transform -skew-x-12 border border-cyan-500",
                isPrimary ? "bg-cyan-500 group-hover:bg-black/50" : "bg-transparent group-hover:bg-cyan-500"
            )} />

            {/* Text */}
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </button>
    );
}

// 3. Stat Bar
export function StatBar({ label, value, max = 100, color = "bg-cyan-400" }) {
    return (
        <div className="w-full font-mono text-xs">
            <div className="flex justify-between mb-1 text-cyan-500/80 uppercase">
                <span>{label}</span>
                <span>{value}/{max}</span>
            </div>
            <div className="h-2 w-full bg-gray-900 border border-gray-700 skew-x-[-12deg] p-[1px]">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(value / max) * 100}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={cn("h-full", color)}
                />
            </div>
        </div>
    );
}

// 4. Glitch Text
export function GlitchText({ text, className }) {
    return (
        <span className={cn("relative inline-block group", className)}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-400 opacity-0 group-hover:opacity-70 group-hover:animate-pulse translate-x-[2px]">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-purple-400 opacity-0 group-hover:opacity-70 group-hover:animate-pulse -translate-x-[2px]">
                {text}
            </span>
        </span>
    );
}
