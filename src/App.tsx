import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/MainSection';
import ProtectionTips from './components/ProtectionTips';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import backgroundImage from './assets/credit-card-bg.jpg';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} scrollToSection={scrollToSection} />
      <main className="flex-grow">
        <HeroSection scrollToSection={scrollToSection} backgroundImage={backgroundImage} />
        <ProtectionTips />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;