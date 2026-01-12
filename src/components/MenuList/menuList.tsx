import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useMobileMenu } from '../../context/mobileMenuContext';
import { useDeviceInfo } from '../../utils/useDeviceInfo';
import mobileSize from '../../utils/mobileSize';
import ThemeButton from '../ThemeButton/themeButton';
import { menuItems } from '../../types';

import * as S from './menuList.styles';

const MenuList = () => {
  const { isOpen, closeMenu } = useMobileMenu();
  const { width } = useDeviceInfo(mobileSize);
  const isMobile = width < mobileSize;
  const { t } = useTranslation();



  return (
    <S.GroupList
      className="groupList"
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <S.UL>
        {menuItems.map(({ key, section }) => (
          <S.LI key={key}>
            <Link
              activeClass="actived"
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={closeMenu} // Fecha o menu ao clicar no link
            >
              {t(key)}
            </Link>
          </S.LI>
        ))}
        {isMobile && <ThemeButton /> }
      </S.UL>
    </S.GroupList>
  );
};

export default MenuList;
