import Header from "@/components/header";
import PiezometricsProject from "@/components/piezometrics-project";
import Footer from "@/components/footer";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col w-full">
      <Header />
      <PiezometricsProject />
      <Footer />
    </main>
  );
}
