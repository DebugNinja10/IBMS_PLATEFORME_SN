import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { Counter } from '@/components/ui/Counter';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Check } from 'lucide-react';
import { images, stats, missions } from '@/data/site';
import { Link } from 'react-router-dom';

const sections = [
  { num: '01', title: 'Qui sommes-nous ?', desc: "IBMS est une initiative stratégique dédiée à structurer, développer et dynamiser l'écosystème des compétences numériques. Nous œuvrons pour que la technologie devienne un véritable levier de transformation économique, sociale et technologique." },
  { num: '02', title: 'Notre histoire', desc: "Née de la volonté de combler le fossé entre les besoins du marché et les compétences disponibles, IBMS a construit un parcours d'accompagnement rigoureux, adapté aux réalités du marché africain et ouvert au monde." },
  { num: '03', title: 'Notre vision', desc: "Faire de la compétence un moteur d'innovation et de transformation. IBMS aspire à donner aux compétences numériques une place essentielle dans le développement, en créant un environnement favorable pour les apprenants, les entreprises et les institutions." },
  { num: '04', title: 'Notre mission', desc: "Former, accompagner, innover, transformer. Nous accompagnons l'écosystème dans l'adoption des technologies numériques par un accompagnement opérationnel : ateliers, mentorat, mise en réseau et accès aux ressources." },
  { num: '05', title: 'Nos valeurs', desc: "Excellence, intégrité, accessibilité, innovation responsable et impact durable. Ces principes guident chaque action d'IBMS, de la conception des programmes à l'accompagnement des talents." },
];

const values = ['Excellence', 'Intégrité', 'Accessibilité', 'Innovation responsable', 'Impact durable'];

export function AProposPage() {
  return (
    <PageLayout
      num="01"
      label="À propos"
      title={<>Une institution au service du <span className="text-ibms-cyan">savoir.</span></>}
      intro="IBMS fédère talents, institutions et entreprises pour bâtir un écosystème numérique compétitif, responsable et innovant en Afrique de l'Ouest."
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <div className="sticky top-28">
                  <div className="mb-4 flex items-center gap-3"><span className="label text-ibms-blue">Navigation</span><span className="h-px w-12 bg-ibms-blue" /></div>
                  <nav className="space-y-1">
                    {sections.map((s) => (
                      <a key={s.num} href={`#section-${s.num}`} className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-300 hover:bg-ibms-light">
                        <span className="label text-ibms-slate transition-colors group-hover:text-ibms-blue">{s.num}</span>
                        <span className="text-sm font-semibold text-ibms-ink transition-colors group-hover:text-ibms-blue">{s.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 lg:col-span-7">
              {sections.map((s, idx) => (
                <Reveal key={s.num} delay={idx * 60}>
                  <div id={`section-${s.num}`} className="border-t border-ibms-veil py-8">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-4xl font-extrabold text-ibms-veil">{s.num}</span>
                      <span className="h-px flex-1 bg-ibms-veil" />
                    </div>
                    <h2 className="mb-4 text-2xl font-extrabold text-ibms-ink">{s.title}</h2>
                    <p className="text-base leading-relaxed text-ibms-slateDark">{s.desc}</p>
                    {s.num === '05' && (
                      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {values.map((v) => (
                          <li key={v} className="flex items-center gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-ibms-blue/10"><Check className="h-3.5 w-3.5 text-ibms-blue" /></span>
                            <span className="text-sm font-semibold text-ibms-ink">{v}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-ibms py-16 text-white md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/40" />
          <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full border border-white/20" />
        </div>
        <div className="container-ibms relative">
          <div className="mb-10 flex items-center gap-3"><span className="label text-white/70">05</span><span className="h-px w-12 bg-white/50" /><span className="label text-white/70">Impact en chiffres</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 100}>
                <div className={`px-4 py-4 md:px-8 md:py-2 ${index > 0 ? 'border-l border-white/20' : ''}`}>
                  <div className="text-5xl font-extrabold leading-none md:text-7xl"><Counter target={stat.value} suffix={stat.suffix} /></div>
                  <div className="mt-4 max-w-[130px] text-xs font-bold uppercase leading-relaxed tracking-widest text-white/70">{stat.label}</div>
                  <div className="mt-6 h-1 w-8 bg-ibms-cyan" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-ibms">
          <Reveal>
            <div className="mb-12 grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-8">
                <div className="label mb-4 text-ibms-blue">Nos piliers</div>
                <h2 className="text-section-title font-extrabold text-ibms-ink">Ce qui guide <span className="text-gradient">chaque action.</span></h2>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {missions.map((m, idx) => (
              <Reveal key={m.num} delay={idx * 80}>
                <div className="card group h-full">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ibms-light text-sm font-extrabold text-ibms-blue transition-colors duration-300 group-hover:bg-ibms-blue group-hover:text-white">{m.num}</span>
                    <h3 className="text-xl font-bold text-ibms-ink">{m.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-ibms-slateDark">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-10"><Link to="/contact" className="btn-primary">Rejoindre l'aventure IBMS</Link></div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
