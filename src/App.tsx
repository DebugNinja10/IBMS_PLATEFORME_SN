import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Initiative } from '@/components/sections/Initiative';
import { Vision } from '@/components/sections/Vision';
import { WhatWhyHow } from '@/components/sections/WhatWhyHow';
import { Mission } from '@/components/sections/Mission';
import { KeyFigures } from '@/components/sections/KeyFigures';
import { Formations } from '@/components/sections/Formations';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Events } from '@/components/sections/Events';
import { Resources } from '@/components/sections/Resources';
import { Testimonials } from '@/components/sections/Testimonials';
import { WhySupport } from '@/components/sections/WhySupport';
import { Team } from '@/components/sections/Team';
import { Partners } from '@/components/sections/Partners';
import { Newsletter } from '@/components/sections/Newsletter';
import { Contact } from '@/components/sections/Contact';
import { AProposPage } from '@/pages/AProposPage';
import { FormationsPage } from '@/pages/FormationsPage';
import { FormationDetailPage } from '@/pages/FormationDetailPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { ProjetsPage } from '@/pages/ProjetsPage';
import { BlogPage } from '@/pages/BlogPage';
import { GuidesPage } from '@/pages/GuidesPage';
import { GuideDetailPage } from '@/pages/GuideDetailPage';
import { EquipePage } from '@/pages/EquipePage';
import { PartenairesPage } from '@/pages/PartenairesPage';
import { EvenementsPage } from '@/pages/EvenementsPage';
import { FaqPage } from '@/pages/FaqPage';
import { ContactPage } from '@/pages/ContactPage';
import { ArticleDetailPage } from '@/pages/ArticleDetailPage';
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
      <Initiative />
      <Vision />
      <WhatWhyHow />
      <Mission />
      <KeyFigures />
      <Formations />
      <Services />
      <Projects />
      <Events />
      <Resources />
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
          <Route path="/formations" element={<FormationsPage />} />
          <Route path="/formations/:id" element={<FormationDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/projets" element={<ProjetsPage />} />
          <Route path="/projets/:id" element={<ProjetDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<ArticleDetailPage />} />
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
