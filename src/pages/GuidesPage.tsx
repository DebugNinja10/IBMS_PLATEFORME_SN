import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { guides } from '@/data/site';

export function GuidesPage() {
  const categories = [...new Set(guides.map((guide) => guide.category))];
  return <PageLayout num="08" label="Guides" title={<>Des ressources pour <span className="text-ibms-cyan">progresser.</span></>} intro="Des formats courts pour mieux comprendre la technologie, développer ses compétences et passer à l’action.">
    <section className="section-pad bg-white"><div className="container-ibms"><div className="mb-10 flex flex-wrap gap-2">{categories.map((category) => <span key={category} className="rounded-full border border-ibms-veil bg-ibms-cream px-4 py-2 text-sm font-semibold text-ibms-slate">{category}</span>)}</div><div className="grid gap-6 md:grid-cols-2">{guides.map((guide, index) => <Reveal key={guide.num} delay={index * 70}><Link to={`/guides/${guide.num}`} className="group block overflow-hidden border border-ibms-veil bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ibms-blue/5"><div className="relative h-56 overflow-hidden"><img src={guide.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" /><span className="absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-1 text-xs font-bold text-ibms-blue">{guide.category}</span></div><div className="p-6"><div className="mb-3 flex items-center gap-2 text-xs text-ibms-slate"><Clock className="h-3.5 w-3.5" /> {guide.readTime} de lecture</div><h2 className="mb-3 text-xl font-extrabold text-ibms-ink group-hover:text-ibms-blue">{guide.title}</h2><p className="mb-5 text-sm leading-relaxed text-ibms-slate">{guide.desc}</p><span className="inline-flex items-center gap-2 text-sm font-bold text-ibms-blue">Lire le guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div></Link></Reveal>)}</div></div></section>
  </PageLayout>;
}
