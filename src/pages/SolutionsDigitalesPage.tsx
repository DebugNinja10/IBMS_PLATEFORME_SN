import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Smartphone,
  Workflow,
  Database,
  ShieldCheck,
  Headset,
} from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';

const solutions = [
  {
    num: '01',
    title: 'Création de sites web',
    desc: 'Des sites modernes, rapides et adaptés aux mobiles pour présenter votre activité, attirer des clients et développer votre visibilité.',
    details: ['Sites vitrines', 'Sites e-commerce', 'Sites institutionnels'],
    Icon: Globe,
  },
  {
    num: '02',
    title: 'Applications mobiles',
    desc: 'Des applications intuitives pour rapprocher vos services de vos utilisateurs et faciliter les opérations quotidiennes.',
    details: ['Applications métier', 'Expérience utilisateur', 'Solutions mobiles'],
    Icon: Smartphone,
  },
  {
    num: '03',
    title: 'Automatisation des processus',
    desc: 'Réduisez les tâches répétitives, améliorez votre productivité et simplifiez les processus de votre organisation.',
    details: ['Automatisation', 'Gestion des workflows', 'Intégration des outils'],
    Icon: Workflow,
  },
  {
    num: '04',
    title: 'Logiciels et plateformes',
    desc: 'Des outils numériques conçus selon vos besoins pour centraliser les informations et améliorer votre gestion.',
    details: ['Applications métier', 'Plateformes web', 'Gestion des données'],
    Icon: Database,
  },
  {
    num: '05',
    title: 'Sécurité et maintenance',
    desc: 'Préservez la disponibilité de vos outils numériques grâce à la maintenance, aux mises à jour et aux bonnes pratiques de sécurité.',
    details: ['Maintenance technique', 'Mises à jour', 'Bonnes pratiques de sécurité'],
    Icon: ShieldCheck,
  },
  {
    num: '06',
    title: 'Conseil et accompagnement',
    desc: 'Identifiez les solutions adaptées à vos objectifs et bénéficiez d’un accompagnement tout au long de votre transformation digitale.',
    details: ['Conseil numérique', 'Cadrage de projets', 'Assistance technique'],
    Icon: Headset,
  },
];

export function SolutionsDigitalesPage() {
  return (
    <PageLayout
      num="05"
      label="Solutions digitales"
      title={<>Le numérique au service de votre <span className="text-ibms-cyan">ambition.</span></>}
      intro="IBMS accompagne les entreprises, les entrepreneurs et les organisations dans la conception de solutions numériques adaptées à leurs besoins."
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="mb-12 max-w-3xl">
            <span className="label text-ibms-blue">Nos expertises numériques</span>
            <h2 className="mt-4 text-3xl font-bold text-ibms-ink md:text-4xl">
              Des outils concrets pour accélérer votre développement.
            </h2>
            <p className="mt-4 leading-relaxed text-ibms-slate">
              De la première idée à la mise en service, nous vous aidons à transformer
              vos besoins en outils numériques utiles, évolutifs et accessibles.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ num, title, desc, details, Icon }, index) => (
              <Reveal key={num} delay={index * 70}>
                <article className="card group h-full p-6 transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ibms-light text-ibms-blue transition-colors group-hover:bg-ibms-navy group-hover:text-ibms-cyan">
                      <Icon className="h-7 w-7" strokeWidth={1.6} />
                    </div>
                    <span className="text-3xl font-extrabold text-ibms-ink/10">{num}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-ibms-ink">{title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-ibms-slate">{desc}</p>
                  <ul className="space-y-2">
                    {details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-ibms-slate">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ibms-cyan" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ibms-blue transition-all hover:gap-3"
                  >
                    Discuter de votre projet <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-ibms-navy p-8 text-white md:flex-row md:items-center md:p-12">
            <div className="max-w-2xl">
              <span className="label text-ibms-cyan">Votre prochain projet</span>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                Donnons vie à votre idée numérique.
              </h2>
              <p className="mt-3 leading-relaxed text-white/70">
                Parlons de vos besoins et identifions ensemble la solution la plus adaptée.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-ibms-cyan px-6 py-4 font-bold text-ibms-navy transition-transform hover:scale-105"
            >
              Nous contacter <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}