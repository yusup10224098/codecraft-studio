import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Layanan"
        eyebrow="Layanan Kami"
        title="Solusi Website Lengkap untuk Bisnis Anda"
        description="Kami menyediakan berbagai layanan pengembangan website yang dapat disesuaikan dengan kebutuhan dan skala bisnis Anda."
      />
      <Services showHeading={false} />
      <Pricing />
      <FAQ />
      <CTASection />
    </>
  );
}
