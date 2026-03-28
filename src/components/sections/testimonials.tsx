import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lisa & Beau",
    breed: "Golden Retriever",
    text: "Dankzij Let's Dog hebben we eindelijk structuur in de training van Beau. De stap-voor-stap aanpak werkt geweldig, en het fijne is dat je alles op je eigen tempo kunt doen.",
    rating: 5,
  },
  {
    name: "Mark & Luna",
    breed: "Border Collie",
    text: "Als eerste hond was ik behoorlijk onzeker. Let's Dog gaf me het vertrouwen dat ik het goed deed. De video's zijn duidelijk en de trainers weten waar ze het over hebben.",
    rating: 5,
  },
  {
    name: "Sophie & Charlie",
    breed: "Labrador",
    text: "We hadden al van alles geprobeerd, maar niets werkte echt. Met Let's Dog snapte ik eindelijk waarom Charlie deed wat hij deed. Dat maakte het verschil.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-beige">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-4">
            Wat hondenouders zeggen
          </h2>
          <p className="text-lg text-brand-black/60">
            Echte honden. Echte eigenaren. Echte progressie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-peach text-brand-peach"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-brand-black/70 leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-brand-green">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-brand-black text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-brand-black/50">
                    {testimonial.breed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
