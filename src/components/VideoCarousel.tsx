import React, { useState, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

interface Video {
  id: string;
  title: string;
}

const videos: Video[] = [
  { id: '4rsAVXxkfi0', title: 'Golpe do cartão de aproximação' },
  { id: 'Bf-DNUSv2NM', title: 'Compras online com segurança' },
  { id: 'rlgHnIt3MJU', title: 'Como se proteger em compras online' },
  { id: 'nr1yA_pA78c', title: 'Clonagem em conveniência' },
  { id: 'ggwNkwUhwNw', title: 'Professor Leandro Mussi explica' },
];

const VideoCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div id="videos" className="bg-gray-100 py-16">
    <div className="max-w-8xl mx-auto px-4 py-12">
      <h2 className="text-blue-600 text-3xl font-bold text-center mb-8">Vídeos Informativos</h2>
      <Slider ref={sliderRef} {...settings}>
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`px-2 transition-transform duration-300 ${
              index === currentSlide ? 'scale-110 z-10' : 'scale-90 opacity-70 pointer-events-none'
            }`}
            style={index === currentSlide ? { width: '550px' } : {}}
          >
            <div className="aspect-w-16 aspect-h-9 mb-4" style={{ height: '350px' }}>
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-center mt-4 font-semibold">{video.title}</h3>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePrev}
          className="bg-blue-500 text-white px-4 py-2 rounded-l-lg hover:bg-blue-600 transition-colors mr-1"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors ml-1"
        >
          Próximo
        </button>
      </div>
    </div>
    </div>
  );
};

export default VideoCarousel;