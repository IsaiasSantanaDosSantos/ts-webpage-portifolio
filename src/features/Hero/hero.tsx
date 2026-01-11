// import { useTranslation } from "react-i18next";
import HeroBackground from "./heroBackground";
import * as S from "./hero.styles";

  const Hero = () => {
//   const { t } = useTranslation("hero");

  return (
    <S.HeroContainer id="home">
      <HeroBackground />
      <S.HeroContent>
        <S.HeroTitle>Titulo</S.HeroTitle>
        <S.HeroSubtitle>Subtitulo</S.HeroSubtitle>

      </S.HeroContent>
    </S.HeroContainer>
  );
};

export default Hero;
