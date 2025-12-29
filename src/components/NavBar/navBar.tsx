import MobileMenu from '../MobileMenu/mobileMenu';
import MenuList from '../MenuList/menuList';
import ThemeButton from '../ThemeButton/themeButton';
import { Logo } from '../Logo/logo';

import * as S from './navBar.styles';

const NavBar = () => {
  return (
    <S.Nav className="navBar">
      <S.Container className="navBarContainer">
        <Logo />
        <MenuList />
        <MobileMenu />
        <ThemeButton />
      </S.Container>
    </S.Nav>
  );
};

export default NavBar;
