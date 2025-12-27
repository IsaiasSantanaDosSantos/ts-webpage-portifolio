import styled from 'styled-components';

export const MobileMenu = styled.div`
  width: 40px;
  height: 40px;
  //   display: flex;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .mobileMenuIcon {
    width: 100%;
    height: 100%;
    transition: all 300ms;
    color: ${({ theme }) => theme.text};
  }

  .hideItem {
    display: none;
  }
  @media (max-width: 992px) {
    display: flex;
  }
`;
