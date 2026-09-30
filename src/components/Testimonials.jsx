import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="section-padding overflow-hidden" id="testimonials">
      <div className="container-custom flex flex-col gap-14">
        <SectionHeading
          eyebrow="Testimoni Klien"
          title="Apa Kata Mereka Tentang CodeCraft Studio"
          description="Kepuasan klien adalah prioritas kami. Berikut pengalaman nyata dari mereka yang telah bekerja sama dengan kami."
        />
      </div>

      <div className="relative mt-4 flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          className="flex w-max gap-6 pl-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="glass-card flex w-80 shrink-0 flex-col gap-4 p-6 sm:w-96"
            >
              <Quote className="text-primary/20 dark:text-accent/20" size={32} />
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star key={starIndex} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="mt-2 flex items-center gap-3 border-t border-slate-100 pt-4 dark:border-white/10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-secondary dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
