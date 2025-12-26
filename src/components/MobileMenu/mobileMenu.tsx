import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const MobileMenu = () => {
  return (
    <>
      <FontAwesomeIcon icon={faBars} />

      <FontAwesomeIcon icon={faXmark} />
    </>
  );
};

export default MobileMenu;
