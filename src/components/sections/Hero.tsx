
import {
  ArrowRight,
  ArrowUpRight,
  MonitorSmartphone,
  BrainCircuit,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/ui/Reveal';
import { IBMSRobot } from '@/components/3d/IBMSRobot';

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-gradient-navy pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -right-32 top-24 hidden h-[34rem] w-[34rem] rounded-full border border-ibms-blue/10 md:block" />
        <div className="absolute -right-12 top-40 hidden h-[25rem] w-[25rem] rounded-full border border-ibms-cyan/20 md:block" />
        <div className="absolute right-28 top-56 hidden h-3 w-3 rounded-full bg-ibms-cyan md:block" />
        <div className="absolute left-0 top-24 h-px w-1/3 bg-ibms-blue/20" />
        <div className="absolute bottom-16 right-0 h-px w-1/4 bg-ibms-cyan/30" />
      </div>

      <div className="container-ibms relative">
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          <div className="col-span-12 lg:col-span-8 lg:pt-10">
            <Reveal>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-ibms-cyan" />
                <span className="label text-ibms-cyan">
                  Formation / Innovation / Solutions numériques
                </span>
                <span className="hidden h-px w-16 bg-ibms-veil sm:block" />
                <span className="hidden text-[10px] font-bold uppercase tracking-widest text-ibms-slate sm:block">
                  Thiès / SN
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="mb-3 label text-ibms-cyan">
                Une entreprise informatique
              </p>

              <h1 className="max-w-4xl text-hero font-serif font-normal tracking-normal text-white">
                Maîtrisez le numérique{' '}
                <span className="relative inline-block text-ibms-cyan">
                  avec IBMS.
                  <span className="absolute -bottom-2 left-0 h-1 w-2/3 bg-ibms-cyan" />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
                IBMS accompagne les jeunes, les professionnels, les
                entrepreneurs et les organisations dans leur transformation
                numérique à travers la formation, l’innovation et la conception
                de solutions digitales adaptées aux besoins réels.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-nowrap items-center gap-1.5 overflow-x-auto pb-2">
                <Link
                  to="/formations"
                  className="btn-primary inline-flex shrink-0 items-center gap-1 whitespace-nowrap px-3 text-xs"
                >
                  Découvrir nos formations
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-white" strokeWidth={2} />
                </Link>

                <Link
                  to="/intelligence-artificielle"
                  className="btn-ghost inline-flex shrink-0 items-center gap-1 whitespace-nowrap border-2 border-ibms-blue bg-ibms-blue px-2 text-xs text-white transition-colors hover:border-ibms-cyan hover:bg-ibms-cyan"
                >
                  <BrainCircuit className="h-3.5 w-3.5 shrink-0" />
                  Intelligence artificielle
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </Link>

                <Link
                  to="/solutions-digitales"
                  className="btn-ghost inline-flex shrink-0 items-center gap-1 whitespace-nowrap border-2 border-ibms-blue bg-ibms-blue px-2 text-xs text-white transition-colors hover:border-ibms-cyan hover:bg-ibms-cyan"
                >
                  <MonitorSmartphone className="h-3.5 w-3.5 shrink-0" />
                  Solutions digitales
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </Link>

                <Link
                  to="/a-propos"
                  className="btn-ghost inline-flex shrink-0 items-center gap-1 whitespace-nowrap px-2 text-xs text-white"
                >
                  Découvrir IBMS
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-white" strokeWidth={2} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-14 flex items-center gap-5 border-t border-white/20 pt-5">
                <span className="label text-white/60">01</span>
                <span className="h-px w-14 bg-ibms-blue" />
                <span className="text-xs font-semibold text-white/60">
                  Formation / Innovation / Impact
                </span>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <Reveal delay={200}>
              <div className="mx-auto min-h-[470px] max-w-[520px] md:min-h-[560px]">
                <IBMSRobot />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
