import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { services } from "../data/services";
import SectionHeading from "./SectionHeading";

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services({ preview = false, showHeading = true }) {
  const list = preview ? services.slice(0, 6) : services;

  return (
    <section className={preview ? "section-padding" : "pt-4 pb-24"} id="services">
      <div className="container-custom flex flex-col gap-14">
        {showHeading && (
          <SectionHeading
            eyebrow="Layanan Kami"
            title="Solusi Website untuk Setiap Kebutuhan Bisnis"
            description="Dari UMKM hingga korporasi, kami menghadirkan layanan pengembangan website yang disesuaikan dengan skala dan tujuan bisnis Anda."
          />
        )}

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col gap-5 rounded-2xl border border-slate-100 bg-white p-7 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white dark:bg-accent/10 dark:text-accent">
                  <Icon size={22} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-secondary dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-2 border-t border-slate-100 pt-4 dark:border-white/10">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
                    >
                      <Check size={14} className="shrink-0 text-primary dark:text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-2.5 dark:text-accent"
                >
                  Diskusikan Proyek
                  <ArrowUpRight size={15} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {preview && (
          <div className="flex justify-center">
            <Link to="/services" className="btn-secondary">
              Lihat Semua Layanan
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
