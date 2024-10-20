import React from 'react';
import { UsersRound, Share2, ShoppingCart, TriangleAlert} from 'lucide-react';

const ClonageInfo: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Como um cartão pode ser clonado?</h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Os golpistas utilizam diversas técnicas para clonar cartões de crédito e débito, explorando tanto vulnerabilidades tecnológicas quanto o comportamento das pessoas. Conhecer os métodos utilizados e se prevenir é o primeiro passo para estar protegido contra as fraudes. Pensando nisso, vamos detalhar a seguir os principais tipos de golpes:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            title="Skimming"
            icon={<TriangleAlert className="w-12 h-12 text-blue-500" />}
            content="O skimming é uma técnica de fraude onde dispositivos eletrônicos são instalados de forma discreta em terminais de pagamento, como caixas eletrônicos e bombas de gasolina. Esses dispositivos são projetados para capturar as informações contidas na faixa magnética do cartão assim que ele é inserido na máquina. Além disso, em alguns casos, câmeras ocultas são posicionadas estrategicamente para gravar a digitação da senha do cartão, permitindo que os golpistas realizem transações fraudulentas completas."
          />
          <Card
            title="Phishing"
            icon={<UsersRound className="w-12 h-12 text-blue-500" />}
            content="O phishing é uma técnica de engenharia social onde fraudadores enviam e-mails, mensagens de texto ou instantâneas que parecem ser de instituições legítimas, como bancos ou empresas de cartão de crédito. Essas mensagens solicitam informações pessoais e do cartão, geralmente contendo links para sites falsos que imitam os reais. A vítima é induzida a inserir seus dados nesses sites. Para evitar esse tipo de golpe, nunca compartilhe seus dados sem verificar a autenticidade da solicitação e sempre certifique-se de estar falando com a empresa verdadeira."
          />
          <Card
            title="Compartilhamento de dados online"
            icon={<Share2 className="w-12 h-12 text-blue-500" />}
            content="O compartilhamento de dados do cartão online sem precauções adequadas pode levar à clonagem. Isso inclui inserir informações do cartão em websites não seguros (que não usam HTTPS) ou compartilhar esses dados através de redes sociais ou e-mails, onde podem ser interceptados por criminosos. Também é importante não deixar dados pessoais, acessos e dados bancários salvos em qualquer dispositivo eletrônico."
          />
          <Card
            title="Compras online"
            icon={<ShoppingCart className="w-12 h-12 text-blue-500" />}
            content="As compras online podem se tornar um risco quando realizadas em sites fraudulentos ou inseguros. Golpistas criam páginas que imitam lojas legítimas para roubar dados do cartão ou exploram vulnerabilidades em sites reais para interceptar informações durante a transação. Sempre verifique o nível de segurança do site onde está comprando."
          />
        </div>

        <h2 className="text-3xl font-bold text-center mt-16 text-blue-600">Como saber se um cartão foi clonado</h2>
        <div className="mt-8 space-y-8">
          <div className="flex items-start">
            <div>
              <h3 className="text-xl font-semibold mb-2">Transações estranhas ou desconhecidas</h3>
              <p>Verifique regularmente sua fatura de cartão de crédito ou extrato bancário em busca de identificar transações que você não reconhece. Encontrou alguma? Entre em contato imediatamente com a administradora do cartão. Mesmo pequenas quantias podem ser um teste feito por criminosos para verificar se o cartão clonado está funcionando.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div>
              <h3 className="text-xl font-semibold mb-2">Alertas do banco ou instituição financeira</h3>
              <p>Muitos bancos e instituições financeiras monitoram atividades suspeitas e podem enviar alertas por mensagem de texto, e-mail ou através do aplicativo de celular do banco se detectarem uma transação incomum. Fique sempre de olho nesses alertas. Importante: não clique em qualquer comunicado ou alerta recebido. Antes, certifique-se de que o comunicado é de um canal oficial da instituição.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div>
              <h3 className="text-xl font-semibold mb-2">Recusas inesperadas</h3>
              <p>Se o seu cartão for recusado ao tentar fazer uma compra ou saque, mesmo sabendo que deveria ter saldo ou limite disponível, isso pode ser um sinal de que o cartão foi clonado e bloqueado pelo banco devido a atividades suspeitas. Caso aconteça, entre em contato com a administradora do cartão para entender melhor a situação.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  icon: React.ReactNode;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, icon, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default ClonageInfo;