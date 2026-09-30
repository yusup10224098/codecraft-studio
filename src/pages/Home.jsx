import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { workProcess } from "../data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Services preview showHeading />

      {/* Work process */}
      <section className="section-padding bg-slate-50 dark:bg-white/[0.02]">
        <div className="container-custom flex flex-col gap-14">
          <SectionHeading
            eyebrow="Alur Kerja"
            title="Proses Kerja yang Transparan & Terstruktur"
            description="Kami memastikan setiap tahapan pengerjaan berjalan jelas, terukur, dan melibatkan Anda secara penuh."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workProcess.map((process, index) => (
              <Reveal key={process.id} delay={index * 0.1}>
                <div className="group relative flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
                  <span className="text-4xl font-bold text-primary/15 transition-colors duration-300 group-hover:text-primary/30 dark:text-accent/20">
                    {process.step}
                  </span>
                  <h3 className="text-lg font-semibold text-secondary dark:text-white">
                    {process.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {process.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Portfolio preview />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
    </>
  );
}
