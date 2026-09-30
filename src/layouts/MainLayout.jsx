import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import WhatsAppButton from "../components/WhatsAppButton";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function MainLayout({ isDark, toggleDarkMode }) {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}
