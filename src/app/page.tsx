import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { AdsBanner } from "@/components/sections/AdsBanner";
import { Features } from "@/components/sections/Features";
import { Packages } from "@/components/sections/Packages";
import { Pricing } from "@/components/sections/Pricing";
import { Security } from "@/components/sections/Security";
import { MobileCTA } from "@/components/sections/MobileCTA";
import { Footer } from "@/components/sections/Footer";
import { LiveActivity } from "@/components/ui/LiveActivity";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <Analytics />
      <Header />
      <main className="flex-1">
        <Hero />
        <AdsBanner />
        <Features />
        <Packages />
        <Pricing />
        <Security />
        <MobileCTA />
      </main>
      <Footer />
      <LiveActivity />
    </>
  );
}
