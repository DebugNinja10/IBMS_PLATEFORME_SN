import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className="section-pad bg-white">
      <div className="container-ibms">
        <Reveal>
          <div className="relative rounded-3xl bg-gradient-ibms p-8 md:p-16 overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-ibms-cyan/10 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative grid grid-cols-12 gap-6 items-center">
              <div className="col-span-12 md:col-span-7">
                <div className="label text-white/70 mb-4">Newsletter</div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  La newsletter pour ne rien rater.
                </h2>
                <p className="text-base text-white/70 max-w-md">
                  Recevez les offres, conseils et événements IBMS directement
                  dans votre boîte mail.
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <form
                  className="flex flex-col sm:flex-row gap-3"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors duration-300"
                    aria-label="Email"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-ibms-blue rounded-xl transition-all duration-300 ease-ibms hover:gap-3 hover:bg-ibms-cream"
                  >
                    S'inscrire
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                  </button>
                </form>
                <p className="mt-3 text-xs text-white/40">
                  Pas de spam. Désabonnement à tout moment.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
