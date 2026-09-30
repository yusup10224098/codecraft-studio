import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DarkModeToggle({ isDark, toggleDarkMode, className = "" }) {
  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      className={`relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-secondary transition-colors duration-300 hover:border-primary hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-accent dark:hover:text-accent ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center"
        >
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
