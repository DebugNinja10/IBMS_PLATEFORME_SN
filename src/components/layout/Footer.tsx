import { Link } from 'react-router-dom';
import { Logo } from '@/components/ui/Logo';
import { ArrowUpRight, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const footerNav = [
  {
    title: 'Navigation',
    links: [
      { label: 'Accueil', path: '/' },
      { label: 'À propos', path: '/a-propos' },
      { label: 'Formations', path: '/formations' },
      { label: 'Services', path: '/services' },
      { label: 'Projets', path: '/projets' },
      { label: 'Blog', path: '/blog' },
      { label: 'Équipe', path: '/equipe' },
    ],
  },
  {
    title: 'Formations',
    links: [
      { label: 'Développement Web', path: '/formations/01' },
      { label: 'Data & IA', path: '/formations/02' },
      { label: 'Cybersécurité', path: '/formations/03' },
      { label: 'UI/UX Design', path: '/formations/04' },
      { label: 'Marketing Digital', path: '/formations/05' },
      { label: 'Gestion de Projet', path: '/formations/06' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Blog', path: '/blog' },
      { label: 'Guides', path: '/guides' },
      { label: 'Événements', path: '/evenements' },
      { label: 'Partenaires', path: '/partenaires' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact', path: '/contact' },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-gradient-navy text-white pt-20 pb-8">
      <div className="container-ibms">
        {/* Top section */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          {/* Logo + description + newsletter */}
          <div className="col-span-12 md:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 text-sm text-white/50 leading-relaxed max-w-xs">
              Façonner l'avenir par la technologie, l'éducation et la collaboration.
              Institut de Formation et d'Innovation.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="h-1.5 w-12 bg-ibms-blue rounded-full" />
              <div className="h-1.5 w-6 bg-ibms-cyan rounded-full" />
              <div className="h-1.5 w-3 bg-white/20 rounded-full" />
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <div className="label text-white/40 mb-3">Notre newsletter</div>
              <form
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1.5"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  aria-label="Email"
                />
                <button
                  type="submit"
                  className="group bg-ibms-blue hover:bg-ibms-blueLight rounded-lg px-4 py-2 transition-colors duration-300"
                  aria-label="S'inscrire"
                >
                  <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
                </button>
              </form>
            </div>
          </div>

          {/* Nav columns */}
          <div className="col-span-12 md:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-6">
            {footerNav.map((col) => (
              <div key={col.title}>
                <div className="label text-white/40 mb-4">{col.title}</div>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors duration-300 hover:text-ibms-cyan"
                      >
                        {link.label}
                        <ArrowUpRight
                          className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                          strokeWidth={2}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="col-span-12 md:col-span-3">
            <div className="label text-white/40 mb-4">Contactez-nous</div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="h-4 w-4 text-ibms-cyan shrink-0" strokeWidth={2} />
                +221 77 396 27 07
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="h-4 w-4 text-ibms-cyan shrink-0" strokeWidth={2} />
                startupibms@gmail.com
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-ibms-cyan shrink-0 mt-0.5" strokeWidth={2} />
                <span>
                  Thiès, Angle Serigne Fallou
                  <br />
                  Dakar, Sacrée Coeur
                </span>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6">
              <div className="label text-white/40 mb-3">Suivez-nous</div>
              <div className="flex items-center gap-3">
                {['LinkedIn', 'Twitter', 'Instagram'].map((s) => (
                  <a
                    key={s}
                    href={`https://${s.toLowerCase()}.com/ibms`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-xs font-semibold text-white/60 transition-all duration-300 hover:bg-ibms-blue hover:text-white hover:border-ibms-blue"
                  >
                    {s.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="label text-white/40">IBMS — 2026</span>
            <span className="hidden md:inline h-px w-8 bg-white/20" />
            <span className="label text-white/40">Thiès / Dakar</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/mentions-legales" className="label text-white/40 hover:text-ibms-cyan transition-colors duration-300">Mentions légales</Link>
            <Link to="/confidentialite" className="label text-white/40 hover:text-ibms-cyan transition-colors duration-300">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
