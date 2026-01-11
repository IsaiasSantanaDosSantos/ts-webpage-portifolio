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
  max-width: 900px;
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
