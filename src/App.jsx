import React from 'react';
import About from './components/About';
import Cards from './components/Cards';
import CountBanner from './components/CountBanner';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PremiumAbout from './components/PremiumAbout';
import Testimonials from './components/Testimonials';
import { LanguagueProvider } from './context/LanguagueContext';

function App() {
  return (
    <LanguagueProvider>
      <>
        <Hero />
        <About />
        <Cards />
        <PremiumAbout />
        <CountBanner />
        <Testimonials />
        <CTA />
        <Footer />
      </>
    </LanguagueProvider>
  );
}

export default App;
