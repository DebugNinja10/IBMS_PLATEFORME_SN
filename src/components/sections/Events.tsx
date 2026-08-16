import { Reveal } from '@/components/ui/Reveal';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { events } from '@/data/site';

export function Events() {
  return (
    <section id="evenements" className="section-pad bg-white">
      <div className="container-ibms">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <div className="label text-ibms-blue mb-4">Événements</div>
              <h2 className="text-section-title font-extrabold text-ibms-ink">
                Nos prochaines
                <br />
                <span className="text-gradient">rencontres.</span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-4 md:flex md:items-end md:justify-end">
            <Reveal delay={200}>
              <ArrowLink to="/evenements" variant="blue">Voir tous les événements</ArrowLink>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <Link to={`/evenements/${idx}`} className="group block rounded-2xl overflow-hidden bg-ibms-cream border border-ibms-veil transition-all duration-500 ease-ibms hover:shadow-xl hover:shadow-ibms-blue/5 hover:border-ibms-blue/20">
                <div className="relative h-40 overflow-hidden">
                  <img src={e.image} alt={e.title} className="w-full h-full object-cover transition-transform duration-700 ease-ibms group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ibms-navy/70 to-transparent" />
                  <div className="absolute top-3 left-3 bg-white rounded-xl p-2 text-center shadow-lg">
                    <div className="text-2xl font-extrabold text-ibms-ink leading-none">{e.date}</div>
                    <div className="label text-ibms-blue text-[10px]">{e.month}</div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-semibold bg-ibms-blue text-white rounded-lg px-3 py-1">{e.type}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-ibms-ink mb-2 transition-colors duration-300 group-hover:text-ibms-blue">
                    {e.title}
                  </h3>
                  <p className="text-sm text-ibms-slate leading-relaxed mb-3">{e.desc}</p>
                  <div className="flex items-center gap-2 text-ibms-blue font-semibold text-sm">
                    En savoir plus
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" strokeWidth={2} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
