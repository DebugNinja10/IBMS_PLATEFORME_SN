// Images Pexels
export const images = {
  heroMain: 'https://images.pexels.com/photos/33920044/pexels-photo-33920044.jpeg?auto=compress&cs=tinysrgb&w=828',
  heroSecondary: 'https://images.pexels.com/photos/33920035/pexels-photo-33920035.jpeg?auto=compress&cs=tinysrgb&w=828',
  mission: 'https://images.pexels.com/photos/1181418/pexels-photo-1181418.jpeg?auto=compress&cs=tinysrgb&w=1200',
  contact: 'https://images.pexels.com/photos/8636605/pexels-photo-8636605.jpeg?auto=compress&cs=tinysrgb&w=1200',
  formation1: '/assets/images/formations/WhatsApp%20Image%202026-10-14%20at%207.42.05%20AM%20(1).jpeg',
  formation2: '/assets/images/formations/WhatsApp%20Image%202026-10-14%20at%207.42.06%20AM%20(1).jpeg',
  formation3: '/assets/images/formations/WhatsApp%20Image%202026-10-14%20at%207.42.06%20AM.jpeg',
  formation4: '/assets/images/formations/WhatsApp%20Image%202026-10-14%20at%207.42.05%20AM.jpeg',
  formation5: '/assets/images/formations/formd.jpeg',
  formation6: '/assets/images/formations/for1.jpeg',
  event1: 'https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&w=640',
  event2: 'https://images.pexels.com/photos/29180747/pexels-photo-29180747.jpeg?auto=compress&cs=tinysrgb&w=640',
  event3: 'https://images.pexels.com/photos/28683723/pexels-photo-28683723.jpeg?auto=compress&cs=tinysrgb&w=640',
  team1: '/assets/images/equipe/ndiaye.jpeg',
  team2: '/assets/images/equipe/abdouaziz.jpeg',
  team3: '/assets/images/equipe/justesse.jpeg',
  team4: '/assets/images/equipe/sidy.jpeg',
  team5: '/assets/images/equipe/salimata.jpeg',
  team6: '/assets/images/equipe/nafissatou.jpeg',
  project1: 'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&w=800',
  project2: 'https://images.pexels.com/photos/38906370/pexels-photo-38906370.jpeg?auto=compress&cs=tinysrgb&w=800',
  project3: 'https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&w=800',
  project4: 'https://images.pexels.com/photos/25809255/pexels-photo-25809255.jpeg?auto=compress&cs=tinysrgb&w=800',
};

export type NavChild = {
  label: string;
  num: string;
  desc: string;
  path: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navItems: NavItem[] = [
  {
    label: 'À propos',
    href: '/a-propos',
    children: [
      { label: 'Qui sommes-nous ?', num: '01', desc: "Découvrir IBMS, son identité et ses ambitions.", path: '/a-propos' },
      { label: 'Notre histoire', num: '02', desc: 'Le parcours et les étapes qui ont façonné IBMS.', path: '/a-propos' },
      { label: 'Notre vision', num: '03', desc: "Faire de la compétence un moteur d'innovation.", path: '/a-propos' },
      { label: 'Notre mission', num: '04', desc: 'Former, accompagner, innover, transformer.', path: '/a-propos' },
      { label: 'Nos valeurs', num: '05', desc: 'Les principes qui guident chaque action.', path: '/a-propos' },
      { label: 'Notre équipe', num: '06', desc: "Les personnes derrière l'entreprise.", path: '/equipe' },
    ],
  },
  {
    label: 'Formations',
    href: '/formations',
    children: [
      { label: 'Développement Web', num: '01', desc: 'Front-end, back-end et architectures modernes.', path: '/formations/01' },
      { label: 'Data & Intelligence Artificielle', num: '02', desc: 'Analyse de données, machine learning et IA.', path: '/formations/02' },
      { label: 'Cybersécurité', num: '03', desc: 'Protéger, détecter et répondre aux menaces.', path: '/formations/03' },
      { label: 'UI / UX Design', num: '04', desc: 'Concevoir des expériences significatives.', path: '/formations/04' },
      { label: 'Marketing Digital', num: '05', desc: 'Stratégie, contenu et performance en ligne.', path: '/formations/05' },
      { label: 'Gestion de Projet', num: '06', desc: 'Piloter des projets technologiques de A à Z.', path: '/formations/06' },
    ],
  },
  {
    label: 'Services & Consultance',
    href: '/services',
    children: [
      { label: 'Formation professionnelle', num: '01', desc: 'Programmes structurés et certifiants.', path: '/services/01' },
      { label: 'Transformation digitale', num: '02', desc: 'Accompagner le changement organisationnel.', path: '/services/02' },
      { label: 'Développement de solutions', num: '03', desc: 'Concevoir et déployer des outils sur mesure.', path: '/services/03' },
      { label: 'Conseil', num: '04', desc: 'Expertise stratégique et opérationnelle.', path: '/services/04' },
      { label: 'Accompagnement', num: '05', desc: 'Suivi continu des talents et des équipes.', path: '/services/05' },
    ],
  },
  {
    label: 'Projets',
    href: '/projets',
    children: [
      { label: 'Tous les projets', num: '01', desc: 'Notre galerie éditoriale de réalisations.', path: '/projets' },
      { label: 'Études de cas', num: '02', desc: "Contexte, solution et impact de chaque projet.", path: '/projets' },
      { label: 'Technologies', num: '03', desc: 'Les outils et langages que nous maîtrisons.', path: '/projets' },
    ],
  },
  {
    label: 'Ressources',
    href: '/blog',
    children: [
      { label: 'Blog', num: '01', desc: "Articles et réflexions de l'équipe IBMS.", path: '/blog' },
      { label: 'Guides', num: '02', desc: 'Ressources pédagogiques détaillées.', path: '/guides' },
      { label: 'Événements', num: '03', desc: 'Formations, workshops et conférences.', path: '/evenements' },
      { label: 'Actualités', num: '04', desc: "Les dernières nouvelles de l'entreprise.", path: '/blog' },
    ],
  },
  {
    label: 'Équipe',
    href: '/equipe',
  },
];

export type Formation = {
  num: string;
  title: string;
  desc: string;
  level: string;
  duration: string;
  format: string;
  image: string;
  category: string;
};

export const formations: Formation[] = [
  { num: '01', title: 'Développement Web', desc: 'Front-end, back-end et architectures modernes pour construire des applications web performantes.', level: 'Débutant à avancé', duration: '6 mois', format: 'Hybride', image: images.formation1, category: 'Développement' },
  { num: '02', title: 'Data & Intelligence Artificielle', desc: 'Analyse de données, machine learning et IA pour transformer la donnée en valeur.', level: 'Intermédiaire', duration: '8 mois', format: 'Présentiel', image: images.formation2, category: 'Data & IA' },
  { num: '03', title: 'Cybersécurité', desc: 'Protéger, détecter et répondre aux menaces pour sécuriser les systèmes informatiques.', level: 'Intermédiaire à avancé', duration: '5 mois', format: 'Hybride', image: images.formation3, category: 'Sécurité' },
  { num: '04', title: 'UI / UX Design', desc: 'Concevoir des expériences numériques significatives et centrées sur l\'utilisateur.', level: 'Débutant à avancé', duration: '4 mois', format: 'Présentiel', image: images.formation4, category: 'Design' },
  { num: '05', title: 'Marketing Digital', desc: 'Stratégie, contenu et performance en ligne pour développer la présence digitale.', level: 'Débutant', duration: '3 mois', format: 'En ligne', image: images.formation5, category: 'Marketing' },
  { num: '06', title: 'Gestion de Projet', desc: 'Piloter des projets technologiques de A à Z avec les méthodes agiles modernes.', level: 'Intermédiaire', duration: '4 mois', format: 'Hybride', image: images.formation6, category: 'Management' },
  { num: '07', title: 'Création de contenus avec l\'IA', desc: 'Apprendre à produire et optimiser des contenus assistés par l\'IA pour le web et les réseaux sociaux.', level: 'Débutant à intermédiaire', duration: '2 mois', format: 'En ligne', image: images.formation2, category: 'Marketing' },
  { num: '08', title: 'Bureautique', desc: 'Maîtriser les outils bureautiques essentiels pour être efficace en entreprise.', level: 'Débutant à intermédiaire', duration: '1 mois', format: 'En ligne', image: images.formation6, category: 'Productivité' },
  { num: '09', title: 'Community Management', desc: 'Gérer et animer une communauté en ligne, créer des calendriers éditoriaux et analyser la performance.', level: 'Débutant', duration: '1.5 mois', format: 'En ligne', image: images.formation5, category: 'Marketing' },
  { num: '10', title: 'Excel avancé', desc: 'Fonctions avancées, tableaux croisés dynamiques, macros et bonnes pratiques pour l\'analyse de données.', level: 'Intermédiaire à avancé', duration: '1.5 mois', format: 'Hybride', image: images.formation3, category: 'Bureautique' },
];

export type TrainingProject = {
  slug: string;
  title: string;
  theme: string;
  image: string;
  gallery: string[];
  desc: string;
  details: string[];
};

const imageGallery = (folder: string, filenames: string[]) =>
  filenames.map((filename) => `/assets/images/${folder}/${encodeURIComponent(filename)}`);

const gnafeGallery = imageGallery('gnafé', [
  'WhatsApp Image 2026-10-14 at 8.06.26 AM (1).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.26 AM (2).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.26 AM (3).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.26 AM (4).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.26 AM (5).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.26 AM.jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.27 AM (1).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.27 AM (2).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.27 AM (3).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.27 AM (4).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.27 AM (5).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.27 AM (6).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.27 AM.jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.33 AM (1).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.33 AM (2).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.33 AM.jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.34 AM (1).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.34 AM (2).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.34 AM (3).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.34 AM (4).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.34 AM (5).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.34 AM (6).jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.34 AM.jpeg',
  'WhatsApp Image 2026-10-14 at 8.06.35 AM.jpeg',
]);

const forcenGallery = imageGallery('forcen', [
  'WhatsApp Image 2024-12-12 at 21.42.55 - Copy.jpeg',
  'WhatsApp Image 2024-12-12 at 21.43.01 (1) - Copy.jpeg',
  'WhatsApp Image 2024-12-12 at 21.43.01 (2).jpeg',
  'WhatsApp Image 2024-12-12 at 21.43.01.jpeg',
  'WhatsApp Image 2024-12-12 at 21.43.02 (1).jpeg',
  'WhatsApp Image 2024-12-12 at 21.43.03 - Copy.jpeg',
  'WhatsApp Image 2024-12-12 at 21.43.52 - Copy.jpeg',
  'WhatsApp Image 2024-12-12 at 21.44.08.jpeg',
  'WhatsApp Image 2024-12-12 at 21.44.09.jpeg',
  'WhatsApp Image 2024-12-12 at 21.44.10.jpeg',
  'WhatsApp Image 2024-12-12 at 21.44.11.jpeg',
  'WhatsApp Image 2024-12-12 at 21.44.12.jpeg',
  'WhatsApp Image 2024-12-12 at 21.44.13.jpeg',
  'WhatsApp Image 2024-12-12 at 21.44.16.jpeg',
  'WhatsApp Image 2024-12-12 at 21.44.22 (1).jpeg',
  'WhatsApp Image 2024-12-12 at 21.44.22.jpeg',
  'WhatsApp Image 2024-12-12 at 21.44.23 (2).jpeg',
  'WhatsApp Image 2024-12-12 at 21.44.23.jpeg',
  'WhatsApp Image 2024-12-12 at 21.44.27 (1).jpeg',
  'WhatsApp Image 2024-12-12 at 21.44.28.jpeg',
  'WhatsApp Image 2024-12-12 at 21.44.32 (2).jpeg',
  'WhatsApp Image 2024-12-12 at 21.44.32.jpeg',
  'WhatsApp Image 2024-12-12 at 21.44.33.jpeg',
  'WhatsApp Image 2024-12-12 at 21.49.44.jpeg',
  'WhatsApp Image 2024-12-12 at 21.49.45.jpeg',
  'WhatsApp Image 2024-12-12 at 21.49.49.jpeg',
  'WhatsApp Image 2024-12-12 at 21.49.50.jpeg',
  'WhatsApp Image 2024-12-12 at 21.51.13.jpeg',
  'WhatsApp Image 2024-12-12 at 21.51.31 - Copy.jpeg',
  'WhatsApp Image 2024-12-12 at 21.51.39.jpeg',
  'WhatsApp Image 2024-12-12 at 21.51.40.jpeg',
  'WhatsApp Image 2024-12-15 at 01.20.31 - Copy.jpeg',
  'WhatsApp Image 2024-12-15 at 01.20.31.jpeg',
  'WhatsApp Image 2024-12-15 at 01.20.33 - Copy.jpeg',
  'WhatsApp Image 2024-12-15 at 01.20.34 (1).jpeg',
  'WhatsApp Image 2024-12-15 at 01.20.34.jpeg',
]);

export const trainingProjects: TrainingProject[] = [
  {
    slug: 'gnafe-ibms', title: 'Gnafé × IBMS', theme: 'Web & marketing digital', image: gnafeGallery[0], gallery: gnafeGallery,
    desc: 'Un programme mené avec Gnafé pour former 45 jeunes aux compétences numériques appliquées.',
    details: [
      'Le parcours a accompagné 45 jeunes dans la découverte et la pratique des métiers du numérique.',
      'Les ateliers ont porté sur la création de sites vitrines et de boutiques e-commerce, depuis la structuration des pages jusqu’à la présentation d’une activité en ligne.',
      'Le programme a également abordé le marketing digital : présence en ligne, communication et valorisation d’une offre auprès de ses publics.',
      'Les photos de cette page retracent les temps de formation et les moments de travail avec les participants.',
    ],
  },
  {
    slug: 'force-n-ibms', title: 'Force-n × IBMS', theme: 'Robotique', image: forcenGallery[0], gallery: forcenGallery,
    desc: 'Un projet de formation qui fait découvrir la robotique et les technologies aux jeunes par des activités pratiques.',
    details: [
      'Avec Force-n, IBMS a animé un parcours d’initiation aux sciences, aux technologies et à la robotique.',
      'Les jeunes ont été invités à explorer les notions de base, observer des démonstrations et apprendre en expérimentant en groupe.',
      'L’approche privilégie la curiosité, la résolution de problèmes et la mise en pratique pour rendre les disciplines numériques accessibles.',
      'La galerie rassemble les photos disponibles de cette initiative.',
    ],
  },
  {
    slug: 'jang-codage', title: 'Jang-codage', theme: 'Programmation', image: images.formation1, gallery: [images.formation1],
    desc: 'Des cours pour apprendre à coder et à programmer, des premiers raisonnements logiques à la réalisation de petits projets.',
    details: ['Les séances introduisent les bases de la logique informatique et de la programmation.', 'Les apprenants progressent par exercices guidés et mettent en pratique les notions en réalisant leurs premiers projets numériques.'],
  },
  {
    slug: 'boot-camp-ayy-informatique', title: 'Boot Camp Numérique — Ayy Informatique', theme: 'Informatique & numérique', image: images.formation2, gallery: [images.formation2],
    desc: 'Un parcours intensif autour de l’informatique et des compétences numériques, organisé avec Ayy Informatique.',
    details: ['Le boot camp propose une découverte structurée des usages et outils informatiques.', 'Le format intensif favorise les exercices concrets, l’apprentissage progressif et l’entraide entre participants.'],
  },
  {
    slug: 'e-jang-informatique', title: 'E-jang Informatique', theme: 'Apprentissage informatique', image: images.formation3, gallery: [images.formation3],
    desc: 'Un projet de formation qui accompagne les apprenants dans la découverte des outils et usages informatiques.',
    details: ['E-jang Informatique vise à rendre les compétences informatiques plus accessibles.', 'Les activités accompagnent les apprenants dans la prise en main des outils numériques et leur utilisation dans des situations concrètes.'],
  },
  {
    slug: 'life-legay', title: 'Life Legay', theme: 'Formation numérique', image: images.formation4, gallery: [images.formation4],
    desc: 'Une initiative de formation menée avec Life Legay pour contribuer au développement des compétences numériques.',
    details: ['Cette initiative s’inscrit dans les actions de formation et de sensibilisation aux usages numériques.', 'Les informations de cette fiche pourront être précisées à partir des objectifs et du contenu détaillé du programme.'],
  },
];

export type FormationDetail = {
  formationNum: string;
  objectives: string[];
  skills: string[];
  modules: string[];
  prerequisites: string[];
  audience: string[];
  careers: string[];
  faq: { question: string; answer: string }[];
};

export const formationDetails: FormationDetail[] = [
  { formationNum: '01', objectives: ['Construire des interfaces modernes', 'Relier une interface à une API', 'Déployer une application fiable'], skills: ['HTML, CSS et JavaScript', 'React et architecture front-end', 'Bases de données et APIs', 'Git et déploiement'], modules: ['Fondamentaux du web', 'Interfaces avec React', 'Back-end et APIs', 'Projet portfolio'], prerequisites: ['Aucun prérequis technique', 'Un ordinateur et une connexion stable'], audience: ['Débutants motivés', 'Professionnels en reconversion', 'Porteurs de projets numériques'], careers: ['Développeur front-end', 'Développeur full-stack junior', 'Intégrateur web'], faq: [{ question: 'Faut-il déjà savoir coder ?', answer: 'Non. Le parcours commence par les fondamentaux et progresse vers des projets complets.' }, { question: 'Que vais-je construire ?', answer: 'Vous réalisez plusieurs exercices puis un projet final présentable dans votre portfolio.' }] },
  { formationNum: '02', objectives: ['Lire et préparer des données', 'Construire des modèles simples', 'Interpréter les résultats avec rigueur'], skills: ['Python et notebooks', 'Statistiques appliquées', 'Visualisation de données', 'Introduction au machine learning'], modules: ['Culture data', 'Python pour l’analyse', 'Visualisation et statistiques', 'Projet data et IA'], prerequisites: ['Bases en logique', 'Aisance avec les outils numériques'], audience: ['Analystes débutants', 'Étudiants scientifiques', 'Professionnels souhaitant exploiter leurs données'], careers: ['Data analyst junior', 'Chargé d’études', 'Assistant data scientist'], faq: [{ question: 'La formation est-elle orientée pratique ?', answer: 'Oui. Chaque module s’appuie sur des jeux de données et des cas concrets.' }, { question: 'Faut-il être expert en mathématiques ?', answer: 'Non. Les notions utiles sont introduites progressivement et reliées à des usages.' }] },
  { formationNum: '03', objectives: ['Comprendre les menaces courantes', 'Sécuriser un environnement numérique', 'Réagir face à un incident'], skills: ['Hygiène numérique', 'Réseaux et systèmes', 'Surveillance et analyse', 'Réponse aux incidents'], modules: ['Fondamentaux de la sécurité', 'Réseaux et systèmes', 'Détection et analyse', 'Audit et projet final'], prerequisites: ['Bases en informatique', 'Curiosité et goût pour l’analyse'], audience: ['Techniciens informatiques', 'Administrateurs débutants', 'Professionnels en reconversion'], careers: ['Analyste sécurité junior', 'Technicien SOC', 'Assistant administrateur systèmes'], faq: [{ question: 'La formation comprend-elle des mises en situation ?', answer: 'Oui. Les notions sont travaillées avec des scénarios, des analyses et des exercices encadrés.' }, { question: 'Le parcours convient-il aux débutants ?', answer: 'Il demande des bases informatiques, mais les notions de sécurité sont introduites progressivement.' }] },
  { formationNum: '04', objectives: ['Observer les besoins des utilisateurs', 'Structurer une interface cohérente', 'Prototyper et tester une expérience'], skills: ['Recherche utilisateur', 'Wireframes et prototypes', 'Systèmes de design', 'Tests d’utilisabilité'], modules: ['Comprendre les utilisateurs', 'Architecture de l’information', 'UI et design system', 'Prototype et restitution'], prerequisites: ['Aucun prérequis de design', 'Sens de l’observation'], audience: ['Designers débutants', 'Chefs de projet', 'Entrepreneurs numériques'], careers: ['UI designer junior', 'UX designer junior', 'Product designer junior'], faq: [{ question: 'Quels outils sont utilisés ?', answer: 'Le parcours s’appuie sur des outils de wireframing, de prototypage et de présentation.' }, { question: 'Le dessin est-il obligatoire ?', answer: 'Non. La formation privilégie la clarté, la méthode et la compréhension des usages.' }] },
  { formationNum: '05', objectives: ['Définir une stratégie digitale', 'Créer des contenus utiles', 'Mesurer la performance des actions'], skills: ['Positionnement et contenus', 'Réseaux sociaux', 'Campagnes digitales', 'Analytics et reporting'], modules: ['Stratégie et audience', 'Contenu et réseaux sociaux', 'Acquisition et campagnes', 'Mesure et plan d’action'], prerequisites: ['Aucun prérequis technique', 'Bonne expression écrite'], audience: ['Entrepreneurs', 'Chargés de communication', 'Indépendants et créateurs'], careers: ['Chargé de marketing digital', 'Social media manager', 'Assistant acquisition'], faq: [{ question: 'La formation est-elle utile pour une petite entreprise ?', answer: 'Oui. Les exercices partent de budgets, d’équipes et d’objectifs réalistes.' }, { question: 'Apprend-on à mesurer les résultats ?', answer: 'Oui. Les indicateurs essentiels sont reliés à des objectifs concrets.' }] },
  { formationNum: '06', objectives: ['Cadrer un projet numérique', 'Organiser une équipe', 'Suivre les délais et les risques'], skills: ['Méthodes agiles', 'Planification', 'Animation d’équipe', 'Suivi des risques et qualité'], modules: ['Cadrage et objectifs', 'Méthodes agiles', 'Équipe et communication', 'Pilotage et rétrospective'], prerequisites: ['Expérience professionnelle appréciée', 'Intérêt pour le travail collectif'], audience: ['Chefs de projet débutants', 'Responsables d’équipe', 'Professionnels du numérique'], careers: ['Chef de projet junior', 'Scrum master junior', 'Product coordinator'], faq: [{ question: 'Le parcours s’adresse-t-il uniquement aux développeurs ?', answer: 'Non. Il s’adresse à toute personne qui coordonne ou souhaite coordonner un projet numérique.' }, { question: 'Y a-t-il un projet de mise en pratique ?', answer: 'Oui. Les participants construisent un plan de projet complet et le présentent au groupe.' }] },
];

export type Guide = {
  num: string;
  category: string;
  title: string;
  desc: string;
  readTime: string;
  image: string;
  content: string[];
};

export const guides: Guide[] = [
  { num: '01', category: 'Technologie', title: 'Les bases pour lancer un projet numérique', desc: 'Une méthode courte pour passer d’une idée à un premier périmètre concret.', readTime: '6 min', image: images.project4, content: ['Commencez par le problème à résoudre, pas par l’outil à choisir.', 'Définissez un premier périmètre observable : un utilisateur, un besoin et une action principale.', 'Testez rapidement avec quelques utilisateurs et documentez les apprentissages avant d’élargir le projet.'] },
  { num: '02', category: 'Intelligence artificielle', title: 'Adopter l’IA avec méthode', desc: 'Les questions essentielles à poser avant d’introduire un outil d’intelligence artificielle.', readTime: '5 min', image: images.formation2, content: ['Identifiez une tâche répétitive et mesurez le temps qu’elle consomme aujourd’hui.', 'Vérifiez la qualité des données, la confidentialité et le rôle de la validation humaine.', 'Commencez par un usage limité, mesurez les résultats et formalisez les règles d’utilisation.'] },
  { num: '03', category: 'Carrière', title: 'Construire un portfolio qui parle', desc: 'Présenter ses compétences par des preuves simples, lisibles et contextualisées.', readTime: '4 min', image: images.formation1, content: ['Choisissez deux ou trois projets représentatifs plutôt qu’une longue liste.', 'Expliquez le contexte, votre rôle, les choix réalisés et ce que vous avez appris.', 'Ajoutez un lien fonctionnel ou une démonstration lorsque cela est possible.'] },
  { num: '04', category: 'Compétences digitales', title: 'Organiser sa veille numérique', desc: 'Une routine réaliste pour apprendre sans se disperser.', readTime: '4 min', image: images.formation3, content: ['Choisissez un thème prioritaire pour une période donnée.', 'Sélectionnez quelques sources fiables et notez les idées directement applicables.', 'Transformez chaque apprentissage en exercice, note ou partage avec votre équipe.'] },
];

export type Service = {
  num: string;
  title: string;
  desc: string;
  details: string[];
  icon: string;
};

export type ServiceDetail = {
  serviceNum: string;
  intro: string;
  whatWeDo: string[];
  benefits: string[];
  approach: string[];
  process: string[];
  faq: { question: string; answer: string }[];
};

export const serviceDetails: ServiceDetail[] = [
  { serviceNum: '01', intro: 'Des parcours pratiques pour développer les compétences numériques dont les équipes ont réellement besoin.', whatWeDo: ['Audit des besoins', 'Parcours sur mesure', 'Ateliers pratiques', 'Évaluation et certification'], benefits: ['Compétences directement applicables', 'Progression suivie', 'Formats flexibles', 'Accompagnement post-formation'], approach: ['Comprendre le contexte', 'Apprendre par la pratique', 'Mesurer les acquis', 'Ancrer les usages'], process: ['Cadrage', 'Conception du parcours', 'Déploiement', 'Bilan et suivi'], faq: [{ question: 'Les formations peuvent-elles être adaptées ?', answer: 'Oui. Le contenu, le rythme et le format sont ajustés au niveau et aux objectifs de chaque groupe.' }, { question: 'Proposez-vous des formations en entreprise ?', answer: 'Oui, les parcours peuvent être organisés dans vos locaux, sur le campus IBMS ou à distance.' }] },
  { serviceNum: '02', intro: 'Une démarche claire pour faire évoluer les outils, les pratiques et les compétences de votre organisation.', whatWeDo: ['Diagnostic de maturité', 'Feuille de route digitale', 'Priorisation des usages', 'Accompagnement du changement'], benefits: ['Décisions mieux priorisées', 'Adoption plus rapide', 'Risques mieux maîtrisés', 'Équipes impliquées'], approach: ['Écouter les équipes', 'Partir des usages', 'Avancer par étapes', 'Mesurer l’adoption'], process: ['Diagnostic', 'Recommandations', 'Pilote', 'Déploiement'], faq: [{ question: 'Par où commencer une transformation digitale ?', answer: 'Nous commençons par un diagnostic court des besoins, des outils existants et des priorités opérationnelles.' }, { question: 'Accompagnez-vous les équipes après le déploiement ?', answer: 'Oui. La formation et le suivi des usages font partie intégrante de notre accompagnement.' }] },
  { serviceNum: '03', intro: 'Des produits numériques utiles, accessibles et maintenables, conçus autour de vos utilisateurs.', whatWeDo: ['Cadrage fonctionnel', 'UX et prototypage', 'Développement web ou mobile', 'Mise en production'], benefits: ['Solution adaptée au terrain', 'Expérience utilisateur claire', 'Base technique évolutive', 'Suivi transparent'], approach: ['Valider avant de construire', 'Livrer par itérations', 'Tester avec les utilisateurs', 'Documenter la solution'], process: ['Besoin', 'Prototype', 'Développement', 'Livraison'], faq: [{ question: 'Quels types de solutions développez-vous ?', answer: 'Nous réalisons des plateformes web, des outils internes, des tableaux de bord et des applications mobiles.' }, { question: 'Travaillez-vous avec une équipe technique existante ?', answer: 'Oui. Nous pouvons compléter une équipe ou prendre en charge un projet de bout en bout.' }] },
  { serviceNum: '04', intro: 'Un regard indépendant pour clarifier vos choix technologiques et transformer vos enjeux en décisions concrètes.', whatWeDo: ['Analyse de l’existant', 'Architecture et choix techniques', 'Feuille de route', 'Appui à la décision'], benefits: ['Vision plus claire', 'Choix proportionnés', 'Moins de risques', 'Décisions documentées'], approach: ['Objectiver les options', 'Rester proche du besoin', 'Partager les arbitrages', 'Transmettre les méthodes'], process: ['Échange initial', 'Analyse', 'Restitution', 'Appui ciblé'], faq: [{ question: 'Le conseil peut-il porter sur un sujet précis ?', answer: 'Oui. Une mission peut concerner une architecture, un outil, un projet ou une organisation.' }, { question: 'Recevons-nous un livrable ?', answer: 'Chaque mission se conclut par une restitution claire et directement exploitable.' }] },
  { serviceNum: '05', intro: 'Un accompagnement humain pour aider les talents et les équipes à progresser dans la durée.', whatWeDo: ['Mentorat individuel', 'Coaching technique', 'Suivi de carrière', 'Mise en relation'], benefits: ['Objectifs mieux définis', 'Progression régulière', 'Confiance renforcée', 'Meilleure insertion'], approach: ['Fixer un cap', 'Pratiquer régulièrement', 'Recevoir des retours', 'Célébrer les progrès'], process: ['Diagnostic', 'Plan d’accompagnement', 'Points réguliers', 'Bilan'], faq: [{ question: 'À qui s’adresse l’accompagnement ?', answer: 'Il s’adresse aux apprenants, aux jeunes professionnels et aux équipes qui souhaitent structurer leur progression.' }, { question: 'Combien de temps dure le suivi ?', answer: 'La durée dépend de l’objectif. Elle est définie au démarrage et réévaluée avec le bénéficiaire.' }] },
];

export const services: Service[] = [
  {
    num: '01',
    title: 'Formation professionnelle',
    desc: 'Des programmes structurés et certifiants, conçus pour répondre aux besoins réels du marché.',
    details: ['Programmes modulaires', 'Certifications reconnues', 'Projets pratiques', 'Suivi individualisé'],
    icon: 'GraduationCap',
  },
  {
    num: '02',
    title: 'Transformation digitale',
    desc: "Accompagner les organisations dans leur passage au numérique, de la stratégie au déploiement.",
    details: ['Audit et diagnostic', 'Stratégie digitale', 'Formation des équipes', 'Conduite du changement'],
    icon: 'RefreshCw',
  },
  {
    num: '03',
    title: 'Développement de solutions',
    desc: 'Concevoir et déployer des outils technologiques sur mesure pour des besoins spécifiques.',
    details: ['Applications web', 'Plateformes mobiles', 'Outils internes', 'Intégrations API'],
    icon: 'Code',
  },
  {
    num: '04',
    title: 'Conseil',
    desc: 'Expertise stratégique et opérationnelle pour orienter les décisions technologiques.',
    details: ['Stratégie technologique', 'Architecture', 'Choix techniques', 'Optimisation'],
    icon: 'Lightbulb',
  },
  {
    num: '05',
    title: 'Accompagnement',
    desc: 'Suivi continu des talents et des équipes pour assurer la pérennité des compétences.',
    details: ['Mentorat', 'Coaching technique', 'Suivi de carrière', 'Insertion professionnelle'],
    icon: 'Users',
  },
];

export type Project = {
  num: string;
  title: string;
  category: string;
  status: string;
  desc: string;
  tech: string[];
  result: string;
  image: string;
  challenge: string;
  solution: string[];
  impact: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    num: '01',
    title: 'AfriSight',
    category: 'Accessibilité & IoT',
    status: 'Prototype fonctionnel',
    desc: "Des lunettes intelligentes conçues pour faciliter les déplacements des personnes aveugles ou malvoyantes grâce à la détection d’obstacles et à des alertes vocales.",
    tech: ['ESP32-C3', 'Bluetooth Low Energy', 'React', 'Web Bluetooth', 'Synthèse vocale'],
    result: 'Détection d’obstacles et alertes vocales',
    image: '/assets/images/projects/afrisight.svg',
    challenge: "Les personnes aveugles ou malvoyantes peuvent rencontrer des obstacles difficiles à anticiper lors de leurs déplacements. AfriSight explore une assistance accessible, légère et connectée.",
    solution: [
      "Utilisation d’un capteur infrarouge relié à un microcontrôleur ESP32-C3 pour détecter un obstacle.",
      "Transmission des événements au téléphone par Bluetooth Low Energy.",
      "Connexion à une interface React permettant de recevoir les événements du dispositif.",
      "Déclenchement d’une alerte vocale lorsqu’un obstacle est détecté."
    ],
    impact: [
      "Prototype de détection d’obstacles et de transmission Bluetooth.",
      "Alerte vocale intégrée à l’application.",
      "Projet orienté vers une technologie plus inclusive et accessible.",
      "La reconnaissance visuelle avancée reste distincte du dispositif de détection décrit ici."
    ],
  },
  {
    num: '02',
    title: 'JËFAL',
    category: 'IA vocale & Fintech inclusive',
    status: 'En développement',
    desc: "Un agent économique vocal pensé pour aider les commerçants, artisans et petits entrepreneurs à suivre leur activité, avec une approche adaptée aux usages locaux et à la langue wolof.",
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Reconnaissance vocale'],
    result: 'Agent vocal métier en construction',
    image: '/assets/images/projects/jefal.svg',
    challenge: "De nombreux petits acteurs économiques suivent leurs ventes, dépenses, dettes et stocks dans des cahiers ou de mémoire. JËFAL vise à rendre la gestion quotidienne plus simple grâce à la voix.",
    solution: [
      "Conception d’un backend API avec FastAPI et une base de données PostgreSQL.",
      "Intégration en cours d’un modèle de reconnaissance vocale adapté au wolof.",
      "Structuration d’intentions métier comme l’enregistrement d’une vente, d’une dépense ou d’un remboursement.",
      "Développement progressif de la gestion des produits, du stock et du suivi de l’activité."
    ],
    impact: [
      "Approche voice-first adaptée aux réalités des petites activités économiques.",
      "Prise en compte des opérations commerciales courantes.",
      "Orientation vers une meilleure traçabilité de l’activité.",
      "Le produit est en développement : aucun déploiement à grande échelle n’est revendiqué."
    ],
  },
  {
    num: '03',
    title: 'JOJ Dakar Transport',
    category: 'Mobilité & Transport',
    status: 'Projet en développement',
    desc: "Une solution numérique orientée vers l’organisation du transport, la gestion des véhicules et les réservations, avec des interfaces adaptées aux différents rôles.",
    tech: ['TypeScript', 'React', 'Supabase'],
    result: 'Solution de gestion du transport en construction',
    image: '/assets/images/projects/joj-transport.svg',
    challenge: "La gestion du transport nécessite de coordonner les véhicules, les réservations et les informations entre les différents intervenants. Le projet explore une centralisation de ces opérations.",
    solution: [
      "Conception d’une interface web basée sur TypeScript.",
      "Structuration des fonctionnalités de gestion des véhicules et des réservations.",
      "Utilisation de Supabase dans l’architecture de l’application.",
      "Prise en compte des rôles utilisateurs et de la synchronisation des données."
    ],
    impact: [
      "Centralisation envisagée des informations liées au transport.",
      "Organisation des opérations dans une interface numérique.",
      "Projet présenté comme étant en développement, sans chiffres de performance non vérifiés."
    ],
  },
  {
    num: '04',
    title: 'Pharmacie H24',
    category: 'Santé & Mobile',
    status: 'Projet mobile',
    desc: "Une application mobile dont l’objectif est de faciliter la recherche de pharmacies de garde et l’accès aux informations utiles pour le public.",
    tech: ['Dart', 'Flutter'],
    result: 'Application mobile en développement',
    image: '/assets/images/projects/pharmacie-h24.svg',
    challenge: "Trouver rapidement une pharmacie de garde peut être difficile lorsqu’on ne dispose pas d’informations pratiques facilement accessibles.",
    solution: [
      "Développement du projet avec l’écosystème Flutter et Dart.",
      "Conception d’une expérience mobile orientée vers la recherche d’informations.",
      "Orientation fonctionnelle vers la recherche de pharmacies de garde.",
      "La disponibilité en temps réel des pharmacies doit être confirmée par des données fiables avant d’être présentée comme opérationnelle."
    ],
    impact: [
      "Projet conçu autour d’un besoin concret d’accès à l’information en santé.",
      "Approche mobile adaptée à la consultation en déplacement.",
      "Aucune couverture nationale ni disponibilité en temps réel n’est revendiquée sans vérification."
    ],
  },
  {
    num: '05',
    title: 'MaxiDélices',
    category: 'Web & Commerce',
    status: 'Site vitrine',
    desc: "Un site vitrine professionnel destiné à présenter l’activité d’une pâtisserie et à renforcer sa présence sur le web.",
    tech: ['HTML', 'CSS', 'JavaScript'],
    result: 'Site vitrine web',
    image: '/assets/images/projects/maxidelices.svg',
    challenge: "Une activité de pâtisserie doit pouvoir présenter ses produits et son identité de manière claire, attractive et accessible sur différents écrans.",
    solution: [
      "Création d’une structure web avec HTML.",
      "Mise en forme des pages avec CSS.",
      "Ajout d’interactions avec JavaScript.",
      "Conception d’une présentation adaptée à une activité commerciale."
    ],
    impact: [
      "Présence numérique dédiée à la pâtisserie.",
      "Présentation structurée de l’activité et de son identité.",
      "Technologies web standards, légères et faciles à maintenir."
    ],
  },
  {
    num: '06',
    title: 'Panafrica Étude & Voyage',
    category: 'Web & Services',
    status: 'Site vitrine',
    desc: "Un site vitrine pour une structure spécialisée dans l’accompagnement autour des études et des voyages.",
    tech: ['HTML', 'CSS', 'JavaScript'],
    result: 'Site vitrine web',
    image: '/assets/images/projects/panafrica.svg',
    challenge: "Les personnes intéressées par des études ou un projet de voyage ont besoin de comprendre les services proposés et de trouver facilement les informations utiles.",
    solution: [
      "Conception d’une présence web dédiée à la structure.",
      "Organisation des contenus pour présenter les services.",
      "Utilisation des technologies HTML, CSS et JavaScript.",
      "Orientation vers une navigation claire et une présentation professionnelle."
    ],
    impact: [
      "Espace web dédié à la présentation des services.",
      "Accès centralisé aux informations de la structure.",
      "Aucun volume de visiteurs ni résultat commercial n’est avancé sans données vérifiables."
    ],
  },

  {
    num: '07',
    title: 'SESAMA Academy',
    category: 'Éducation & Formation',
    status: 'Site en ligne',
    desc: 'Une plateforme dédiée à la formation et à l’apprentissage.',
    tech: ['Web', 'JavaScript', 'Vercel'],
    result: 'Plateforme de formation en ligne',
    image: '/assets/images/projects/sesama-academy.svg',
    url: 'https://sesama-academy.vercel.app',
    challenge: 'Faciliter la présentation des formations et l’accès aux informations pédagogiques.',
    solution: [
      'Conception d’une présence numérique consacrée à la formation.',
      'Organisation des contenus pour faciliter la découverte des parcours.',
      'Mise à disposition d’un site accessible en ligne.'
    ],
    impact: [
      'Une présence numérique dédiée à la formation.',
      'Un point d’accès en ligne aux informations de la plateforme.'
    ],
  },
  {
    num: '09',
    title: 'Infosits',
    category: 'Éducation & Gestion scolaire',
    status: 'Plateforme en ligne',
    desc: 'Une plateforme de gestion intégrée qui numérise le fonctionnement de l’établissement : suivi des étudiants, gestion du personnel et organisation des activités scolaires depuis un même espace.',
    tech: ['Gestion scolaire', 'Suivi des étudiants', 'Gestion du personnel', 'Numérisation'],
    result: 'Gestion centralisée et numérisée de l’établissement',
    image: '/assets/images/projects/infosits.svg',
    url: 'https://campus-infosit.vercel.app/',
    challenge: 'La gestion d’un établissement mobilise de nombreuses informations liées aux étudiants, au personnel et aux activités quotidiennes. Infosits propose de réunir ces processus dans une plateforme numérique pour faciliter leur suivi et leur organisation.',
    solution: [
      'Centralisation de la gestion de l’établissement dans une plateforme accessible en ligne.',
      'Numérisation du suivi des étudiants et des informations qui les concernent.',
      'Prise en charge de la gestion du personnel et des opérations administratives associées.',
      'Organisation des activités de l’établissement au sein d’un même environnement numérique.'
    ],
    impact: [
      'Les informations de l’établissement sont réunies dans un espace numérique.',
      'Le suivi des étudiants et du personnel est intégré à la gestion globale.',
      'La plateforme accompagne la numérisation des opérations de l’établissement.',
      'Accès à la plateforme Infosits depuis le lien dédié.'
    ],
  },
];



export type TeamMember = {
  num: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  email: string;
  linkedin: string;
};

export const team: TeamMember[] = [
  {
    num: '01',
    name: 'Mohamed Ndiaye',
    role: 'CEO de IBMS',
    image: images.team1,
    bio: 'Mohamed Ndiaye pilote la vision stratégique d’IBMS et accompagne le développement de l’entreprise autour de l’informatique, de la formation et de l’innovation numérique.',
    expertise: ['Leadership', 'Stratégie', 'Innovation'],
    email: 'contact@ibms.sn',
    linkedin: 'https://www.linkedin.com',
  },
  {
    num: '02',
    name: 'Abdou Aziz SECK',
    role: 'Développeur Full Stack & Machine Learning',
    image: images.team2,
    bio: 'Abdou Aziz SECK conçoit des solutions digitales robustes et applique les méthodes du machine learning pour transformer des idées en produits concrets et exploitable.',
    expertise: ['Full Stack', 'Machine Learning', 'Architecture'],
    email: 'contact@ibms.sn',
    linkedin: 'https://www.linkedin.com',
  },
  {
    num: '03',
    name: 'Justesse Imelda OYENGA',
    role: 'Formatrice Senior',
    image: images.team3,
    bio: 'Justesse Imelda OYENGA anime des parcours de formation structurés, pédagogiques et orientés résultats, avec un fort souci de transmission et d’accompagnement.',
    expertise: ['Pédagogie', 'Formation', 'Accompagnement'],
    email: 'contact@ibms.sn',
    linkedin: 'https://www.linkedin.com',
  },
  {
    num: '04',
    name: 'Sidy WADE',
    role: 'Coach Formateur & Doctorant en IA',
    image: images.team4,
    bio: 'Sidy WADE accompagne les apprenants et les professionnels avec une approche centrée sur la pratique, la réflexion critique et les usages avancés de l’intelligence artificielle.',
    expertise: ['IA', 'Coaching', 'Mentorat'],
    email: 'contact@ibms.sn',
    linkedin: 'https://www.linkedin.com',
  },
  {
    num: '05',
    name: 'Salimata Traoré',
    role: 'Développeuse',
    image: images.team5,
    bio: 'Salimata Traoré développe des solutions web et mobiles avec un sens fort de la qualité, de l’expérience utilisateur et de la mise en production.',
    expertise: ['Développement', 'UI/UX', 'Qualité'],
    email: 'contact@ibms.sn',
    linkedin: 'https://www.linkedin.com',
  },
  {
    num: '06',
    name: 'Nafissatou THIMA',
    role: 'Community Manager',
    image: images.team6,
    bio: 'Nafissatou THIMA pilote la communication et l’engagement communautaire pour renforcer la présence d’IBMS et connecter les publics à ses initiatives.',
    expertise: ['Community', 'Branding', 'Engagement'],
    email: 'contact@ibms.sn',
    linkedin: 'https://www.linkedin.com',
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 500, suffix: '+', label: 'Étudiants accompagnés' },
  { value: 15, suffix: '+', label: 'Formations' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
  { value: 6, suffix: '+', label: 'Partenaires' },
];

export type EventItem = {
  date: string;
  month: string;
  title: string;
  type: string;
  desc: string;
  image: string;
  location: string;
  time: string;
  longDesc: string[];
};

export const events: EventItem[] = [
  { date: '12', month: 'OCT', title: 'Formation IA', type: 'Atelier', desc: 'Atelier d\'initiation à l\'intelligence artificielle pour les débutants.', image: images.event1, location: 'Campus IBMS, Dakar', time: '09h00 — 17h00', longDesc: [
    "Cet atelier d'initiation à l'intelligence artificielle s'adresse aux débutants souhaitant comprendre les fondamentaux de l'IA. Au programme : définitions, cas d'usage concrets, démonstrations pratiques et exercices d'application.",
    "Aucun prérequis technique n'est nécessaire. Les participants repartiront avec une compréhension claire de ce qu'est l'IA, de ses possibilités et de ses limites actuelles.",
    "L'atelier est animé par Cheikh Fall, responsable Innovation chez IBMS, avec la participation d'experts invités du secteur."
  ] },
  { date: '18', month: 'OCT', title: 'Workshop UX', type: 'Workshop', desc: 'Concevoir des interfaces utilisateur efficaces et intuitives.', image: images.event2, location: 'En ligne', time: '14h00 — 18h00', longDesc: [
    "Ce workshop pratique vous plonge dans la conception d'interfaces utilisateur efficaces. Vous apprendrez les principes du design centré utilisateur, la création de wireframes et de prototypes interactifs.",
    "Le workshop inclut des exercices pratiques avec des outils de prototypage, des sessions de feedback et une étude de cas réelle.",
    "À l'issue de la session, vous aurez conçu un prototype d'interface complet et présenté votre travail au reste du groupe."
  ] },
  { date: '25', month: 'OCT', title: 'Conférence Innovation', type: 'Conférence', desc: 'L\'innovation technologique en Afrique : défis et opportunités.', image: images.event3, location: 'Campus IBMS, Dakar', time: '10h00 — 16h00', longDesc: [
    "Cette conférence rassemble entrepreneurs, étudiants et professionnels autour de l'innovation technologique en Afrique. Des intervenants de renom partageront leurs expériences sur les défis et opportunités du continent.",
    "Au programme : table ronde sur l'écosystème tech africain, présentations de startups innovantes, et networking avec les acteurs clés du secteur.",
    "L'entrée est libre mais l'inscription est obligatoire. Places limitées."
  ] },
];

export type Article = {
  num: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  author: string;
  excerpt: string;
  image: string;
  content: string[];
};

export const articles: Article[] = [
  { num: '01', category: 'Innovation', date: '10 Oct 2025', readTime: '5 min', title: "L'IA au service de l'éducation africaine", author: 'Équipe IBMS', excerpt: "Comment l'intelligence artificielle transforme l'accès à l'éducation et la formation sur le continent.", image: 'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&w=640', content: [
    "L'intelligence artificielle est en train de redéfinir l'accès à l'éducation en Afrique. Des plateformes adaptatives aux assistants virtuels, les technologies d'IA ouvrent de nouvelles perspectives pour les apprenants et les formateurs.",
    "Chez IBMS, nous intégrons progressivement ces outils dans nos parcours de formation. L'objectif n'est pas de remplacer l'humain, mais de libérer du temps pour le mentorat, le coaching et les projets concrets.",
    "Les défis restent nombreux : connectivité, coûts, et nécessité d'un cadre éthique solide. Mais les opportunités sont immenses, notamment pour les zones rurales et les apprenants éloignés des centres urbains.",
    "Nous croyons que l'IA, utilisée de manière responsable, peut être un puissant levier d'inclusion et de développement des compétences sur le continent."
  ] },
  { num: '02', category: 'Technologie', date: '03 Oct 2025', readTime: '7 min', title: 'Pourquoi le data literacy est devenu essentiel', author: 'Équipe IBMS', excerpt: "La capacité à comprendre et utiliser les données est désormais une compétence fondamentale.", image: 'https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&w=640', content: [
    "La data literacy — la capacité à lire, comprendre et utiliser les données — est devenue une compétence transversale aussi essentielle que la lecture ou l'écriture.",
    "Dans un monde où chaque interaction génère de la donnée, les organisations qui savent l'exploiter prennent de meilleures décisions, plus rapidement. Les individus qui maîtrisent les bases de la donnée sont mieux armés pour évoluer professionnellement.",
    "IBMS intègre des modules de data literacy dans plusieurs de ses formations, avec une approche pratique : manipulation de données réelles, visualisation, et premiers pas en analyse.",
    "L'enjeu n'est pas de former tous les apprenants au data science avancé, mais de donner à chacun les clés pour interagir avec un monde piloté par la donnée."
  ] },
  { num: '03', category: 'Méthodologie', date: '26 Sep 2025', readTime: '4 min', title: 'Apprendre par projets : la méthode IBMS', author: 'Équipe IBMS', excerpt: "Notre approche pédagogique centrée sur la pratique et les projets concrets.", image: 'https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&w=640', content: [
    "La méthode IBMS repose sur un principe simple : on apprend mieux en faisant. Nos formations alternent théorie et pratique, avec un accent sur les projets concrets.",
    "Chaque parcours se termine par un projet final, évalué par un jury de professionnels. Ce projet permet de valider les compétences acquises et de constituer un portfolio tangible.",
    "Le mentorat individuel est un autre pilier de notre approche. Chaque apprenant bénéficie d'un suivi personnalisé pour surmonter les obstacles et progresser à son rythme.",
    "Enfin, nous favorisons l'apprentissage collaboratif : travaux de groupe, revues de code et présentations devant les pairs font partie intégrante du parcours."
  ] },
];

export type Partner = {
  name: string;
  image: string;
};

export const partners: Partner[] = [
  { name: 'Paradigm Initiative', image: '/assets/images/Paradigm-initiative.png' },
  { name: 'ANPEJ', image: '/assets/images/anpej.png' },
  { name: 'Belgium', image: '/assets/images/belgium.png' },
  { name: 'CMC', image: '/assets/images/cmc.png' },
  { name: 'Eclosioo', image: '/assets/images/eclosioo.png' },
  { name: 'Plan', image: '/assets/images/plan.png' },
  { name: 'Thiès', image: '/assets/images/thies.png' },
  { name: 'YMCA', image: '/assets/images/ymca.jpeg' },
];

export type Mission = {
  num: string;
  title: string;
  desc: string;
};

export const missions: Mission[] = [
  { num: '01', title: 'Former', desc: 'Transmettre des compétences structurées et certifiantes.' },
  { num: '02', title: 'Accompagner', desc: 'Guider chaque talent vers son plein potentiel.' },
  { num: '03', title: 'Innover', desc: 'Explorer de nouvelles voies pédagogiques et technologiques.' },
  { num: '04', title: 'Transformer', desc: "Créer un impact durable sur les individus et les organisations." },
];

export type Testimonial = {
  name: string;
  role: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  { name: 'Oumar Sy', role: 'Développeur web — Ancien apprenant', text: "IBMS m'a permis d'acquérir les compétences techniques nécessaires pour évoluer professionnellement. Aujourd'hui je travaille en tant que développeur full-stack dans une entreprise de Dakar." },
  { name: 'Mariama Touré', role: 'Directrice — Partenaire d’IBMS', text: "Un accompagnement de qualité qui a véritablement accéléré notre transformation digitale. L'équipe IBMS comprend les réalités du terrain et s'adapte à nos besoins." },
  { name: 'Ibrahima Gueye', role: 'CTO — Entreprise partenaire', text: "Les profils formés par IBMS répondent précisément à nos besoins en compétences numériques. C'est un vivier de talents précieux pour notre écosystème." },
];

export type SupportReason = {
  num: string;
  title: string;
  desc: string;
};

export const supportReasons: SupportReason[] = [
  { num: '01', title: 'Renforcer la compétitivité', desc: "Vous contribuez à l'adoption de solutions numériques adaptées au contexte local." },
  { num: '02', title: 'Développer les talents locaux', desc: "Votre soutien permet de former les jeunes et les professionnels aux compétences de demain." },
  { num: '03', title: "Stimuler l'innovation locale", desc: "Vous aidez à faire émerger des projets et prototypes à fort impact socio-économique." },
  { num: '04', title: 'Promouvoir une IA éthique', desc: "Vous participez à la mise en place de cadres responsables pour encadrer les usages." },
  { num: '05', title: 'Gagner en visibilité', desc: "Les partenaires d'IBMS bénéficient d'une visibilité professionnelle et d'un réseau national." },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  { question: "Quels sont les prérequis pour s'inscrire à une formation ?", answer: "Les prérequis varient selon la formation. Certaines sont accessibles aux débutants, d'autres nécessitent des bases techniques. Chaque page de formation détaille les prérequis." },
  { question: "Les formations sont-elles certifiantes ?", answer: "Oui, les formations IBMS délivrent une certification reconnue à l'issue du parcours, après validation des projets pratiques." },
  { question: "Quels sont les formats disponibles ?", answer: "IBMS propose trois formats : présentiel, hybride et en ligne. Le format dépend de la formation choisie." },
  { question: "Comment se déroule l'inscription ?", answer: "L'inscription se fait via le formulaire en ligne sur la page de la formation concernée. Notre équipe revient vers vous sous 48h." },
  { question: "Proposez-vous un accompagnement après la formation ?", answer: "Oui, IBMS assure un suivi post-formation incluant le mentorat, le coaching et l'aide à l'insertion professionnelle." },
  { question: "IBMS travaille-t-il avec les entreprises ?", answer: "Oui, IBMS propose des programmes sur mesure pour les entreprises : formation des équipes, transformation digitale, conseil." },
];

export type LegalSection = {
  title: string;
  content: string;
};

export const legalMentions: LegalSection[] = [
  { title: 'Éditeur du site', content: "Le site ibms.sn est édité par IBMS — Institut de Formation et d'Innovation. Nos lieux d’accueil sont situés à Thiès, Angle Serigne Fallou et à Dakar, Sacrée Coeur. Contact : startupibms@gmail.com / +221 77 396 27 07." },
  { title: 'Directeur de la publication', content: "La directrice de la publication est Madame Awa Diallo, Directrice générale d'IBMS." },
  { title: 'Hébergement', content: "Le site est hébergé par Bolt.host. Les données sont stockées dans des centres de données sécurisés conformes aux normes en vigueur." },
  { title: 'Propriété intellectuelle', content: "L'ensemble des contenus présents sur ce site (textes, images, logos, vidéos) est la propriété d'IBMS sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, est interdite sans autorisation écrite préalable." },
  { title: 'Données personnelles', content: "Les données collectées via les formulaires de contact et d'inscription sont utilisées uniquement dans le cadre des services proposés par IBMS. Elles ne sont jamais cédées à des tiers. Conformément à la loi, vous disposez d'un droit d'accès, de rectification et de suppression de vos données." },
  { title: 'Cookies', content: "Ce site utilise des cookies de mesure d'audience anonymisée. Vous pouvez à tout moment désactiver ces cookies dans les paramètres de votre navigateur." },
  { title: 'Responsabilité', content: "IBMS s'efforce de fournir des informations exactes et à jour sur ce site. Toutefois, IBMS ne saurait être tenue responsable des erreurs, omissions ou indisponibilités temporaires du site." },
];

export const legalPrivacy: LegalSection[] = [
  { title: 'Collecte des données', content: "IBMS collecte les données suivantes : nom, prénom, adresse email, numéro de téléphone, parcours professionnel (uniquement lors de l'inscription à une formation). Ces données sont collectées via les formulaires du site." },
  { title: 'Utilisation des données', content: "Vos données sont utilisées pour : répondre à vos demandes d'information, gérer votre inscription aux formations, assurer le suivi pédagogique, vous informer des événements et actualités d'IBMS (si vous y avez consenti)." },
  { title: 'Conservation', content: "Vos données sont conservées pendant la durée de votre formation, puis archivées pour une durée de 3 ans à des fins statistiques, après quoi elles sont définitivement supprimées." },
  { title: 'Vos droits', content: "Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et de portabilité de vos données. Pour exercer ces droits, contactez-nous à : startupibms@gmail.com." },
  { title: 'Sécurité', content: "IBMS met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre l'accès non autorisé, la perte ou la divulgation." },
  { title: 'Partage', content: "IBMS ne vend, ne loue et ne partage jamais vos données personnelles avec des tiers à des fins commerciales. Vos données peuvent être partagées avec nos partenaires de formation uniquement avec votre consentement explicite." },
];
