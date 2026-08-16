import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Plus } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { projects, serviceDetails, services } from '@/data/site';

export function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find((item) => item.num === id);
  const detail = serviceDetails.find((item) => item.serviceNum === id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service || !detail) return <Navigate to="/services" replace />;

  return (
    <PageLayout num={service.num} label={`Service / ${service.title}`} title={service.title} intro={detail.intro}>
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal><h2 className="mb-6 text-3xl font-extrabold text-ibms-ink">Ce que nous faisons</h2></Reveal>
              <div className="grid gap-3 sm:grid-cols-2">
                {detail.whatWeDo.map((item, index) => <Reveal key={item} delay={index * 60}><div className="flex items-start gap-3 border-t border-ibms-veil py-4"><span className="label text-ibms-blue">{String(index + 1).padStart(2, '0')}</span><span className="font-semibold text-ibms-ink">{item}</span></div></Reveal>)}
              </div>
              <Reveal delay={120}><div className="mt-12 border-l-2 border-ibms-cyan bg-ibms-cream p-6"><p className="text-lg leading-relaxed text-ibms-slateDark">{service.desc}</p></div></Reveal>
            </div>
            <Reveal className="lg:col-span-5" delay={160}><div className="bg-ibms-navy p-8 text-white"><div className="label mb-5 text-ibms-cyan">Les bénéfices</div><ul className="space-y-4">{detail.benefits.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/80"><Check className="mt-0.5 h-4 w-4 shrink-0 text-ibms-cyan" />{item}</li>)}</ul></div></Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ibms-cream">
        <div className="container-ibms grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div><Reveal><div className="label mb-4 text-ibms-blue">Notre approche</div><h2 className="mb-8 text-3xl font-extrabold text-ibms-ink">Simple, concrète, progressive.</h2></Reveal><div className="space-y-5">{detail.approach.map((item, index) => <Reveal key={item} delay={index * 60}><div className="flex items-center gap-4 border-b border-ibms-veil pb-5"><span className="text-3xl font-extrabold text-ibms-blue/20">{String(index + 1).padStart(2, '0')}</span><span className="font-semibold text-ibms-ink">{item}</span></div></Reveal>)}</div></div>
          <div><Reveal><div className="label mb-4 text-ibms-blue">Le processus</div><h2 className="mb-8 text-3xl font-extrabold text-ibms-ink">Du premier échange au résultat.</h2></Reveal><div className="grid gap-3 sm:grid-cols-2">{detail.process.map((item, index) => <Reveal key={item} delay={index * 60}><div className="border border-ibms-veil bg-white p-5"><div className="mb-5 text-4xl font-extrabold text-ibms-veil">{String(index + 1).padStart(2, '0')}</div><div className="font-bold text-ibms-ink">{item}</div></div></Reveal>)}</div></div>
        </div>
      </section>

      <section className="section-pad bg-white"><div className="container-ibms"><Reveal><div className="mb-8 flex items-end justify-between gap-6"><div><div className="label mb-4 text-ibms-blue">Réalisations liées</div><h2 className="text-3xl font-extrabold text-ibms-ink">Des projets pour passer à l’action.</h2></div><Link to="/projets" className="hidden items-center gap-2 text-sm font-bold text-ibms-blue md:flex">Tous les projets <ArrowRight className="h-4 w-4" /></Link></div></Reveal><div className="grid gap-6 md:grid-cols-2">{projects.slice(0, 2).map((project, index) => <Reveal key={project.num} delay={index * 80}><Link to={`/projets/${project.num}`} className="group block border border-ibms-veil p-6 transition-all duration-300 hover:border-ibms-blue/30 hover:shadow-lg"><div className="mb-5 flex items-center justify-between"><span className="label text-ibms-slate">{project.category} / {project.year}</span><ArrowRight className="h-4 w-4 text-ibms-slate transition-transform group-hover:translate-x-1 group-hover:text-ibms-blue" /></div><h3 className="mb-2 text-xl font-bold text-ibms-ink group-hover:text-ibms-blue">{project.title}</h3><p className="text-sm leading-relaxed text-ibms-slate">{project.desc}</p></Link></Reveal>)}</div></div></section>

      <section className="section-pad bg-ibms-cream"><div className="container-ibms grid grid-cols-1 gap-12 lg:grid-cols-2"><div><Reveal><div className="label mb-4 text-ibms-blue">Questions fréquentes</div><h2 className="text-3xl font-extrabold text-ibms-ink">Avant de commencer.</h2></Reveal></div><div className="space-y-2">{detail.faq.map((item, index) => <Reveal key={item.question} delay={index * 80}><div className="border-t border-ibms-ink/15"><button className="flex w-full items-center justify-between gap-4 py-5 text-left" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span className="font-bold text-ibms-ink">{item.question}</span><Plus className={`h-4 w-4 shrink-0 text-ibms-blue transition-transform ${openFaq === index ? 'rotate-45' : ''}`} /></button>{openFaq === index && <p className="pb-5 pr-8 text-sm leading-relaxed text-ibms-slate">{item.answer}</p>}</div></Reveal>)}</div></div></section>

      <section className="section-pad bg-ibms-navy text-white"><div className="container-ibms flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><div className="label mb-3 text-ibms-cyan">Parlons de votre besoin</div><h2 className="max-w-2xl text-3xl font-extrabold md:text-4xl">Construisons une prochaine étape utile.</h2></div><Link to="/contact" className="btn-primary shrink-0">Nous contacter <ArrowRight className="h-4 w-4" /></Link></div></section>
      <div className="container-ibms py-8"><Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-ibms-slate hover:text-ibms-blue"><ArrowLeft className="h-4 w-4" /> Retour aux services</Link></div>
    </PageLayout>
  );
}
