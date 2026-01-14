
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import * as S from "./hero.styles";

const TYPING_SPEED = 150;
const ERASING_SPEED = 100;
const DELAY_BETWEEN = 1500;

const HeroTypingText = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

    const { t } = useTranslation();

    const TEXTS = t("heroTypingTexts", {
    returnObjects: true,
  }) as string[];

  useEffect(() => {
    const currentText: any = TEXTS[textIndex];

    let timeout: number;

    if (!isDeleting) {
      // digitando
      if (displayText.length < currentText.length) {
        timeout = window.setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = window.setTimeout(() => {
          setIsDeleting(true);
        }, DELAY_BETWEEN);
      }
    } else {
      // apagando
      if (displayText.length > 0) {
        timeout = window.setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, ERASING_SPEED);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TEXTS.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  useEffect(() => {
  setTextIndex(0);
  setDisplayText("");
  setIsDeleting(true);
}, []);

  return (
    <S.TypingWrapper>
      <S.TypingText>{displayText}</S.TypingText>
      <S.Cursor>|</S.Cursor>
    </S.TypingWrapper>
  );
};

export default HeroTypingText;
