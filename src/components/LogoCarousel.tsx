import { Carousel } from 'react-responsive-carousel';

const LogoCarousel = () => {
  const logos = [
    'logo1.png',
    'logo2.png',
    'logo3.png',
    // Add more logo images here
  ];

  return (
    <Carousel autoPlay infiniteLoop showArrows={false} showThumbs={false}>
      {logos.map((logo, index) => (
        <div key={index}>
          <img src={`/logos/${logo}`} alt={`Logo ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default LogoCarousel;
