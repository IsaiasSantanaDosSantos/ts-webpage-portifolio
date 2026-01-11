import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import * as S from './linguageButton.styles';

const LanguageButtons = () => {
  const { i18n } = useTranslation();
  const [isTranslatedToPortuguese, setIsTranslatedToPortuguese] = useState(
    i18n.language === 'pt'
  );

  const handleTranslateToEnglish = () => {
    i18n.changeLanguage('en');
    setIsTranslatedToPortuguese(false);
  };

  const handleTranslateToPortuguese = () => {
    i18n.changeLanguage('pt');
    setIsTranslatedToPortuguese(true);
  };

  return (
    <>
      <S.ContainerLinguageBtn>
        {isTranslatedToPortuguese ? (
          <button onClick={handleTranslateToEnglish}>
            <span className="flag-icon flag-icon-gb" />
          </button>
        ) : (
          <button onClick={handleTranslateToPortuguese}>
            <span className="flag-icon flag-icon-br" />
          </button>
        )}
      </S.ContainerLinguageBtn>
    </>
  );
};

export default LanguageButtons;
