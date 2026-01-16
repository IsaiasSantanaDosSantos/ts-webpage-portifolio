import { css } from "styled-components";
import { globalColor } from "../theme";

type hoverEffectOptions = {
  position?: "relative" | "absolute" | "fixed" | "sticky";
};

export const hoverEffect = ({
    position = "relative"
}: hoverEffectOptions = {}) => css`
 position: ${position};
 
/* Pseudo-elemento para criar a barra de hover */
  &::after {
    content: '';
    position: absolute;
    bottom: -1px; /* Distância da barra em relação ao texto */
    left: 0;
    width: 100%;
    height: 2px; /* Altura da barra */
    background-color: ${globalColor.primaryColor}; /* Cor da barra igual ao texto */
    transform: scaleX(0); /* Começa invisível (largura 0) */
    transform-origin: center; /* Expande do centro para os lados */
    transition: transform 0.3s ease; /* Animação suave */
  }
  
  /* Quando passar o mouse, a barra expande */
  &:hover::after {
    transform: scaleX(1); /* Expande para largura total */
  }
`;