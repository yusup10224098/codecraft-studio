import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-8xl font-bold text-primary/20 dark:text-accent/20"
      >
        404
      </motion.span>
      <h1 className="text-2xl font-bold text-secondary sm:text-3xl dark:text-white">
        Halaman Tidak Ditemukan
      </h1>
      <p className="max-w-md text-sm text-slate-600 dark:text-slate-400">
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      <Link to="/" className="btn-primary">
        <Home size={18} />
        Kembali ke Beranda
      </Link>
      <button
        type="button"
        onClick={() => window.history.back()}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-primary dark:hover:text-accent"
      >
        <ArrowLeft size={15} />
        Halaman sebelumnya
      </button>
    </section>
  );
}
