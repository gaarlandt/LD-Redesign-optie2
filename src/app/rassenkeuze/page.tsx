import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Heart, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Rassenkeuze Hulp",
  description:
    "Welk ras past bij jouw leven? Onze rassenkeuze tool helpt je de juiste match te vinden.",
};

export default function RassenkeuzePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16 md:pt-20">
        <section className="bg-brand-beige py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-black">
                  Welk ras past bij jou?
                </h1>
                <p className="text-lg text-brand-black/60 leading-relaxed">
                  De keuze voor een hondenras is een van de belangrijkste
                  beslissingen. Onze rassenkeuze tool helpt je een match te
                  vinden die past bij jouw leefstijl, gezin en ervaring.
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
                    Start de rassenkeuze
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/LD-Redesign-optie2/images/happy-dog-park.png"
                  alt="Verschillende hondenrassen in het park"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-brand-black text-center mb-12">
              Hoe werkt het?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Search,
                  title: "Beantwoord vragen",
                  description:
                    "Over je leefstijl, woonsituatie, ervaring met honden en wat je belangrijk vindt.",
                },
                {
                  icon: Heart,
                  title: "Ontvang matches",
                  description:
                    "Op basis van je antwoorden krijg je een selectie rassen die bij je passen.",
                },
                {
                  icon: Shield,
                  title: "Maak een weloverwogen keuze",
                  description:
                    "Lees over elk ras: karakter, zorgbehoeften, gezondheid en trainbaarheid.",
                },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="text-center p-8 rounded-2xl bg-brand-beige/50"
                  >
                    <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7 text-brand-green" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-brand-black mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-brand-black/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
