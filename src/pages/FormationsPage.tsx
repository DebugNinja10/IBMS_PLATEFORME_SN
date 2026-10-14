import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Clock, Monitor, Search, Signal, SlidersHorizontal, X } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { formations, trainingProjects } from '@/data/site';

export function FormationsPage() {
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState('all');
  const [format, setFormat] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const levels = useMemo(() => ['all', ...new Set(formations.map((f) => f.level))], []);
  const formats = useMemo(() => ['all', ...new Set(formations.map((f) => f.format))], []);

  const filtered = formations.filter((f) => {
    const matchesQuery = f.title.toLowerCase().includes(query.toLowerCase()) || f.desc.toLowerCase().includes(query.toLowerCase());
    const matchesLevel = level === 'all' || f.level === level;
    const matchesFormat = format === 'all' || f.format === format;
    return matchesQuery && matchesLevel && matchesFormat;
  });

  const resetFilters = () => { setQuery(''); setLevel('all'); setFormat('all'); };
  const hasFilters = query || level !== 'all' || format !== 'all';

  return (
    <PageLayout num="03" label="Formations" title={<>Les compétences pour le <span className="text-ibms-cyan">monde de demain.</span></>} intro="Des programmes structurants et certifiants, conçus pour répondre aux besoins réels du marché et accompagner chaque talent vers l'excellence.">
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ibms-slate" />
              <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher une formation..." className="w-full rounded-xl border border-ibms-veil bg-ibms-cream py-3 pl-11 pr-4 text-sm text-ibms-ink placeholder:text-ibms-slate focus:border-ibms-blue focus:outline-none" />
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className="inline-flex items-center justify-center gap-2 rounded-xl border border-ibms-veil px-4 py-3 text-sm font-semibold text-ibms-ink transition-colors hover:border-ibms-blue/30 hover:bg-ibms-light md:hidden">
              <SlidersHorizontal className="h-4 w-4" /> Filtres
            </button>
            <div className={`${showFilters ? 'flex' : 'hidden'} flex-wrap gap-2 md:flex`}>
              <select value={level} onChange={(e) => setLevel(e.target.value)} className="rounded-xl border border-ibms-veil bg-ibms-cream px-4 py-3 text-sm font-semibold text-ibms-ink focus:border-ibms-blue focus:outline-none">
                {levels.map((l) => <option key={l} value={l}>{l === 'all' ? 'Tous niveaux' : l}</option>)}
              </select>
              <select value={format} onChange={(e) => setFormat(e.target.value)} className="rounded-xl border border-ibms-veil bg-ibms-cream px-4 py-3 text-sm font-semibold text-ibms-ink focus:border-ibms-blue focus:outline-none">
                {formats.map((f) => <option key={f} value={f}>{f === 'all' ? 'Tous formats' : f}</option>)}
              </select>
              {hasFilters && <button onClick={resetFilters} className="inline-flex items-center gap-1 rounded-xl border border-ibms-veil px-3 py-3 text-sm text-ibms-slate hover:text-ibms-blue"><X className="h-4 w-4" /></button>}
            </div>
          </div>

          <div className="mb-6 text-sm text-ibms-slate">{filtered.length} formation{filtered.length > 1 ? 's' : ''}</div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center"><p className="text-lg font-semibold text-ibms-ink">Aucune formation ne correspond à votre recherche.</p><button onClick={resetFilters} className="mt-4 text-sm font-bold text-ibms-blue">Réinitialiser les filtres</button></div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((f, idx) => (
                <Reveal key={f.num} delay={idx * 80}>
                  <Link to={`/formations/${f.num}`} className="card group block h-full overflow-hidden p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                      <img src={f.image} alt={f.title} className="h-full w-full object-cover transition-transform duration-700 ease-ibms group-hover:scale-105" loading="lazy" />
                      <div className="absolute left-3 top-3 bg-white/90 px-3 py-1 backdrop-blur-sm"><span className="label text-ibms-blue">{f.category}</span></div>
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-2"><span className="label text-ibms-slate">{f.num}</span><span className="h-px w-6 bg-ibms-veil" /></div>
                      <h3 className="mb-2 text-xl font-bold text-ibms-ink transition-colors duration-300 group-hover:text-ibms-blue">{f.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-ibms-slate">{f.desc}</p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-ibms-slate">
                        <span className="flex items-center gap-1"><Signal className="h-3.5 w-3.5" />{f.level}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{f.duration}</span>
                        <span className="flex items-center gap-1"><Monitor className="h-3.5 w-3.5" />{f.format}</span>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-ibms-blue">En savoir plus <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="projets-realises" className="section-pad bg-ibms-cream">
        <div className="container-ibms">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 flex items-center gap-3"><span className="label text-ibms-blue">Sur le terrain</span><span className="h-px w-12 bg-ibms-blue" /><span className="label text-ibms-slate">Nos réalisations</span></div>
            <h2 className="text-3xl font-extrabold text-ibms-ink md:text-4xl">Nos projets de formation.</h2>
            <p className="mt-4 text-base leading-relaxed text-ibms-slateDark">Des programmes construits avec des partenaires pour transmettre des compétences numériques concrètes, de la programmation au marketing digital.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trainingProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 70}>
                <Link to={`/formations/projets/${project.slug}`} className="group block h-full overflow-hidden rounded-2xl border border-ibms-veil bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-52 overflow-hidden">
                    <img src={project.image} alt={`Projet de formation ${project.title}`} className="h-full w-full object-cover transition-transform duration-700 ease-ibms group-hover:scale-105" loading="lazy" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-ibms-blue shadow-sm">{project.theme}</span>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between"><span className="label text-ibms-slate">Projet de formation</span><ArrowUpRight className="h-5 w-5 text-ibms-slate transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ibms-blue" /></div>
                    <h3 className="mb-3 text-xl font-extrabold text-ibms-ink">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-ibms-slateDark">{project.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
