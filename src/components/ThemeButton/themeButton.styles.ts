import styled from 'styled-components';

export const Container = styled.button`
  position: fixed;
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

  @media (max-width: 992px) {
    position: absolute;
    width: 50px;
    right: 6%;
    bottom: 50px;
    margin-top: 20px;
  }
`;
