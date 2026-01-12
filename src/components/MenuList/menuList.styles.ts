import styled from 'styled-components';
import { globalColor } from '../../style/theme';

export const GroupList = styled.div`
  @media (max-width: 992px) {
    position: absolute;
    min-width: 275px;
    max-width: 300px;
    width: 100%;
    height: calc(100vh - 70px);
    top: 70px;
    bottom: 0;
    right: 0;
    justify-content: flex-end;
    overflow: hidden;
    animation: slideDown 0.3s ease-out;
  }
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
    
    export const UL = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    width: auto;
    
    @media (max-width: 992px) {
    width: 100%;
    padding: 0 12% 0 0;
    position: relative;
    flex-direction: column;
    justify-content: start;
    align-items: end;
    row-gap: 15px;
  }
    `;

export const LI = styled.li`

a {
  position: relative;
  font-size: 16px;
  cursor: pointer;
  transition: all 300ms;
  font-weight: 600;
  
  /* Pseudo-elemento para criar a barra de hover */
  &::after {
    content: '';
    position: absolute;
    bottom: -1px; /* Distância da barra em relação ao texto */
    left: 0;
    width: 100%;
    height: 3px; /* Altura da barra */
    background-color: ${globalColor.primaryColor}; /* Cor da barra igual ao texto */
    transform: scaleX(0); /* Começa invisível (largura 0) */
    transform-origin: center; /* Expande do centro para os lados */
    transition: transform 0.3s ease; /* Animação suave */
  }
  
  /* Quando passar o mouse, a barra expande */
  &:hover::after {
    transform: scaleX(1); /* Expande para largura total */
  }
}

  @media (max-width: 992px) {
    font-size: 18px;
    color: ${({ theme }) => theme.text};
    text-align: end;
  }

  .hideItemMenu {
    margin-right: -320px;
  }
`;
