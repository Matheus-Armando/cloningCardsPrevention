import React, { useState, useEffect } from 'react'
import { CreditCard, Shield, AlertTriangle, Menu, X } from 'lucide-react'

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/vite.svg" alt="Logo" className="h-8 w-8 mr-3" />
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
                  className={`px-4 py-2 rounded-md ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} hover:bg-blue-700 hover:text-white transition-colors`}
                >
                  Contato
                </button>
              </li>
            </ul>
          </nav>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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

      <main className="flex-grow">
        <section className="h-screen bg-blue-600 flex items-center justify-center text-white relative">
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

        <section id="como-se-proteger" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Como se proteger da clonagem de cartões</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <CreditCard className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Proteja seus dados</h3>
                <p>Nunca compartilhe informações do seu cartão por telefone, e-mail ou mensagens.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Use sites seguros</h3>
                <p>Verifique se o site tem 'https://' e um ícone de cadeado na barra de endereços.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <AlertTriangle className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fique atento</h3>
                <p>Monitore regularmente suas transações e relate atividades suspeitas imediatamente.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Entre em Contato</h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Nome</label>
                <input type="text" id="name" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">E-mail</label>
                <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Mensagem</label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-md"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Prevenção de Clonagem de Cartões. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App