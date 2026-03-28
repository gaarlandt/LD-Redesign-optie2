import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Star, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Puppy Cursussen",
  description:
    "Ontdek onze puppycursussen. Van basistraining tot gevorderd — stap voor stap, op jullie tempo.",
};

const courses = [
  {
    title: "Puppy Basis",
    age: "8–16 weken",
    image: "/LD-Redesign-optie2/images/beagle-playing.png",
    description:
      "De perfecte start voor je nieuwe puppy. Leer de basisprincipes van training, socialisatie en een goede band opbouwen.",
    modules: [
      "Zindelijkheidstraining",
      "Basiscommando's (zit, af, blijf)",
      "Socialisatie & gewenning",
      "Bijten afremmen",
      "Alleen thuis blijven",
    ],
    duration: "6 weken",
    level: "Beginner",
  },
  {
    title: "Puppy Gevorderd",
    age: "4–8 maanden",
    image: "/LD-Redesign-optie2/images/border-collie-training.png",
    description:
      "Bouw verder op de basis. Werk aan loostraining, terugkomen en omgaan met afleiding in de echte wereld.",
    modules: [
      "Loostraining zonder trekken",
      "Betrouwbare recall",
      "Afleidingstraining",
      "Impulsen onder controle",
      "Ontspannen bij bezoek",
    ],
    duration: "8 weken",
    level: "Gevorderd",
    featured: true,
  },
  {
    title: "Puber & Volwassen",
    age: "8+ maanden",
    image: "/LD-Redesign-optie2/images/golden-retriever.png",
    description:
      "Voor de uitdagingen van de puberteit en daarna. Versterk gewenst gedrag en pak probleemgedrag aan.",
    modules: [
      "Puberteit begrijpen",
      "Gedragsproblemen aanpakken",
      "Gevorderde gehoorzaamheid",
      "Angst & onzekerheid",
      "Reactief gedrag",
    ],
    duration: "8 weken",
    level: "Alle niveaus",
  },
];

export default function PuppyCursussenPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-brand-beige py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-black mb-6">
              Puppy Cursussen
            </h1>
            <p className="text-lg text-brand-black/60 max-w-2xl mx-auto">
              Elke hond en elk gezin is uniek. Kies de cursus die bij jullie
              fase past en begin vandaag met trainen.
            </p>
          </div>
        </section>

        {/* Courses */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {courses.map((course, index) => (
                <div
                  key={course.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div
                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {course.featured && (
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-peach text-brand-black text-xs font-semibold">
                        <Star className="w-3 h-3" />
                        Populair
                      </div>
                    )}
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
                        {course.age}
                      </span>
                      <span className="text-sm text-brand-black/50 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {course.duration}
                      </span>
                      <span className="text-sm text-brand-black/50 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {course.level}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-black mb-4">
                      {course.title}
                    </h2>
                    <p className="text-brand-black/60 leading-relaxed mb-6">
                      {course.description}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {course.modules.map((mod) => (
                        <li key={mod} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                          <span className="text-sm text-brand-black/70">
                            {mod}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-5 font-semibold rounded-full shadow-md transition-all duration-200 group"
                    >
                      <a
                        href="https://app.letsdog.nl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Start deze cursus
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
