import { Reveal } from '@/components/ui/Reveal';

export function Vision() {
  return (
    <section id="vision" className="section-pad bg-gradient-navy text-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-ibms-blue/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-ibms-cyan/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container-ibms relative">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-2">
            <Reveal>
              <span className="text-5xl font-extrabold text-white/10">01</span>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <Reveal delay={100}>
              <div className="label text-ibms-cyan mb-6">Notre vision</div>
            </Reveal>
            <Reveal delay={200}>
              <h2 className="text-hero font-extrabold mb-8 max-w-4xl">
                Faire de la compétence
                <br />
                un moteur d'<span className="text-ibms-cyan">innovation</span>
                <br />
                et de transformation.
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                IBMS aspire à donner aux compétences numériques une place essentielle
                dans le développement, en créant un environnement favorable pour
                les apprenants, les entreprises et les institutions.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
