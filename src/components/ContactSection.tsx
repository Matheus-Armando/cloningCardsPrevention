import React from 'react';
import emailjs from 'emailjs-com';

const ContactSection: React.FC = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_cp1vqtd', 'template_dyroh9v', e.currentTarget, 'kMNi5kyuyWoftEcp4')
      .then((result) => {
        console.log(result.text);
        alert('Email enviado com sucesso!');
      }, (error) => {
        console.log(error.text);
        alert('Erro ao enviar email.');
      });
  };

  const handleInvalid = (e: React.InvalidEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity('Este campo é obrigatório.');
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity('');
  };

  return (
    <section id="contato" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Conte seu relato</h2>
        <div className="mb-4 bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-blue-700 text-center">
            Somente o campo mensagem é obrigatório para entrar em contato conosco. Mas agradeceriamos se você pudesse preencher os demais campos para que podemos ter uma melhor análise.
          </p>
        </div>
        <form className="max-w-4xl mx-auto" onSubmit={sendEmail}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Nome</label>
            <input type="text" id="name" name="from_name" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block mb-2">Cidade</label>
            <input type="text" id="city" name="from_city" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">E-mail</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-3 py-2 border rounded-md"
              required
              onInvalid={handleInvalid}
              onInput={handleInput}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;