import { Reveal } from '@/components/ui/Reveal';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '@/data/site';

export function Resources() {
  const [main, ...rest] = articles;

  return (
    <section id="ressources" className="section-pad bg-ibms-cream">
      <div className="container-ibms">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <div className="label text-ibms-blue mb-4">Blog & Actualités</div>
              <h2 className="text-section-title font-extrabold text-ibms-ink">
                Idées, guides
                <br />
                et <span className="text-gradient">réflexions.</span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-4 md:flex md:items-end md:justify-end gap-6">
            <Reveal delay={200}><ArrowLink to="/guides" variant="blue">Guides</ArrowLink></Reveal>
            <Reveal delay={300}><ArrowLink to="/blog" variant="blue">Tous les articles</ArrowLink></Reveal>
          </div>
        </div>

        {/* Main article */}
        <Reveal>
          <Link to={`/blog/${main.num}`} className="group block rounded-3xl overflow-hidden bg-white border border-ibms-veil transition-all duration-500 ease-ibms hover:shadow-xl hover:shadow-ibms-blue/5 mb-6">
            <div className="grid grid-cols-12 gap-0">
              <div className="col-span-12 md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                <img src={main.image} alt="" className="w-full h-full object-cover transition-transform duration-700 ease-ibms group-hover:scale-105" loading="lazy" />
              </div>
              <div className="col-span-12 md:col-span-7 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold bg-ibms-blue/10 text-ibms-blue rounded-lg px-3 py-1">{main.category}</span>
                  <span className="text-xs text-ibms-slate">{main.date}</span>
                  <span className="h-px w-4 bg-ibms-veil" />
                  <span className="text-xs text-ibms-slate">{main.readTime} de lecture</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-ibms-ink mb-3 transition-colors duration-300 group-hover:text-ibms-blue">
                  {main.title}
                </h3>
                <p className="text-base text-ibms-slateDark leading-relaxed mb-4">{main.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-ibms-slate mb-4">
                  Par {main.author}
                </div>
                <div className="flex items-center gap-2 text-ibms-blue font-semibold text-sm">
                  Lire l'article
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                </div>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* Secondary articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((a, idx) => (
            <Reveal key={a.num} delay={idx * 80}>
              <Link to={`/blog/${a.num}`} className="group block card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="label text-ibms-slate">{a.num}</span>
                  <span className="text-xs font-semibold bg-ibms-blue/10 text-ibms-blue rounded-lg px-3 py-1">{a.category}</span>
                  <span className="h-px w-4 bg-ibms-veil" />
                  <span className="text-xs text-ibms-slate">{a.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-ibms-ink mb-2 transition-colors duration-300 group-hover:text-ibms-blue">
                  {a.title}
                </h3>
                <p className="text-sm text-ibms-slate leading-relaxed mb-3">{a.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-ibms-slate">
                  {a.date} — {a.author}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
