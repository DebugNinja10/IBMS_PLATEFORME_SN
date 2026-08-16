import { Reveal } from '@/components/ui/Reveal';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { supportReasons } from '@/data/site';

export function WhySupport() {
  return (
    <section className="section-pad bg-ibms-cream">
      <div className="container-ibms">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <div className="label text-ibms-blue mb-4">Pourquoi nous soutenir</div>
              <h2 className="text-section-title font-extrabold text-ibms-ink">
                Soutenir IBMS, c'est investir
                <br />
                dans <span className="text-gradient">l'avenir technologique.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="space-y-px">
          {supportReasons.map((r, idx) => (
            <Reveal key={r.num} delay={idx * 60}>
              <div className="group flex items-start gap-6 py-6 border-t border-ibms-veil transition-colors duration-300 hover:bg-white/50">
                <span className="text-4xl md:text-5xl font-extrabold text-ibms-veil transition-colors duration-300 group-hover:text-ibms-blue w-16 shrink-0">
                  {r.num}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-ibms-ink mb-2 transition-colors duration-300 group-hover:text-ibms-blue">
                    {r.title}
                  </h3>
                  <p className="text-base text-ibms-slate leading-relaxed max-w-2xl">{r.desc}</p>
                </div>
                <div className="hidden md:block w-12 h-px bg-ibms-veil transition-all duration-500 ease-ibms group-hover:w-20 group-hover:bg-ibms-blue mt-4" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10">
            <ArrowLink to="/partenaires" variant="blue">Devenir partenaire stratégique</ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
