// src/features/Hero/hero.style.ts
import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative; /* necessário para o background ficar dentro */
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden; /* impede riscos nas bordas */
`;

export const HeroContent = styled.div`
  position: relative; /* garante que o conteúdo fique acima */
  z-index: 1;
  text-align: center;
  width: 90%;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.85;
  margin-bottom: 2rem;
`;

// heroTypingText.tsx
// Texto dinâmico
export const TypingWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 85px;
`;

export const TypingText = styled.h1`
  font-weight: 700;
  // color: ${({ theme }) => theme.text};
  ${({ theme }) => neonText(theme.text)}
  text-shadow: 0 0 8px ${({ theme }) => theme.text};
  white-space: nowrap;
  font-size: 100px;
  line-height: 85px;

  @media (max-width: 880px) {
    font-size: 67px;
  }

    @media (max-width:576px) { 
    font-size: 50px;
  }

     @media (max-width:462px) { 
    font-size: 40px;
  }

      @media (max-width:320px) { 
    font-size: 30px;
  }
`;
 
export const Cursor = styled.span`
  margin-left: 4px;
  font-size: 100px;
  color: ${({ theme }) => theme.text};
  text-shadow: 0 0 8px ${({ theme }) => theme.text};

  animation: blink 1s infinite;

  @media (max-width:880px) { 
    font-size: 67px;
  }

   @media (max-width:576px) { 
    font-size: 50px;
  }

   @media (max-width: 462px) { 
    font-size: 40px;
  }

   @media (max-width: 320px) { 
    font-size: 30px;
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

export const softShadowText = `
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
`;

export const HeroSubtitleSmall = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin: 0 auto;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
 ${softShadowText}

  &:last-child {
    margin-top: 5px;
  }

  @media (max-width:880px) { 
    font-size: 25px;
  }

    @media (max-width:576px) { 
    font-size: 20px;
  }

     @media (max-width:462px) { 
    font-size: 16px;
  }
`;

export const neonText = (color: string) => `
  color: ${color};
  text-shadow:
    0 0 4px ${color}55,
    0 0 10px ${color}33,
    0 0 18px ${color}22;
`;

