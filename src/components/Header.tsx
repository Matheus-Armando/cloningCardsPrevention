import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, isMenuOpen, toggleMenu, scrollToSection }) => {
  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/credit-card-icon.png" alt="Logo" className="h-8 w-8 mr-3" />
          <h1 className={`text-xl md:text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>Prevenção de Clonagem</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <button 
                onClick={() => scrollToSection('como-se-proteger')}
                className={`px-4 py-2 rounded-md ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} hover:bg-blue-700 hover:text-white transition-colors`}
              >
                Como se Proteger
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contato')}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>
        <button 
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col items-center py-4">
            <li className="mb-2">
              <button 
                onClick={() => scrollToSection('como-se-proteger')}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Como se Proteger
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contato')}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Contato
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;