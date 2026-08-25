import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowUpRight } from 'lucide-react';
import { team } from '@/data/site';

export function EquipePage() {
  return (
    <PageLayout
      num="08"
      label="Équipe"
      title={<>Notre <span className="text-ibms-cyan">équipe</span></>}
      intro="Une équipe passionnée qui transforme les idées en solutions innovantes."
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {team.map((member, idx) => (
              <Reveal key={member.num} delay={idx * 80}>
                <Link to={`/equipe/${member.num}`} className="group block h-full">
                  <article className="h-full rounded-[28px] border border-ibms-veil bg-white p-3 shadow-[0_18px_40px_rgba(15,23,42,0.04)] transition-all duration-500 ease-ibms hover:-translate-y-1.5 hover:border-ibms-blue/20 hover:shadow-[0_28px_60px_rgba(10,77,156,0.08)]">
                    <div className="relative overflow-hidden rounded-[22px] bg-ibms-veil">
                      <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between">
                        <span className="inline-flex items-center rounded-full border border-white/70 bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                          {member.expertise[0]}
                        </span>
                        <span className="rounded-full bg-white/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                          {member.num}
                        </span>
                      </div>

                      <div className="aspect-[3/4] overflow-hidden">
                        <img src={member.image} alt={member.name} className="h-full w-full object-cover transition-all duration-700 ease-ibms group-hover:scale-[1.04] group-hover:brightness-105" loading="lazy" />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 p-4 text-sm font-semibold text-white opacity-0 translate-y-4 transition-all duration-500 ease-ibms group-hover:translate-y-0 group-hover:opacity-100">
                        Voir le profil
                        <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                      </div>
                    </div>

                    <div className="px-1 pb-1 pt-5">
                      <h3 className="text-lg font-extrabold leading-snug text-ibms-ink transition-colors duration-300 group-hover:text-ibms-blue">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ibms-slateDark">{member.role}</p>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
