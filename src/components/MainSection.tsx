import React from 'react';

interface MainSectionProps {
  scrollToSection: (sectionId: string) => void;
  backgroundImage: string;
}

const HeroSection: React.FC<MainSectionProps> = ({ scrollToSection, backgroundImage }) => {
  return (
    <section className="h-screen bg-cover bg-center flex items-center justify-center text-white relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="text-center relative z-10 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Proteja seu Cartão, Proteja seu Dinheiro</h2>
        <p className="text-lg md:text-xl mb-8">Aprenda como se prevenir contra a clonagem de cartões</p>
        <button
          onClick={() => scrollToSection('como-se-proteger')}
          className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
        >
          Saiba Mais
        </button>
      </div>
    </section>
  );
};

export default HeroSection;