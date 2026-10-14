import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { trainingProjects } from '@/data/site';

export function FormationProjectDetailPage() {
  const { slug } = useParams();
  const project = trainingProjects.find((item) => item.slug === slug);

  if (!project) return <Navigate to="/formations" replace />;

  return (
    <PageLayout
      num="03"
      label={`Projet de formation / ${project.theme}`}
      title={project.title}
      intro={project.desc}
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <Reveal>
            <div className="mb-10 overflow-hidden rounded-3xl bg-ibms-cream">
              <img src={project.image} alt={`${project.title} — photo principale`} className="max-h-[620px] w-full object-cover" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8">
              <Reveal>
                <span className="mb-4 inline-flex rounded-full bg-ibms-blue/10 px-4 py-2 text-sm font-bold text-ibms-blue">{project.theme}</span>
                <h2 className="mb-5 text-3xl font-extrabold text-ibms-ink md:text-4xl">À propos du projet</h2>
                <p className="mb-8 text-lg leading-relaxed text-ibms-slateDark">{project.desc}</p>
                <div className="space-y-5">
                  {project.details.map((detail, index) => (
                    <p key={index} className="border-l-2 border-ibms-cyan pl-5 text-base leading-relaxed text-ibms-slateDark">{detail}</p>
                  ))}
                </div>
              </Reveal>
            </div>
            <aside className="lg:col-span-4">
              <Reveal delay={100}>
                <div className="rounded-2xl border border-ibms-veil bg-ibms-cream p-6">
                  <div className="label mb-3 text-ibms-blue">Nos projets réalisés</div>
                  <h3 className="mb-3 text-xl font-extrabold text-ibms-ink">Apprendre en faisant</h3>
                  <p className="mb-6 text-sm leading-relaxed text-ibms-slateDark">Ces projets associent formation, pratique et accompagnement afin de rendre les compétences numériques accessibles.</p>
                  <Link to="/formations#projets-realises" className="inline-flex items-center gap-2 text-sm font-bold text-ibms-blue transition-colors hover:text-ibms-cyan">
                    <ArrowLeft className="h-4 w-4" /> Retour aux projets de formation
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ibms-cream">
        <div className="container-ibms">
          <Reveal>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="label mb-3 text-ibms-blue">En images</div>
                <h2 className="text-3xl font-extrabold text-ibms-ink">Galerie du projet</h2>
              </div>
              <span className="text-sm text-ibms-slate">{project.gallery.length} photo{project.gallery.length > 1 ? 's' : ''}</span>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((photo, index) => (
              <Reveal key={photo} delay={(index % 6) * 50}>
                <a href={photo} target="_blank" rel="noreferrer" className="group relative block overflow-hidden rounded-xl bg-white" aria-label={`Agrandir la photo ${index + 1} du projet ${project.title}`}>
                  <img src={photo} alt={`${project.title} — photo ${index + 1}`} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ibms-blue opacity-0 shadow transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/formations#projets-realises" className="btn-primary"><ArrowLeft className="h-4 w-4" /> Retour aux formations</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
