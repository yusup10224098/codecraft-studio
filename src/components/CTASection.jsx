import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { contactInfo } from "../data/site";

export default function CTASection() {
  return (
    <section className="px-5 pb-24 sm:px-8 lg:px-10">
      <Reveal>
        <div className="container-custom relative overflow-hidden rounded-3xl bg-secondary px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center gap-6">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Siap Membawa Bisnis Anda ke Ranah Digital?
            </h2>
            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              Konsultasikan kebutuhan website Anda secara gratis bersama tim
              CodeCraft Studio. Wujudkan website profesional impian Anda hari ini.
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary !bg-accent !text-secondary !shadow-accent/30 hover:!bg-accent/90">
                Mulai Proyek Anda
                <ArrowUpRight size={18} />
              </Link>
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40"
              >
                <MessageCircle size={18} />
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
