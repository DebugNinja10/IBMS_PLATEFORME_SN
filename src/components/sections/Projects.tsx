import { Reveal } from '@/components/ui/Reveal';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/site';

export function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projets" className="section-pad overflow-hidden bg-ibms-cream">
      <div className="container-ibms">

        {/* EN-TETE */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="label text-ibms-blue">06</span>
                <span className="h-px w-12 bg-ibms-blue" />
                <span className="label text-ibms-slate">
                  Projets & initiatives
                </span>
              </div>

              <h2 className="text-section-title font-extrabold text-ibms-ink">
                Des idées qui deviennent des{' '}
                <span className="text-gradient">réalisations.</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-ibms-slate md:text-base">
                Découvrez nos réalisations et les solutions numériques que
                nous développons pour répondre aux défis de notre environnement.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <ArrowLink to="/projets" variant="blue">
              Explorer tous nos projets
            </ArrowLink>
          </Reveal>
        </div>

        {/* GALERIE */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.num} delay={index * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ibms-veil bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-ibms-blue/30 hover:shadow-xl hover:shadow-ibms-navy/10">

                {/* IMAGE */}
                <Link
                  to={`/projets/${project.num}`}
                  aria-label={`Découvrir le projet ${project.title}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-white"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-ibms-cream via-white to-ibms-light" />

                  <img
                    src={project.image}
                    alt={`Illustration du projet ${project.title}`}
                    loading="lazy"
                    className="relative z-10 h-full w-full object-contain p-5 transition-transform duration-700 ease-ibms group-hover:scale-105 sm:p-7"
                  />

                  <span className="absolute left-4 top-4 z-20 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-ibms-navy shadow-sm backdrop-blur">
                    {project.category}
                  </span>

                  <span className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-ibms-navy text-white shadow-lg transition-all duration-300 group-hover:rotate-45 group-hover:bg-ibms-cyan">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>

                  <span className="absolute bottom-4 left-4 z-20 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ibms-navy backdrop-blur">
                    Projet {project.num}
                  </span>
                </Link>

                {/* INFORMATIONS */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">

                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-ibms-blue">
                      {project.category}
                    </span>

                    <span className="rounded-full bg-ibms-light px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ibms-slate">
                      {project.status}
                    </span>
                  </div>

                  <Link to={`/projets/${project.num}`}>
                    <h3 className="mb-3 text-xl font-extrabold leading-snug text-ibms-ink transition-colors duration-300 group-hover:text-ibms-blue">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="mb-5 flex-1 text-sm leading-7 text-ibms-slate">
                    {project.desc}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-ibms-veil bg-ibms-cream px-3 py-1.5 text-[10px] font-bold text-ibms-slate"
                      >
                        {tech}
                      </span>
                    ))}

                    {project.tech.length > 3 && (
                      <span className="rounded-lg bg-ibms-light px-3 py-1.5 text-[10px] font-bold text-ibms-blue">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* LIEN */}
                  <div className="mt-auto border-t border-ibms-veil pt-4">
                    <Link
                      to={`/projets/${project.num}`}
                      className="inline-flex items-center gap-2 text-sm font-extrabold text-ibms-blue transition-all hover:gap-3 hover:text-ibms-cyan"
                    >
                      Découvrir le projet
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* LIEN VERS LA GALERIE COMPLETE */}
        <Reveal delay={250}>
          <div className="mt-10 flex justify-center">
            <Link
              to="/projets"
              className="inline-flex items-center gap-3 rounded-full border border-ibms-blue/20 bg-white px-6 py-3 text-sm font-extrabold text-ibms-blue shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-ibms-blue hover:text-white hover:shadow-lg"
            >
              Voir toutes nos réalisations
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}