import { useParams, Link, Navigate } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowLeft, ArrowRight, MapPin, Clock, Calendar } from 'lucide-react';
import { events } from '@/data/site';

export function EvenementDetailPage() {
  const { id } = useParams();
  const event = events[parseInt(id || '0')];

  if (!event) return <Navigate to="/evenements" replace />;

  return (
    <PageLayout
      num={String(parseInt(id || '0') + 1).padStart(2, '0')}
      label={`Événement / ${event.type}`}
      title={event.title}
      intro={event.desc}
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-8">
              <Reveal>
                <div className="mb-8 overflow-hidden rounded-3xl">
                  <img src={event.image} alt={event.title} className="h-72 w-full object-cover md:h-96" />
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mb-4 text-2xl font-extrabold text-ibms-ink">À propos de cet événement</h2>
                <div className="space-y-4">
                  {event.longDesc.map((para, idx) => (
                    <p key={idx} className="text-base leading-relaxed text-ibms-slateDark">{para}</p>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8">
                  <Link to="/contact" className="btn-primary">
                    S'inscrire à l'événement
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <Reveal delay={200}>
                <div className="sticky top-28 rounded-3xl border border-ibms-veil bg-ibms-cream p-6">
                  <h3 className="mb-5 text-lg font-extrabold text-ibms-ink">Informations pratiques</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-ibms-blue" />
                      <div><div className="label text-ibms-slate">Date</div><div className="text-sm font-semibold text-ibms-ink">{event.date} {event.month} 2025</div></div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-ibms-blue" />
                      <div><div className="label text-ibms-slate">Horaire</div><div className="text-sm font-semibold text-ibms-ink">{event.time}</div></div>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-ibms-blue" />
                      <div><div className="label text-ibms-slate">Lieu</div><div className="text-sm font-semibold text-ibms-ink">{event.location}</div></div>
                    </li>
                  </ul>
                  <Link to="/evenements" className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-ibms-slate transition-colors hover:text-ibms-blue">
                    <ArrowLeft className="h-4 w-4" />
                    Retour aux événements
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
