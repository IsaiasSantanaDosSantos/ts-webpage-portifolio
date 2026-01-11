import MobileMenu from '../MobileMenu/mobileMenu';
import MenuList from '../MenuList/menuList';
import ThemeButton from '../ThemeButton/themeButton';
import LanguageButtons from '../LanguageButton/linguageButton';
import { useDeviceInfo } from '../../utils/useDeviceInfo';
import mobileSize from '../../utils/mobileSize';
import { Logo } from '../Logo/logo';

import * as S from './navBar.styles';

const NavBar = () => {
  const { width } = useDeviceInfo(mobileSize);
  const isMobile = width < mobileSize;

  return (
    <S.Nav className="navBar">
      <S.Container className="navBarContainer">
        <Logo />
        <MenuList />
        <MobileMenu />
        {!isMobile && (
          <>
            <ThemeButton />
            <LanguageButtons />
          </>
        )}
      </S.Container>
    </S.Nav>
  );
};

/*

Proximo passo: Criar a header ou o footer e não esquecer de criar uma nova branch!





*/
export default NavBar;
