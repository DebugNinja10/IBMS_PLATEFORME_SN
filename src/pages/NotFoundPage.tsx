import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

export function NotFoundPage() {
  return <PageLayout num="404" label="Page introuvable" title={<>Cette page n’existe <span className="text-ibms-cyan">pas encore.</span></>} intro="Le lien que vous avez suivi est peut-être ancien ou l’adresse contient une erreur."><section className="section-pad bg-white"><div className="container-ibms flex flex-col items-start gap-6"><div className="text-8xl font-extrabold text-ibms-veil">404</div><div className="flex flex-wrap gap-4"><Link to="/" className="btn-primary"><ArrowLeft className="h-4 w-4" /> Retour à l’accueil</Link><Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-ibms-blue">Nous contacter <ArrowRight className="h-4 w-4" /></Link></div></div></section></PageLayout>;
}
