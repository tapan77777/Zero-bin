import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { StatsStrip } from "./components/StatsStrip";
import { HowItWorks } from "./components/HowItWorks";
import { WasteCards } from "./components/WasteCards";
import { TrustSection } from "./components/TrustSection";
import { CTABlock } from "./components/CTABlock";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { PageTransition } from "./components/PageTransition";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <PageTransition>
        <main style={{ background: "var(--bg)" }}>
          <Nav />
          <Hero />
          <StatsStrip />
          <HowItWorks />
          <WasteCards />
          <TrustSection />
          <CTABlock />
          <Footer />
        </main>
      </PageTransition>
    </>
  );
}
