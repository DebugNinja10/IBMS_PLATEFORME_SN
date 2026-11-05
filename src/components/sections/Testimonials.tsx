import { Reveal } from '@/components/ui/Reveal';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/site';

export function Testimonials() {
  return (
    <section className="section-pad bg-white">
      <div className="container-ibms">
        <Reveal>
          <div className="text-center mb-12">
            <div className="label text-ibms-blue mb-4">Témoignages</div>
            <h2 className="text-section-title font-extrabold text-ibms-ink">
              Ce qu’ils <span className="text-gradient">disent.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="card h-full">
                <div className="relative mb-5 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gradient-ibms shadow-lg ring-4 ring-white sm:h-36 sm:w-36 md:h-40 md:w-40">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="absolute inset-0 h-full w-full scale-125 object-cover"
                    style={{
                      objectPosition:
                        t.name === 'M. Diop'
                          ? 'center 18%'
                          : t.name === 'Aminata Diop'
                            ? 'center top'
                            : t.name === 'Ousmane Taha Niang'
                              ? 'center 22%'
                              : 'center center',
                    }}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.hidden = true;
                    }}
                  />
                </div>
                <Quote className="h-8 w-8 text-ibms-blue/20 mb-4" strokeWidth={1.5} />
                <p className="text-base text-ibms-slateDark leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-ibms-veil">
                  <div>
                    <div className="text-sm font-bold text-ibms-ink">{t.name}</div>
                    <div className="text-xs text-ibms-slate">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
