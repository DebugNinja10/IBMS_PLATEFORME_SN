import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, X } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { articles, formations, guides, projects, services } from '@/data/site';

type SearchResult = {
  type: string;
  title: string;
  desc: string;
  path: string;
  category: string;
};

export function RecherchePage() {
  const [query, setQuery] = useState('');

  const allResults: SearchResult[] = useMemo(() => [
    ...formations.map((f) => ({ type: 'Formation', title: f.title, desc: f.desc, path: `/formations/${f.num}`, category: f.category })),
    ...services.map((s) => ({ type: 'Service', title: s.title, desc: s.desc, path: `/services/${s.num}`, category: 'Service' })),
    ...projects.map((p) => ({ type: 'Projet', title: p.title, desc: p.desc, path: `/projets/${p.num}`, category: p.category })),
    ...articles.map((a) => ({ type: 'Article', title: a.title, desc: a.excerpt, path: `/blog/${a.num}`, category: a.category })),
    ...guides.map((g) => ({ type: 'Guide', title: g.title, desc: g.desc, path: `/guides/${g.num}`, category: g.category })),
  ], []);

  const filtered = query.length > 1
    ? allResults.filter((r) => r.title.toLowerCase().includes(query.toLowerCase()) || r.desc.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <PageLayout num="—" label="Recherche" title={<>Trouvez ce que vous <span className="text-ibms-cyan">cherchez.</span></>} intro="Recherchez dans nos formations, services, projets, articles et guides.">
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="relative mb-8 max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ibms-slate" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Formations, services, projets, articles..."
              autoFocus
              className="w-full rounded-xl border border-ibms-veil bg-ibms-cream py-4 pl-12 pr-12 text-base text-ibms-ink placeholder:text-ibms-slate focus:border-ibms-blue focus:outline-none"
            />
            {query && <button onClick={() => setQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-ibms-slate hover:text-ibms-blue"><X className="h-5 w-5" /></button>}
          </div>

          {query.length <= 1 ? (
            <div className="py-20 text-center"><p className="text-sm text-ibms-slate">Commencez à taper pour rechercher dans toute la plateforme.</p></div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center"><p className="text-lg font-semibold text-ibms-ink">Aucun résultat pour « {query} ».</p><p className="mt-2 text-sm text-ibms-slate">Essayez avec d'autres mots-clés.</p></div>
          ) : (
            <>
              <div className="mb-6 text-sm text-ibms-slate">{filtered.length} résultat{filtered.length > 1 ? 's' : ''}</div>
              <div className="space-y-3">
                {filtered.map((r, idx) => (
                  <Reveal key={`${r.path}-${idx}`} delay={idx * 40}>
                    <Link to={r.path} className="group flex items-center justify-between gap-6 border border-ibms-veil bg-white p-5 transition-all duration-300 hover:border-ibms-blue/30 hover:shadow-lg hover:shadow-ibms-blue/5">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <span className="rounded-lg bg-ibms-blue/10 px-2.5 py-0.5 text-xs font-bold text-ibms-blue">{r.type}</span>
                          <span className="text-xs text-ibms-slate">{r.category}</span>
                        </div>
                        <h3 className="mb-1 text-lg font-bold text-ibms-ink group-hover:text-ibms-blue">{r.title}</h3>
                        <p className="text-sm leading-relaxed text-ibms-slate">{r.desc}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 shrink-0 text-ibms-slate transition-transform group-hover:translate-x-1 group-hover:text-ibms-blue" />
                    </Link>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
