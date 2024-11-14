import React from 'react';

const InterviewVideo: React.FC = () => {
  const videoId = '94yzKTCpSKQ'; // Substitua pelo ID do vídeo do YouTube

  return (
    <section id="entrevista" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-blue-600 text-3xl font-bold text-center mb-8">Entrevista com uma Vítima</h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Em respeito à privacidade da vítima, a entrevista foi gravada sem identificação visual, de nome e localização. Entretanto nesta entrevista, a vítima compartilha sua experiência e ela e os entrevistadores dão dicas de como agir em caso de clonagem de cartão e fazem algumas criticas as medidas de proteções atuais.
        </p>
        <div className="max-w-5xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 mb-4" style={{ height: '500px' }}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0&enablejsapi=1`}
              title="Entrevista com uma Vítima"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewVideo;