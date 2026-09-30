import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { companyStats, teamValues } from "../data/site";
import { useCountUp } from "../hooks/useCountUp";

function StatCounter({ value, label }) {
  const { ref, text } = useCountUp(value);
  return (
    <div ref={ref} className="flex flex-col gap-1 text-center">
      <span className="text-3xl font-bold text-white sm:text-4xl">{text}</span>
      <span className="text-xs text-slate-300 sm:text-sm">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <>
      <PageHeader
        breadcrumb="Tentang"
        eyebrow="Tentang Kami"
        title="Mitra Digital untuk Pertumbuhan Bisnis Anda"
        description="CodeCraft Studio adalah software house yang berfokus pada pembuatan website profesional, cepat, dan berorientasi hasil bagi berbagai jenis bisnis."
      />

      <section className="pb-24">
        <div className="container-custom grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="glass-card overflow-hidden p-8">
                <div className="space-y-4">
                  <div className="h-3 w-2/3 rounded-full bg-primary/30" />
                  <div className="h-3 w-1/2 rounded-full bg-slate-200 dark:bg-white/10" />
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-28 rounded-xl bg-gradient-to-br from-primary/20 to-transparent" />
                    <div className="h-28 rounded-xl bg-gradient-to-br from-accent/20 to-transparent" />
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 dark:bg-white/5" />
                  <div className="h-3 w-5/6 rounded-full bg-slate-100 dark:bg-white/5" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <span className="badge-eyebrow w-fit">Cerita Kami</span>
              <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl dark:text-white">
                Dibangun untuk Membantu Bisnis Tumbuh Secara Digital
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
                Sejak awal berdiri, CodeCraft Studio berkomitmen menghadirkan
                website berkualitas tinggi dengan harga yang wajar. Kami percaya
                setiap bisnis — besar maupun kecil — berhak memiliki kehadiran
                digital yang profesional dan meyakinkan.
              </p>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
                Tim kami terdiri dari developer, desainer UI/UX, dan spesialis SEO
                yang berpengalaman menangani berbagai proyek, mulai dari UMKM
                lokal hingga korporasi berskala nasional.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-slate-100 p-5 dark:border-white/10">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent">
                    <Target size={18} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-secondary dark:text-white">Misi Kami</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                      Menghadirkan solusi website yang mudah diakses semua kalangan bisnis.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-slate-100 p-5 dark:border-white/10">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent">
                    <Eye size={18} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-secondary dark:text-white">Visi Kami</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                      Menjadi software house terpercaya nomor satu bagi UMKM Indonesia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-secondary py-16">
        <div className="container-custom grid grid-cols-2 gap-8 sm:grid-cols-4">
          {companyStats.map((stat) => (
            <StatCounter key={stat.id} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom flex flex-col gap-14">
          <SectionHeading
            eyebrow="Nilai Kami"
            title="Prinsip yang Kami Pegang di Setiap Proyek"
            description="Empat nilai inti yang menjadi fondasi dalam setiap pengerjaan proyek website klien kami."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamValues.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-7 dark:border-white/10 dark:bg-white/5"
              >
                <span className="text-sm font-semibold text-primary dark:text-accent">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-semibold text-secondary dark:text-white">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
