import { Camera, Briefcase, AtSign, Code } from "lucide-react";

export const navLinks = [
  { id: 1, label: "Beranda", path: "/" },
  { id: 2, label: "Tentang", path: "/about" },
  { id: 3, label: "Layanan", path: "/services" },
  { id: 4, label: "Portofolio", path: "/portfolio" },
  { id: 5, label: "Kontak", path: "/contact" },
];

export const socialLinks = [
  { id: 1, icon: Camera, label: "Instagram", url: "https://instagram.com/codecraftstudio" },
  { id: 2, icon: Briefcase, label: "LinkedIn", url: "https://linkedin.com/company/codecraftstudio" },
  { id: 3, icon: AtSign, label: "Twitter / X", url: "https://twitter.com/codecraftstudio" },
  { id: 4, icon: Code, label: "GitHub", url: "https://github.com/codecraftstudio" },
];

export const companyStats = [
  { id: 1, value: "120+", label: "Proyek Selesai" },
  { id: 2, value: "95+", label: "Klien Puas" },
  { id: 3, value: "5+", label: "Tahun Pengalaman" },
  { id: 4, value: "24/7", label: "Support Prioritas" },
];

export const workProcess = [
  {
    id: 1,
    step: "01",
    title: "Konsultasi",
    description: "Diskusi kebutuhan, tujuan bisnis, dan target audiens Anda secara mendalam.",
  },
  {
    id: 2,
    step: "02",
    title: "Perancangan",
    description: "Tim kami merancang wireframe dan desain UI/UX sesuai identitas brand Anda.",
  },
  {
    id: 3,
    step: "03",
    title: "Pengembangan",
    description: "Website dibangun dengan teknologi modern, cepat, dan aman menggunakan best practice.",
  },
  {
    id: 4,
    step: "04",
    title: "Peluncuran",
    description: "Pengujian menyeluruh sebelum website resmi diluncurkan dan siap digunakan.",
  },
];

export const teamValues = [
  {
    id: 1,
    title: "Kualitas Utama",
    description: "Setiap baris kode dan detail desain kami kerjakan dengan standar profesional tinggi.",
  },
  {
    id: 2,
    title: "Kolaboratif",
    description: "Kami melibatkan klien di setiap tahap agar hasil akhir benar-benar sesuai visi bisnis.",
  },
  {
    id: 3,
    title: "Tepat Waktu",
    description: "Komitmen pada timeline yang telah disepakati tanpa mengorbankan kualitas pengerjaan.",
  },
  {
    id: 4,
    title: "Inovatif",
    description: "Selalu mengikuti perkembangan teknologi web terkini untuk hasil yang kompetitif.",
  },
];

export const contactInfo = {
  address: "Jl. Teknologi Kreatif No. 88, Pangkalan Kerinci, Riau, Indonesia",
  email: "hello@codecraftstudio.id",
  phone: "+62 812-3456-7890",
  whatsappUrl: "https://wa.me/6281234567890",
};
