import { Reveal } from '@/components/ui/Reveal';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { team } from '@/data/site';

export function Team() {
  return (
    <section id="equipe" className="section-pad bg-ibms-cream">
      <div className="container-ibms">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <div className="label text-ibms-blue mb-4">Équipe</div>
              <h2 className="text-section-title font-extrabold text-ibms-ink">
                Les personnes derrière
                <br />
                <span className="text-gradient">l'institution.</span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-4 md:flex md:items-end md:justify-end">
            <Reveal delay={200}>
              <ArrowLink to="/equipe" variant="blue">Voir l'équipe complète</ArrowLink>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, idx) => (
            <Reveal key={member.num} delay={idx * 80}>
              <Link to={`/equipe/${member.num}`} className="group block">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-ibms-veil mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-ibms group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ibms-navy/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 translate-y-4 transition-all duration-500 ease-ibms group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      Voir le profil
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="label text-white/80 bg-ibms-navy/40 backdrop-blur-sm rounded-lg px-2 py-1">{member.num}</span>
                  </div>
                </div>
                <h3 className="text-base font-bold text-ibms-ink transition-colors duration-300 group-hover:text-ibms-blue">
                  {member.name}
                </h3>
                <p className="text-sm text-ibms-slate">{member.role}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
