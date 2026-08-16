import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { Link } from 'react-router-dom';

type PageLayoutProps = {
  num: string;
  label: string;
  title: ReactNode;
  intro: string;
  children: ReactNode;
};

export function PageLayout({ num, label, title, intro, children }: PageLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden bg-gradient-navy py-16 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/30" />
          <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full border border-white/15" />
        </div>
        <div className="container-ibms relative">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="label text-ibms-cyan">{num}</span>
              <span className="h-px w-12 bg-ibms-cyan/50" />
              <span className="label text-white/60">{label}</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-4xl text-hero font-extrabold">{title}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">{intro}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex items-center gap-2 text-sm text-white/40">
              <Link to="/" className="font-semibold text-white/60 transition-colors hover:text-ibms-cyan">Accueil</Link>
              <span>/</span>
              <span className="text-white/40">{label}</span>
            </div>
          </Reveal>
        </div>
      </section>
      {children}
    </div>
  );
}
