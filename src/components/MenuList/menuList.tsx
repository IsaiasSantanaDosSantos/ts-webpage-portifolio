import { Link } from 'react-scroll';
import { useMobileMenu } from '../../context/mobileMenuContext';
import { useDeviceInfo } from '../../utils/useDeviceInfo';
import mobileSize from '../../utils/mobileSize';
import ThemeButton from '../ThemeButton/themeButton';

import * as S from './menuList.styled';

const MenuList = () => {
  const { isOpen, closeMenu } = useMobileMenu();
  const { width } = useDeviceInfo(mobileSize);
  const isMobile = width < mobileSize;

  return (
    <S.GroupList
      className="groupList"
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <S.UL>
        {[
          'home',
          'about',
          'services',
          'resume',
          'portfolio',
          'references',
          'contact',
        ].map((section) => (
          <S.LI key={section}>
            <Link
              activeClass="actived"
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={closeMenu} // Fecha o menu ao clicar no link
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </S.LI>
        ))}
        {isMobile && <ThemeButton />}
      </S.UL>
    </S.GroupList>
  );
};

export default MenuList;
