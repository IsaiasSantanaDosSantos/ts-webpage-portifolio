import MobileMenu from '../MobileMenu/mobileMenu';
import MenuList from '../MenuList/menuList';
import ThemeButton from '../ThemeButton/themeButton';
import { Logo } from '../Logo/logo';
// import { type ThemesColor } from '../../types/themes';

import * as S from './navBar.styles';

const NavBar = () =>
  // { toggleTheme, currentTheme }: ThemesColor
  {
    return (
      <S.Nav className="navBar">
        <S.Container className="navBarContainer">
          <Logo />
          <MenuList />
          <MobileMenu />
          <ThemeButton />
          {/* <ThemeButton toggleTheme={toggleTheme} currentTheme={currentTheme} /> */}
        </S.Container>
      </S.Nav>
    );
  };

export default NavBar;
