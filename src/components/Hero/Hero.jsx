import { HeroContainerStyled /* LogoHeroimg */ } from './HeroStyles';
import CarouselComponent from './Carousel/Carousel';

const Hero = () => {
  return (
    <HeroContainerStyled>
      <div>
        {/*         <LogoHeroimg
          src='https://res.cloudinary.com/divurmndi/image/upload/v1684020289/red-ninja-collections-high-resolution-logo-color-on-transparent-background_ry5g8t.png'
          alt='LogoHero'
        /> */}
        <CarouselComponent />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
