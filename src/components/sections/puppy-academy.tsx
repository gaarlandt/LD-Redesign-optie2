import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const courses = [
  {
    title: "Puppy Basis",
    age: "8–16 weken",
    description:
      "De perfecte start voor je nieuwe puppy. Leer de basisprincipes van training, socialisatie en een goede band opbouwen.",
    highlights: ["Zindelijkheidstraining", "Basiscommando's", "Socialisatie"],
    featured: false,
  },
  {
    title: "Puppy Gevorderd",
    age: "4–8 maanden",
    description:
      "Bouw verder op de basis. Werk aan loostraining, terugkomen en omgaan met afleiding in de echte wereld.",
    highlights: ["Loostraining", "Recall", "Afleidingstraining"],
    featured: true,
  },
  {
    title: "Puber & Volwassen",
    age: "8+ maanden",
    description:
      "Voor de uitdagingen van de puberteit en daarna. Versterk gewenst gedrag en pak probleemgedrag aan.",
    highlights: ["Puberteit", "Gedragscorrectie", "Gevorderde gehoorzaamheid"],
    featured: false,
  },
];

export function PuppyAcademySection() {
  return (
    <section className="py-20 md:py-28 bg-brand-beige">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-4">
            Puppy Academy
          </h2>
          <p className="text-lg text-brand-black/60">
            Elke hond en elk gezin is uniek. Kies de cursus die bij jullie fase
            past.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className={`relative rounded-2xl p-8 transition-all duration-200 ${
                course.featured
                  ? "bg-brand-green text-white shadow-xl scale-[1.02]"
                  : "bg-white shadow-md hover:shadow-lg"
              }`}
            >
              {course.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-peach text-brand-black text-xs font-semibold">
                  <Star className="w-3 h-3" />
                  Populair
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-heading font-bold mb-1 ${
                    course.featured ? "text-white" : "text-brand-black"
                  }`}
                >
                  {course.title}
                </h3>
                <p
                  className={`text-sm font-medium ${
                    course.featured ? "text-white/70" : "text-brand-green"
                  }`}
                >
                  {course.age}
                </p>
              </div>

              <p
                className={`text-sm leading-relaxed mb-6 ${
                  course.featured ? "text-white/80" : "text-brand-black/60"
                }`}
              >
                {course.description}
              </p>

              <ul className="space-y-2 mb-8">
                {course.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <div
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        course.featured ? "bg-white/60" : "bg-brand-green"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        course.featured ? "text-white/80" : "text-brand-black/70"
                      }`}
                    >
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full rounded-full font-semibold transition-all duration-200 ${
                  course.featured
                    ? "bg-white text-brand-green hover:bg-white/90"
                    : "bg-brand-green text-white hover:bg-brand-green/90"
                }`}
              >
                <a href="https://app.letsdog.nl" target="_blank" rel="noopener noreferrer">
                  Bekijk cursus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
