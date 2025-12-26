import { Link } from 'react-scroll';

import logoVideo from '../../assets/video/animateSantanaWebDeveloper.mp4';
import logoImg from '../../../public/img/logo-512.png';

import * as S from './logo.styled';

export const Logo = () => {
  const isVideoSupported = () => {
    const videoElement = document.createElement('video');
    return Boolean(videoElement.canPlayType);
  };

  return (
    <Link
      activeClass="actived"
      to="home"
      spy={true}
      smooth={true}
      offset={-70}
      duration={800}
    >
      <S.LogoBox>
        {isVideoSupported() ? (
          <video autoPlay loop muted>
            <source src={logoVideo} type="video/mp4" />
            Your browser does not support video in HTML 5
          </video>
        ) : (
          <img src={logoImg} alt="Santana's logo" />
        )}
      </S.LogoBox>
    </Link>
  );
};
