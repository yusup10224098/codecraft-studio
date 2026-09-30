import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, PlayCircle, Sparkles, Layers, Gauge } from "lucide-react";
import { companyStats } from "../data/site";

const floatingCards = [
  { id: 1, icon: Layers, label: "Desain Custom", sub: "100% sesuai brand" },
  { id: 2, icon: Gauge, label: "Performa Cepat", sub: "Skor Lighthouse 90+" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #64748b12 1px, transparent 1px), linear-gradient(to bottom, #64748b12 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="container-custom grid items-center gap-16 lg:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-7">
          <motion.span variants={item} className="badge-eyebrow w-fit">
            <Sparkles size={14} />
            Software House Digital Terpercaya
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.12] tracking-tight text-secondary sm:text-5xl lg:text-[3.4rem] dark:text-white"
          >
            Bangun Website{" "}
            <span className="heading-gradient">Profesional</span> untuk
            Bisnis Anda
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400"
          >
            CodeCraft Studio membantu UMKM, perusahaan, startup, organisasi,
            hingga personal brand tampil meyakinkan di dunia digital lewat
            website yang cepat, modern, dan dirancang untuk hasil nyata.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-primary">
              Konsultasi Gratis
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              <PlayCircle size={18} />
              Lihat Portofolio
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-8 sm:grid-cols-4 dark:border-white/10"
          >
            {companyStats.map((stat) => (
              <div key={stat.id} className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-secondary sm:text-3xl dark:text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500 sm:text-sm dark:text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="glass-card relative overflow-hidden p-6">
            <div className="mb-4 flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-3">
              <div className="h-4 w-3/4 rounded-full bg-gradient-to-r from-primary/40 to-primary/10" />
              <div className="h-4 w-1/2 rounded-full bg-slate-200 dark:bg-white/10" />
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="aspect-square rounded-xl bg-primary/15" />
                <div className="aspect-square rounded-xl bg-accent/20" />
                <div className="aspect-square rounded-xl bg-secondary/10 dark:bg-white/10" />
              </div>
              <div className="mt-5 h-24 rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-transparent" />
              <div className="flex gap-3">
                <div className="h-9 w-24 rounded-full bg-primary" />
                <div className="h-9 w-24 rounded-full border border-slate-200 dark:border-white/10" />
              </div>
            </div>
          </div>

          {floatingCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                whileHover={{ y: -4 }}
                className={`glass-card absolute hidden items-center gap-3 px-4 py-3 sm:flex ${
                  index === 0 ? "-left-10 top-8" : "-right-6 bottom-10"
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-secondary dark:text-white">
                    {card.label}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{card.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
