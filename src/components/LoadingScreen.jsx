import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-white dark:bg-slate-950"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={logo} alt="CodeCraft Studio" className="h-24 w-24 object-contain sm:h-28 sm:w-28" />
          </motion.div>
          <div className="h-1 w-40 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-primary via-accent to-primary"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
