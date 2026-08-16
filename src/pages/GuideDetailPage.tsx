import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { guides } from '@/data/site';

export function GuideDetailPage() {
  const { id } = useParams();
  const guide = guides.find((item) => item.num === id);
  if (!guide) return <Navigate to="/guides" replace />;
  const related = guides.filter((item) => item.num !== guide.num).slice(0, 2);
  return <PageLayout num={guide.num} label={`Guide / ${guide.category}`} title={guide.title} intro={guide.desc}>
    <section className="section-pad bg-white"><div className="container-ibms grid gap-12 lg:grid-cols-12"><div className="lg:col-span-7"><Reveal><img src={guide.image} alt="" className="mb-8 h-72 w-full rounded-3xl object-cover md:h-96" /></Reveal><Reveal delay={100}><div className="mb-8 flex items-center gap-2 text-sm text-ibms-slate"><Clock className="h-4 w-4 text-ibms-blue" /> {guide.readTime} de lecture</div></Reveal><div className="space-y-6">{guide.content.map((paragraph, index) => <Reveal key={paragraph} delay={index * 80}><p className="text-lg leading-relaxed text-ibms-slateDark">{paragraph}</p></Reveal>)}</div><Link to="/guides" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-ibms-slate hover:text-ibms-blue"><ArrowLeft className="h-4 w-4" /> Tous les guides</Link></div><aside className="lg:col-span-5"><Reveal delay={180}><div className="sticky top-28 bg-ibms-cream p-7"><div className="label mb-4 text-ibms-blue">À découvrir ensuite</div><div className="space-y-4">{related.map((item) => <Link key={item.num} to={`/guides/${item.num}`} className="group block border-t border-ibms-veil pt-4"><div className="mb-2 text-xs text-ibms-slate">{item.category} · {item.readTime}</div><div className="font-bold text-ibms-ink group-hover:text-ibms-blue">{item.title}</div><ArrowRight className="mt-3 h-4 w-4 text-ibms-blue transition-transform group-hover:translate-x-1" /></Link>)}</div></div></Reveal></aside></div></section>
    <section className="section-pad bg-ibms-navy text-white"><div className="container-ibms flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><div className="label mb-3 text-ibms-cyan">Besoin d’aller plus loin ?</div><h2 className="text-3xl font-extrabold">Découvrez nos formations.</h2></div><Link to="/formations" className="btn-primary">Voir le catalogue <ArrowRight className="h-4 w-4" /></Link></div></section>
  </PageLayout>;
}
