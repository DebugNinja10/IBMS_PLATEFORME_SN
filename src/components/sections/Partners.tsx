import { Reveal } from '@/components/ui/Reveal';
import { Link } from 'react-router-dom';
import { partners } from '@/data/site';

export function Partners() {
  return (
    <section id="partenaires" className="section-pad bg-white">
      <div className="container-ibms">
        <Reveal>
          <div className="text-center mb-12">
            <div className="label text-ibms-blue mb-4">Partenaires</div>
            <h2 className="text-section-title font-extrabold text-ibms-ink">
              Ils nous <span className="text-gradient">font confiance.</span>
            </h2>
            <p className="mt-4 text-base text-ibms-slate max-w-xl mx-auto">
              Institutions publiques, incubateurs, universités, entreprises tech et startups.
            </p>
          </div>
        </Reveal>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-marquee whitespace-nowrap will-change-transform hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, idx) => (
              <div key={`${partner.name}-${idx}`} className="flex aspect-[3/2] min-w-[120px] md:min-w-[180px] lg:min-w-[260px] items-center justify-center rounded-2xl border border-ibms-veil bg-ibms-cream px-4 md:px-6 py-4 transition-colors duration-300 hover:border-ibms-blue/30">
                <img src={partner.image} alt={partner.name} className="max-h-12 md:max-h-14 w-auto max-w-[90%] object-contain" />
              </div>
            ))}
          </div>
        </div>
        <Reveal delay={200}>
          <div className="mt-10 text-center">
            <Link to="/partenaires" className="btn-secondary">Voir tous nos partenaires</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
