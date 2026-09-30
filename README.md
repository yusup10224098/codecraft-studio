# CodeCraft Studio — Website Business Plan

Website profesional untuk **CodeCraft Studio**, perusahaan jasa pembuatan
website untuk UMKM, perusahaan, startup, organisasi, dan personal branding.
Dibuat sebagai proyek Business Plan mata kuliah Kewirausahaan.

## 🛠️ Teknologi

- **React 19 + Vite** — build tool super cepat
- **Tailwind CSS v4** — utility-first styling
- **React Router DOM v7** — client-side routing
- **Framer Motion** — animasi halus & interaktif
- **Lucide React** — ikon modern

## 🎨 Desain

| Elemen | Nilai |
|---|---|
| Primary | `#2563EB` |
| Secondary | `#1E293B` |
| Accent | `#38BDF8` |
| Background | `#FFFFFF` (+ mode gelap) |
| Font | Poppins (Google Fonts) |

## 📁 Struktur Folder

```
src/
 ├── assets/          # aset statis
 ├── components/      # komponen reusable (Navbar, Hero, Services, dst.)
 ├── pages/            # Home, About, Services, Portfolio, Contact, NotFound
 ├── layouts/          # MainLayout (Navbar + Footer + tombol mengambang)
 ├── hooks/            # useDarkMode, useScrollPosition, useScrollToTop, useCountUp
 ├── data/             # sumber data (array) untuk semua konten — tanpa hardcode di JSX
 ├── App.jsx
 └── main.jsx
```

## ✨ Fitur

- Fully responsive (mobile, tablet, desktop)
- Dark mode toggle (tersimpan di localStorage)
- Smooth scroll & scroll-reveal animation (Framer Motion)
- Hover animation di kartu, tombol, dan navigasi
- Loading animation saat pertama kali membuka website
- Active navbar indicator (animated pill) + mobile menu
- Tombol Back to Top & WhatsApp mengambang
- Form kontak dengan validasi client-side lengkap
- Halaman Portfolio dengan filter kategori
- Google Maps placeholder siap diintegrasikan
- Komponen & data 100% reusable (array + mapping, tanpa hardcode JSX)

## 🚀 Menjalankan Project

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

Build untuk produksi:

```bash
npm run build
npm run preview
```

## 📄 Halaman

- `/` — Home (Hero, Layanan, Proses Kerja, Portofolio, Testimoni, Harga, FAQ, CTA)
- `/about` — Tentang Kami (visi misi, statistik, nilai perusahaan)
- `/services` — Semua Layanan + Paket Harga + FAQ
- `/portfolio` — Semua Portofolio dengan filter kategori
- `/contact` — Form Kontak, Info Kontak, Peta, Tombol WhatsApp

---
Dibuat dengan ❤️ oleh CodeCraft Studio — Business Plan Kewirausahaan.
