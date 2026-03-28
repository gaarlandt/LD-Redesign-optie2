const steps = [
  {
    number: "01",
    title: "Maak een account aan",
    description:
      "Start gratis en ontdek wat Let's Dog voor jou en je hond kan betekenen. Binnen een minuut klaar.",
  },
  {
    number: "02",
    title: "Kies je trainingsprogramma",
    description:
      "Selecteer een cursus die past bij de leeftijd en het niveau van je hond. Van puppy tot volwassen.",
  },
  {
    number: "03",
    title: "Train samen, op jullie tempo",
    description:
      "Volg de stappen, bekijk de video's en oefen wanneer het jullie uitkomt. Progressie die je ziet.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-beige">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-4">
            In 3 stappen aan de slag
          </h2>
          <p className="text-lg text-brand-black/60">
            Geen ingewikkeld proces. Begin vandaag met trainen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-px bg-brand-green/20" />
              )}

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-md mb-6">
                  <span className="text-3xl font-heading font-bold text-brand-green">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-black mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-black/60 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
