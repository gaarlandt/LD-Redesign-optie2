import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met het Let's Dog team. We helpen je graag verder.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16 md:pt-20">
        <section className="bg-brand-beige py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-black mb-6">
              Contact
            </h1>
            <p className="text-lg text-brand-black/60 max-w-xl mx-auto">
              Heb je een vraag of wil je meer weten? We helpen je graag.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact form */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-black mb-6">
                  Stuur ons een bericht
                </h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Naam</Label>
                      <Input
                        id="name"
                        placeholder="Je naam"
                        className="rounded-lg border-brand-beige focus:border-brand-green"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="je@email.nl"
                        className="rounded-lg border-brand-beige focus:border-brand-green"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Onderwerp</Label>
                    <Input
                      id="subject"
                      placeholder="Waar gaat het over?"
                      className="rounded-lg border-brand-beige focus:border-brand-green"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Bericht</Label>
                    <Textarea
                      id="message"
                      placeholder="Vertel ons meer..."
                      rows={5}
                      className="rounded-lg border-brand-beige focus:border-brand-green resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-5 font-semibold rounded-full shadow-md transition-all duration-200"
                  >
                    Verstuur bericht
                  </Button>
                </form>
              </div>

              {/* Contact info */}
              <div className="space-y-8">
                <h2 className="text-2xl font-heading font-bold text-brand-black mb-6">
                  Andere manieren om ons te bereiken
                </h2>

                <div className="space-y-6">
                  <a
                    href="mailto:info@letsdog.nl"
                    className="flex items-start gap-4 p-5 rounded-xl bg-brand-beige/50 hover:bg-brand-beige transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-black">E-mail</h3>
                      <p className="text-sm text-brand-black/60">
                        info@letsdog.nl
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/31612345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 rounded-xl bg-brand-beige/50 hover:bg-brand-beige transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-black">
                        WhatsApp
                      </h3>
                      <p className="text-sm text-brand-black/60">
                        Stuur ons een berichtje via WhatsApp
                      </p>
                    </div>
                  </a>
                </div>

                <div className="pt-6 border-t border-brand-beige">
                  <h3 className="font-semibold text-brand-black mb-3">
                    Volg ons
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/letsdog.nl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-black/40 hover:text-brand-green transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.tiktok.com/@letsdog.nl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-black/40 hover:text-brand-green transition-colors"
                    >
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
