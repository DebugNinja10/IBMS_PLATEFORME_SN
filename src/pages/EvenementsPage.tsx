import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowUpRight } from 'lucide-react';
import { events } from '@/data/site';

export function EvenementsPage() {
  return (
    <PageLayout
      num="10"
      label="Événements"
      title={<>Nos prochaines <span className="text-ibms-cyan">rencontres.</span></>}
      intro="Formations, workshops, conférences et événements organisés par IBMS pour la communauté tech."
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((e, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Link to={`/evenements/${idx}`} className="group block overflow-hidden rounded-2xl border border-ibms-veil bg-ibms-cream transition-all duration-500 ease-ibms hover:border-ibms-blue/20 hover:shadow-xl hover:shadow-ibms-blue/5">
                  <div className="relative h-40 overflow-hidden">
                    <img src={e.image} alt={e.title} className="h-full w-full object-cover transition-transform duration-700 ease-ibms group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ibms-navy/70 to-transparent" />
                    <div className="absolute left-3 top-3 rounded-xl bg-white p-2 text-center shadow-lg">
                      <div className="text-2xl font-extrabold leading-none text-ibms-ink">{e.date}</div>
                      <div className="label text-[10px] text-ibms-blue">{e.month}</div>
                    </div>
                    <div className="absolute right-3 top-3"><span className="rounded-lg bg-ibms-blue px-3 py-1 text-xs font-semibold text-white">{e.type}</span></div>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-lg font-bold text-ibms-ink transition-colors duration-300 group-hover:text-ibms-blue">{e.title}</h3>
                    <p className="mb-3 text-sm leading-relaxed text-ibms-slate">{e.desc}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-ibms-blue">
                      En savoir plus
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
