
import { Reveal } from '@/components/ui/Reveal';
import {
  Monitor,
  Target,
  Workflow,
  GraduationCap,
} from 'lucide-react';

const items = [
  {
    num: '01',
    title: 'Quoi ?',
    desc: "Un programme de formation et d'accompagnement multidisciplinaire, conçu sur mesure pour répondre aux besoins réels du marché et des organisations.",
    Icon: Monitor,
  },
  {
    num: '02',
    title: 'Pourquoi ?',
    desc: "En servant la croissance des talents et des entreprises, IBMS contribue au développement économique et technologique.",
    Icon: Target,
  },
  {
    num: '03',
    title: 'Comment ?',
    desc: "Par des ateliers, du mentorat, la mise en réseau et l'accès aux ressources pour transformer les ambitions en résultats.",
    Icon: Workflow,
  },
  {
    num: '04',
    title: 'Vacances digitales',
    desc: "Profitez de vos vacances pour investir dans votre avenir. Découvrez le numérique, développez de nouvelles compétences et préparez votre avenir professionnel grâce à des formations pratiques et accessibles.",
    Icon: GraduationCap,
  },
];

export function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-gradient-navy py-20 md:py-28 text-white"
    >
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-ibms-blue/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-ibms-cyan/10 blur-3xl" />

      <div className="container-ibms relative">
        <Reveal>
          <div className="mb-14 max-w-5xl">
            <span className="mb-5 block text-5xl md:text-6xl font-extrabold">
              Notre vision
            </span>

            <h2 className="max-w-4xl text-2xl md:text-3xl lg:text-4xl font-medium leading-snug text-white/90">
              Faire émerger les talents et les solutions numériques de demain.
            </h2>
          </div>
        </Reveal>


        <Reveal delay={150}>
          <div className="mb-10">
            <span className="mb-3 block text-sm font-bold uppercase tracking-[0.25em] text-ibms-cyan">
              Notre approche
            </span>

            <h3 className="text-3xl md:text-4xl font-extrabold">
              Notre vision en action.
            </h3>
          </div>
        </Reveal>

        {/* LES 4 CARTES SUR UNE SEULE LIGNE */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, idx) => {
            const Icon = item.Icon;

            return (
              <Reveal key={item.num} delay={idx * 100}>
                <article className="group h-full rounded-[1.75rem] border border-white/10 bg-[#0E2A52] p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-ibms-cyan/40 hover:bg-[#133766]">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-sm font-bold tracking-[0.2em] text-ibms-cyan">
                      {item.num}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ibms-blue/20 text-ibms-cyan transition-all duration-300 group-hover:bg-ibms-cyan group-hover:text-[#07152b]">
                      <Icon size={30} strokeWidth={1.6} />
                    </div>
                  </div>

                  <h4 className="mb-5 text-2xl font-extrabold leading-tight text-white">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-relaxed text-white/75 md:text-base">
                    {item.desc}
                  </p>

                  <div className="mt-7 h-1 w-14 rounded-full bg-ibms-cyan transition-all duration-300 group-hover:w-24" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
