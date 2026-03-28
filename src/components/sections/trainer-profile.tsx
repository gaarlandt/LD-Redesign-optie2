import Image from "next/image";
import { Award, GraduationCap, Heart } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    label: "Gecertificeerd hondengedragstherapeut",
  },
  {
    icon: Award,
    label: "Welzijnsgerichte methodes",
  },
  {
    icon: Heart,
    label: "Geen fysieke correcties",
  },
];

export function TrainerProfileSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/LD-Redesign-optie2/images/puppy-hug.png"
                alt="Eigenaar knuffelt met puppy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-brand-green/5 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black">
              Gebouwd door experts, voor jou
            </h2>
            <p className="text-lg text-brand-black/60 leading-relaxed">
              Wij werken niet met fysieke correcties en focussen ons op gewenst
              gedrag. Alle content is ontwikkeld door gecertificeerde
              hondengedragstherapeuten met jarenlange ervaring.
            </p>
            <p className="text-brand-black/60 leading-relaxed">
              Op basis van welzijnsgerichte methodes en zonder correctiemiddelen,
              gebaseerd op de laatste wetenschappelijke inzichten.
            </p>

            <div className="space-y-4 pt-4">
              {credentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={cred.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-brand-beige/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <span className="font-medium text-brand-black">
                      {cred.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
