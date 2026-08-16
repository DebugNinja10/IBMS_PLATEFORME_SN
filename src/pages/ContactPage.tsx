import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <PageLayout
      num="12"
      label="Contact"
      title={<>Parlons <span className="text-ibms-cyan">d'IBMS.</span></>}
      intro="Une question, un projet, une collaboration ? Notre équipe vous répond sous 48 heures."
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ibms-veil bg-white"><Phone className="h-5 w-5 text-ibms-blue" /></div>
                    <div><div className="label mb-1 text-ibms-slate">Téléphone</div><a href="tel:+221" className="text-base font-semibold text-ibms-ink transition-colors hover:text-ibms-blue">+221 XX XXX XX XX</a></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ibms-veil bg-white"><Mail className="h-5 w-5 text-ibms-blue" /></div>
                    <div><div className="label mb-1 text-ibms-slate">Email</div><a href="mailto:contact@ibms.sn" className="text-base font-semibold text-ibms-ink transition-colors hover:text-ibms-blue">contact@ibms.sn</a></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ibms-veil bg-white"><MapPin className="h-5 w-5 text-ibms-blue" /></div>
                    <div><div className="label mb-1 text-ibms-slate">Adresse</div><p className="text-base font-semibold text-ibms-ink">Dakar, Sénégal</p></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ibms-veil bg-white"><Clock className="h-5 w-5 text-ibms-blue" /></div>
                    <div><div className="label mb-1 text-ibms-slate">Horaires</div><p className="text-base font-semibold text-ibms-ink">Lun — Ven, 7h à 18h</p></div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <Reveal delay={200}>
                <form className="space-y-5 rounded-3xl border border-ibms-veil bg-white p-8" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="label mb-2 block text-ibms-slate">Nom complet</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-ibms-veil bg-ibms-cream px-4 py-3 text-sm text-ibms-ink placeholder:text-ibms-slate/50 transition-all duration-300 focus:border-ibms-blue focus:bg-white focus:outline-none" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="label mb-2 block text-ibms-slate">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-ibms-veil bg-ibms-cream px-4 py-3 text-sm text-ibms-ink placeholder:text-ibms-slate/50 transition-all duration-300 focus:border-ibms-blue focus:bg-white focus:outline-none" placeholder="votre@email.com" />
                  </div>
                  <div>
                    <label className="label mb-2 block text-ibms-slate">Message</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full resize-none rounded-xl border border-ibms-veil bg-ibms-cream px-4 py-3 text-sm text-ibms-ink placeholder:text-ibms-slate/50 transition-all duration-300 focus:border-ibms-blue focus:bg-white focus:outline-none" placeholder="Votre message..." />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">Envoyer le message</button>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
