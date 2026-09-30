import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { contactInfo, socialLinks } from "../data/site";

const infoItems = [
  {
    id: 1,
    icon: MapPin,
    label: "Alamat Studio",
    value: contactInfo.address,
  },
  {
    id: 2,
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    id: 3,
    icon: Phone,
    label: "Telepon / WhatsApp",
    value: contactInfo.phone,
    href: contactInfo.whatsappUrl,
  },
];

export default function Contact() {
  return (
    <section className="section-padding" id="contact">
      <div className="container-custom flex flex-col gap-14">
        <SectionHeading
          eyebrow="Hubungi Kami"
          title="Mari Wujudkan Website Impian Anda"
          description="Ceritakan kebutuhan proyek Anda, tim kami akan segera merespons dan memberikan solusi terbaik."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3" delay={0.05}>
            <div className="glass-card h-full p-7 sm:p-9">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal className="flex flex-col gap-6 lg:col-span-2" delay={0.15}>
            <div className="flex flex-col gap-5 rounded-2xl border border-slate-100 bg-white p-7 dark:border-white/10 dark:bg-white/5">
              {infoItems.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent">
                      <Icon size={19} />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        {info.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-secondary dark:text-white">
                        {info.value}
                      </p>
                    </div>
                  </div>
                );
                return info.href ? (
                  <a key={info.id} href={info.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={info.id}>{content}</div>
                );
              })}

              <div className="flex items-center gap-3 border-t border-slate-100 pt-5 dark:border-white/10">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-white/10 dark:text-slate-400 dark:hover:border-accent dark:hover:text-accent"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Google Maps placeholder */}
            <div className="relative flex min-h-[220px] flex-1 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 text-center dark:border-white/10 dark:bg-white/5">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #94a3b830 1px, transparent 1px), linear-gradient(to bottom, #94a3b830 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative flex flex-col items-center gap-2 px-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                  <MapPin size={22} />
                </span>
                <p className="text-sm font-semibold text-secondary dark:text-white">
                  Peta Lokasi Studio
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  (Placeholder Google Maps — integrasikan Google Maps Embed API di sini)
                </p>
              </div>
            </div>

            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <MessageCircle size={18} />
              Chat via WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
