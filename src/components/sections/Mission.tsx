import { Reveal } from '@/components/ui/Reveal';
import { images } from '@/data/site';
import {
  GraduationCap,
  Code2,
  Lightbulb,
  Building2,
  ArrowRight,
} from 'lucide-react';

const cards = [
  {
    num: '01',
    title: 'Formation en numérique',
    description:
      'Former les talents aux métiers du numérique et aux technologies émergentes.',
    Icon: GraduationCap,
  },
  {
    num: '02',
    title: 'Solutions numériques',
    description:
      'Concevoir des outils digitaux modernes adaptés aux besoins réels.',
    Icon: Code2,
  },
  {
    num: '03',
    title: 'Soutien à l’innovation',
    description:
      'Accompagner les initiatives locales, les projets IA et les startups.',
    Icon: Lightbulb,
  },
  {
    num: '04',
    title: 'Transformation numérique',
    description:
      'Accélérer la modernisation digitale des entreprises et organisations.',
    Icon: Building2,
  },
];

export function Mission() {
  return (
    <section className="section-pad relative overflow-hidden bg-white">
      <div className="container-ibms relative z-10">

        {/* En-tête de la mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">

          <div>
            <Reveal>
              <span className="block text-5xl md:text-7xl font-extrabold text-ibms-veil mb-1">
                02
              </span>

              <div className="text-xl md:text-2xl font-extrabold text-ibms-blue mb-4">
                Notre mission
              </div>

              <h2 className="text-section-title font-extrabold text-ibms-ink leading-tight">
                Rendre le numérique accessible et créateur{' '}
                <span className="text-gradient">
                  d’opportunités.
                </span>
              </h2>
            </Reveal>
          </div>

          {/* Image réduite, sans texte superposé */}
          <Reveal delay={150}>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[440px] overflow-hidden rounded-3xl shadow-xl shadow-ibms-ink/10">
                <img
                  src={images.mission}
                  alt="Équipe collaborant autour de solutions numériques"
                  className="w-full h-[230px] md:h-[280px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

        </div>

        {/* Les quatre cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

          {cards.map(({ num, title, description, Icon }, index) => (
            <Reveal key={num} delay={index * 100}>
              <article className="group relative flex h-full min-h-[290px] flex-col rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-100/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-200/50">

                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-ibms-blue transition-colors duration-300 group-hover:bg-ibms-blue group-hover:text-white">
                    <Icon size={32} strokeWidth={1.9} />
                  </div>

                  <span className="text-4xl font-extrabold text-blue-200">
                    {num}
                  </span>
                </div>

                <h3 className="mb-4 text-lg font-extrabold leading-snug text-ibms-ink">
                  {title}
                </h3>

                <p className="text-sm leading-relaxed text-ibms-slateDark">
                  {description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="h-1 w-16 rounded-full bg-ibms-blue" />

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ibms-blue text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={21} />
                  </span>
                </div>

              </article>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}
