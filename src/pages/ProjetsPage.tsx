
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Github,
  Star,
  GitFork,
  Loader2,
  ExternalLink,
} from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/data/site';
import { useGitHubRepos } from '@/hooks/useGitHubRepos';

export function ProjetsPage() {
  const { repos, loading } = useGitHubRepos('DebugNinja10');

  return (
    <PageLayout
      num="06"
      label="Projets"
      title={
        <>
          Des idées qui deviennent des{' '}
          <span className="text-ibms-cyan">réalisations.</span>
        </>
      }
      intro="Découvrez nos projets, nos études de cas et les solutions numériques que nous développons pour répondre aux défis de notre environnement."
    >
      {/* GALERIE DES PROJETS */}
      <section className="section-pad relative overflow-hidden bg-white">
        <div className="container-ibms">

          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="label text-ibms-blue">Nos réalisations</span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ibms-ink md:text-3xl">
                Des projets qui font la différence.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ibms-slate">
                Découvrez les solutions que nous concevons pour répondre aux besoins concrets de notre environnement.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-ibms-veil bg-ibms-cream px-4 py-2 text-sm font-semibold text-ibms-navy">
              <span className="h-2 w-2 rounded-full bg-ibms-cyan" />
              {projects.length} projets présentés
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects.map((project, index) => (
              <Reveal key={project.num} delay={(index % 3) * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ibms-veil bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-ibms-blue/30 hover:shadow-2xl hover:shadow-ibms-navy/10">

                  {/* VISUEL */}
                  <Link
                    to={`/projets/${project.num}`}
                    className="relative block aspect-[16/10] overflow-hidden bg-ibms-cream"
                    aria-label={`Découvrir le projet ${project.title}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-ibms-blue/10" />

                    <img
                      src={project.image}
                      alt={`Illustration du projet ${project.title}`}
                      loading="lazy"
                      className="relative z-10 h-full w-full object-contain p-5 transition-transform duration-700 ease-ibms group-hover:scale-105 sm:p-7"
                    />

                    <div className="absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-ibms-navy/10 to-transparent" />

                    <span className="absolute left-4 top-4 z-30 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-ibms-navy shadow-sm backdrop-blur">
                      {project.category}
                    </span>

                    <span className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-ibms-navy text-white shadow-lg transition-all duration-300 group-hover:rotate-45 group-hover:bg-ibms-cyan">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>

                    <span className="absolute bottom-4 left-4 z-30 text-xs font-bold tracking-wide text-ibms-navy">
                      N° {project.num}
                    </span>
                  </Link>

                  {/* CONTENU */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">

                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-ibms-blue">
                        {project.category}
                      </span>

                      <span className="rounded-full border border-ibms-veil bg-ibms-light px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ibms-slate">
                        {project.status}
                      </span>
                    </div>

                    <Link to={`/projets/${project.num}`}>
                      <h3 className="mb-3 text-xl font-extrabold leading-snug text-ibms-ink transition-colors duration-300 group-hover:text-ibms-blue">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="mb-6 flex-1 text-sm leading-7 text-ibms-slate">
                      {project.desc}
                    </p>

                    {/* TECHNOLOGIES */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-ibms-veil bg-ibms-cream px-3 py-1.5 text-[10px] font-bold text-ibms-slate transition-colors group-hover:border-ibms-blue/20"
                        >
                          {tech}
                        </span>
                      ))}

                      {project.tech.length > 4 && (
                        <span className="rounded-lg bg-ibms-light px-3 py-1.5 text-[10px] font-bold text-ibms-blue">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* ACTIONS */}
                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-ibms-veil pt-5">

                      <Link
                        to={`/projets/${project.num}`}
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-ibms-blue transition-all hover:gap-3 hover:text-ibms-cyan"
                      >
                        Découvrir le projet
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visiter le site de ${project.title}`}
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ibms-veil text-ibms-slate transition-all duration-300 hover:border-ibms-blue hover:bg-ibms-blue hover:text-white"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* SECTION GITHUB */}
      <section className="section-pad bg-ibms-cream">
        <div className="container-ibms">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="label mb-4 text-ibms-blue">Open source</div>
              <h2 className="text-3xl font-extrabold text-ibms-ink md:text-4xl">
                Projets publics sur GitHub.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ibms-slate">
                Retrouvez également nos dépôts publics et nos contributions
                techniques.
              </p>
            </div>

            <a
              href="https://github.com/DebugNinja10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-ibms-blue transition-colors hover:text-ibms-cyan"
            >
              <Github className="h-4 w-4" />
              Voir le profil GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-7 w-7 animate-spin text-ibms-blue" />
            </div>
          ) : repos.length === 0 ? (
            <div className="rounded-2xl border border-ibms-veil bg-white px-6 py-12 text-center">
              <Github className="mx-auto mb-4 h-8 w-8 text-ibms-slate" />
              <p className="text-sm text-ibms-slate">
                Aucun dépôt public pertinent à afficher pour le moment.
              </p>
              <a
                href="https://github.com/DebugNinja10"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-ibms-blue"
              >
                Consulter GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo, index) => (
                <Reveal key={repo.id} delay={(index % 3) * 80}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="label text-ibms-slate">
                        {repo.language || 'Code'}
                      </span>
                      <Github className="h-5 w-5 text-ibms-slate transition-colors group-hover:text-ibms-blue" />
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-ibms-ink transition-colors group-hover:text-ibms-blue">
                      {repo.name}
                    </h3>

                    <p className="mb-5 flex-1 text-sm leading-relaxed text-ibms-slate">
                      {repo.description || 'Dépôt public sans description.'}
                    </p>

                    {repo.topics?.length > 0 && (
                      <div className="mb-5 flex flex-wrap gap-1.5">
                        {repo.topics.slice(0, 4).map((topic) => (
                          <span
                            key={topic}
                            className="rounded-full bg-ibms-light px-2.5 py-1 text-xs font-semibold text-ibms-slate"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-4 border-t border-ibms-veil pt-4 text-xs text-ibms-slate">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star className="h-3.5 w-3.5" />
                          {repo.stargazers_count}
                        </span>
                      )}

                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork className="h-3.5 w-3.5" />
                          {repo.forks_count}
                        </span>
                      )}

                      <span className="ml-auto flex items-center gap-1 font-semibold text-ibms-blue">
                        Voir sur GitHub
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
