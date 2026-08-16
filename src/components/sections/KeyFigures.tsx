import { Reveal } from '@/components/ui/Reveal';
import { Counter } from '@/components/ui/Counter';
import { stats } from '@/data/site';

export function KeyFigures() {
  return (
    <section className="relative overflow-hidden bg-gradient-ibms py-16 text-white md:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true"><div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/40" /><div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full border border-white/20" /></div>
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
  );
}
