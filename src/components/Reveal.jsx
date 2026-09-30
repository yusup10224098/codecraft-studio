import { motion } from "framer-motion";

/**
 * Reusable scroll-reveal wrapper. Wrap any block of content to fade + slide it
 * into view the first time it enters the viewport.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.6,
  className = "",
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
