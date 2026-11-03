
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  MonitorSmartphone,
  BrainCircuit,
  Building2,
  ArrowUpRight,
} from 'lucide-react';

const destinations = [
  {
    title: 'DÃ©couvrir nos formations',
    description:
      'DÃ©veloppez vos compÃ©tences grÃ¢ce Ã  nos programmes de formation adaptÃ©s aux besoins du marchÃ©.',
    link: '/formations',
    icon: GraduationCap,
  },
  {
    title: 'Solutions digitales',
    description:
      'DÃ©couvrez nos solutions numÃ©riques pour accompagner vos projets et votre transformation digitale.',
    link: '/solutions-digitales',
    icon: MonitorSmartphone,
  },
  {
    title: 'Intelligence artificielle',
    description:
      "Explorez les possibilitÃ©s de l'intelligence artificielle et ses applications dans vos activitÃ©s.",
    link: '/intelligence-artificielle',
    icon: BrainCircuit,
  },
  {
    title: 'DÃ©couvrir IBMS',
    description:
      'Apprenez Ã  connaÃ®tre notre entreprise, notre vision, notre expertise et nos engagements.',
    link: '/a-propos',
    icon: Building2,
  },
];

export function ExploreIBMS() {
  return (
    <section className="relative overflow-hidden bg-[#071B31] py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#20C8C2]">
            Explorez IBMS
          </span>

          <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
            Explorez notre univers numÃ©rique
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-300">
            DÃ©couvrez nos activitÃ©s et trouvez facilement
            les solutions adaptÃ©es Ã  vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                to={item.link}
                className="group flex h-full flex-col rounded-xl border border-white/10 bg-[#102C48] p-4 transition-all duration-300 hover:-translate-y-2 hover:border-[#20C8C2]/60 hover:bg-[#153653] hover:shadow-xl hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C8C2]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#20C8C2]/10 transition-colors group-hover:bg-[#20C8C2]/20">
                  <Icon className="h-6 w-6 text-[#20C8C2]" />
                </div> 

                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-xs leading-5 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-semibold text-[#20C8C2]">
                  <span>En savoir plus</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}


