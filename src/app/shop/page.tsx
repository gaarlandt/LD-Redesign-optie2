import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop",
  description: "Bekijk de Let's Dog shop voor trainingsmateriaal en meer.",
};

export default function ShopPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16 md:pt-20">
        <section className="bg-brand-beige py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-8 h-8 text-brand-green" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-black mb-6">
                Shop
              </h1>
              <p className="text-lg text-brand-black/60 mb-10">
                Onze shop wordt binnenkort gelanceerd. Hier vind je straks
                trainingsmateriaal, snacks en meer — allemaal geselecteerd door
                onze trainers.
              </p>
              <Button
                asChild
                className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-6 text-base font-semibold rounded-full shadow-lg transition-all duration-200 group"
              >
                <a
                  href="https://app.letsdog.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ga naar de app
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
