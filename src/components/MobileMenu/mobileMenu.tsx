import { useState } from 'react';
import { useMobileMenu } from '../../context/mobileMenuContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import * as S from './mobileMenu.styled';

const MobileMenu = () => {
  const { isOpen, toggleMenu } = useMobileMenu();
  const [show, setShow] = useState(true);

  // const handleMobileMenu = () => {
  //   !show ? setShow(true) : setShow(false);
  // };

  return (
    <S.MobileMenu className="mobileMenu" onClick={toggleMenu}>
      <FontAwesomeIcon
        icon={faBars}
        className={isOpen ? 'mobileMenuIcon hideItem' : 'mobileMenuIcon '}
      />
      <FontAwesomeIcon
        icon={faXmark}
        className={isOpen ? 'mobileMenuIcon ' : 'mobileMenuIcon hideItem'}
      />
    </S.MobileMenu>
  );
};

export default MobileMenu;
