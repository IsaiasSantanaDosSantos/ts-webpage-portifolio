import styled from 'styled-components';

export const UL = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  width: auto;
`;

export const LI = styled.li`
  font-size: 18px;
  font-weight: 500;

  a {
    cursor: pointer;
    transition: all 300ms;
  }
`;
// color: ${({ theme }) => theme.text};
