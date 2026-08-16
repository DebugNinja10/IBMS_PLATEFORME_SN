import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, ArrowUpRight, Code, GraduationCap, Lightbulb, RefreshCw, Users } from 'lucide-react';
import { services } from '@/data/site';
import { Link } from 'react-router-dom';

const iconMap = { GraduationCap, RefreshCw, Code, Lightbulb, Users };

export function ServicesPage() {
  const [active, setActive] = useState(0);
  const selected = services[active];
  const Icon = iconMap[selected.icon as keyof typeof iconMap] || GraduationCap;

  return (
    <PageLayout
      num="04"
      label="Services"
      title={<>Des solutions pour <span className="text-ibms-cyan">transformer.</span></>}
      intro="Cinq expertises complémentaires au service de votre transformation digitale, de la formation au déploiement."
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="grid grid-cols-12 gap-8 border-y border-ibms-ink/15 lg:gap-12">
            <div className="col-span-12 lg:col-span-5">
              {services.map((service, index) => (
                <Reveal key={service.num} delay={index * 60}>
                  <Link
                    to={`/services/${service.num}`}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    className={`group flex w-full items-center gap-4 border-b border-ibms-ink/15 py-6 text-left transition-colors duration-300 ${active === index ? 'bg-ibms-light/70' : ''}`}
                  >
                    <span className={`pl-3 text-sm font-bold transition-colors ${active === index ? 'text-ibms-blue' : 'text-ibms-slate'}`}>{service.num}</span>
                    <span className={`flex-1 text-lg font-bold transition-all duration-300 ease-ibms ${active === index ? 'translate-x-2 text-ibms-blue' : 'text-ibms-ink group-hover:translate-x-2 group-hover:text-ibms-blue'}`}>{service.title}</span>
                    <ArrowUpRight className={`mr-3 h-5 w-5 transition-all duration-300 ${active === index ? 'text-ibms-blue' : 'text-ibms-slate group-hover:text-ibms-blue'}`} />
                    </Link>
                </Reveal>
              ))}
            </div>
            <div className="col-span-12 flex min-h-[360px] items-center bg-ibms-navy p-8 text-white lg:col-span-7 lg:p-12">
              <Reveal key={selected.num} delay={80}>
                <div className="max-w-xl">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-ibms-cyan/40">
                      <Icon className="h-7 w-7 text-ibms-cyan" strokeWidth={1.5} />
                    </div>
                    <span className="text-7xl font-extrabold text-white/10">{selected.num}</span>
                  </div>
                  <div className="label mb-4 text-ibms-cyan">{selected.title}</div>
                  <p className="mb-7 text-xl font-light leading-relaxed text-white/80">{selected.desc}</p>
                  <div className="mb-8 grid grid-cols-2 gap-x-5 gap-y-3">
                    {selected.details.map((detail) => (
                      <span key={detail} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="h-1.5 w-1.5 rounded-full bg-ibms-cyan" />
                        {detail}
                      </span>
                    ))}
                  </div>
                  <Link to={`/services/${selected.num}`} className="inline-flex items-center gap-2 text-sm font-bold text-white transition-all duration-300 hover:gap-3 hover:text-ibms-cyan">
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
