import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Star, GitFork, Loader2 } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/data/site';
import { useGitHubRepos } from '@/hooks/useGitHubRepos';

export function ProjetsPage() {
  const { repos, loading } = useGitHubRepos('DebugNinja10');
  const [main, secondary, ...rest] = projects;

  return (
    <PageLayout num="06" label="Projets" title={<>Des idées qui deviennent des <span className="text-ibms-cyan">réalisations.</span></>} intro="Une galerie éditoriale de nos projets, études de cas et initiatives technologiques.">
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="mb-10 flex items-center gap-3">
            <span className="label text-ibms-blue">Études de cas</span>
            <span className="h-px w-12 bg-ibms-blue" />
          </div>
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <Reveal className="col-span-12 md:col-span-7">
              <Link to={`/projets/${main.num}`} className="group relative block min-h-[430px] overflow-hidden bg-ibms-navy text-white md:min-h-[540px]">
                <img src={main.image} alt={main.title} className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 ease-ibms group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ibms-navy via-ibms-navy/40 to-transparent" />
                <div className="relative flex min-h-[430px] flex-col justify-between p-7 md:min-h-[540px] md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="label text-ibms-cyan">Projet principal / {main.year}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:border-ibms-cyan group-hover:text-ibms-cyan"><ArrowUpRight className="h-5 w-5" /></span>
                  </div>
                  <div>
                    <div className="mb-3 flex items-center gap-3"><span className="label text-white/70">{main.num}</span><span className="h-px w-8 bg-white/40" /><span className="label text-white/70">{main.category}</span></div>
                    <h3 className="mb-4 text-3xl font-extrabold transition-colors duration-300 group-hover:text-ibms-cyan md:text-5xl">{main.title}</h3>
                    <p className="max-w-lg text-sm leading-relaxed text-white/70">{main.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{main.tech.map((tech) => <span key={tech} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">{tech}</span>)}</div>
                  </div>
                </div>
              </Link>
            </Reveal>

            <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
              <Reveal delay={100}>
                <Link to={`/projets/${secondary.num}`} className="group flex min-h-[220px] items-end justify-between border border-ibms-veil bg-ibms-cream p-6 transition-all duration-500 hover:border-ibms-blue/30 hover:shadow-xl hover:shadow-ibms-blue/5 md:min-h-[260px]">
                  <div>
                    <div className="mb-5 flex items-center gap-3"><span className="label text-ibms-blue">{secondary.num}</span><span className="h-px w-8 bg-ibms-veil" /><span className="label text-ibms-slate">{secondary.category}</span></div>
                    <h3 className="mb-2 text-2xl font-extrabold text-ibms-ink transition-colors group-hover:text-ibms-blue">{secondary.title}</h3>
                    <p className="max-w-xs text-sm leading-relaxed text-ibms-slate">{secondary.desc}</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 shrink-0 text-ibms-slate transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ibms-blue" />
                </Link>
              </Reveal>
              {rest.map((project, index) => (
                <Reveal key={project.num} delay={180 + index * 80}>
                  <Link to={`/projets/${project.num}`} className="group flex items-center gap-5 border-t border-ibms-ink/15 py-5">
                    <span className="label text-ibms-slate transition-colors group-hover:text-ibms-blue">{project.num}</span>
                    <div className="flex-1"><div className="mb-1 label text-ibms-slate">{project.category} / {project.year}</div><h3 className="text-lg font-bold text-ibms-ink transition-colors group-hover:text-ibms-blue">{project.title}</h3></div>
                    <ArrowUpRight className="h-5 w-5 text-ibms-slate transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ibms-blue" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ibms-cream">
        <div className="container-ibms">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="label mb-4 text-ibms-blue">Open source</div>
              <h2 className="text-3xl font-extrabold text-ibms-ink md:text-4xl">Projets publics sur GitHub.</h2>
            </div>
            <a href="https://github.com/DebugNinja10" target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 text-sm font-bold text-ibms-blue md:flex">
              <Github className="h-4 w-4" /> Voir le profil GitHub
            </a>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20"><Loader2 className="h-6 w-6 animate-spin text-ibms-blue" /></div>
          ) : repos.length === 0 ? (
            <div className="py-12 text-center"><p className="text-sm text-ibms-slate">Aucun dépôt public pertinent à afficher pour le moment.</p></div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo, idx) => (
                <Reveal key={repo.id} delay={idx * 60}>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="card group flex h-full flex-col">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="label text-ibms-slate">{repo.language || 'Code'}</span>
                      <Github className="h-5 w-5 text-ibms-slate transition-colors group-hover:text-ibms-blue" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-ibms-ink transition-colors group-hover:text-ibms-blue">{repo.name}</h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-ibms-slate">{repo.description || 'Dépôt public sans description.'}</p>
                    {repo.topics?.length > 0 && <div className="mb-4 flex flex-wrap gap-1.5">{repo.topics.slice(0, 4).map((t) => <span key={t} className="rounded-full bg-ibms-light px-2.5 py-0.5 text-xs font-semibold text-ibms-slate">{t}</span>)}</div>}
                    <div className="flex items-center gap-4 border-t border-ibms-veil pt-4 text-xs text-ibms-slate">
                      {repo.stargazers_count > 0 && <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5" /> {repo.stargazers_count}</span>}
                      {repo.forks_count > 0 && <span className="flex items-center gap-1"><GitFork className="h-3.5 w-3.5" /> {repo.forks_count}</span>}
                      <span className="ml-auto flex items-center gap-1 font-semibold text-ibms-blue">Voir sur GitHub <ArrowUpRight className="h-3.5 w-3.5" /></span>
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
