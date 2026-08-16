import { Reveal } from '@/components/ui/Reveal';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/site';

export function Projects() {
  const [main, secondary, ...rest] = projects;

  return (
    <section id="projets" className="section-pad bg-ibms-cream">
      <div className="container-ibms">
        <div className="mb-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8"><Reveal><div className="mb-4 flex items-center gap-3"><span className="label text-ibms-blue">06</span><span className="h-px w-12 bg-ibms-blue" /><span className="label text-ibms-slate">Projets & initiatives</span></div><h2 className="text-section-title font-extrabold text-ibms-ink">Des idées qui deviennent des <span className="text-gradient">réalisations.</span></h2></Reveal></div>
          <div className="col-span-12 flex items-end md:col-span-4 md:justify-end"><Reveal delay={150}><ArrowLink to="/projets" variant="blue">Explorer nos projets</ArrowLink></Reveal></div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          <Reveal className="group col-span-12 md:col-span-7">
            <Link to={`/projets/${main.num}`} className="group relative block min-h-[430px] overflow-hidden bg-ibms-navy text-white md:min-h-[540px]">
              <img src={main.image} alt={main.title} className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 ease-ibms group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ibms-navy via-ibms-navy/40 to-transparent" />
              <div className="relative flex min-h-[430px] flex-col justify-between p-7 md:min-h-[540px] md:p-10">
                <div className="flex items-center justify-between"><span className="label text-ibms-cyan">Projet principal / {main.year}</span><span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:border-ibms-cyan group-hover:text-ibms-cyan"><ArrowUpRight className="h-5 w-5" /></span></div>
                <div><div className="mb-3 flex items-center gap-3"><span className="label text-white/70">{main.num}</span><span className="h-px w-8 bg-white/40" /><span className="label text-white/70">{main.category}</span></div><h3 className="mb-4 text-3xl font-extrabold transition-colors duration-300 group-hover:text-ibms-cyan md:text-5xl">{main.title}</h3><p className="max-w-lg text-sm leading-relaxed text-white/70">{main.desc}</p><div className="mt-5 flex flex-wrap gap-2">{main.tech.map((tech) => <span key={tech} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">{tech}</span>)}</div></div>
              </div>
            </Link>
          </Reveal>

          <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
            <Reveal delay={100}>
              <Link to={`/projets/${secondary.num}`} className="group flex min-h-[220px] items-end justify-between border border-ibms-veil bg-white p-6 transition-all duration-500 hover:border-ibms-blue/30 hover:shadow-xl hover:shadow-ibms-blue/5 md:min-h-[260px]">
                <div><div className="mb-5 flex items-center gap-3"><span className="label text-ibms-blue">{secondary.num}</span><span className="h-px w-8 bg-ibms-veil" /><span className="label text-ibms-slate">{secondary.category}</span></div><h3 className="mb-2 text-2xl font-extrabold text-ibms-ink transition-colors group-hover:text-ibms-blue">{secondary.title}</h3><p className="max-w-xs text-sm leading-relaxed text-ibms-slate">{secondary.desc}</p></div><ArrowUpRight className="h-6 w-6 shrink-0 text-ibms-slate transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ibms-blue" />
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
  );
}
