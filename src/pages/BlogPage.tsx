import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';
import { articles } from '@/data/site';

export function BlogPage() {
  const [main, ...rest] = articles;

  return (
    <PageLayout
      num="07"
      label="Blog & Actualités"
      title={<>Idées, guides et <span className="text-ibms-cyan">réflexions.</span></>}
      intro="Articles, analyses et ressources de l'équipe IBMS sur la formation, la technologie et l'innovation en Afrique."
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <Reveal>
            <Link to={`/blog/${main.num}`} className="group mb-8 block overflow-hidden rounded-3xl border border-ibms-veil bg-white transition-all duration-500 ease-ibms hover:shadow-xl hover:shadow-ibms-blue/5">
              <div className="grid grid-cols-12 gap-0">
                <div className="relative col-span-12 h-64 overflow-hidden md:col-span-5 md:h-auto">
                  <img src={main.image} alt={main.title} className="h-full w-full object-cover transition-transform duration-700 ease-ibms group-hover:scale-105" loading="lazy" />
                </div>
                <div className="col-span-12 p-8 md:col-span-7 md:p-10">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-lg bg-ibms-blue/10 px-3 py-1 text-xs font-semibold text-ibms-blue">{main.category}</span>
                    <span className="text-xs text-ibms-slate">{main.date}</span>
                    <span className="h-px w-4 bg-ibms-veil" />
                    <span className="text-xs text-ibms-slate">{main.readTime} de lecture</span>
                  </div>
                  <h3 className="mb-3 text-2xl font-extrabold text-ibms-ink transition-colors duration-300 group-hover:text-ibms-blue md:text-3xl">{main.title}</h3>
                  <p className="mb-4 text-base leading-relaxed text-ibms-slateDark">{main.excerpt}</p>
                  <div className="mb-4 text-sm text-ibms-slate">Par {main.author}</div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-ibms-blue">
                    Lire l'article
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, idx) => (
              <Reveal key={a.num} delay={idx * 80}>
                <Link to={`/blog/${a.num}`} className="card group block h-full">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="label text-ibms-slate">{a.num}</span>
                    <span className="rounded-lg bg-ibms-blue/10 px-3 py-1 text-xs font-semibold text-ibms-blue">{a.category}</span>
                    <span className="h-px w-4 bg-ibms-veil" />
                    <span className="text-xs text-ibms-slate">{a.readTime}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-ibms-ink transition-colors duration-300 group-hover:text-ibms-blue">{a.title}</h3>
                  <p className="mb-3 text-sm leading-relaxed text-ibms-slate">{a.excerpt}</p>
                  <div className="text-xs text-ibms-slate">{a.date} — {a.author}</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
