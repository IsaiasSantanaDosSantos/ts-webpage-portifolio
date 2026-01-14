import { styled } from 'styled-components';

// import * as colors from '../../config/colors';

export const ContainerLinguageBtn = styled.div`
  width: auto;
  height: auto;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 15px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 9;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    .flag-icon {
      font-size: 35px;
    }
  }
  button:hover {
    transform: scale(1.2);
  }
  button:active {
    filter: brightness(75%);
  }

  @media (max-width: 992px) {
    position: fixed;
    bottom: 50px;
    right: 35px;
  }
`;


