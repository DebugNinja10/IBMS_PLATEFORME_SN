
import { lazy, Suspense, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  FileText,
  Send,
  User,
  Briefcase,
  Pencil,
  Handshake,
  Info,
} from 'lucide-react';

const LocationsMap = lazy(() =>
  import('@/components/sections/LocationsMap').then((module) => ({
    default: module.LocationsMap,
  }))
);

export function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');
  const [fileName, setFileName] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current || sending) return;

    setSending(true);
    setStatus('');

    try {
      await emailjs.sendForm(
        'service_kmdjs9s',
        'template_7thqxfa',
        formRef.current,
        {
          publicKey: 'mQztiLH4V-2sqb4j0',
        }
      );

      setStatus(
        'Votre demande a été envoyée avec succès ! Notre équipe vous répondra sous 48 heures.'
      );

      formRef.current.reset();
      setFileName('');
    } catch (error) {
      console.error('Erreur EmailJS :', error);

      setStatus(
        "Une erreur est survenue. Veuillez réessayer sans joindre de fichier."
      );
    } finally {
      setSending(false);
    }
  };

  const inputStyle =
    'w-full rounded-xl border border-blue-200 bg-white px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none';

  return (
    <PageLayout
      num="12"
      label="Contact"
      title={
        <>
          Parlons <span className="text-blue-700">de votre projet.</span>
        </>
      }
      intro="Vous avez un projet à réaliser ? Présentez-nous votre besoin et notre équipe vous accompagnera."
    >
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 md:py-16">
        {/* Décoration de fond */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="container-ibms relative z-10 px-4">
          {/* En-tête */}
          <Reveal>
            <div className="mb-10 text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-3 text-white shadow-lg shadow-blue-200">
                <FileText className="h-5 w-5" />
                <span className="font-semibold">Contactez IBMS</span>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-blue-950 md:text-5xl">
                Donnons vie à vos idées.
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-blue-900 md:text-lg">
                Une idée, un besoin ou un projet ? Décrivez-nous votre vision.
                Notre équipe est prête à vous accompagner.
              </p>
            </div>
          </Reveal>

          {/* Deux cartes */}
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-7">
            {/* Coordonnées */}
            <div className="lg:col-span-4">
              <Reveal>
                <div className="flex h-full flex-col rounded-[28px] border border-blue-100 bg-white/95 p-6 shadow-xl shadow-blue-100/70 md:p-8">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="rounded-full bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-3 text-lg font-bold text-white shadow-md">
                      Nos coordonnées
                    </div>
                    <div className="h-px flex-1 bg-blue-300" />
                  </div>

                  <div className="space-y-7">
                    {/* Téléphone */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                        <Phone className="h-7 w-7 text-blue-700" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-700">Téléphone</p>
                        <a
                          href="tel:+221773962707"
                          className="text-base font-bold text-blue-950 hover:text-blue-600"
                        >
                          +221 77 396 27 07
                        </a>
                      </div>
                    </div>

                    {/* Adresse e-mail */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                        <Mail className="h-7 w-7 text-blue-700" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-blue-700">Adresse e-mail</p>
                        <a
                          href="mailto:startupibms@gmail.com"
                          className="break-all text-base font-bold text-blue-950 hover:text-blue-600"
                        >
                          startupibms@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Adresse */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                        <MapPin className="h-7 w-7 text-blue-700" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-700">Adresse</p>
                        <p className="font-bold leading-relaxed text-blue-950">
                          Thiès, Angle Serigne Fallou
                          <br />
                          Dakar, Sacré-Cœur
                        </p>
                      </div>
                    </div>

                    {/* Horaires */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                        <Clock className="h-7 w-7 text-blue-700" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-700">Horaires</p>
                        <p className="font-bold text-blue-950">
                          Lun — Ven, 7h à 18h
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Message de fin */}
                  <div className="mt-auto pt-8">
                    <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-center">
                      <Handshake className="mx-auto mb-3 h-16 w-16 text-blue-700" />
                      <p className="text-lg font-semibold italic text-blue-800">
                        Ensemble, donnons vie
                        <br />
                        à vos idées.
                      </p>
                      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-400" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-8">
              <Reveal delay={150}>
                <div className="rounded-[28px] border border-blue-100 bg-white/95 p-6 shadow-xl shadow-blue-100/70 md:p-8">
                  {/* Titre formulaire */}
                  <div className="mb-3 flex items-center gap-4">
                    <div className="flex shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-3 text-white shadow-md">
                      <Send className="h-5 w-5" />
                      <h2 className="text-lg font-bold">
                        Présentez votre projet
                      </h2>
                    </div>
                    <div className="h-px flex-1 bg-blue-300" />
                  </div>

                  <p className="mb-7 text-sm text-blue-900">
                    Remplissez les informations ci-dessous pour contacter notre équipe.
                  </p>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Nom et adresse e-mail */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-bold text-blue-950">
                          Nom complet <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />
                          <input
                            type="text"
                            name="name"
                            required
                            maxLength={150}
                            className={`${inputStyle} pl-12`}
                            placeholder="Votre nom complet"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-bold text-blue-950">
                          Adresse e-mail <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />
                          <input
                            type="email"
                            name="email"
                            required
                            maxLength={254}
                            className={`${inputStyle} pl-12`}
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Projet */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-blue-950">
                        Nom ou type de projet <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />
                        <input
                          type="text"
                          name="project"
                          required
                          maxLength={200}
                          className={`${inputStyle} pl-12`}
                          placeholder="Exemple : création d'une application web"
                        />
                      </div>
                    </div>

                    {/* Fichier facultatif */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-blue-950">
                        Cahier des charges (facultatif)
                      </label>

                      <label className="flex cursor-pointer items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/50 px-5 py-6 transition-all hover:border-blue-600 hover:bg-blue-50">
                        <FileText className="h-10 w-10 shrink-0 text-blue-700" />

                        <div>
                          <span className="block font-bold text-blue-950">
                            Joindre un document
                          </span>
                          <span className="block text-sm text-blue-700">
                            {fileName || 'PDF, DOC, DOCX ou TXT'}
                          </span>
                        </div>

                        <input
                          type="file"
                          name="attachment"
                          accept=".pdf,.doc,.docx,.txt"
                          className="sr-only"
                          onChange={(e) =>
                            setFileName(e.target.files?.[0]?.name || '')
                          }
                        />
                      </label>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-blue-950">
                        Décrivez votre projet <span className="text-red-500">*</span>
                      </label>

                      <div className="relative">
                        <Pencil className="absolute left-4 top-4 h-5 w-5 text-blue-400" />
                        <textarea
                          name="message"
                          required
                          maxLength={5000}
                          rows={5}
                          className={`${inputStyle} resize-y pl-12`}
                          placeholder="Expliquez-nous votre besoin, vos objectifs et les fonctionnalités souhaitées..."
                        />
                      </div>
                    </div>

                    {/* Information */}
                    <div className="flex items-center gap-3 rounded-2xl border border-blue-200 bg-blue-100/80 p-4">
                      <Info className="h-6 w-6 shrink-0 text-blue-700" />
                      <p className="text-sm font-medium text-blue-900">
                        Les champs marqués d'un * sont obligatoires.
                      </p>
                    </div>

                    {/* Statut */}
                    {status && (
                      <div
                        role="status"
                        aria-live="polite"
                        className={`rounded-xl p-4 text-sm font-semibold ${
                          status.includes('succès')
                            ? 'bg-green-50 text-green-700'
                            : 'bg-red-50 text-red-700'
                        }`}
                      >
                        {status}
                      </div>
                    )}

                    {/* Bouton */}
                    <button
                      type="submit"
                      disabled={sending}
                      className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:from-blue-800 hover:to-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <Send className="h-5 w-5" />
                      {sending ? 'Envoi en cours...' : 'Envoyer ma demande'}
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <Suspense
        fallback={
          <div
            role="status"
            className="container-ibms flex min-h-[360px] items-center justify-center py-16 text-sm font-semibold text-blue-700"
          >
            Chargement de la carte…
          </div>
        }
      >
        <LocationsMap />
      </Suspense>
    </PageLayout>
  );
}
