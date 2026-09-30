import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "../data/site";
import { useScrollPosition } from "../hooks/useScrollPosition";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";

export default function Navbar({ isDark, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollPosition(20);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:bg-slate-950/80"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex h-18 items-center justify-between py-3.5">
        <NavLink to="/" onClick={closeMenu} aria-label="CodeCraft Studio - Beranda">
          <Logo size="sm" />
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-accent"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-primary/10 dark:bg-accent/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <DarkModeToggle isDark={isDark} toggleDarkMode={toggleDarkMode} />
          <NavLink to="/contact" className="btn-primary !px-5 !py-2.5 text-sm">
            Konsultasi Gratis
            <ArrowUpRight size={16} />
          </NavLink>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <DarkModeToggle isDark={isDark} toggleDarkMode={toggleDarkMode} />
          <button
            type="button"
            aria-label="Buka menu navigasi"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-secondary dark:border-white/10 dark:text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden dark:border-white/10 dark:bg-slate-950"
          >
            <ul className="container-custom flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className="btn-primary w-full text-sm"
                >
                  Konsultasi Gratis
                  <ArrowUpRight size={16} />
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
