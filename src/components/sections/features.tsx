import { BookOpen, Calendar, Brain, Users } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Stap-voor-stap cursussen",
    description:
      "Gestructureerde trainingslessen die meegroeien met je puppy. Van basiscommando's tot gevorderde gehoorzaamheid.",
  },
  {
    icon: Calendar,
    title: "Past bij jullie agenda",
    description:
      "Training die zich aanpast aan jullie tempo en schema. Geen vaste lestijden, gewoon wanneer het uitkomt.",
  },
  {
    icon: Brain,
    title: "Wetenschappelijk onderbouwd",
    description:
      "Op basis van welzijnsgerichte methodes en de laatste wetenschappelijke inzichten. Zonder correctiemiddelen.",
  },
  {
    icon: Users,
    title: "Community van hondenouders",
    description:
      "Deel ervaringen met andere hondenouders. Stel vragen, vier successen en leer van elkaar.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-4">
            Alles wat je nodig hebt, in één app
          </h2>
          <p className="text-lg text-brand-black/60">
            De een zegt dit, de ander dat. Stop met googelen en ga voor één
            juiste welzijnsgerichte aanpak.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-brand-beige/50 hover:bg-brand-beige transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-5 group-hover:bg-brand-green/20 transition-colors duration-200">
                  <Icon className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-lg font-heading font-bold text-brand-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-brand-black/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
