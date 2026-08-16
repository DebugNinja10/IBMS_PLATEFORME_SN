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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((p, idx) => (
            <Reveal key={p} delay={idx * 60}>
              <div className="aspect-square bg-ibms-cream border border-ibms-veil rounded-2xl flex items-center justify-center transition-all duration-500 ease-ibms hover:border-ibms-blue/30 hover:shadow-lg hover:shadow-ibms-blue/5 group">
                <span className="text-sm font-bold text-ibms-slate transition-colors duration-300 group-hover:text-ibms-blue">
                  {p}
                </span>
              </div>
            </Reveal>
          ))}
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
