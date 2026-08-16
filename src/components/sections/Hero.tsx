import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/ui/Reveal';
import { images } from '@/data/site';

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-ibms-light/40 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -right-32 top-24 h-[34rem] w-[34rem] rounded-full border border-ibms-blue/10" />
        <div className="absolute -right-12 top-40 h-[25rem] w-[25rem] rounded-full border border-ibms-cyan/20" />
        <div className="absolute right-28 top-56 h-3 w-3 rounded-full bg-ibms-cyan" />
        <div className="absolute left-0 top-24 h-px w-1/3 bg-ibms-blue/20" />
        <div className="absolute bottom-16 right-0 h-px w-1/4 bg-ibms-cyan/30" />
      </div>

      <div className="container-ibms relative">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-7 lg:pt-10">
            <Reveal>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-ibms-cyan" />
                <span className="label text-ibms-blue">Institut de formation et d'innovation</span>
                <span className="hidden h-px w-16 bg-ibms-veil sm:block" />
                <span className="hidden text-[10px] font-bold uppercase tracking-widest text-ibms-slate sm:block">Dakar / SN</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="max-w-4xl text-hero font-extrabold text-ibms-ink">
                Construire les compétences qui{' '}
                <span className="relative inline-block text-ibms-blue">
                  façonnent
                  <span className="absolute -bottom-2 left-0 h-1 w-2/3 bg-ibms-cyan" />
                </span>{' '}
                l'avenir.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ibms-slateDark">
                IBMS accompagne les talents, les organisations et les projets technologiques
                pour transformer la compétence en opportunité.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link to="/formations" className="btn-primary">
                  Découvrir nos formations
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <Link to="/a-propos" className="btn-ghost">
                  Découvrir IBMS
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-14 flex items-center gap-5 border-t border-ibms-veil pt-5">
                <span className="label text-ibms-slate">01</span>
                <span className="h-px w-14 bg-ibms-blue" />
                <span className="text-xs font-semibold text-ibms-slate">Formation / Innovation / Impact</span>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <Reveal delay={200}>
              <div className="relative mx-auto min-h-[470px] max-w-[520px] md:min-h-[560px]">
                <div className="absolute right-0 top-10 h-[390px] w-[390px] rounded-full bg-ibms-blue md:h-[470px] md:w-[470px]" />
                <div className="absolute right-10 top-20 h-[310px] w-[310px] rounded-full border border-white/50 md:right-20 md:h-[390px] md:w-[390px]" />
                <div className="absolute right-0 top-28 z-10 h-[320px] w-[270px] overflow-hidden rounded-[9rem_9rem_1.5rem_1.5rem] border-8 border-white shadow-2xl shadow-ibms-blue/20 md:right-10 md:h-[410px] md:w-[340px]">
                  <img src={images.heroMain} alt="Apprenants en formation technologique" className="h-full w-full object-cover" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ibms-navy/45 to-transparent" />
                </div>
                <div className="absolute left-0 top-0 z-20 flex h-28 w-28 items-center justify-center rounded-full border border-ibms-ink/10 bg-white shadow-xl md:h-36 md:w-36">
                  <img src="/assets/images/logos/pp-removebg-preview.png" alt="Logo IBMS" className="w-24 object-contain md:w-32" />
                </div>
                <div className="absolute bottom-4 left-2 z-20 w-44 border border-white/50 bg-ibms-navy p-4 text-white shadow-xl md:left-0">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="label text-ibms-cyan">IBMS / 2026</span>
                    <ArrowUpRight className="h-4 w-4 text-ibms-cyan" strokeWidth={2} />
                  </div>
                  <p className="text-sm font-semibold leading-snug">La technologie commence par les compétences.</p>
                </div>
                <div className="absolute bottom-8 right-0 z-20 hidden border-l-2 border-ibms-cyan pl-3 md:block">
                  <span className="label text-ibms-slate">14°41′ N</span>
                  <span className="mt-1 block label text-ibms-slate">17°26′ W</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
