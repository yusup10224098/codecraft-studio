import PageHeader from "../components/PageHeader";
import Portfolio from "../components/Portfolio";
import CTASection from "../components/CTASection";

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Portofolio"
        eyebrow="Portofolio Kami"
        title="Karya Terbaik yang Telah Kami Kembangkan"
        description="Jelajahi berbagai proyek website yang telah kami kerjakan untuk klien dari beragam industri dan skala bisnis."
      />
      <Portfolio />
      <CTASection />
    </>
  );
}
