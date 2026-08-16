import { useParams, Link, Navigate } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { articles } from '@/data/site';

export function ArticleDetailPage() {
  const { id } = useParams();
  const article = articles.find((a) => a.num === id);

  if (!article) return <Navigate to="/blog" replace />;

  const others = articles.filter((a) => a.num !== id);

  return (
    <PageLayout
      num={article.num}
      label={`Blog / ${article.category}`}
      title={article.title}
      intro={article.excerpt}
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-ibms-slate">
                <span className="flex items-center gap-1.5"><User className="h-4 w-4" />{article.author}</span>
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{article.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{article.readTime} de lecture</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="mb-10 overflow-hidden rounded-3xl">
                <img src={article.image} alt={article.title} className="h-72 w-full object-cover md:h-96" />
              </div>
            </Reveal>
            <div className="space-y-6">
              {article.content.map((para, idx) => (
                <Reveal key={idx} delay={idx * 60}>
                  <p className="text-lg leading-relaxed text-ibms-slateDark">{para}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <div className="mt-12 border-t border-ibms-veil pt-6">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-ibms-slate transition-colors hover:text-ibms-blue">
                  <ArrowLeft className="h-4 w-4" />
                  Retour au blog
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="section-pad bg-ibms-cream">
          <div className="container-ibms">
            <Reveal>
              <h2 className="mb-8 text-2xl font-extrabold text-ibms-ink">Articles similaires</h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {others.map((a, idx) => (
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
                    <div className="flex items-center gap-2 text-sm font-semibold text-ibms-blue">
                      Lire l'article
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
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
