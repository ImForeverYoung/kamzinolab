import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedProject from "@/components/featured-project";
import Stats from "@/components/stats";
import Team from "@/components/team";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full overflow-hidden bg-white">
      <Header />
      <Hero />
      <FeaturedProject />
      <Stats />
      <Team />
      <Footer />
    </main>
  );
}
