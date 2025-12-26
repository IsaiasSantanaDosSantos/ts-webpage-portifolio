import styled from 'styled-components';
import { globalColor } from '../../style/theme';

export const Nav = styled.nav`
  max-width: ${globalColor.maxWidth};
  width: ${globalColor.minWidth};
  margin: 0 auto;
`;

// color: ${({ theme }) => theme.text};
export const Container = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
`;
