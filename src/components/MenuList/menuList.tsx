import { useMobileMenu } from '../../context/mobileMenuContext';
import * as S from './menuList.styled';
import { Link } from 'react-scroll';

const MenuList = () => {
  const { isOpen, closeMenu } = useMobileMenu();

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
      </S.UL>
    </S.GroupList>
  );
};

export default MenuList;
