import {
  ArrowRight,
  BrainCircuit,
  MonitorSmartphone,
  GraduationCap,
  Building2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/ui/Reveal';
import { IBMSRobot } from '@/components/3d/IBMSRobot';
// Chatbot temporairement désactivé :
// import { IBMSChatbot } from '@/components/sections/IBMSChatbot';

const buttonClass =
  "flex h-14 min-w-0 flex-1 basis-[180px] items-center justify-between gap-2 rounded-xl border border-[#168BFF] bg-[#075BE8] px-4 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition-all duration-300 hover:bg-[#0875FF] hover:-translate-y-1";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-gradient-navy pt-28 pb-16 md:pt-32 md:pb-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -right-32 top-16 hidden h-[34rem] w-[34rem] rounded-full border border-ibms-blue/20 md:block" />
        <div className="absolute -right-12 top-32 hidden h-[25rem] w-[25rem] rounded-full border border-ibms-cyan/25 md:block" />
        <div className="absolute right-28 top-48 hidden h-3 w-3 rounded-full bg-ibms-cyan md:block" />
        <div className="absolute bottom-16 right-0 h-px w-1/3 bg-ibms-cyan/40" />
      </div>

      <div className="container-ibms relative">
        <div className="grid grid-cols-12 items-center gap-6 lg:gap-8">
          <div className="col-span-12 lg:col-span-8 lg:pt-6">
            <Reveal>
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-ibms-cyan" />
                <span className="label text-ibms-cyan">
                  Formation / Innovation / Solutions numériques
                </span>
                <span className="hidden h-px w-16 bg-white/50 sm:block" />
                <span className="hidden text-xs font-bold uppercase tracking-widest text-white/80 sm:block">
                  Thiès / Sénégal
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="max-w-4xl text-hero font-serif font-normal tracking-normal text-white">
                Maîtrisez le numérique{' '}
                <span className="relative inline-block text-ibms-cyan">
                  avec IBMS.
                  <span className="absolute -bottom-2 left-0 h-1 w-2/3 bg-ibms-cyan" />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                IBMS accompagne les jeunes, les professionnels, les
                entrepreneurs et les organisations dans leur transformation
                numérique à travers la formation, l’innovation et la conception
                de solutions digitales adaptées aux besoins réels.
              </p>
            </Reveal>

            {/* Chatbot temporairement masqué */}
            {/* <IBMSChatbot /> */}

            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/formations" className={buttonClass}>
                  <GraduationCap className="h-6 w-6 shrink-0" />
                  <span className="text-center">Découvrir nos formations</span>
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </Link>

                <Link to="/intelligence-artificielle" className={buttonClass}>
                  <BrainCircuit className="h-6 w-6 shrink-0" />
                  <span className="text-center">Intelligence artificielle</span>
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </Link>

                <Link to="/solutions-digitales" className={buttonClass}>
                  <MonitorSmartphone className="h-6 w-6 shrink-0" />
                  <span className="text-center">Solutions digitales</span>
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </Link>

                <Link to="/a-propos" className={buttonClass}>
                  <Building2 className="h-6 w-6 shrink-0" />
                  <span className="text-center">Découvrir IBMS</span>
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-12 flex items-center gap-5 border-t border-white/20 pt-5">
                <span className="text-xl font-bold text-white">01</span>
                <span className="h-px w-14 bg-ibms-cyan" />
                <span className="text-sm font-semibold text-white/80">
                  Formation / Innovation / Impact
                </span>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <Reveal delay={200}>
              <div className="mx-auto min-h-[400px] max-w-[520px] md:min-h-[520px]">
                <IBMSRobot />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}