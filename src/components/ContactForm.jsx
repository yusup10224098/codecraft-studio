import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2, User, Mail, Phone, MessageSquare } from "lucide-react";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "Website Company Profile",
  "Website UMKM",
  "Landing Page",
  "Website Portofolio",
  "Website Sekolah",
  "Website Toko Online",
  "Maintenance Website",
  "SEO Optimization",
  "Lainnya",
];

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Nama lengkap wajib diisi.";
  } else if (values.name.trim().length < 3) {
    errors.name = "Nama minimal 3 karakter.";
  }

  if (!values.email.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Format email tidak valid.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Nomor WhatsApp wajib diisi.";
  } else if (!/^[0-9+\s-]{9,15}$/.test(values.phone)) {
    errors.phone = "Nomor telepon tidak valid.";
  }

  if (!values.service) {
    errors.service = "Silakan pilih jenis layanan.";
  }

  if (!values.message.trim()) {
    errors.message = "Pesan wajib diisi.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Pesan minimal 10 karakter.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...validate({ ...values, [name]: value }) }));
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
      message: true,
    });

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    // Simulasi pengiriman form (tidak ada backend pada demo ini)
    setTimeout(() => {
      setStatus("success");
      setValues(initialValues);
      setTouched({});
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-11 py-3.5 text-sm text-secondary outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-primary dark:bg-white/5 dark:text-white ${
      touched[field] && errors[field]
        ? "border-red-400 focus:border-red-400"
        : "border-slate-200 dark:border-white/10"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-secondary dark:text-white">
            Nama Lengkap
          </label>
          <div className="relative">
            <User size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Nama Anda"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass("name")}
            />
          </div>
          {touched.name && errors.name && (
            <p className="text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-secondary dark:text-white">
            Email
          </label>
          <div className="relative">
            <Mail size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="nama@email.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass("email")}
            />
          </div>
          {touched.email && errors.email && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-secondary dark:text-white">
            Nomor WhatsApp
          </label>
          <div className="relative">
            <Phone size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="0812-3456-7890"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass("phone")}
            />
          </div>
          {touched.phone && errors.phone && (
            <p className="text-xs text-red-500">{errors.phone}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-sm font-medium text-secondary dark:text-white">
            Jenis Layanan
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`rounded-xl border bg-white px-4 py-3.5 text-sm text-secondary outline-none transition-colors duration-200 focus:border-primary dark:bg-white/5 dark:text-white ${
              touched.service && errors.service
                ? "border-red-400 focus:border-red-400"
                : "border-slate-200 dark:border-white/10"
            }`}
          >
            <option value="">Pilih layanan</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {touched.service && errors.service && (
            <p className="text-xs text-red-500">{errors.service}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-secondary dark:text-white">
          Pesan
        </label>
        <div className="relative">
          <MessageSquare size={17} className="absolute left-4 top-4 text-slate-400" />
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Ceritakan kebutuhan website Anda..."
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputClass("message")} resize-none`}
          />
        </div>
        {touched.message && errors.message && (
          <p className="text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
        whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
        className="btn-primary mt-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "submitting" ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Loader2 size={18} className="animate-spin" />
              Mengirim Pesan...
            </motion.span>
          ) : status === "success" ? (
            <motion.span
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 size={18} />
              Pesan Terkirim!
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Send size={18} />
              Kirim Pesan
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
}
