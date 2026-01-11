import styled from 'styled-components';
import { globalColor } from '../../style/theme';

export const GroupList = styled.div`
  @media (max-width: 992px) {
    position: absolute;
    width: 100%;
    height: calc(100vh - 60px);
    top: 60px;
    bottom: 0;
    right: 0;
    // display: flex;
    // display: none;
    justify-content: flex-end;
    overflow: hidden;
    background-color: ${globalColor.transpColor};
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
    // display: none;
    position: relative;
    flex-direction: column;
    justify-content: start;
    align-items: end;
    row-gap: 15px;
    min-width: 275px;
    max-width: 300px;
    width: 100%;
    padding-right: 5% !important;
    background-color: ${({ theme }) => theme.background};
  }
`;

export const LI = styled.li`
  font-size: 16px;
  font-weight: 500;

  a {
    cursor: pointer;
    transition: all 300ms;
  }

  @media (max-width: 992px) {
    font-size: 18px;
    // background-color: ${({ theme }) => theme.transparent};
    color: ${({ theme }) => theme.text};
    font-size: 18px;

    text-align: end;
  }

  .hideItemMenu {
    margin-right: -320px;
  }
`;
// color: ${({ theme }) => theme.text};
