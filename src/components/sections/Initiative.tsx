import { Reveal } from '@/components/ui/Reveal';
import { ArrowLink } from '@/components/ui/ArrowLink';

export function Initiative() {
  return (
    <section id="apropos" className="section-pad bg-white">
      <div className="container-ibms">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-4">
            <Reveal>
              <div className="label text-ibms-blue mb-4">L'initiative IBMS</div>
              <h2 className="text-section-title font-extrabold text-ibms-ink">
                Une institution
                <br />
                <span className="text-gradient">au service du savoir.</span>
              </h2>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Reveal delay={100}>
              <p className="text-lg text-ibms-slateDark leading-relaxed mb-6">
                IBMS est une initiative stratégique dédiée à structurer, développer et
                dynamiser l'écosystème des compétences numériques. Nous œuvrons pour
                que la technologie devienne un véritable levier de transformation
                économique, sociale et technologique.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base text-ibms-slate leading-relaxed mb-8">
                Nous créons un environnement favorable pour les apprenants, les entreprises,
                les institutions et les talents, en proposant des parcours de formation
                rigoureux et un accompagnement adapté aux réalités du marché africain.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <ArrowLink to="/a-propos" variant="blue">Découvrir notre histoire</ArrowLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
