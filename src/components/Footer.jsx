import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, socialLinks, contactInfo } from "../data/site";
import { services } from "../data/services";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-secondary text-slate-300 dark:border-white/10">
      <div className="container-custom grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <Link to="/" className="w-fit" aria-label="CodeCraft Studio - Beranda">
            <Logo size="md" />
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Mitra digital terpercaya untuk membangun website profesional bagi UMKM,
            perusahaan, startup, organisasi, hingga personal branding Anda.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Navigasi
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className="text-sm text-slate-400 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Layanan
          </h3>
          <ul className="flex flex-col gap-3">
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link
                  to="/services"
                  className="text-sm text-slate-400 transition-colors hover:text-accent"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Kontak
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-sm text-slate-400">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-400">
              <Mail size={18} className="shrink-0 text-accent" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-accent">
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-400">
              <Phone size={18} className="shrink-0 text-accent" />
              <a href={contactInfo.whatsappUrl} className="hover:text-accent">
                {contactInfo.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {year} CodeCraft Studio. Seluruh hak cipta dilindungi.</p>
          <p>Dibuat dengan React, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
