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
      title={<>Les personnes derrière <span className="text-ibms-cyan">l'institution.</span></>}
      intro="Une équipe pluridisciplinaire dédiée à la formation, à l'innovation et à l'accompagnement des talents."
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((member, idx) => (
              <Reveal key={member.num} delay={idx * 80}>
                <Link to={`/equipe/${member.num}`} className="group block">
                  <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl bg-ibms-veil">
                    <img src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform duration-700 ease-ibms group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ibms-navy/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 text-white opacity-0 transition-all duration-500 ease-ibms group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="flex items-center gap-2 text-xs font-semibold">Voir le profil <ArrowUpRight className="h-3.5 w-3.5" /></div>
                    </div>
                    <div className="absolute left-3 top-3"><span className="rounded-lg bg-ibms-navy/40 px-2 py-1 label text-white/80 backdrop-blur-sm">{member.num}</span></div>
                  </div>
                  <h3 className="text-base font-bold text-ibms-ink transition-colors duration-300 group-hover:text-ibms-blue">{member.name}</h3>
                  <p className="text-sm text-ibms-slate">{member.role}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
