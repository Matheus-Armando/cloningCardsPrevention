import React from 'react'
import { AlertCircle, PhoneCall, FileText, CreditCard, Lock, Eye } from 'lucide-react'

const ClonedCardActions: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Meu cartão foi clonado, o que fazer?</h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Descobriu que teve seu cartão clonado? É importante agir rapidamente para minimizar os danos e prevenir perdas financeiras. Siga estes passos para resolver a situação:
        </p>

        <div className="space-y-8">
          <ActionItem
            icon={<PhoneCall className="w-8 h-8 text-blue-500" />}
            title="Notifique o banco ou instituição financeira imediatamente"
            content="Entre em contato com a instituição financeira emissora do seu cartão assim que suspeitar de clonagem e solicite o bloqueio do cartão para prevenir transações futuras e discuta a possibilidade de reembolso das transações fraudulentas. Geralmente, os bancos oferecem linhas diretas de atendimento 24 horas para essas situações."
          />

          <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-blue-700">
              Não está conseguindo entrar em contato? Veja como localizar empresa pelo CNPJ e ter sucesso rápido na comunicação do ocorrido.
            </p>
          </div>

          <ActionItem
            icon={<FileText className="w-8 h-8 text-blue-500" />}
            title="Revise suas transações"
            content="Analise suas faturas recentes e extratos bancários para identificar quaisquer transações suspeitas ou não autorizadas. Essa atitude vai ajudar a instituição financeira a entender o alcance do problema."
          />

          <ActionItem
            icon={<AlertCircle className="w-8 h-8 text-blue-500" />}
            title="Registre um Boletim de Ocorrência (B.O.)"
            content="Considerando a natureza criminosa da clonagem de cartão, é aconselhável registrar um boletim de ocorrência (B.O.) na delegacia de polícia. Essa atitude não só formaliza a situação, mas também pode ser útil em processos de disputa de transações ou para fins de seguro."
          />

          <ActionItem
            icon={<CreditCard className="w-8 h-8 text-blue-500" />}
            title="Solicite um novo cartão"
            content="Após bloquear o cartão clonado, peça um substituto. As instituições financeiras geralmente são rápidas em emitir novos cartões para minimizar o inconveniente para o cliente."
          />

          <ActionItem
            icon={<Lock className="w-8 h-8 text-blue-500" />}
            title="Altere suas senhas e PINs"
            content="Para garantir maior segurança, mude todas as senhas e PINs associados à sua conta bancária e cartões, especialmente se você suspeitar que essas informações também possam ter sido comprometidas."
          />

          <ActionItem
            icon={<Eye className="w-8 h-8 text-blue-500" />}
            title="Monitore sua conta"
            content="Nos dias e semanas seguintes, mantenha um olhar atento sobre sua conta bancária e extratos de cartão de crédito para qualquer atividade suspeita."
          />
        </div>

        <p className="text-lg text-center mt-12 max-w-3xl mx-auto">
          Tomar essas medidas de forma proativa pode ajudar a proteger suas finanças e reduzir o impacto da clonagem de cartão em sua vida financeira.
        </p>
      </div>
    </div>
  )
}

interface ActionItemProps {
  icon: React.ReactNode
  title: string
  content: string
}

const ActionItem: React.FC<ActionItemProps> = ({ icon, title, content }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  )
}

export default ClonedCardActions