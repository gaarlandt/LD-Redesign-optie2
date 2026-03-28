import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const features = [
  "Gecertificeerde hondengedragstherapeuten",
  "Wetenschappelijk onderbouwde methodes",
  "Training op jouw tempo en schema",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-beige">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20">
              <CheckCircle className="w-4 h-4 text-brand-green" />
              <span className="text-sm font-medium text-brand-green">
                De #1 trainingsapp voor hondenouders
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-black leading-[1.1] tracking-tight">
                Leer je puppy goed te begrijpen, groei en train samen
              </h1>

              <p className="text-lg lg:text-xl text-brand-black/70 leading-relaxed max-w-xl">
                Let&apos;s Dog geeft jullie structuur en neemt je mee in de
                wereld van een pup. Stap voor stap, op jullie tempo.
              </p>
            </div>

            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-green flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-brand-black font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <a
                  href="https://app.letsdog.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start met trainen
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-6 text-base font-semibold rounded-full transition-all duration-200"
              >
                <a href="/puppy-cursussen">Bekijk cursussen</a>
              </Button>
            </div>

            {/* Social proof stats */}
            <div className="flex items-center gap-8 pt-6 border-t border-brand-green/10">
              <div>
                <div className="text-3xl font-heading font-bold text-brand-black">
                  10K+
                </div>
                <div className="text-sm text-brand-black/60">Hondenouders</div>
              </div>
              <div className="w-px h-12 bg-brand-green/10" />
              <div>
                <div className="text-3xl font-heading font-bold text-brand-black">
                  4.9/5
                </div>
                <div className="text-sm text-brand-black/60">Beoordeling</div>
              </div>
              <div className="w-px h-12 bg-brand-green/10" />
              <div>
                <div className="text-3xl font-heading font-bold text-brand-black">
                  100%
                </div>
                <div className="text-sm text-brand-black/60">Welzijnsgericht</div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative lg:h-[600px] h-[400px]">
            <div className="absolute inset-0 bg-brand-green/5 rounded-3xl transform rotate-3" />
            <div className="absolute inset-0 bg-brand-green/5 rounded-3xl transform -rotate-3" />

            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/LD-Redesign-optie2/images/hero-training.png"
                alt="Eigenaar traint samen met hond in het park"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Floating card overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-black">
                      Een goed begin is het halve werk
                    </div>
                    <div className="text-sm text-brand-black/60">
                      Let&apos;s start, Let&apos;s Dog.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
