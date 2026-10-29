import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  MessageSquareText,
  Sparkles,
} from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';

const expertises = [
  {
    num: '01',
    title: 'Développement IA',
    desc: 'Conception d’applications intelligentes capables d’analyser des données, d’assister les utilisateurs et d’automatiser certaines tâches.',
    details: ['Intégration de modèles IA', 'Applications intelligentes', 'API et outils IA'],
    Icon: BrainCircuit,
  },
  {
    num: '02',
    title: 'Chatbots et assistants',
    desc: 'Des assistants conversationnels pour répondre aux questions, orienter les utilisateurs et faciliter l’accès à vos services.',
    details: ['Assistants virtuels', 'Support client', 'Recherche documentaire'],
    Icon: MessageSquareText,
  },
  {
    num: '03',
    title: 'Machine Learning',
    desc: 'Des modèles capables d’apprendre à partir des données afin d’identifier des tendances et de produire des prédictions.',
    details: ['Classification', 'Prédiction', 'Évaluation des modèles'],
    Icon: ChartNoAxesCombined,
  },
  {
    num: '04',
    title: 'Data Science',
    desc: 'Transformez vos données en informations utiles pour mieux comprendre votre activité et éclairer vos décisions.',
    details: ['Analyse de données', 'Visualisation', 'Tableaux de bord'],
    Icon: ChartNoAxesCombined,
  },
  {
    num: '05',
    title: 'IA générative',
    desc: 'Découvrez comment exploiter les modèles génératifs pour produire des contenus et accélérer les tâches intellectuelles.',
    details: ['Génération de texte', 'Traitement documentaire', 'Assistance à la création'],
    Icon: Sparkles,
  },
  {
    num: '06',
    title: 'Automatisation intelligente',
    desc: 'Combinez intelligence artificielle et automatisation pour optimiser vos flux de travail et gagner du temps.',
    details: ['Traitement de documents', 'Classification automatique', 'Automatisation de tâches'],
    Icon: Bot,
  },
];

export function IntelligenceArtificiellePage() {
  return (
    <PageLayout
      num="06"
      label="Intelligence artificielle"
      title={<>L’intelligence artificielle au service de votre <span className="text-ibms-cyan">avenir.</span></>}
      intro="Explorez les technologies de l’intelligence artificielle pour innover, développer de nouvelles compétences et créer des solutions utiles."
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="mb-12 max-w-3xl">
            <span className="label text-ibms-blue">Les métiers de l’IA</span>
            <h2 className="mt-4 text-3xl font-bold text-ibms-ink md:text-4xl">
              Comprendre, développer et appliquer l’intelligence artificielle.
            </h2>
            <p className="mt-4 leading-relaxed text-ibms-slate">
              Du développement d’applications intelligentes à l’analyse de données,
              découvrez les principaux domaines de l’IA et leurs possibilités concrètes
              pour les entreprises et les professionnels.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expertises.map(({ num, title, desc, details, Icon }, index) => (
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
                    Parler de votre besoin <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-ibms-navy p-8 text-white md:flex-row md:items-center md:p-12">
            <div className="max-w-2xl">
              <span className="label text-ibms-cyan">Passons à la pratique</span>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                Faites de l’IA un levier d’innovation.
              </h2>
              <p className="mt-3 leading-relaxed text-white/70">
                Échangeons sur vos objectifs, vos besoins et les possibilités de l’IA pour votre activité.
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