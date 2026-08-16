import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, Plus, ArrowRight, Search } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { useScrolled } from '@/hooks/useAnimations';
import { navItems, type NavItem } from '@/data/site';

export function Header() {
  const scrolled = useScrolled(20);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  const activeItem = navItems.find((n) => n.label === openMenu);

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-ibms ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-ibms-ink/5'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`container-ibms transition-all duration-300 ease-ibms ${scrolled ? 'py-2.5' : 'py-4'}`}>
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center shrink-0" aria-label="IBMS — Accueil">
              <Logo variant="dark" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
              {navItems.map((item: NavItem) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                >
                  <Link
                    to={item.href}
                    className={`nav-link flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                      openMenu === item.label ? 'text-ibms-blue bg-ibms-light/50' : ''
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${openMenu === item.label ? 'rotate-180' : ''}`}
                        strokeWidth={2}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && openMenu === item.label && (
                    <div className="dropdown-panel left-auto right-0 min-w-[420px]">
                      <div className="dropdown-content animate-slide-down">
                        <div className="grid grid-cols-1 gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.num}
                              to={child.path}
                              onClick={() => setOpenMenu(null)}
                              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-ibms-light transition-colors duration-300"
                            >
                              <span className="text-xs font-bold text-ibms-slate pt-1 transition-colors duration-300 group-hover:text-ibms-blue">
                                {child.num}
                              </span>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-semibold text-ibms-ink transition-colors duration-300 group-hover:text-ibms-blue">
                                    {child.label}
                                  </span>
                                  <ArrowRight className="h-3.5 w-3.5 text-ibms-slate opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-ibms-blue" strokeWidth={2} />
                                </div>
                                <p className="mt-0.5 text-xs text-ibms-slate">{child.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link to="/recherche" className="p-2 text-ibms-ink/70 transition-colors hover:text-ibms-blue" aria-label="Rechercher">
                <Search className="h-5 w-5" strokeWidth={2} />
              </Link>
              <Link to="/contact" className="btn-primary">
                Nous contacter
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 -mr-2 text-ibms-ink"
              onClick={() => setMobileOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-6 w-6" strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden bg-white transition-all duration-400 ease-ibms ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-ibms-veil">
          <Logo variant="dark" />
          <button onClick={() => setMobileOpen(false)} aria-label="Fermer le menu">
            <X className="h-6 w-6 text-ibms-ink" strokeWidth={2} />
          </button>
        </div>

        <nav className="px-5 py-6 overflow-y-auto h-[calc(100vh-65px)]" aria-label="Navigation mobile">
          {navItems.map((item, idx) => (
            <div key={item.label} className="border-b border-ibms-veil">
              <button
                className="flex w-full items-center justify-between py-4 text-left"
                onClick={() => setMobileSubmenu(mobileSubmenu === item.label ? null : item.label)}
                aria-expanded={mobileSubmenu === item.label}
              >
                <span className="flex items-center gap-3">
                  <span className="label text-ibms-slate">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="text-base font-semibold text-ibms-ink">{item.label}</span>
                </span>
                {item.children && (
                  <Plus
                    className={`h-4 w-4 text-ibms-slate transition-transform duration-300 ${mobileSubmenu === item.label ? 'rotate-45' : ''}`}
                    strokeWidth={2}
                  />
                )}
              </button>
              {item.children && mobileSubmenu === item.label && (
                <div className="pb-4 pl-12 space-y-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.num}
                      to={child.path}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 text-sm text-ibms-slate hover:text-ibms-blue transition-colors duration-300"
                    >
                      <span className="label text-ibms-slate">{child.num}</span>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/recherche" className="flex items-center gap-3 py-4 text-ibms-slate hover:text-ibms-blue transition-colors duration-300" onClick={() => setMobileOpen(false)}>
            <Search className="h-5 w-5" />
            <span className="text-base font-semibold">Rechercher</span>
          </Link>
          <Link to="/contact" className="btn-primary mt-4 w-full justify-center" onClick={() => setMobileOpen(false)}>
            Nous contacter
          </Link>
        </nav>
      </div>
    </>
  );
}
