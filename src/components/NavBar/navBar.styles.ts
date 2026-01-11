import styled from 'styled-components';
import { globalColor } from '../../style/theme';

export const Nav = styled.nav`
  width: 100%;
  padding: 15px 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  z-index: 99;

  @media (max-width: 992px) {
    position: relative;
    align-items: start;
  }
  // height: 100vh;
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
