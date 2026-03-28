import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="relative py-20 md:py-28 bg-brand-dark-sage overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/child-with-labrador.png"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Een goed begin is het halve werk
          </h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed">
            Begin vandaag met trainen. Geen vaste lestijden, geen
            langetermijncontract. Gewoon jij, je hond, en een plan dat werkt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-brand-peach hover:bg-brand-peach/90 text-brand-black px-8 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
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
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold rounded-full transition-all duration-200"
            >
              <a href="/contact">Neem contact op</a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-white/40">
            Let&apos;s start, Let&apos;s Dog.
          </p>
        </div>
      </div>
    </section>
  );
}
