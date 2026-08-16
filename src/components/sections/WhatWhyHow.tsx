import { Reveal } from '@/components/ui/Reveal';

const items = [
  { num: '01', title: 'Quoi ?', desc: "Un programme de formation et d'accompagnement multidisciplinaire, opéré sur-mesure pour répondre aux besoins réels du marché et des organisations." },
  { num: '02', title: 'Pourquoi ?', desc: "En servant la croissance des talents et des entreprises, IBMS s'inscrit dans une mission plus large : contribuer au développement économique et technologique." },
  { num: '03', title: 'Comment ?', desc: "Par un accompagnement opérationnel : ateliers, mentorat, mise en réseau et accès aux ressources, pour transformer les ambitions en résultats mesurables." },
];

export function WhatWhyHow() {
  return (
    <section className="section-pad bg-ibms-cream">
      <div className="container-ibms">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <Reveal key={item.num} delay={idx * 120}>
              <div className="card h-full group">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 bg-ibms-light rounded-xl flex items-center justify-center text-ibms-blue font-extrabold text-sm transition-colors duration-300 group-hover:bg-ibms-blue group-hover:text-white">
                    {item.num}
                  </span>
                  <h3 className="text-xl font-bold text-ibms-ink">{item.title}</h3>
                </div>
                <p className="text-sm text-ibms-slateDark leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
