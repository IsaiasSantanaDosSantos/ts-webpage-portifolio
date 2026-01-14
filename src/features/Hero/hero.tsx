import { useTranslation } from "react-i18next";
import HeroTypingText from "./heroTypingText";
import * as S from "./hero.styles";



  const Hero = () => {
  const { t } = useTranslation();

  return (
    <S.HeroContainer id="home">
      {/* <HeroBackground /> */}
      <S.HeroContent>
       <S.HeroSubtitleSmall>
          {t("heroTitle")}
        </S.HeroSubtitleSmall>

        <HeroTypingText />

        <S.HeroSubtitleSmall>
          {t("heroSubtitle")}
        </S.HeroSubtitleSmall>
      </S.HeroContent>
    </S.HeroContainer>
  );
};

export default Hero;
