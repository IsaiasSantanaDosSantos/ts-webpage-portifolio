import styled from 'styled-components';
import { globalColor } from '../../style/theme';

interface NavProps {
  $isOpen?: boolean;
}

export const Nav = styled.nav<NavProps>`
width: 100%;
padding: 5px 0;
margin: 0 auto;
display: flex;
justify-content: center;
background-color: ${({ theme }) => theme.transparent};
z-index: 99;    
backdrop-filter: ${globalColor.blur};


  @media (max-width: 992px) {
    position: ${({ $isOpen }) => ($isOpen ? 'fixed' : 'relative')};
    height: ${({ $isOpen }) => ($isOpen ? '100vh' : 'auto')};
    top: 0;
    left: 0;
    align-items: start;
    transition: height 0.3s ease;
  }
`;

// color: ${({ theme }) => theme.text};
export const Container = styled.div`
  max-width: ${globalColor.maxWidth};
  width: ${globalColor.minWidth};
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;


  @media (max-width: 1340px) {
    padding-right: 50px;
  }

  @media (max-width: 992px) {
    margin: 0 auto;
    padding-right: 0;
  }
`;
