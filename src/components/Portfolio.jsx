import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { portfolioProjects, portfolioCategories } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Portfolio({ preview = false }) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects = useMemo(() => {
    const base =
      activeCategory === "Semua"
        ? portfolioProjects
        : portfolioProjects.filter((project) => project.category === activeCategory);
    return preview ? base.slice(0, 3) : base;
  }, [activeCategory, preview]);

  return (
    <section className="section-padding" id="portfolio">
      <div className="container-custom flex flex-col gap-12">
        <div className="flex flex-col items-center gap-8">
          <SectionHeading
            eyebrow="Portofolio"
            title="Proyek yang Telah Kami Wujudkan"
            description="Beberapa contoh website yang telah kami kembangkan untuk berbagai jenis klien dan industri."
          />

          {!preview && (
            <div className="flex flex-wrap justify-center gap-2">
              {portfolioCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-white shadow-md shadow-primary/25"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-900/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10 dark:border-white/10 dark:bg-white/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-secondary/80 via-secondary/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="m-5 flex items-center gap-1.5 text-sm font-semibold text-white">
                      Lihat Detail <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <span className="badge-eyebrow w-fit !py-1 !text-[10px]">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-secondary dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {preview && (
          <div className="flex justify-center">
            <Link to="/portfolio" className="btn-secondary">
              Lihat Semua Portofolio
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
