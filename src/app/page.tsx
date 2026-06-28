import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Features } from "@/components/Features";
import { Agents } from "@/components/Agents";
import { HowItWorks } from "@/components/HowItWorks";
import { Packages } from "@/components/Packages";
import { UseCases } from "@/components/UseCases";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Agents />
      <HowItWorks />
      <Packages />
      <UseCases />
      <CTA />
      <Footer />
    </main>
  );
}
