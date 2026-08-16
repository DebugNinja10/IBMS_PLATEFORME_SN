import { useParams, Link, Navigate } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { projects } from '@/data/site';

export function ProjetDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.num === id);

  if (!project) return <Navigate to="/projets" replace />;

  const others = projects.filter((p) => p.num !== id);

  return (
    <PageLayout
      num={project.num}
      label={`Projet / ${project.category}`}
      title={project.title}
      intro={project.desc}
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-7">
              <Reveal>
                <div className="mb-8 overflow-hidden rounded-3xl">
                  <img src={project.image} alt={project.title} className="h-72 w-full object-cover md:h-96" />
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-lg bg-ibms-blue/10 px-3 py-1 text-xs font-semibold text-ibms-blue">{project.category}</span>
                  <span className="text-xs text-ibms-slate">{project.year}</span>
                  <span className="h-px w-4 bg-ibms-veil" />
                  <span className="text-xs font-semibold text-ibms-slate">Résultat : {project.result}</span>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <h2 className="mb-4 text-2xl font-extrabold text-ibms-ink">Le défi</h2>
                <p className="mb-8 text-base leading-relaxed text-ibms-slateDark">{project.challenge}</p>
              </Reveal>
              <Reveal delay={200}>
                <h2 className="mb-4 text-2xl font-extrabold text-ibms-ink">Notre solution</h2>
                <ul className="mb-8 space-y-3">
                  {project.solution.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-ibms-blue/10">
                        <Check className="h-3.5 w-3.5 text-ibms-blue" strokeWidth={2.5} />
                      </span>
                      <span className="text-base leading-relaxed text-ibms-slateDark">{s}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={250}>
                <h2 className="mb-4 text-2xl font-extrabold text-ibms-ink">Technologies utilisées</h2>
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-full border border-ibms-veil bg-ibms-cream px-4 py-1.5 text-sm font-semibold text-ibms-ink">{t}</span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={300}>
                <Link to="/contact" className="btn-primary">
                  Discuter d'un projet similaire
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <Reveal delay={200}>
                <div className="sticky top-28 rounded-3xl border border-ibms-veil bg-ibms-cream p-6">
                  <h3 className="mb-5 text-lg font-extrabold text-ibms-ink">Impact mesuré</h3>
                  <ul className="space-y-4">
                    {project.impact.map((impact, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-ibms-blue text-sm font-extrabold text-white">{idx + 1}</span>
                        <span className="text-sm font-semibold leading-relaxed text-ibms-ink">{impact}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/projets" className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-ibms-slate transition-colors hover:text-ibms-blue">
                    <ArrowLeft className="h-4 w-4" />
                    Retour aux projets
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="section-pad bg-ibms-cream">
          <div className="container-ibms">
            <Reveal>
              <h2 className="mb-8 text-2xl font-extrabold text-ibms-ink">Autres projets</h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {others.slice(0, 3).map((p, idx) => (
                <Reveal key={p.num} delay={idx * 80}>
                  <Link to={`/projets/${p.num}`} className="card group block h-full">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="label text-ibms-slate">{p.num}</span>
                      <span className="h-px w-4 bg-ibms-veil" />
                      <span className="text-xs text-ibms-slate">{p.category} / {p.year}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-ibms-ink transition-colors duration-300 group-hover:text-ibms-blue">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-ibms-slate">{p.desc}</p>
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
