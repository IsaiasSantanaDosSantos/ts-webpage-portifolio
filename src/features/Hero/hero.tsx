// import { useTranslation } from "react-i18next";
import HeroBackground from "./heroBackground";
import HeroTypingText from "./heroTypingText";
import * as S from "./hero.styles";



  const Hero = () => {
//   const { t } = useTranslation("hero");

  return (
    <S.HeroContainer id="home">
      <HeroBackground />
      <S.HeroContent>
       <S.HeroSubtitleSmall>
          OLÁ, SOU DESENVOLVEDOR FREELANCER
        </S.HeroSubtitleSmall>

        <HeroTypingText />

        <S.HeroSubtitleSmall>
          Atuando a partir de São José dos Campos, SP — Brasil
        </S.HeroSubtitleSmall>
      </S.HeroContent>
    </S.HeroContainer>
  );
};

export default Hero;
