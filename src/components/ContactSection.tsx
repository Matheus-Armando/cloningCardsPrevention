import React from 'react';

const ContactSection: React.FC = () => {
  return (
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
  );
};

export default ContactSection;