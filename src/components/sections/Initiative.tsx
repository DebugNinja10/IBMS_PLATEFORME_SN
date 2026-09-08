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
                Construire les compétences
                <br />
                <span className="text-gradient">numériques de demain.</span>
              </h2>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Reveal delay={100}>
              <p className="text-lg text-ibms-slateDark leading-relaxed mb-6">
                IBMS est une structure dédiée au développement des compétences numériques
                et à la création de solutions technologiques. Notre ambition est de rendre
                le numérique plus accessible, plus pratique et plus utile, en accompagnant
                les talents et les organisations dans leur évolution.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base text-ibms-slate leading-relaxed mb-8">
                Nous accompagnons les jeunes, les professionnels, les entrepreneurs et les
                organisations avec des parcours pratiques et des solutions adaptées à leurs besoins.
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
