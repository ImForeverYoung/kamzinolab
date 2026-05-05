import Header from "@/components/header";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Header />
      <Hero />
      <Stats />
      <Footer />
    </main>
  );
}
