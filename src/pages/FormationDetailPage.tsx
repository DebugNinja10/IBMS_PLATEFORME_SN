import { useParams, Link, Navigate } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, ArrowLeft, Clock, Monitor, Signal, Check } from 'lucide-react';
import { formationDetails, formations } from '@/data/site';

export function FormationDetailPage() {
  const { id } = useParams();
  const formation = formations.find((f) => f.num === id);

  if (!formation) return <Navigate to="/formations" replace />;

  const detail = formationDetails.find((item) => item.formationNum === formation.num);
  if (!detail) return <Navigate to="/formations" replace />;

  const related = formations.filter((f) => f.num !== formation.num).slice(0, 3);

  return (
    <PageLayout
      num={formation.num}
      label={`Formation / ${formation.category}`}
      title={formation.title}
      intro={formation.desc}
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-7">
              <Reveal>
                <div className="mb-8 overflow-hidden rounded-3xl">
                  <img src={formation.image} alt={formation.title} className="h-72 w-full object-cover md:h-96" />
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mb-6 text-2xl font-extrabold text-ibms-ink">Programme de la formation</h2>
              </Reveal>
              <div className="space-y-4">
                {detail.modules.map((m, idx) => (
                  <Reveal key={m} delay={idx * 80}>
                    <div className="flex items-start gap-4 border-b border-ibms-veil pb-4">
                      <span className="text-2xl font-extrabold text-ibms-veil transition-colors group-hover:text-ibms-blue">{String(idx + 1).padStart(2, '0')}</span>
                      <div>
                        <h3 className="text-lg font-bold text-ibms-ink">{m}</h3>
                        <p className="mt-1 text-sm text-ibms-slate">Travaux pratiques, retours du formateur et progression par projet.</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={300}>
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  <div><h2 className="mb-4 text-xl font-extrabold text-ibms-ink">Objectifs</h2><ul className="space-y-2">{detail.objectives.map((item) => <li key={item} className="flex gap-2 text-sm text-ibms-slate"><Check className="mt-0.5 h-4 w-4 shrink-0 text-ibms-blue" />{item}</li>)}</ul></div>
                  <div><h2 className="mb-4 text-xl font-extrabold text-ibms-ink">Compétences acquises</h2><ul className="space-y-2">{detail.skills.map((item) => <li key={item} className="flex gap-2 text-sm text-ibms-slate"><Check className="mt-0.5 h-4 w-4 shrink-0 text-ibms-blue" />{item}</li>)}</ul></div>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                  <div><h3 className="mb-3 font-bold text-ibms-ink">Prérequis</h3><p className="text-sm leading-relaxed text-ibms-slate">{detail.prerequisites.join(' · ')}</p></div>
                  <div><h3 className="mb-3 font-bold text-ibms-ink">Public</h3><p className="text-sm leading-relaxed text-ibms-slate">{detail.audience.join(' · ')}</p></div>
                  <div><h3 className="mb-3 font-bold text-ibms-ink">Débouchés</h3><p className="text-sm leading-relaxed text-ibms-slate">{detail.careers.join(' · ')}</p></div>
                </div>
                <div className="mt-10"><h2 className="mb-4 text-xl font-extrabold text-ibms-ink">Questions fréquentes</h2><div className="space-y-4">{detail.faq.map((item) => <div key={item.question} className="border-t border-ibms-veil pt-4"><h3 className="font-bold text-ibms-ink">{item.question}</h3><p className="mt-1 text-sm leading-relaxed text-ibms-slate">{item.answer}</p></div>)}</div></div>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8">
                  <Link to="/contact" className="btn-primary">
                    Demander des informations
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <Reveal delay={200}>
                <div className="sticky top-28 border border-ibms-veil bg-ibms-cream p-6">
                  <h3 className="mb-5 text-lg font-extrabold text-ibms-ink">Informations clés</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3"><Signal className="h-5 w-5 text-ibms-blue" /><div><div className="label text-ibms-slate">Niveau</div><div className="text-sm font-semibold text-ibms-ink">{formation.level}</div></div></li>
                    <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-ibms-blue" /><div><div className="label text-ibms-slate">Durée</div><div className="text-sm font-semibold text-ibms-ink">{formation.duration}</div></div></li>
                    <li className="flex items-center gap-3"><Monitor className="h-5 w-5 text-ibms-blue" /><div><div className="label text-ibms-slate">Format</div><div className="text-sm font-semibold text-ibms-ink">{formation.format}</div></div></li>
                    <li className="flex items-center gap-3"><Check className="h-5 w-5 text-ibms-blue" /><div><div className="label text-ibms-slate">Certification</div><div className="text-sm font-semibold text-ibms-ink">Incluse</div></div></li>
                  </ul>
                  <Link to="/contact" className="btn-primary mt-6 w-full justify-center">
                    S'inscrire
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/formations" className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-ibms-slate transition-colors hover:text-ibms-blue">
                    <ArrowLeft className="h-4 w-4" />
                    Retour aux formations
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad bg-ibms-cream">
          <div className="container-ibms">
            <Reveal><h2 className="mb-8 text-2xl font-extrabold text-ibms-ink">Formations liées</h2></Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((f, idx) => (
                <Reveal key={f.num} delay={idx * 80}>
                  <Link to={`/formations/${f.num}`} className="card group block h-full">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="label text-ibms-slate">{f.num}</span>
                      <span className="h-px w-4 bg-ibms-veil" />
                      <span className="text-xs text-ibms-slate">{f.category}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-ibms-ink transition-colors duration-300 group-hover:text-ibms-blue">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-ibms-slate">{f.desc}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}
