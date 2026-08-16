import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Clock, Monitor, Signal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { formations } from '@/data/site';

export function Formations() {
  const [active, setActive] = useState(0);
  const selected = formations[active];

  return (
    <section id="formations" className="section-pad bg-ibms-cream">
      <div className="container-ibms">
        <div className="mb-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <div className="mb-4 flex items-center gap-3"><span className="label text-ibms-blue">03</span><span className="h-px w-12 bg-ibms-blue" /><span className="label text-ibms-slate">Formations</span></div>
              <h2 className="text-section-title font-extrabold text-ibms-ink">Les compétences pour le <span className="text-gradient">monde de demain.</span></h2>
            </Reveal>
          </div>
          <div className="col-span-12 flex items-end md:col-span-5 md:justify-end"><Reveal delay={150}><ArrowLink to="/formations" variant="blue">Voir le catalogue complet</ArrowLink></Reveal></div>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="border-t border-ibms-ink/15">
              {formations.map((formation, index) => (
                <Reveal key={formation.num} delay={index * 60}>
                  <button onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className="group relative flex w-full items-center gap-4 border-b border-ibms-ink/15 py-5 text-left md:gap-6 md:py-6">
                    <span className={`w-8 shrink-0 text-sm font-bold transition-colors duration-300 ${active === index ? 'text-ibms-blue' : 'text-ibms-slate'}`}>{formation.num}</span>
                    <span className={`flex-1 text-lg font-bold transition-all duration-300 ease-ibms md:text-2xl ${active === index ? 'translate-x-2 text-ibms-blue' : 'text-ibms-ink group-hover:translate-x-2 group-hover:text-ibms-blue'}`}>{formation.title}</span>
                    <span className={`hidden max-w-[150px] text-xs leading-relaxed text-ibms-slate transition-opacity duration-300 md:block ${active === index ? 'opacity-100' : 'opacity-0'}`}>{formation.category}</span>
                    <span className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${active === index ? 'border-ibms-blue bg-ibms-blue text-white' : 'border-ibms-veil text-ibms-slate group-hover:border-ibms-blue group-hover:text-ibms-blue'}`}><ArrowUpRight className="h-4 w-4" strokeWidth={2} /></span>
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-ibms-cyan transition-all duration-500 ease-ibms ${active === index ? 'w-full' : 'w-0 group-hover:w-1/3'}`} />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <Reveal delay={180}>
              <div className="sticky top-28 overflow-hidden border border-ibms-veil bg-white p-3 shadow-xl shadow-ibms-ink/5">
                <div className="relative h-52 overflow-hidden md:h-64">
                  <img key={selected.image} src={selected.image} alt={selected.title} className="h-full w-full object-cover transition-transform duration-700 ease-ibms" />
                  <div className="absolute left-4 top-4 bg-white px-3 py-2"><span className="label text-ibms-blue">{selected.category}</span></div>
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-3"><span className="label text-ibms-slate">Programme {selected.num}</span><span className="h-px w-6 bg-ibms-veil" /></div>
                  <h3 className="mb-3 text-2xl font-extrabold text-ibms-ink">{selected.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-ibms-slateDark">{selected.desc}</p>
                  <div className="mb-5 flex flex-wrap gap-3 text-xs text-ibms-slate"><span className="flex items-center gap-1"><Signal className="h-3.5 w-3.5 text-ibms-blue" />{selected.level}</span><span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-ibms-blue" />{selected.duration}</span><span className="flex items-center gap-1"><Monitor className="h-3.5 w-3.5 text-ibms-blue" />{selected.format}</span></div>
                  <Link to={`/formations/${selected.num}`} className="btn-primary w-full justify-center">Voir le programme <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
