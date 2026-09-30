import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Kontak"
        eyebrow="Hubungi Kami"
        title="Mari Diskusikan Proyek Website Anda"
        description="Tim kami siap membantu mewujudkan website profesional yang sesuai dengan kebutuhan bisnis Anda."
      />
      <Contact />
    </>
  );
}
