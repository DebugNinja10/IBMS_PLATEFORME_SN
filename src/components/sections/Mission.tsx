import { Reveal } from '@/components/ui/Reveal';
import { images } from '@/data/site';
import { Check } from 'lucide-react';

const points = [
  'Proposer des formations de qualité',
  'Développer des compétences concrètes',
  'Concevoir des solutions adaptées',
  'Accompagner la transformation digitale',
];

export function Mission() {
  return (
    <section className="section-pad bg-white">
      <div className="container-ibms">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <span className="text-5xl font-extrabold text-ibms-veil block mb-4">02</span>
              <div className="label text-ibms-blue mb-4">Notre mission</div>
              <h2 className="text-section-title font-extrabold text-ibms-ink mb-6">
                Rendre le numérique accessible
                <br />
                et créateur <span className="text-gradient">d'opportunités.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-base text-ibms-slateDark leading-relaxed mb-8">
                Notre mission est de contribuer au développement des compétences numériques
                et à la transformation digitale en proposant des formations de qualité et des
                solutions technologiques répondant aux réalités et aux besoins de notre environnement.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="space-y-4">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-ibms-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-ibms-blue" strokeWidth={2.5} />
                    </span>
                    <span className="text-base text-ibms-ink font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <Reveal delay={200}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-ibms-ink/10">
                <img
                  src={images.mission}
                  alt="Professionnels en réunion"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ibms-navy/40 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
