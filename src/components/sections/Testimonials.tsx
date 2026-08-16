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
              Ce qu'ils <span className="text-gradient">disent.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="card h-full">
                <Quote className="h-8 w-8 text-ibms-blue/20 mb-4" strokeWidth={1.5} />
                <p className="text-base text-ibms-slateDark leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-ibms-veil">
                  <div className="w-10 h-10 rounded-full bg-gradient-ibms flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
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
