import { Reveal } from '@/components/ui/Reveal';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="section-pad bg-ibms-cream">
      <div className="container-ibms">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {/* Left — info */}
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <div className="label text-ibms-blue mb-4">Contactez-nous</div>
              <h2 className="text-section-title font-extrabold text-ibms-ink mb-6">
                Parlons
                <br />
                d'<span className="text-gradient">IBMS.</span>
              </h2>
              <p className="text-base text-ibms-slateDark leading-relaxed mb-8 max-w-md">
                Une question, un projet, une collaboration ? Notre équipe vous répond
                sous 48 heures.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white border border-ibms-veil rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-ibms-blue" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="label text-ibms-slate mb-1">Téléphone</div>
                    <a href="tel:+221773962707" className="text-base font-semibold text-ibms-ink hover:text-ibms-blue transition-colors duration-300">
                      +221 77 396 27 07
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white border border-ibms-veil rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-ibms-blue" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="label text-ibms-slate mb-1">Email</div>
                    <a href="mailto:startupibms@gmail.com" className="text-base font-semibold text-ibms-ink hover:text-ibms-blue transition-colors duration-300">
                      startupibms@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white border border-ibms-veil rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-ibms-blue" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="label text-ibms-slate mb-1">Adresse</div>
                    <div className="space-y-1 text-base font-semibold text-ibms-ink">
                      <p>Thiès, Angle Serigne Fallou</p>
                      <p>Dakar, Sacrée Coeur</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white border border-ibms-veil rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-ibms-blue" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="label text-ibms-slate mb-1">Horaires</div>
                    <p className="text-base font-semibold text-ibms-ink">Lun — Ven, 7h à 18h</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <Reveal delay={200}>
              <form
                className="bg-white border border-ibms-veil rounded-3xl p-8 space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="label text-ibms-slate mb-2 block">Nom complet</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-ibms-cream border border-ibms-veil rounded-xl px-4 py-3 text-sm text-ibms-ink placeholder:text-ibms-slate/50 focus:outline-none focus:border-ibms-blue focus:bg-white transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="label text-ibms-slate mb-2 block">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-ibms-cream border border-ibms-veil rounded-xl px-4 py-3 text-sm text-ibms-ink placeholder:text-ibms-slate/50 focus:outline-none focus:border-ibms-blue focus:bg-white transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="label text-ibms-slate mb-2 block">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full bg-ibms-cream border border-ibms-veil rounded-xl px-4 py-3 text-sm text-ibms-ink placeholder:text-ibms-slate/50 focus:outline-none focus:border-ibms-blue focus:bg-white transition-all duration-300 resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Envoyer le message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
