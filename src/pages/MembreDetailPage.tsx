import { useParams, Link, Navigate } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowLeft, Mail, Linkedin, Check } from 'lucide-react';
import { team } from '@/data/site';

export function MembreDetailPage() {
  const { id } = useParams();
  const member = team.find((m) => m.num === id);

  if (!member) return <Navigate to="/equipe" replace />;

  const others = team.filter((m) => m.num !== id);

  return (
    <PageLayout
      num={member.num}
      label="Équipe"
      title={member.name}
      intro={member.role}
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl">
                  <img src={member.image} alt={member.name} className="h-96 w-full object-cover md:h-[500px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ibms-navy/40 to-transparent" />
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={100}>
                <div className="label mb-3 text-ibms-blue">{member.role}</div>
                <h2 className="mb-6 text-2xl font-extrabold text-ibms-ink">Biographie</h2>
                <p className="mb-8 text-base leading-relaxed text-ibms-slateDark">{member.bio}</p>
              </Reveal>
              <Reveal delay={200}>
                <h3 className="mb-4 text-lg font-extrabold text-ibms-ink">Domaines d'expertise</h3>
                <ul className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {member.expertise.map((exp) => (
                    <li key={exp} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-ibms-blue/10">
                        <Check className="h-3.5 w-3.5 text-ibms-blue" strokeWidth={2.5} />
                      </span>
                      <span className="text-sm font-semibold text-ibms-ink">{exp}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex items-center gap-4">
                  <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-sm font-semibold text-ibms-blue transition-colors hover:text-ibms-blueLight">
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                  <a href={member.linkedin} className="inline-flex items-center gap-2 text-sm font-semibold text-ibms-slate transition-colors hover:text-ibms-blue">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-16">
            <Reveal>
              <h2 className="mb-8 text-2xl font-extrabold text-ibms-ink">Autres membres</h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {others.map((m, idx) => (
                <Reveal key={m.num} delay={idx * 80}>
                  <Link to={`/equipe/${m.num}`} className="group block">
                    <div className="relative mb-3 aspect-[3/4] overflow-hidden rounded-2xl bg-ibms-veil">
                      <img src={m.image} alt={m.name} className="h-full w-full object-cover transition-transform duration-700 ease-ibms group-hover:scale-105" loading="lazy" />
                    </div>
                    <h3 className="text-sm font-bold text-ibms-ink transition-colors group-hover:text-ibms-blue">{m.name}</h3>
                    <p className="text-xs text-ibms-slate">{m.role}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
