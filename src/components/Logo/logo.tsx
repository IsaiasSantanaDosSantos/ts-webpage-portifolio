import { useTheme } from '../../context/themeContext';

import lightLogoVideo from '../../assets/video/logoLight.mp4';
// import darkLogoVideo from '../../assets/video/logoDark.mp4';
import darkLogoVideo from '../../assets/video/logoDark.mp4';
// import logoImg from '../../../public/img/logo-512.png';
import lightLogoImg from '../../../public/logo/logoLight.jpg';
import darkLogoImg from '../../../public/logo/logoDark.jpg';

import * as S from './logo.styles';
import { Link } from 'react-scroll';

export const Logo = () => {
  const { themeMode } = useTheme();

  const videoSrc = themeMode === 'dark' ? darkLogoVideo : lightLogoVideo;

  const imgSrc = themeMode === 'dark' ? darkLogoImg : lightLogoImg;

  const isVideoSupported = () => {
    const videoElement = document.createElement('video');
    return Boolean(videoElement.canPlayType);
  };

  return (
    <Link to="home" spy={true} smooth={true} offset={-70} duration={800}>
      <S.LogoBox>
        {isVideoSupported() ? (
          <video autoPlay loop muted key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support video in HTML5
          </video>
        ) : (
          <img src={imgSrc} alt="Santana's logo" />
        )}
      </S.LogoBox>
    </Link>
  );
};
