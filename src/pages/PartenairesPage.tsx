import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { partners, supportReasons } from '@/data/site';

export function PartenairesPage() {
  const marquee = [...partners, ...partners];
  return (
    <PageLayout num="09" label="Partenaires" title={<>Ils nous <span className="text-ibms-cyan">font confiance.</span></>} intro="Institutions publiques, incubateurs, universités, entreprises tech et startups qui soutiennent l'écosystème IBMS.">
      <section className="section-pad bg-white overflow-hidden">
        <div className="container-ibms mb-10">
          <Reveal><div className="flex items-center gap-3"><span className="label text-ibms-blue">Nos partenaires</span><span className="h-px w-12 bg-ibms-blue" /></div></Reveal>
        </div>
        <div className="relative">
          <div className="flex gap-4 animate-marquee whitespace-nowrap will-change-transform hover:[animation-play-state:paused]">
            {marquee.map((partner, idx) => (
              <div key={`${partner}-${idx}`} className="flex aspect-[3/2] min-w-[260px] items-center justify-center rounded-2xl border border-ibms-veil bg-ibms-cream px-8 transition-colors duration-300 hover:border-ibms-blue/30">
                <span className="text-center text-lg font-extrabold text-ibms-slate">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ibms-cream">
        <div className="container-ibms">
          <div className="mb-12 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8">
              <Reveal><div className="label mb-4 text-ibms-blue">Pourquoi nous soutenir</div><h2 className="text-section-title font-extrabold text-ibms-ink">Soutenir IBMS, c'est investir dans <span className="text-gradient">l'avenir technologique.</span></h2></Reveal>
            </div>
          </div>
          <div className="space-y-px">
            {supportReasons.map((r, idx) => (
              <Reveal key={r.num} delay={idx * 60}>
                <div className="group flex items-start gap-6 border-t border-ibms-veil py-6 transition-colors duration-300 hover:bg-white/50">
                  <span className="w-16 shrink-0 text-4xl font-extrabold text-ibms-veil transition-colors duration-300 group-hover:text-ibms-blue md:text-5xl">{r.num}</span>
                  <div className="flex-1"><h3 className="mb-2 text-xl font-bold text-ibms-ink transition-colors duration-300 group-hover:text-ibms-blue">{r.title}</h3><p className="max-w-2xl text-base leading-relaxed text-ibms-slate">{r.desc}</p></div>
                  <div className="mt-4 hidden h-px w-12 bg-ibms-veil transition-all duration-500 ease-ibms group-hover:w-20 group-hover:bg-ibms-blue md:block" />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}><div className="mt-10"><ArrowLink to="/contact" variant="blue">Devenir partenaire stratégique</ArrowLink></div></Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
