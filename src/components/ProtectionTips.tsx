import React from 'react';
import { CreditCard, Shield, AlertTriangle } from 'lucide-react';

const ProtectionTips: React.FC = () => {
  return (
    <section id="como-se-proteger" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Como se proteger da clonagem de cartões</h2>
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
  );
};

export default ProtectionTips;