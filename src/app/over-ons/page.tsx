import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Award, GraduationCap, Heart, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Over Ons",
  description:
    "Leer het team achter Let's Dog kennen. Gecertificeerde trainers, wetenschappelijke methodes, en een passie voor honden.",
};

const values = [
  {
    icon: Heart,
    title: "Welzijn voorop",
    description:
      "Wij werken uitsluitend met welzijnsgerichte methodes. Geen fysieke correcties, geen strafmiddelen.",
  },
  {
    icon: GraduationCap,
    title: "Gecertificeerde expertise",
    description:
      "Alle content is ontwikkeld door gecertificeerde hondengedragstherapeuten met jarenlange ervaring.",
  },
  {
    icon: ShieldCheck,
    title: "Wetenschappelijk onderbouwd",
    description:
      "Onze methodes zijn gebaseerd op de laatste wetenschappelijke inzichten over hondengedrag en leerprocessen.",
  },
  {
    icon: Award,
    title: "Resultaatgericht",
    description:
      "Geen vage beloftes. Concrete stappen die leiden tot zichtbaar resultaat voor jou en je hond.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-brand-beige py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-black">
                  Over Let&apos;s Dog
                </h1>
                <p className="text-lg text-brand-black/60 leading-relaxed">
                  Let&apos;s Dog is gebouwd vanuit de overtuiging dat elke
                  hondenouder toegang verdient tot kwalitatieve, wetenschappelijk
                  onderbouwde training. Zonder jargon, zonder fysieke correcties
                  — gewoon methodes die werken.
                </p>
                <p className="text-brand-black/60 leading-relaxed">
                  Ons team van gecertificeerde hondengedragstherapeuten heeft
                  jarenlange ervaring in het werken met honden en hun
                  eigenaren. Die kennis hebben we vertaald naar een app die
                  jullie stap voor stap meeneemt.
                </p>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/friends-with-dogs.png"
                  alt="Eigenaren genieten samen met hun honden"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black text-center mb-4">
              Waar wij voor staan
            </h2>
            <p className="text-lg text-brand-black/60 text-center max-w-2xl mx-auto mb-12">
              Onze kernwaarden vormen de basis van alles wat we doen.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="p-6 rounded-2xl bg-brand-beige/50"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-brand-black mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-brand-black/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission image */}
        <section className="py-16 md:py-24 bg-brand-beige">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/owner-puppy-bond.png"
                  alt="Eigenaar en puppy bouwen samen een band op"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-brand-black">
                  Onze missie
                </h2>
                <p className="text-lg text-brand-black/60 leading-relaxed">
                  Wij geloven dat een goede start het verschil maakt — voor de
                  hond én voor de eigenaar. Let&apos;s Dog maakt professionele
                  hondentraining toegankelijk voor iedereen.
                </p>
                <p className="text-brand-black/60 leading-relaxed">
                  Door technologie te combineren met expertise creëren we een
                  platform waar hondenouders met vertrouwen kunnen trainen, op
                  hun eigen tempo, met bewezen methodes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
