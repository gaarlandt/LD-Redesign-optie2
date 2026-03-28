import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

export function AppShowcaseSection() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* App mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-[280px] md:w-[320px]">
              {/* Phone frame */}
              <div className="bg-brand-black rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-brand-beige rounded-[2.5rem] aspect-[9/19.5] flex items-center justify-center overflow-hidden">
                  {/* Placeholder for app screenshot */}
                  <div className="text-center p-8">
                    <Smartphone className="w-16 h-16 mx-auto mb-4 text-brand-green/30" />
                    <p className="text-sm font-medium text-brand-black/40">
                      App screenshot
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-peach/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-light-green/30 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black">
              Jullie training, altijd bij de hand
            </h2>
            <p className="text-lg text-brand-black/60 leading-relaxed">
              De Let&apos;s Dog web-app werkt op elk apparaat. Bekijk video&apos;s,
              volg je voortgang en krijg persoonlijke tips — waar je ook bent.
            </p>

            <ul className="space-y-4">
              {[
                "Video-instructies per oefening",
                "Voortgang bijhouden per cursus",
                "Persoonlijke trainingsschema's",
                "Direct contact met trainers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
                  <span className="text-brand-black/70">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button
                asChild
                className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <a
                  href="https://app.letsdog.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open de app
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
