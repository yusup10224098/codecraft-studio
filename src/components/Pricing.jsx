import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";
import { pricingPlans } from "../data/pricing";
import SectionHeading from "./SectionHeading";

export default function Pricing() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-white/[0.02]" id="pricing">
      <div className="container-custom flex flex-col gap-14">
        <SectionHeading
          eyebrow="Paket Harga"
          title="Investasi yang Sepadan dengan Pertumbuhan Bisnis"
          description="Pilih paket yang sesuai dengan kebutuhan dan skala bisnis Anda. Semua paket dapat disesuaikan lebih lanjut."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col gap-6 rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-secondary text-white shadow-2xl shadow-secondary/30 lg:scale-105"
                  : "border border-slate-200 bg-white shadow-sm shadow-slate-900/5 dark:border-white/10 dark:bg-white/5"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-secondary shadow-md">
                  <Sparkles size={12} />
                  Paling Populer
                </span>
              )}

              <div>
                <h3
                  className={`text-lg font-semibold ${
                    plan.highlighted ? "text-white" : "text-secondary dark:text-white"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    plan.highlighted ? "text-slate-300" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="flex items-end gap-1.5">
                {plan.price !== "Custom" && (
                  <span
                    className={`text-2xl font-bold ${plan.highlighted ? "text-white" : "text-secondary dark:text-white"}`}
                  >
                    Rp
                  </span>
                )}
                <span
                  className={`text-4xl font-bold tracking-tight ${
                    plan.highlighted ? "text-white" : "text-secondary dark:text-white"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`pb-1 text-sm ${plan.highlighted ? "text-slate-400" : "text-slate-500 dark:text-slate-400"}`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="flex flex-col gap-3 border-t border-dashed pt-6 border-slate-200 dark:border-white/10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${plan.highlighted ? "text-accent" : "text-primary dark:text-accent"}`}
                    />
                    <span className={plan.highlighted ? "text-slate-200" : "text-slate-600 dark:text-slate-300"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={
                  plan.highlighted
                    ? "btn-primary mt-2 !bg-accent !text-secondary !shadow-accent/25 hover:!bg-accent/90"
                    : "btn-secondary mt-2"
                }
              >
                Pilih Paket
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
