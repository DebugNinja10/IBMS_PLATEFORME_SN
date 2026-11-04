import { IBMSChatbot } from '@/components/sections/IBMSChatbot';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Vision } from '@/components/sections/Vision';
import { Mission } from '@/components/sections/Mission';
import { KeyFigures } from '@/components/sections/KeyFigures';
import { Formations } from '@/components/sections/Formations';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Events } from '@/components/sections/Events';
import { Testimonials } from '@/components/sections/Testimonials';
import { WhySupport } from '@/components/sections/WhySupport';
import { Team } from '@/components/sections/Team';
import { Partners } from '@/components/sections/Partners';
import { Newsletter } from '@/components/sections/Newsletter';
import { Contact } from '@/components/sections/Contact';

import { AProposPage } from '@/pages/AProposPage';
import { SolutionsDigitalesPage } from '@/pages/SolutionsDigitalesPage';
import { IntelligenceArtificiellePage } from '@/pages/IntelligenceArtificiellePage';
import { FormationsPage } from '@/pages/FormationsPage';
import { FormationProjectDetailPage } from '@/pages/FormationProjectDetailPage';
import { FormationDetailPage } from '@/pages/FormationDetailPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { ProjetsPage } from '@/pages/ProjetsPage';
import { GuidesPage } from '@/pages/GuidesPage';
import { GuideDetailPage } from '@/pages/GuideDetailPage';
import { EquipePage } from '@/pages/EquipePage';
import { PartenairesPage } from '@/pages/PartenairesPage';
import { EvenementsPage } from '@/pages/EvenementsPage';
import { FaqPage } from '@/pages/FaqPage';
import { ContactPage } from '@/pages/ContactPage';
import { ProjetDetailPage } from '@/pages/ProjetDetailPage';
import { EvenementDetailPage } from '@/pages/EvenementDetailPage';
import { MembreDetailPage } from '@/pages/MembreDetailPage';
import { MentionsPage } from '@/pages/MentionsPage';
import { ConfidentialitePage } from '@/pages/ConfidentialitePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { RecherchePage } from '@/pages/RecherchePage';

function HomePage() {
  return (
    <>
      <Hero />
      <Vision />
      <Mission />
      <KeyFigures />
      <Formations />
      <Services />
      <Projects />
      <Events />
<Testimonials />
      <WhySupport />
      <Team />
      <Partners />
      <Newsletter />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/solutions-digitales" element={<SolutionsDigitalesPage />} />
          <Route path="/intelligence-artificielle" element={<IntelligenceArtificiellePage />} />
          <Route path="/formations" element={<FormationsPage />} />
          <Route path="/formations/projets/:slug" element={<FormationProjectDetailPage />} />
          <Route path="/formations/:id" element={<FormationDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/projets" element={<ProjetsPage />} />
          <Route path="/projets/:id" element={<ProjetDetailPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/guides/:id" element={<GuideDetailPage />} />
          <Route path="/equipe" element={<EquipePage />} />
          <Route path="/equipe/:id" element={<MembreDetailPage />} />
          <Route path="/partenaires" element={<PartenairesPage />} />
          <Route path="/evenements" element={<EvenementsPage />} />
          <Route path="/evenements/:id" element={<EvenementDetailPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<MentionsPage />} />
          <Route path="/confidentialite" element={<ConfidentialitePage />} />
          <Route path="/recherche" element={<RecherchePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Bouton WhatsApp IBMS */}
      <IBMSChatbot />
      <a
        href="https://wa.me/221773962707?text=Bonjour%20IBMS%2C%20je%20souhaite%20plus%20d%27informations."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter IBMS sur WhatsApp"
        title="Contacter IBMS sur WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform duration-300 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-9 w-9"
        >
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.09.55 4.13 1.59 5.94L.12 24l6.34-1.66a11.86 11.86 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88a11.8 11.8 0 0 0-3.47-8.41ZM12.1 21.75a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.66-.24-.38a9.85 9.85 0 0 1-1.52-5.23c0-5.46 4.45-9.91 9.92-9.91a9.84 9.84 0 0 1 7.02 2.91 9.84 9.84 0 0 1 2.9 7.01c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
