import styled from 'styled-components';

export const Container = styled.button`
  position: fixed;
  top: 25px;
  left: auto;
  right: 20px;
  bottom: auto;
  z-index: 999999;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
  padding: 0;
  outline: none;
  user-select: none;
  &:focus,
  &:focus-visible {
    outline: none !important;
  }
`;
