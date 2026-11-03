
import {
  ArrowRight,
  ArrowUpRight,
  MonitorSmartphone,
  BrainCircuit,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/ui/Reveal';
import { IBMSRobot } from '@/components/3d/IBMSRobot';
import { IBMSChatbot } from '@/components/sections/IBMSChatbot';

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
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-7 lg:pt-10">
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
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
                IBMS accompagne les jeunes, les professionnels, les
                entrepreneurs et les organisations dans leur transformation
                numÃ©rique Ã  travers la formation, lâ€™innovation et la conception
                de solutions digitales adaptÃ©es aux besoins rÃ©els.
              </p>
            </Reveal>

            <IBMSChatbot />

            
          </div>

          <div className="col-span-12 lg:col-span-5">
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


